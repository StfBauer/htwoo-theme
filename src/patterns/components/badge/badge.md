---
title: Badge
---

A status image from another site, such as a shields.io badge, with the size it declares, so the page keeps
its room while it loads (Pattern Dump's build requires a size on every `<img>`, and it can't measure an
image from another site). Optionally linked. Place several in one row with `components/badges`.

Takes `src`, `alt`, `width`, `height` (CSS pixels, as the badge's SVG declares them) and an optional `link`.
