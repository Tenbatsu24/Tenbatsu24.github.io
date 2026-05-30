import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain Vite SPA. Built output goes to ./dist and is uploaded as-is to
// GitHub Pages. For username.github.io the base is "/"; for a project
// site (username.github.io/repo) set BASE_PATH=/repo/ in the workflow.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
