import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const disciplines = defineCollection({
  loader: file('./src/content/disciplines.json'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    parent: z.string().optional(), // set on specialisations; leave out for main categories
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});