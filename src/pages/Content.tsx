import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getPage } from "@/lib/content";

export function ContentPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const page = getPage(slug);

  useEffect(() => {
    document.title = page ? page.title : "Not found";
  }, [page]);

  if (!page) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-gradient">Not found</h1>
        <p className="mt-4 text-muted-foreground">
          No page exists at <code className="font-mono">/{slug}</code>.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go home
        </Link>
      </main>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back
      </Link>

      <header className="mt-8 border-b border-hairline pb-10">
        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          {page.date && (
            <time>
              {new Date(page.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          {page.tags?.map((t) => (
            <span key={t} className="rounded-full border border-hairline px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl text-gradient">
          {page.title}
        </h1>
        {page.description && (
          <p className="mt-4 text-lg text-muted-foreground">{page.description}</p>
        )}
      </header>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {page.blocks.map((b, i) => (
          <BlockRenderer key={i} block={b} />
        ))}
      </div>
    </article>
  );
}
