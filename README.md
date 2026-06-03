# Identity Matters — how to edit the site

The personal site of **Abhi Yadav**, live at **identitymatters.blog**. Built with
[Astro](https://astro.build), hosted free on GitHub Pages. No WordPress, no database —
just plain text files.

**Everything auto-publishes:** any change pushed to the `main` branch rebuilds and
deploys to identitymatters.blog in ~30 seconds (via GitHub Actions). No manual steps.

---

## Where everything lives

| What you want to change | File |
| --- | --- |
| Name, title, hero text, bio paragraphs, the Feynman quote, email, social links | `src/data/site.ts` → `person`, `story` |
| Career timeline | `src/data/site.ts` → `timeline` |
| Expertise cards | `src/data/site.ts` → `expertise` |
| Speaking: upcoming banner, video talks, talk list | `src/data/site.ts` → `upcoming`, `videos`, `talks` |
| The article list (titles, dates, summaries, thumbnails) | `src/data/site.ts` → `articles` |
| The full text of one article | `src/content/articles/<slug>.html` |
| Images | `public/images/` |
| Audio | `public/audio/` |
| Colors & fonts | `src/styles/site.css` — the `:root[data-direction="warm"][data-theme="light"]` block near the top |

Most edits are just changing text inside `src/data/site.ts` — save, push, done.

## Add a new article

Three small pieces (or just send Claude the text and it does all three):

1. **Thumbnail** → `public/images/articles/<slug>.jpg`
   The `<slug>` part of the filename becomes the page URL (`/writing/<slug>/`).
2. **Body** → `src/content/articles/<slug>.html`
   Plain HTML: `<p>…</p>`, `<h2>…</h2>`, `<a href>`, `<img src="/images/…">`, etc.
3. **An entry at the top of the `articles` array** in `src/data/site.ts`:

```ts
{
  title: 'My New Article',
  date: 'Jun 5, 2026', year: '2026',
  cat: 'IAM', kind: 'article',
  img: '/images/articles/my-new-article.jpg',
  url: '',                       // an external "original", if any — leave '' for a new piece
  source: 'Identity Matters',
  excerpt: 'One-paragraph summary shown on the card and the preview popup.',
}
```

Newest entries go first. Notes:
- `kind: 'audio'` + an `<audio>` tag in the body → native player (put the mp3 in `public/audio/`).
- `kind: 'pdf'` + an external `url` → the card links straight to that PDF (no native page).

## Three ways to make an edit

1. **Ask Claude** (easiest) — describe it; Claude edits and commits.
2. **GitHub web editor** — open the file at `github.com/abhiyadav-code/identitymatters`,
   click the ✏️ pencil, edit, then **Commit changes**. Auto-deploys.
3. **On your computer** — `npm install` once, then `npm run dev` to preview at
   `localhost:4321`, edit, and `git push`.

## Run it locally

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:4321
npm run build    # build the static site into ./dist
```

## Hosting & domain

Served at the apex domain **identitymatters.blog** via GitHub Pages (`public/CNAME` +
the repo's Pages custom-domain setting). The deploy workflow is
`.github/workflows/deploy.yml` and builds with `DEPLOY_TARGET=production`.
