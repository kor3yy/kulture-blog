import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    description: z.string(),
    thumbnail: z.string().optional(),
    pinned: z.boolean().optional(),
  }),
});

export const collections = { blog };
