import { defineConfig } from 'astro/config';

// Al publicar en GitHub Pages, cambia `site` (y `base` si el repo no es usuario.github.io).
export default defineConfig({
  site: 'https://portfoliopaulafaundez.github.io',
  base: process.env.BASE_PATH || '/',
  build: { format: process.env.BUILD_FORMAT || 'directory', assets: 'assets' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
