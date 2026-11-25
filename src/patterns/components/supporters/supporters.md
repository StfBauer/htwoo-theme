---
title: Supporters
---

The supporters' logos in a grid. The base is the supporters page's list (`.sponsors`); the `quick` variant
is the home page's block with its "Supported by:" heading (`.ql-sponsors`, four columns inside the landing
text). Both take `supporters`, a list of `{ name, logo, link }`; the layouts pass `site.supporters`.

Formerly `layouts/shortcodes/sponsors.html` (quick) and the list in `layouts/supporters/list.html`, which
read each supporter from its page under `supporters/`.
