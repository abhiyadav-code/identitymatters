#!/usr/bin/env python3
"""Migrate full article bodies from identitymatters.blog into the repo.

For each article: fetch the page, extract the `blog-post-single-content` body,
strip WordPress sharing/related/script cruft, download inline images locally,
and write a cleaned HTML body to src/content/articles/<slug>.html.
"""
import os, re, sys, urllib.request, hashlib
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "src", "content", "articles")
IMG_DIR = os.path.join(ROOT, "public", "images", "articles", "body")
os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(IMG_DIR, exist_ok=True)

ARTICLES = [
    ("under-the-hood", "https://identitymatters.blog/2020/08/14/under-the-hood-the-security-analytics-that-drive-iam-recommendations-on-google-cloud/"),
    ("least-privilege", "https://identitymatters.blog/2020/08/04/achieve-least-privilege-with-less-effort/"),
    ("ml-models", "https://identitymatters.blog/2019/11/11/exploring-the-machine-learning-models-behind-cloud-iam-recommender/"),
    ("pim-pam", "https://identitymatters.blog/2017/08/02/pim-pam-or-perish/"),
    ("next-gen-idaas", "https://identitymatters.blog/2016/12/07/the-next-generation-of-idaas-platforms/"),
    ("managed-identity", "https://identitymatters.blog/2016/08/30/managed-identity-services-the-next-generation-of-idaas/"),
    ("identity-wall", "https://identitymatters.blog/2017/03/01/identity-the-wall-and-the-future-of-cybersecurity/"),
    ("service-idaas", "https://identitymatters.blog/2016/06/29/putting-the-service-in-identity-as-a-service/"),
]

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read().decode("utf-8", "replace")


class Extractor(HTMLParser):
    """Capture inner HTML of the first <div class*=blog-post-single-content>."""
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.capturing = False
        self.depth = 0
        self.out = []

    def handle_starttag(self, tag, attrs):
        ad = dict(attrs)
        cls = ad.get("class", "")
        if not self.capturing:
            if tag == "div" and "blog-post-single-content" in cls:
                self.capturing = True
                self.depth = 1
            return
        if tag == "div":
            self.depth += 1
        self.out.append(self._render(tag, attrs, self_closing=tag in ("img", "br", "hr", "source")))

    def handle_endtag(self, tag):
        if not self.capturing:
            return
        if tag == "div":
            self.depth -= 1
            if self.depth == 0:
                self.capturing = False
                return
        if tag not in ("img", "br", "hr", "source"):
            self.out.append(f"</{tag}>")

    def handle_startendtag(self, tag, attrs):
        if self.capturing:
            self.out.append(self._render(tag, attrs, self_closing=True))

    def handle_data(self, data):
        if self.capturing:
            self.out.append(data)

    def handle_entityref(self, name):
        if self.capturing:
            self.out.append(f"&{name};")

    def handle_charref(self, name):
        if self.capturing:
            self.out.append(f"&#{name};")

    @staticmethod
    def _render(tag, attrs, self_closing=False):
        parts = [tag]
        for k, v in attrs:
            if v is None:
                parts.append(k)
            else:
                parts.append(f'{k}="{v}"')
        inner = " ".join(parts)
        return f"<{inner} />" if self_closing else f"<{inner}>"


def clean(html):
    # Drop WordPress sharing / related / jetpack / scripts / styles.
    html = re.sub(r"<script[\s\S]*?</script>", "", html, flags=re.I)
    html = re.sub(r"<style[\s\S]*?</style>", "", html, flags=re.I)
    # Remove sharedaddy / jp-relatedposts / sd-* blocks (best-effort, balanced-ish).
    for marker in ["sharedaddy", "jp-relatedposts", "sd-sharing", "robots-nocontent", "wpcnt", "sharing-clear"]:
        html = re.sub(
            r'<div[^>]*class="[^"]*' + marker + r'[^"]*"[\s\S]*?</div>\s*(</div>)?',
            "", html, flags=re.I)
    # Strip srcset/sizes (we localize the base src only) and lazy attrs.
    html = re.sub(r'\s(srcset|sizes|data-[\w-]+)="[^"]*"', "", html, flags=re.I)
    # Collapse excessive blank lines.
    html = re.sub(r"\n\s*\n\s*\n+", "\n\n", html)
    return html.strip()


def localize_images(slug, html):
    os.makedirs(os.path.join(IMG_DIR, slug), exist_ok=True)
    urls = set(re.findall(r'<img[^>]+src="([^"]+)"', html))
    for u in urls:
        if not u.startswith("http"):
            continue
        ext = os.path.splitext(u.split("?")[0])[1] or ".png"
        if len(ext) > 5:
            ext = ".png"
        fn = hashlib.md5(u.encode()).hexdigest()[:10] + ext
        dest = os.path.join(IMG_DIR, slug, fn)
        local = f"/images/articles/body/{slug}/{fn}"
        try:
            req = urllib.request.Request(u, headers=UA)
            with urllib.request.urlopen(req, timeout=40) as r:
                data = r.read()
            with open(dest, "wb") as f:
                f.write(data)
            html = html.replace(f'src="{u}"', f'src="{local}"')
            print(f"    img {fn} ({len(data)//1024}K)")
        except Exception as e:
            print(f"    !! image failed {u}: {e}")
    return html


def main():
    for slug, url in ARTICLES:
        print(f"== {slug}")
        try:
            page = fetch(url)
        except Exception as e:
            print(f"  fetch failed: {e}")
            continue
        ex = Extractor()
        ex.feed(page)
        body = "".join(ex.out)
        if not body.strip():
            print("  !! no content extracted")
            continue
        body = clean(body)
        body = localize_images(slug, body)
        wc = len(re.sub(r"<[^>]+>", "", body).split())
        with open(os.path.join(OUT_DIR, slug + ".html"), "w") as f:
            f.write(body + "\n")
        print(f"  wrote {slug}.html (~{wc} words)")


if __name__ == "__main__":
    main()
