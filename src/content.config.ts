import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies. Anonymised: no company or product names, rounded numbers, no identifying dates.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(), // anonymised descriptor, e.g. "Series B test-automation platform"
    segment: z.enum(['ai', 'devtools', 'qa', 'security', 'saas']),
    stage: z.string(),
    size: z.string().optional(),
    services: z.array(z.string()).min(1),
    summary: z.string(),
    outcomes: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    period: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false), // drafts render in dev only
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
