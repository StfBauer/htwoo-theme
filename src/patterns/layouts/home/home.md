---
title: Home
---

The home page: the cover (`components/cover`), then the page's markdown in the landing block
(`.t-general.landing`), closed by the supporters from `site.supporters` (`components/supporters~quick`).

Formerly `layouts/index.html` with `layouts/partials/cover-image.html`. On the Hugo site the landing
block, its text and the `sponsors` shortcode were HTML in the home page's markdown; the block
is the layout's now, its text is markdown, and the supporters come from the site's globals.
