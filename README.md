# Identity Matters

The personal site & blog of **Abhi Yadav** — essays and talks on identity & access
management. Built with [Astro](https://astro.build), hosted free on GitHub Pages, served
at **identitymatters.blog**.

No WordPress, no database, no comments/trackers. Everything is plain text files you (or
Claude) can edit.

---

## Run it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # produce the static site in ./dist
```

## Where things live

| What | Where |
| --- | --- |
| Blog posts | `src/content/blog/*.md` |
| Speaking engagements | `src/content/speaking/*.md` |
| Publications | `src/content/publications/*.md` |
| Images & audio | `public/images/`, `public/audio/` |
| Page templates | `src/pages/` |
| Site-wide look (colors, fonts) | `src/styles/global.css` (top of file) |
| Bio text | `src/pages/about.astro` |

## Add a blog post

Create `src/content/blog/my-post-slug.md`:

```markdown
---
title: 'My Post Title'
description: 'One or two sentence summary shown on cards and previews.'
pubDate: 2026-06-01
heroImage: '/images/covers/my-post-slug.svg'   # optional
heroAlt: 'Describe the image'                   # optional
audio: '/audio/my-post.mp3'                     # optional — adds a player
featured: true                                   # optional — show on home page
---

Write the article in **Markdown**. Images: `![alt text](/images/my-pic.jpg)`.
```

The filename (minus `.md`) becomes the URL: `/writing/my-post-slug/`.

## Add a speaking engagement

Create `src/content/speaking/event-slug.md`:

```markdown
---
event: 'Conference Name'
title: 'My talk title'          # optional
date: 2026-09-15                # used for ordering
dateLabel: 'September 2026'     # optional human-friendly label
location: 'City, Country'       # optional
link: 'https://...'             # optional
upcoming: true                  # optional — pins it to the "Upcoming" section
---
```

## Publish

Every push to the `main` branch on GitHub auto-builds and deploys via GitHub Actions
(`.github/workflows/deploy.yml`). No manual steps.

## Custom domain

`public/CNAME` points the site at `identitymatters.blog`. DNS is managed at the registrar
(WordPress.com) — see the launch checklist in the project notes.
