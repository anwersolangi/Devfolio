import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, readingTimeMinutes } from "@/data/blog";
import { SITE_URL } from "@/data/site";
import { Section } from "@/components/Section";
import ThemedImage from "@/components/ThemedImage";
import { jsonLd } from "@/lib/jsonld";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

/**
 * Homepage teaser: the featured post with its cover, then the next three as
 * a plain list. The listing's ordering rules (featured first, the CNIC
 * explainer last) come from the data module.
 */
export default function Blog() {
  const posts = BLOG_POSTS.slice(0, 4);
  const [featured, ...rest] = posts;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest blog posts by Anwer Solangi",
    description:
      "Honest, first-hand posts on React Native, mobile app costs, and app strategy from a developer who ships weekly.",
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <Section
      id="blog"
      label="Writing"
      title="Notes from shipping mobile apps for a living."
      more={{ href: "/blog", label: "All posts" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }}
      />
      <div className="grid gap-10 border-t border-rule pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <FeaturedPost post={featured} />
        <ul className="list-none m-0 p-0 divide-y divide-rule border-t border-rule lg:border-t-0 lg:-mt-5">
          {rest.map((post) => (
            <li key={post.slug}>
              <PostRow post={post} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

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

function FeaturedPost({ post }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="overflow-hidden rounded-xl border border-rule bg-bg-2 shadow-card">
          <ThemedImage
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={630}
            loading="lazy"
            className="w-full aspect-[1200/630] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
        <div className="mt-5">
          <Meta post={post} />
          <h3 className="mt-2 text-[19px] md:text-2xl font-semibold tracking-[-0.02em] leading-[1.25] text-ink group-hover:text-accent transition-colors duration-150">
            {post.title}
          </h3>
          <p className="mt-2 text-[15px] text-ink-2 leading-[1.6] line-clamp-3 max-w-prose">
            {post.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent">
            Read the post
            <ArrowRight
              className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

function PostRow({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block py-5">
      <Meta post={post} />
      <h3 className="mt-1.5 text-[17px] font-medium leading-[1.35] text-ink group-hover:text-accent transition-colors duration-150">
        {post.title}
      </h3>
      <p className="mt-1.5 text-[14px] text-ink-2 leading-[1.55] line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}
