import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { SITE_URL } from "@/data/site";
import BlogCard from "@/components/blog/BlogCard";
import Reveal from "@/components/Reveal";
import { jsonLd } from "@/lib/jsonld";

export default function Blog() {
  const posts = BLOG_POSTS.slice(0, 3);

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
    <section
      id="blog"
      className="py-16 md:py-24 lg:py-32 px-6 lg:px-16 border-t border-rule"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }}
      />
      <div className="max-w-screen mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">05 · FROM THE BLOG</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Notes from the{" "}
              <span className="font-italic-serif text-accent font-normal">
                build log
              </span>
              .
            </h2>
            <p className="text-base md:text-lg text-ink-2 leading-relaxed mt-5 max-w-2xl">
              Things I&rsquo;ve learned shipping mobile apps for a living —
              honest takes on React Native, what apps really cost, and the
              occasional deep dive. No fluff, no recycled listicles.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-mono text-xs text-ink-2 hover:text-ink transition-colors shrink-0"
          >
            read all {BLOG_POSTS.length} posts
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
