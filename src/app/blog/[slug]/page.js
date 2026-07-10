// app/blog/[slug]/page.js — individual blog post.
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BlogContent from "@/components/blog/BlogContent";
import BlogCard from "@/components/blog/BlogCard";
import {
  BLOG_POSTS,
  getPost,
  getOtherPosts,
  readingTimeMinutes,
} from "@/data/blog";
import { SITE_URL, SITE_NAME, PERSON_ID, WEBSITE_ID } from "@/data/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = `${post.title} | ${SITE_NAME}`;
  return {
    title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [SITE_URL],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: `${SITE_URL}${post.cover}`,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@anwersolangidev",
    },
  };
}

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const others = getOtherPosts(post.slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main className="min-h-screen px-6 pb-28 pt-28 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex items-center gap-2 font-mono text-xs text-ink-3"
        >
          <Link href="/" className="hover:text-ink">
            home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-ink">
            blog
          </Link>
          <span>/</span>
          <span className="truncate text-ink-2">{post.slug}</span>
        </nav>

        {/* Header */}
        <header>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            <span className="text-accent">{post.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{readingTimeMinutes(post)} min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-ink md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3 border-b border-rule pb-8">
            {/* Brand mark, not a photo — /profile-picture.png is a dark
                monogram tile that vanishes at 40px on this background. */}
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#1a0a02]"
            >
              A
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">
                Anwer Solangi
              </div>
              <div className="font-mono text-[11px] text-ink-3">
                React Native developer · Karachi, PK
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <BlogContent content={post.content} />

        {/* Author CTA */}
        <section className="mt-16 rounded-2xl border border-rule bg-bg-2 p-7 md:p-9">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            ▸ WRITTEN BY ANWER SOLANGI
          </div>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-ink">
            Building an app?{" "}
            <span className="font-serif italic font-normal text-accent">
              Let&rsquo;s talk.
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-ink-2">
            I&rsquo;m a senior React Native developer in Karachi with 50+
            shipped apps. I write these posts the same way I build: no filler.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#1a0a02] transition hover:opacity-90"
            >
              Start a project →
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 rounded-lg border border-rule px-5 py-3 text-sm font-medium text-ink transition hover:bg-white/5"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All posts
            </Link>
          </div>
        </section>
      </article>

      {/* Keep reading */}
      {others.length > 0 && (
        <section className="mx-auto mt-20 max-w-screen">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              ▸ Keep reading
            </span>
            <div className="h-px flex-1 bg-rule" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
