import { notFound } from "next/navigation";
import BlogContent from "@/components/blog/BlogContent";
import BlogCard from "@/components/blog/BlogCard";
import {
  PageShell,
  Breadcrumbs,
  SectionHead,
  CtaPanel,
} from "@/components/PageHeader";
import {
  BLOG_POSTS,
  getPost,
  getOtherPosts,
  readingTimeMinutes,
  ogImageFor,
  metaDescriptionFor,
} from "@/data/blog";
import { SITE_URL, SITE_NAME, WEBSITE_ID } from "@/data/site";
import { jsonLd } from "@/lib/jsonld";
import { pageTitle, breadcrumbJsonLd, PERSON_REF, TWITTER_BASE } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  const description = metaDescriptionFor(post);
  return {
    title: pageTitle(post.title),
    description,
    keywords: post.tags,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: {
      canonical: url,
      types: { "application/rss+xml": `${SITE_URL}/blog/feed.xml` },
    },
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [SITE_URL],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: `${SITE_URL}${ogImageFor(post)}`,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: { ...TWITTER_BASE, title: post.title, description },
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
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${ogImageFor(post)}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    wordCount: post.content
      .flatMap((b) => b.text ?? b.items ?? b.rows?.flat() ?? [])
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length,
    author: PERSON_REF,
    publisher: PERSON_REF,
    isPartOf: { "@id": WEBSITE_ID },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en",
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }}
      />

      <article className="mx-auto max-w-3xl">
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <header>
          <p className="text-[13px] text-ink-3">
            <span className="font-medium text-accent">{post.category}</span>
            <span aria-hidden> · </span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden> · </span>
            {readingTimeMinutes(post)} min read
          </p>
          <h1 className="mt-4 text-display-sm font-semibold text-ink">
            {post.title}
          </h1>
          <p className="mt-5 text-[17px] md:text-lg leading-[1.6] text-ink-2">
            {post.description}
          </p>
          <div className="mt-7 flex items-center gap-3 border-b border-rule pb-7">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-on-accent"
            >
              A
            </span>
            <div>
              <div className="text-[15px] font-medium text-ink">
                Anwer Solangi
              </div>
              <div className="text-[13px] text-ink-3">
                React Native developer · Karachi, Pakistan
              </div>
            </div>
          </div>
        </header>

        <BlogContent content={post.content} />

        <CtaPanel
          title="Building an app? Let’s talk."
          body="I’m a senior React Native developer in Karachi with 50+ shipped apps. I write these posts the same way I build: no filler."
          secondary={{ href: "/blog", label: "All posts" }}
        />
      </article>

      {others.length > 0 && (
        <section className="mx-auto mt-20 max-w-screen border-t border-rule pt-10">
          <SectionHead label="Keep reading" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
