import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['feature', 'improvement', 'fix', 'docs', 'announcement']),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const roadmap = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/roadmap' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['now', 'next', 'later', 'shipped']),
    summary: z.string(),
    updated: z.coerce.date(),
    order: z.number().default(0),
  }),
});

export const collections = { changelog, roadmap };
