# FlyAffiliate website

Five static pages styled after the Kiro Framer template (kiror.framer.website):
#F1F1F1 background, white 10px cards, near-black bands, one orange accent (#E65825), Inter at the display optical size, and section heads written as "● eyebrow  [ bracket ]".

| Page | File | Source |
|---|---|---|
| Home | `index.html` | `src/pages/home.mjs` |
| Features | `features/index.html` | `src/pages/features.mjs` |
| Blog | `blog/index.html` | `src/pages/blog.mjs` |
| Docs | `docs/index.html` | `src/pages/docs.mjs` |
| About | `about/index.html` | `src/pages/about.mjs` |

## Working on it

- Change the files in `src/`, then run `node build.mjs`. Don't edit the generated HTML; the next build overwrites it.
- Shared header, footer, buttons, icons and the product UI mockups are in `src/lib.mjs`.
- Styles are in `assets/css/site.css`. Design tokens are on `:root`, and the type scale hits Kiro's sizes at 1440px.
- Interactions are in `assets/js/site.js`: scroll reveals, accordions, process cards, the reports slider, the payout toggle, the blog filter, docs search (⌘K) and the mobile drawer.
- Pages use root paths like `/assets/...`, so serve the folder from its root, for example with `python3 -m http.server 8812`.

## Placeholders to replace

- `CTA_URL` in `src/lib.mjs` is a WordPress.org search link. Replace it with the real plugin listing.
- The Blog, Doc and About tabs in the Google Doc were empty, so the copy on those pages is a draft. That includes the article titles, the doc topics and the About story.
- Blog cards and doc links point to `#`.
- Names and amounts in the UI mockups (Maya Khan, $18.40, and so on) are sample data.
- Background art in `assets/img/art-*.jpg` is procedural. The script that generated it isn't part of this project.
