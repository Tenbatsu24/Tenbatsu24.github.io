# Deploying to GitHub Pages (`username.github.io`)

This site is configured to build as a fully static bundle using Nitro's
`github_pages` preset and deploy via GitHub Actions.

## One-time setup

1. Create a repo named exactly `username.github.io` on GitHub (replace
   `username` with your GitHub handle) and push this project to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source =
   GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` runs,
   prerenders every route to static HTML, and publishes to
   `https://username.github.io/`.

## How it works

- `vite.config.ts` switches on `DEPLOY_TARGET=github-pages` and tells Nitro
  to use the `github_pages` preset. It crawls from `/`, prerenders every
  linked route (home + each page in `src/content/pages/*.yaml` +
  `sitemap.xml`), and writes `.nojekyll` so Pages serves files starting
  with `_` correctly.
- Output goes to `.output/public/`, which the workflow uploads as the Pages
  artifact.
- Because this is a user/organisation site (`username.github.io`), the
  base path is `/` — no extra config needed. For project sites
  (`username.github.io/repo-name`) you would also need to set Vite's
  `base` and adjust internal links.

## Adding a new page

Drop a new YAML file in `src/content/pages/`. It will be auto-discovered,
linked from the bento grid on the home page, and prerendered on the next
deploy — no code changes needed.

## Local preview of the static build

```bash
DEPLOY_TARGET=github-pages bun run build
npx serve .output/public
```
