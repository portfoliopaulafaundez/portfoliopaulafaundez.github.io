import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo por proyecto e idioma: src/content/projects/<en|es>/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    order: z.number(),
    role: z.string(),
    company: z.string().optional(),
    summary: z.string(),
    cover: z.string(),
    // Qué parte de la portada se conserva al recortarla (CSS object-position), p. ej. 'left center'.
    coverPosition: z.string().default('center'),
    // true: la imagen principal se muestra entera, sin recortes
    coverFull: z.boolean().default(false),
    // Imagen alternativa para el escenario de la portada (si la portada no encaja)
    stageImage: z.string().optional(),
    stagePosition: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    videos: z.array(z.object({ title: z.string(), href: z.string(), thumb: z.string().optional() })).default([]),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
