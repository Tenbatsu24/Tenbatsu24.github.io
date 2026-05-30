# Content

This folder is the **only place you need to touch** to add or edit
pages on the site. Everything is config-driven.

```
src/content/
├── site.yaml            # site name, tagline, social links
└── pages/
    ├── my-project.yaml  # one file = one page at /my-project
    └── ...
```

## Add a new page

1. Create `src/content/pages/<slug>.yaml`. The filename (without
   `.yaml`) becomes the URL slug.
2. Fill in the frontmatter and a list of `blocks`.
3. Save. The page appears on the landing bento grid and at `/<slug>`
   automatically.

## Page schema

```yaml
title: "Page title"               # required
description: "One-line summary"   # shown on cards & meta
date: "2026-05-10"                # ISO date; sorts the bento
tags: [tag-a, tag-b]              # optional
size: large                       # small | medium | large | wide | tall — bento tile size
accent: "#7c6cff"                 # optional accent color for the tile
cover:                            # optional bento cover
  type: gradient                  # "gradient" or "image"
  from: "#4f46e5"
  to: "#7c6cff"
  # or for image:
  # type: image
  # src: "https://..."
blocks:
  - type: markdown
    content: |
      ## Any markdown here
      Including **bold**, lists, links, code, tables.

  - type: figure
    src: "https://..."            # external URL, or /content/figures/foo.png
    caption: "Figure caption"
    width: full                   # full | half

  - type: table
    caption: "Optional caption"
    headers: [Col A, Col B]
    rows:
      - [1, 2]
      - [3, 4]

  - type: code
    language: python
    content: |
      print("hello")

  - type: hf-space
    src: "https://<user>-<space>.hf.space"
    height: 720

  - type: video
    src: "https://...mp4"         # or a YouTube/Vimeo embed URL
    caption: "Optional"

  - type: link
    href: "https://github.com/..."
    label: "Source on GitHub →"
```

Not every page needs every block — mix and match. Pages with no
`hf-space` block simply won't embed one.

## Images

For self-hosted figures, drop them in `public/figures/` and reference
them as `/figures/my-plot.png`. External URLs work too.
