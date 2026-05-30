import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getPage, type Block } from "@/lib/content";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = getPage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }] };
    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.description ?? "" },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/${params.slug}` }],
    };
  },
  component: PageView,
});

function PageView() {
  const page = Route.useLoaderData();

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
          {page.tags?.map((t: string) => (
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
        {page.blocks.map((b: Block, i: number) => (
          <BlockRenderer key={i} block={b} />
        ))}
      </div>
    </article>
  );
}
