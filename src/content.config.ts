import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md', base: './content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
  }),
  schema: z.object({
    title: z.string().min(1), description: z.string().min(1),
    date: z.coerce.date(), updated: z.coerce.date().optional(),
    category: z.enum(['Política', 'História', 'Religião', 'Filosofia', 'Cultura', 'Tecnologia']),
    tags: z.array(z.string()).default([]), subtitle: z.string().optional(),
    featured: z.boolean().default(false), draft: z.boolean().default(false),
    demo: z.boolean().default(false),
    cover: z.string().optional(), coverAlt: z.string().optional(),
  }).refine(data => !data.cover || !!data.coverAlt?.trim(), { message: 'Toda capa precisa de coverAlt descrevendo a imagem.' }),
});
export const collections = { posts };
