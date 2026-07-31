# Modernist — Personal Academic Website

A Jekyll-powered personal website template for researchers and academics. Built on the original [Modernist theme](https://github.com/orderedlist/modernist) with blog, projects, publications, and CV sections.

## Features

- **Dark/Light mode** — toggle in the top-right corner; preference persists in the browser
- **Blog** — write posts in Markdown; they appear on the blog index and "Latest News" on the homepage
- **Projects** — showcase research projects with thumbnails, tags, and links
- **Publications** — display with thumbnails and citations on the homepage
- **CV download** — link your CV PDF for easy sharing
- **Responsive** — works on desktop, tablet, and mobile
- **Zero build step** — GitHub Pages builds it automatically

## Getting Started

### 1. Configure your site

Edit `_config.yml` with your information:

```yaml
title: "Your Name"
email: "you@university.edu"
description: >-
  Your research description here.
baseurl: ""          # Set to "/repo-name" for project pages; leave empty for <username>.github.io
url: ""              # Set to "https://yourusername.github.io" when deploying

author:
  name: "Your Name"
  email: "you@university.edu"
  image: "assets/images/profile.png"  # Your profile photo
  github: "yourusername"              # Comment out to hide
  scholar: "YOUR_GOOGLE_SCHOLAR_ID"   # Comment out to hide
  twitter: "handle"                   # Comment out to hide
  bluesky: "handle.bsky.social"       # Comment out to hide
  linkedin: "handle"                  # Comment out to hide
  mastodon: "@handle@mastodon.social" # Comment out to hide
  orcid: "YOUR_ORCID_ID"             # Comment out to hide
  cv: "assets/files/cv.pdf"          # Comment out to hide
  website: "https://example.com"      # Comment out to hide
```

> **`baseurl` vs `url`**: Leave both empty for a user site (`username.github.io`). Set `baseurl` to `"/repo-name"` for a project site (`username.github.io/repo-name`).

### 2. Add your profile photo

Place your profile image at `assets/images/profile.png`.

### 3. Configure your homepage

All homepage content lives in `_data/profile.yml` — edit this file to set up your affiliation, research interests, education, experience, and publications. Do not edit `_layouts/default.html`.

### 4. Add a CV

Place your CV PDF at the path you reference in `_config.yml` (e.g. `assets/files/cv.pdf`).

### 5. Write a blog post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "My Post Title"
date: 2024-01-15 12:00:00 -0000
categories: announcement
---

Your content here...
```

### 6. Add a project

Create a file in `_projects/` named `project-slug.md`:

```yaml
---
layout: project
name: "Project Name"
description: "A brief description"
date: 2024-01-01
tags: [ml, research]
thumbnail: "project_thumb.jpg"
links:
  - label: "GitHub"
    url: "https://github.com/"
---

Project content here...
```

## Building Locally

Run `jekyll clean && jekyll build` from the repo root. Jekyll on GitHub Pages uses a pinned version — check [the supported build matrix](https://pages.github.com/versions/) for the exact Ruby/Jekyll versions in use.

```bash
jekyll serve
# → http://localhost:4000
```

No local build is required for deployment — GitHub handles it automatically (see below).

## Deploy on GitHub Pages

This repo is configured for GitHub Pages out of the box. Two options:

### Commit-based build (simplest)

1. Push to GitHub: `git remote add origin git@github.com:<username>/<repo>.git && git push -u origin main`
2. Go to **Settings → Pages** in your repository
3. Under **Build and deployment**, set **Source** to **Commit branch**
4. Select your branch (usually `main`)
5. Your site is live at `https://<username>.github.io`

## Directory Structure

```
_config.yml          # Site settings (name, email, links)
_data/profile.yml    # Homepage content (affiliation, pubs, education)
_layouts/           # Page templates (base, default, post, project, cv)
_posts/             # Blog posts
_projects/          # Project pages
assets/             # CSS, JS, images
cv/index.html       # CV page
index.html          # Homepage
```

## License

[Creative Commons Attribution-ShareAlike 3.0 Unported](http://creativecommons.org/licenses/by-sa/3.0/). Original theme by [Takeru Miyato](https://takerum.github.io/).
