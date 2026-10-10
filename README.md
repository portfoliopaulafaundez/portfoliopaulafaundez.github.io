# Portfolio

Web estática hecha con [Astro](https://astro.build).

## Cómo editar el contenido

El inglés es el idioma principal (`/bayer`) y el español va bajo `/es/` (`/es/bayer`).

- **Nombre, email, redes**: `src/site.ts`
- **Textos de portada, Sobre mí y menú** (en ambos idiomas): `src/i18n.ts`
- **Proyectos**: un archivo `.md` por proyecto e idioma en `src/content/projects/en/` y `src/content/projects/es/`. El nombre del archivo es la URL. El campo `order` decide el orden.
- **Imágenes**: `public/img/projects/` y `public/img/paula.jpg`

## Comandos

```sh
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web en dist/
```
