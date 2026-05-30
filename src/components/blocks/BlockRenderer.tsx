import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Block } from "@/lib/content";

function MarkdownBlock({ content }: { content: string }) {
  return (
    <div className="prose-research max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

function FigureBlock({ src, caption, width }: { src: string; caption?: string; width?: "full" | "half" }) {
  return (
    <figure className={width === "half" ? "" : "col-span-full"}>
      <div className="overflow-hidden rounded-xl border border-hairline bg-surface">
        <img src={src} alt={caption ?? ""} className="w-full h-auto block" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

function TableBlock({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}) {
  return (
    <figure className="col-span-full">
      <div className="overflow-x-auto rounded-xl border border-hairline bg-surface">
        <table className="w-full text-sm">
          <thead className="bg-surface-2">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-4 py-2 text-left font-semibold text-foreground/90">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-hairline">
                {r.map((c, j) => (
                  <td key={j} className="px-4 py-2 text-foreground/80">{String(c)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function CodeBlock({ language, content }: { language?: string; content: string }) {
  return (
    <div className="col-span-full overflow-hidden rounded-xl border border-hairline bg-[oklch(0.1_0.03_275)]">
      {language && (
        <div className="border-b border-hairline px-4 py-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          {language}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed font-mono text-foreground/90">
        <code>{content}</code>
      </pre>
    </div>
  );
}

function HFSpaceBlock({ src, height = 600 }: { src: string; height?: number }) {
  return (
    <div className="col-span-full overflow-hidden rounded-xl border border-hairline bg-surface ring-glow">
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-2 text-xs text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" />
        Hugging Face Space · <span className="font-mono truncate">{src}</span>
      </div>
      <iframe
        src={src}
        style={{ height }}
        className="w-full block"
        allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; gyroscope; microphone"
        loading="lazy"
      />
    </div>
  );
}

function VideoBlock({ src, caption }: { src: string; caption?: string }) {
  const isEmbed = /youtube\.com|youtu\.be|vimeo\.com/.test(src);
  return (
    <figure className="col-span-full">
      <div className="aspect-video overflow-hidden rounded-xl border border-hairline bg-surface">
        {isEmbed ? (
          <iframe src={src} className="w-full h-full" allowFullScreen />
        ) : (
          <video src={src} controls className="w-full h-full" />
        )}
      </div>
      {caption && <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function LinkBlock({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-2 text-sm font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:ring-glow"
    >
      {label}
    </a>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "markdown":
      return <MarkdownBlock content={block.content} />;
    case "figure":
      return <FigureBlock {...block} />;
    case "table":
      return <TableBlock {...block} />;
    case "code":
      return <CodeBlock {...block} />;
    case "hf-space":
      return <HFSpaceBlock {...block} />;
    case "video":
      return <VideoBlock {...block} />;
    case "link":
      return <LinkBlock {...block} />;
    default:
      return null;
  }
}
