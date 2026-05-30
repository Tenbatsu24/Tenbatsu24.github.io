import { Link } from "react-router-dom";
import { getSite } from "@/lib/content";

export function SiteHeader() {
  const site = getSite();
  return (
    <header className="sticky top-0 z-40 glass border-b border-hairline">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="inline-block size-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--glow)] transition-transform group-hover:scale-125" />
          <span className="text-sm font-semibold tracking-wide uppercase">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Work
          </Link>
          {site.links?.slice(0, 3).map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const site = getSite();
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {site.author ?? site.name}
        </div>
        <div className="flex gap-4">
          {site.links?.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
