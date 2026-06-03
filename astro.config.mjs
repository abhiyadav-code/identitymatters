// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// --- Deploy target -------------------------------------------------------
// PREVIEW (now): served at the GitHub Pages project subpath for review.
// LAUNCH: set DEPLOY_TARGET=production (or flip the default) to serve at the
// apex custom domain. The url() helper makes every internal path adapt
// automatically — no other changes needed.
const isProd = process.env.DEPLOY_TARGET === 'production';
const SITE = isProd ? 'https://identitymatters.blog' : 'https://abhiyadav-code.github.io';
const BASE = isProd ? '/' : '/identitymatters';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
