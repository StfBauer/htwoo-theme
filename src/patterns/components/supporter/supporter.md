---
title: Supporter
---

One supporter's logo, inlined (`{{hoo-inline-svg}}`) and linked to its site, named by `name` for screen
readers. Takes `{ name, logo, link }`, the shape of each entry of `site.supporters`, so a list can come from
`site.globals` or from anywhere else that gives the same three values.

Formerly the inner part of `layouts/shortcodes/sponsors.html` and `layouts/supporters/list.html`. The link
target `_black` (a named window, likely meant as `_blank`) is kept as it was.
