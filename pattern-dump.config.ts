import { defineConfig } from "pattern-dump";

// The theme's own workbench. Its folders (patterns, styles, themes, scripts, helpers, assets) are named
// once, in package.json "patternDump", which is also what the website reads when it uses the theme.
export default defineConfig({
  outDir: "./dist/workbench",
  shell: {
    brand: { title: "hTWOo theme" },
  },
});
