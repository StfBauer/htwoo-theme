---
title: Page
---

The layout of a content page: its title as the heading, then its markdown. Every page that names no
other layout renders with it, and so does the 404 page.

Its schema is the frontmatter contract: `title` (required) and `description`. Images in a page's markdown
are served as WebP variants (`x-pd-prose-images`).

Formerly `layouts/_default/single.html`. Its date line showed only for `nodate: false`, which no page set.
