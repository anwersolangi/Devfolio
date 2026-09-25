import BlogCard from "@/components/blog/BlogCard";
import { PageShell, PageHeader, CtaPanel } from "@/components/PageHeader";
import { BLOG_POSTS, ogImageFor } from "@/data/blog";
import { SITE_URL, WEBSITE_ID } from "@/data/site";
import { jsonLd } from "@/lib/jsonld";
import { DEFAULT_OG_IMAGE, PERSON_REF, breadcrumbJsonLd, TWITTER_BASE } from "@/lib/seo";

const url = `${SITE_URL}/blog`;
const title = "React Native & App Development Blog | Anwer Solangi";
const description =
  "Field notes from a React Native developer in Karachi: honest takes on building mobile apps, what they really cost, and choosing a tech stack.";

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
  alternates: {
    canonical: url,
    types: { "application/rss+xml": `${SITE_URL}/blog/feed.xml` },
  },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { ...TWITTER_BASE, title, description },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Anwer Solangi's Blog",
    url,
    description,
    author: PERSON_REF,
    isPartOf: { "@id": WEBSITE_ID },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: `${SITE_URL}${ogImageFor(post)}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: PERSON_REF,
    })),
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }}
      />

      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        title="Notes from the build log."
        lede="Things I’ve learned shipping mobile apps for a living — written the way I’d explain them over chai. No fluff, no recycled listicles: honest takes on React Native, what apps really cost, and the occasional deep dive down a rabbit hole."
        meta={`${BLOG_POSTS.length} posts`}
      />

      {featured && (
        <div className="mb-6">
          <BlogCard post={featured} featured />
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <CtaPanel
        title="Reading about apps is free. Shipping one is my job."
        body="I’m a senior React Native developer in Karachi, available for freelance and contract projects worldwide."
        secondary={{ href: "/apps", label: "See my apps" }}
      />
    </PageShell>
  );
}
