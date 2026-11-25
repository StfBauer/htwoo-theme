---
title: Head
---

What the skin adds to every page's `<head>`: the icons, the web app manifest and the typography.com font
stylesheet (font project 6636612). Pattern Dump writes the title, the description, the canonical link, the
link-preview and robots tags and the stylesheets itself.

The icons and the manifest are served at the site's root (`site-root/` in this package, mounted at `/` by
the website), and so is the font project's own stylesheet: typography.com answers the request above with a
redirect to `/889032/2F9E0D2024732B3BD.css` on the site's host.

Formerly `layouts/partials/head.html`. Left out: `<base href>`, `meta keywords` and the feed links, which
Pattern Dump doesn't support (findings F-08, F-06); `X-UA-Compatible`, which only Internet Explorer read;
the analytics, which are the website's own head (`site.head`).
