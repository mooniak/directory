# mooniak directory

The public showcase for every mooniak typeface — every font, every stage, from
first sketch to shipped release. Built with [Astro](https://astro.build) as a
static site.

## Data

This site has no backend and imports no font source. Everything it renders
comes from `public/data/`:

- `public/data/public-registry.json` — one entry per font (name, scripts,
  designer, license, maturity, QA, links, `asset` reference).
- `public/data/fonts/*.woff2` — real webfonts for free/public fonts (live
  `@font-face` preview + "try your own text").
- `public/data/specimens/*.png` — rendered specimen images for premium
  (GitHub-private) fonts. These never ship the real font file — only a
  rasterized preview, so glyph outlines can't be traced back into a usable font.

That bundle is generated and pushed here by `mnik showcase --publish` in the
private `mooniak-font-tools` repo (see `mnik/tools/showcase/` there). To
refresh the data, run that command from `mooniak-font-tools` — don't hand-edit
anything under `public/data/`, it's overwritten on every publish.

## Structure

- `src/pages/index.astro` — the filterable grid (script / maturity / collection / search).
- `src/pages/[slug].astro` — one static page per font (`getStaticPaths`), also
  the source of truth for the slide-in panel's content (the index page
  `fetch()`s a font's own page and injects its `#panel-content`, so there's
  exactly one template for both).
- `src/components/FontDetail.astro` — the shared detail content (specimen,
  facts, licensing/download CTA).
- `src/lib/registry.ts` — typed reader for `public-registry.json`.

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Local dev server at `localhost:4321`         |
| `npm run build`     | Build the static site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |
