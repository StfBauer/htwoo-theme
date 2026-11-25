// Handlebars helpers of the htwoo theme. Built to dist/helpers.js (npm run build:helpers), which is what
// package.json "patternDump.helpers" names: a package's helpers ship compiled.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

// The theme's own folder: dist/helpers.js sits one level below it.
const THEME_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * The folders an asset path is looked up in, in order: the project that runs Pattern Dump (the website, or
 * the theme's own workbench), then the theme. A path is written as it is served: `/assets/<folder>/<file>`
 * (a theme asset is `/assets/htwoo-theme/…`, a website asset `/assets/images/…`).
 */
function candidates(path: string): string[] {
  const rel = normalize(path.replace(/^\/+/, "").replace(/^assets\//, ""));
  if (rel.startsWith("..") || rel.startsWith(sep)) return [];
  const roots = [process.cwd(), THEME_ROOT];
  return roots.flatMap(root => [join(root, "assets", rel), join(root, rel)]);
}

/**
 * `{{{hoo-inline-svg path}}}`: the SVG file's markup, inlined, so it follows `currentColor` and the skin's
 * styles as the Hugo theme's `readFile` did. Only `.svg` files; a missing file is an error, not an empty logo.
 */
export function hooInlineSvg(path: unknown): string {
  if (typeof path !== "string" || !path.endsWith(".svg")) {
    throw new Error(`{{hoo-inline-svg}} takes the path of an .svg asset, such as "/assets/htwoo-theme/htwoo-logo.svg" (got ${JSON.stringify(path)})`);
  }
  const file = candidates(path).find(f => existsSync(f));
  if (!file) throw new Error(`{{hoo-inline-svg}}: no file for "${path}" in the project's or the theme's assets`);
  return readFileSync(file, "utf8").replace(/^<\?xml[^>]*>\s*/, "");
}

/**
 * `(hoo-is-external href)`: true for an http(s) address. The navigation opens those in a new tab, as the
 * Hugo menu did for its entries marked `blank` (which were exactly its external links).
 */
export function hooIsExternal(href: unknown): boolean {
  return typeof href === "string" && /^https?:\/\//i.test(href);
}

/** Registers the helpers (the PatternLab form: a function that receives Handlebars). */
export default function register(handlebars: { registerHelper(name: string, fn: (...args: unknown[]) => unknown): void }): void {
  handlebars.registerHelper("hoo-inline-svg", (path: unknown) => hooInlineSvg(path));
  handlebars.registerHelper("hoo-is-external", (href: unknown) => hooIsExternal(href));
}
