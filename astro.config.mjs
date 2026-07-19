// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://src.mooniak.com',
  // TEMPORARY: this site currently deploys to its own project Pages
  // (src.mooniak.com/directory/), a subpath. Every font's fontpackage.json
  // already declares root-path homepage_urls (src.mooniak.com/<slug>-font/),
  // so the real fix is publishing to mooniak/mooniak.github.io instead — at
  // that point set base back to '/' (or remove it, '/' is the default).
  base: '/directory/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
