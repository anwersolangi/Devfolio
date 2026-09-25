import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { readingTimeMinutes } from "@/data/blog";
import ThemedImage from "@/components/ThemedImage";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

function Meta({ post }) {
  return (
    <p className="text-[13px] text-ink-3">
      <span className="font-medium text-accent">{post.category}</span>
      <span aria-hidden> · </span>
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span aria-hidden> · </span>
      {readingTimeMinutes(post)} min read
    </p>
  );
}

function ReadMore({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[15px] font-medium text-accent ${className}`}
    >
      Read the post
      <ArrowRight
        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden
      />
    </span>
  );
}

export default function BlogCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid overflow-hidden rounded-2xl border border-rule bg-bg-2 shadow-card transition-colors duration-200 hover:border-rule-2 md:grid-cols-[1.15fr_1fr]"
      >
        <div className="overflow-hidden border-b border-rule md:border-b-0 md:border-r">
          <ThemedImage
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={630}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
        <div className="flex flex-col justify-center p-7 lg:p-10">
          <Meta post={post} />
          <h2 className="mt-3 text-2xl md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink group-hover:text-accent transition-colors duration-150">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-[15px] leading-[1.6] text-ink-2">
            {post.description}
          </p>
          <ReadMore className="mt-5" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-bg-2 transition-colors duration-200 hover:border-rule-2"
    >
      <div className="overflow-hidden border-b border-rule">
        <ThemedImage
          src={post.cover}
          alt={post.coverAlt}
          width={1200}
          height={630}
          loading="lazy"
          className="aspect-[1200/630] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta post={post} />
        <h2 className="mt-2 text-[19px] font-semibold tracking-[-0.015em] leading-[1.3] text-ink group-hover:text-accent transition-colors duration-150">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-[14px] leading-[1.55] text-ink-2">
          {post.description}
        </p>
        <ReadMore className="mt-auto pt-4 text-[14px]" />
      </div>
    </Link>
  );
}
