import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { BentoTile } from "@/components/BentoTile";
import { getAllPages, getSite } from "@/lib/content";

export function HomePage() {
  const pages = getAllPages();
  const site = getSite();

  useEffect(() => {
    document.title = site.name;
  }, [site.name]);

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Selected work
          </h2>
          <span className="text-xs text-muted-foreground">{pages.length} entries</span>
        </div>

        <div className="grid auto-rows-[120px] grid-cols-4 gap-4 md:grid-cols-8">
          {pages.map((p, i) => (
            <BentoTile key={p.slug} page={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
