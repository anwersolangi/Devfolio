import { BLOG_POSTS, ogImageFor, metaDescriptionFor } from "@/data/blog";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/data/site";
import { statSync } from "node:fs";
import path from "node:path";
import { xml } from "@/lib/seo";

const fileSize = (publicPath) => {
  try {
    return statSync(path.join(process.cwd(), "public", publicPath)).size;
  } catch {
    return 0;
  }
};

export const dynamic = "force-static";

// RSS 2.0 feed for the blog, linked from <head> as application/rss+xml so
// feed readers and aggregators can discover new posts.
export function GET() {
  const byDate = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );
  const lastBuild = byDate[0]
    ? new Date(byDate[0].updatedAt || byDate[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const items = byDate
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${xml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${xml(metaDescriptionFor(post))}</description>
      <category>${xml(post.category)}</category>
      <pubDate>${new Date(`${post.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>
      <author>${CONTACT_EMAIL} (${SITE_NAME})</author>
      <enclosure url="${SITE_URL}${ogImageFor(post)}" type="image/png" length="${fileSize(ogImageFor(post))}" />
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(`${SITE_NAME} — React Native & app development blog`)}</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Field notes from a React Native developer in Karachi, Pakistan.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
