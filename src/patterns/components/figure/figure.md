---
title: Figure
---

An image with a caption, placed in a page's markdown:

```md
<pd-components-figure src="/assets/images/chart.png" alt="The chart's text alternative">
[The chart's source](https://example.com/)
</pd-components-figure>
```

The caption is the tag's content, markdown, so it can hold a link (a markdown image's title can't). The image
gets WebP variants.

Formerly `layouts/shortcodes/figure.html`. Only `src` and `caption` were used (in `concepts.md`); `link`,
`target`, `rel`, `class`, `title`, `attr`, `attrlink`, `width` and `height` are gone. `alt` is required:
Hugo used the caption's plain text when it was missing.
