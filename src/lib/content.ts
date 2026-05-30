import yaml from "js-yaml";

export type Block =
  | { type: "markdown"; content: string }
  | { type: "figure"; src: string; caption?: string; width?: "full" | "half" }
  | { type: "table"; caption?: string; headers: string[]; rows: (string | number)[][] }
  | { type: "code"; language?: string; content: string }
  | { type: "hf-space"; src: string; height?: number }
  | { type: "video"; src: string; caption?: string }
  | { type: "link"; href: string; label: string };

export type Cover =
  | { type: "gradient"; from: string; to: string }
  | { type: "image"; src: string };

export interface Page {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  size?: "small" | "medium" | "large" | "wide" | "tall";
  accent?: string;
  cover?: Cover;
  blocks: Block[];
}

export interface SiteConfig {
  name: string;
  tagline?: string;
  author?: string;
  bio?: string;
  links?: { label: string; href: string }[];
}

// Eagerly load all YAML files as raw strings at build time.
const pageFiles = import.meta.glob("/src/content/pages/*.yaml", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const siteFile = import.meta.glob("/src/content/site.yaml", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function slugFromPath(path: string): string {
  const name = path.split("/").pop() ?? "";
  return name.replace(/\.ya?ml$/, "");
}

let cachedPages: Page[] | null = null;
let cachedSite: SiteConfig | null = null;

export function getAllPages(): Page[] {
  if (cachedPages) return cachedPages;
  const pages: Page[] = Object.entries(pageFiles).map(([path, raw]) => {
    const data = yaml.load(raw) as Omit<Page, "slug">;
    return { slug: slugFromPath(path), ...data };
  });
  pages.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  cachedPages = pages;
  return pages;
}

export function getPage(slug: string): Page | undefined {
  return getAllPages().find((p) => p.slug === slug);
}

export function getSite(): SiteConfig {
  if (cachedSite) return cachedSite;
  const raw = Object.values(siteFile)[0] ?? "";
  cachedSite = (yaml.load(raw) as SiteConfig) ?? { name: "Research" };
  return cachedSite;
}
