# Deploying to GitHub Pages (`username.github.io`)

This is a plain Vite + React SPA. It builds to `dist/` and the workflow
uploads that folder verbatim to GitHub Pages.

## One-time setup

1. Create a repo named exactly `username.github.io` and push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source =
   GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds
   the site and publishes to `https://username.github.io/`.

## How routing works

The app uses `react-router-dom` (`BrowserRouter`) so URLs like
`/data-curation` are real paths. GitHub Pages doesn't know about them, so
the deploy step copies `dist/index.html` to `dist/404.html`. When a user
hits `/anything`, Pages serves `404.html` (which is the SPA shell), and
React Router takes over and renders the correct page on the client.

## Project sites (`username.github.io/repo-name`)

If you deploy to a project site instead, set `BASE_PATH=/repo-name/` in
the workflow's build step and wrap `<BrowserRouter basename="/repo-name">`
in `src/main.tsx`. For user sites (`username.github.io`) no changes are
needed.

## Adding a new page

Drop a new YAML file in `src/content/pages/`. It will be auto-discovered,
linked from the bento grid on the home page, and available at
`/<filename>` on the next deploy — no code changes needed.

## Local preview of the static build

```bash
bun run build
bunx serve dist
```
