import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — Markdown/MDX files in src/content/blog
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Path under /public (e.g. "/images/covers/foo.svg"). Keeps migration simple.
      heroImage: z.string().optional(),
      heroAlt: z.string().optional(),
      // Optional embedded audio (e.g. "PIM, PAM, or Perish?").
      audio: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

// Speaking engagements — one entry per talk, as data files.
const speaking = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/speaking' }),
  schema: z.object({
    event: z.string(),
    title: z.string().optional(),
    date: z.coerce.date(),
    dateLabel: z.string().optional(), // human label when day is unknown
    location: z.string().optional(),
    description: z.string().optional(),
    link: z.string().url().optional(),
    upcoming: z.boolean().default(false),
  }),
});

// Publications — articles / papers published elsewhere.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string().optional(),
    link: z.string().url().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, speaking, publications };
