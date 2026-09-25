import Link from "next/link";
import ThemedImage from "@/components/ThemedImage";

const TOKEN_RE = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g;
const LINK_RE = /^\[([^\]]+)\]\(([^)]+)\)$/;

function renderInline(text) {
  return text.split(TOKEN_RE).map((part, i) => {
    if (!part) return null;

    const link = part.match(LINK_RE);
    if (link) {
      const [, label, href] = link;
      const cls =
        "font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";
      if (href.startsWith("/") || href.startsWith("#")) {
        return (
          <Link key={i} href={href} className={cls}>
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {label}
        </a>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded-md border border-rule bg-bg-3 px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.length > 2 && part.startsWith("_") && part.endsWith("_")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

const headingId = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={headingId(block.text)}
          className="mt-14 scroll-mt-28 text-2xl font-bold tracking-[-0.02em] text-ink md:text-3xl"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          id={headingId(block.text)}
          className="mt-10 scroll-mt-28 text-xl font-semibold tracking-[-0.01em] text-ink"
        >
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="mt-6 text-[16.5px] leading-[1.8] text-ink-2 md:text-lg">
          {renderInline(block.text)}
        </p>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`mt-6 space-y-3 pl-5 text-[16.5px] leading-[1.75] text-ink-2 md:text-lg ${
            block.ordered
              ? "list-decimal marker:text-ink-3"
              : "list-disc marker:text-ink-3"
          }`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="pl-1.5">
              {renderInline(item)}
            </li>
          ))}
        </ListTag>
      );
    }

    case "image":
      return (
        <figure className="mt-10">
          <ThemedImage
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            loading="lazy"
            className="w-full rounded-2xl border border-rule bg-bg-2"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-ink-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "video": {
      const vertical = block.aspect === "vertical";
      return (
        <figure className="mt-10">
          <div
            className={`mx-auto overflow-hidden rounded-2xl border border-rule bg-bg-2 ${
              vertical ? "aspect-[9/16] max-w-[340px]" : "aspect-video w-full"
            }`}
          >
            <iframe
              src={block.src}
              title={block.title}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
          {(block.caption || block.watchUrl) && (
            <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-ink-3">
              {block.caption}
              {block.watchUrl && (
                <a
                  href={block.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block text-accent hover:underline"
                >
                  video not loading? watch it on{" "}
                  {block.watchUrl.includes("youtube")
                    ? "YouTube"
                    : "Facebook"}{" "}
                  ↗
                </a>
              )}
            </figcaption>
          )}
        </figure>
      );
    }

    case "quote":
      return (
        <blockquote className="mt-8 border-l border-rule-2 pl-5">
          <p className="text-xl md:text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
            {renderInline(block.text)}
          </p>
          {block.cite && (
            <cite className="mt-2 block text-[13px] not-italic text-ink-3">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );

    case "code":
      return (
        <pre className="mt-8 overflow-x-auto rounded-2xl border border-rule bg-bg-2 p-5 font-mono text-[13px] leading-[1.7] text-ink">
          <code>{block.code}</code>
        </pre>
      );

    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border border-rule bg-accent-tint/60 p-5 md:p-6">
          {block.title && (
            <div className="label">
              {block.title}
            </div>
          )}
          <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2">
            {renderInline(block.text)}
          </p>
        </aside>
      );

    case "table":
      return (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-rule bg-bg-2">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    className="px-5 py-3.5 label-sm"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-rule last:border-0">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-5 py-3.5 align-top leading-relaxed ${
                        c === 0 ? "font-medium text-ink" : "text-ink-2"
                      }`}
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "hr":
      return <hr className="my-12 border-0 border-t border-rule" />;

    default:
      return null;
  }
}

export default function BlogContent({ content }) {
  return (
    <div>
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
