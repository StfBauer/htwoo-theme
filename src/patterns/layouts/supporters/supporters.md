---
title: Supporters
---

The supporters page: its title and text, then the logos of `site.supporters` (`components/supporters`).

Formerly `layouts/supporters/list.html`, which read each supporter's `logo` and `link` from its page under
`supporters/`. A listing's entries can't carry those fields in Pattern Dump, so the list comes from the
site's globals. The Hugo template also wrapped its content in a second `<main>` inside the frame's.
