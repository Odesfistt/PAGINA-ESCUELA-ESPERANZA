# Escuela Esperanza

Sitio institucional construido con Astro para la Escuela Esperanza.

## Rutas principales

- `/`
- `/quienes-somos/`
- `/noticias/`
- `/admin/`

## Noticias

Las noticias viven en `src/content/noticias` como archivos Markdown y se leen con Astro Content Collections.

Para crear o editar noticias con Decap CMS:

1. Ejecuta el sitio en desarrollo.
2. Abre `/admin/`.
3. Crea o edita archivos Markdown en la coleccion `Noticias`.

Antes de publicar, ajusta `public/admin/config.yml` con el repositorio real de GitHub.

## Comandos

- `npm run dev`
- `npm run build`
- `npm run preview`
