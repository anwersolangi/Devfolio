// components/blog/BlogCard.js — post card for the /blog listing.
// `featured` renders the wide two-column variant used for the newest post.
import Link from "next/link";
import { readingTimeMinutes } from "@/data/blog";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

function Meta({ post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
      <span className="text-accent">{post.category}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingTimeMinutes(post)} min read</span>
    </div>
  );
}

export default function BlogCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid overflow-hidden rounded-2xl border border-rule bg-bg-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 md:grid-cols-2"
      >
        <div className="overflow-hidden border-b border-rule md:border-b-0 md:border-r">
          <img
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={630}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-col justify-center p-7 lg:p-10">
          <Meta post={post} />
          <h2 className="mt-3 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink group-hover:text-accent md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 leading-relaxed text-ink-2">
            {post.description}
          </p>
          <span className="mt-5 font-mono text-sm text-accent">
            read the post →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-bg-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
    >
      <div className="overflow-hidden border-b border-rule">
        <img
          src={post.cover}
          alt={post.coverAlt}
          width={1200}
          height={630}
          loading="lazy"
          className="aspect-[1200/630] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta post={post} />
        <h2 className="mt-3 text-lg font-bold leading-snug tracking-[-0.01em] text-ink group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-2">
          {post.description}
        </p>
        <span className="mt-auto pt-4 font-mono text-xs text-accent">
          read the post →
        </span>
      </div>
    </Link>
  );
}
