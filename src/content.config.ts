import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per paper in src/content/papers/.
const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(), // Full titles say enough; use only if a title needs context
    venue: z.string(),
    year: z.number(),
    pdf: z.string().optional(), // e.g. /papers/2022_kokiri.pdf (keep old URLs)
    doi: z.string().optional(),
    featured: z.boolean().default(true),
    kind: z.enum(['paper', 'thesis', 'poster']).default('paper'),
    // Extra links from the old site: BibTeX, software, videos, slides
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { papers };
