// app/blog/page.js — blog listing. Newest posts first; posts flagged
// pinToBottom (the CNIC tool companion) always render last.
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/data/blog";
import { SITE_URL, PERSON_ID, WEBSITE_ID } from "@/data/site";

const url = `${SITE_URL}/blog`;
const title = "Blog — React Native & Mobile App Development | Anwer Solangi";
const description =
  "Field notes from a React Native developer in Karachi: honest takes on mobile app development, what apps really cost, choosing a tech stack, and the occasional deep dive like decoding Pakistan's CNIC.";

export const metadata = {
  title,
  description,
  keywords: [
    "react native blog",
    "mobile app development blog",
    "app development cost",
    "react native 2026",
    "anwer solangi blog",
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Anwer Solangi",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anwer Solangi's blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@anwersolangidev",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Anwer Solangi's Blog",
    url,
    description,
    author: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: { "@id": PERSON_ID },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: url },
    ],
  };

  return (
    <main className="min-h-screen px-6 pb-28 pt-28 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-screen">
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-ink-2 hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          back to home
        </Link>

        <div className="mb-12 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            BLOG · {BLOG_POSTS.length} POSTS
          </div>
          <h1 className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-ink md:text-6xl lg:text-7xl">
            Notes from the{" "}
            <span className="font-serif italic font-normal text-accent">
              build log
            </span>
            .
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            Things I&rsquo;ve learned shipping mobile apps for a living —
            written the way I&rsquo;d explain them over chai. No fluff, no
            recycled listicles: honest takes on React Native, what apps really
            cost, and the occasional deep dive down a rabbit hole.
          </p>
        </div>

        {featured && (
          <div className="mb-8">
            <BlogCard post={featured} featured />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 grid items-center gap-8 rounded-2xl border border-rule bg-bg-2 p-8 md:grid-cols-[1.4fr_1fr] lg:p-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
              ▸ WORK WITH ME
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-ink md:text-4xl">
              Reading about apps is free.{" "}
              <span className="font-serif italic font-normal text-accent">
                Shipping one is my job.
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-ink-2">
              I&rsquo;m a senior React Native developer in Karachi — available
              for freelance &amp; contract projects worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#1a0a02] transition hover:opacity-90"
            >
              Start a project →
            </Link>
            <Link
              href="/apps"
              className="rounded-lg border border-rule px-5 py-3 text-sm font-medium text-ink transition hover:bg-white/5"
            >
              See my apps ↗
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
