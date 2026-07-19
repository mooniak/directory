/**
 * Astro's `base` config isn't retroactively applied to hand-written absolute
 * paths (only to Astro's own generated asset URLs) — every `/foo` we write
 * ourselves (nav links, fetch() targets, /data/ asset paths) needs to go
 * through this so the site works both at the domain root (base: '/') and at
 * a subpath like '/directory/' with zero other code changes when that toggle
 * flips. `import.meta.env.BASE_URL` always ends with '/'.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
