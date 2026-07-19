import fs from "node:fs";
import path from "node:path";

export interface Designer {
  name: string;
  email?: string;
  url?: string;
}

export interface FontAsset {
  type: "webfont" | "image";
  path: string;
}

export interface FontEntry {
  id: string;
  name: string;
  slug: string;
  scripts: string[];
  collection: string | null;
  listed: boolean;
  description: string;
  license: string;
  designers: Designer[];
  maintenance: string | null;
  maturity: "sketch" | "alpha" | "beta" | "stable";
  progress_overall: number | null;
  qa: { verdict: string | null; pass_rate: number | null };
  channels: string[];
  homepage_url: string;
  links: Record<string, string>;
  is_premium: boolean;
  specimen_text: Record<string, string> | null;
  asset: FontAsset | null;
}

const DATA_PATH = path.join(process.cwd(), "public/data/public-registry.json");

let cache: FontEntry[] | null = null;

/** Every listed font, from the sanitized export `mnik showcase` publishes.
 * Unlisted fonts (fontpackage.json's `directory.listed: false`) are the one
 * gating lever this site honors today — sketch/WIP fonts ship visible by
 * default otherwise. */
export function getFonts(): FontEntry[] {
  if (cache) return cache;
  const raw = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  cache = (raw.fonts as FontEntry[]).filter((f) => f.listed !== false);
  return cache;
}

export function getFontBySlug(slug: string): FontEntry | undefined {
  return getFonts().find((f) => f.slug === slug);
}

export const MATURITY_LABEL: Record<string, string> = {
  sketch: "Sketch",
  alpha: "Alpha",
  beta: "Beta",
  stable: "Stable",
};

export const MATURITY_ORDER = ["sketch", "alpha", "beta", "stable"];

export const SCRIPT_LABEL: Record<string, string> = {
  Sinh: "Sinhala",
  Taml: "Tamil",
  Latn: "Latin",
  Symbols: "Symbols",
};
