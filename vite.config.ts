// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When DEPLOY_TARGET=github-pages (set in the GitHub Actions workflow), build a
// fully static site using Nitro's github_pages preset. It prerenders every route
// it can crawl from "/" and writes .nojekyll automatically. Locally / on Lovable
// we keep the default Cloudflare behaviour.
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isGithubPages
    ? {
        nitro: {
          preset: "github_pages",
          // The wrapper's types don't expose `prerender`, but Nitro consumes it.
          // Without an explicit route list the github_pages preset prerenders
          // nothing and then crashes trying to emit an SSR bundle.
          prerender: {
            crawlLinks: true,
            failOnError: false,
            routes: ["/", "/sitemap.xml"],
          },
        } as never,
      }
    : {}),
});
