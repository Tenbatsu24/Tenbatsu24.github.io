import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Page } from "@/lib/content";

const sizeClasses: Record<NonNullable<Page["size"]>, string> = {
  small: "md:col-span-2 md:row-span-1",
  medium: "md:col-span-2 md:row-span-2",
  large: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-4 md:row-span-1",
  tall: "md:col-span-2 md:row-span-3",
};

export function BentoTile({ page, index }: { page: Page; index: number }) {
  const size = page.size ?? "medium";
  const accent = page.accent ?? "#4f46e5";
  const cover = page.cover;

  const background =
    cover?.type === "gradient"
      ? `linear-gradient(135deg, ${cover.from}, ${cover.to})`
      : cover?.type === "image"
      ? undefined
      : `linear-gradient(135deg, ${accent}33, transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative col-span-4 ${sizeClasses[size]} min-h-[180px]`}
    >
      <Link
        to="/$slug"
        params={{ slug: page.slug }}
        className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:ring-glow"
      >
        {/* cover layer */}
        <div
          className="absolute inset-0 -z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          style={
            cover?.type === "image"
              ? { backgroundImage: `url(${cover.src})`, backgroundSize: "cover", backgroundPosition: "center" }
              : { background }
          }
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-surface/95 via-surface/40 to-transparent" />

        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          {page.date && <span>{new Date(page.date).toLocaleDateString(undefined, { year: "numeric", month: "short" })}</span>}
          {page.tags?.slice(0, 2).map((t) => (
            <span key={t} className="rounded-full border border-hairline px-2 py-0.5">{t}</span>
          ))}
        </div>

        <div className="mt-auto">
          <h3 className="text-xl font-semibold leading-tight text-foreground">
            {page.title}
          </h3>
          {page.description && (
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {page.description}
            </p>
          )}
          <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-primary">
            Read <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
