import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const disciplines = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/disciplines' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    discipline: z.string(), // must match a discipline's slug
    year: z.number(),
    role: z.string().optional(),
    tools: z.array(z.string()).optional(),
    description: z.string(),
    coverImage: z.string(),
    video: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { disciplines, projects };