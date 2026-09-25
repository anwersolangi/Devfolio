import { reelsData } from "@/data/reels";
import { TOOLS } from "@/data/tools";
import { APPS_DATA } from "@/data/apps";
import { BLOG_POSTS, ogImageFor } from "@/data/blog";
import { SITE_URL } from "@/data/site";
import { absolute, reelDate, reelSummary, stripEmoji, xml } from "@/lib/seo";

// lastModified is only set where the data carries a real date. A timestamp of
// "now" on every build tells Google nothing, and it learns to ignore lastmod
// for sites that do that.
//
// Next writes these values into the XML verbatim, so anything that can hold
// "&" or "<" (titles, descriptions, URLs with query strings) goes through xml().

const latest = (dates) => {
  const valid = dates.filter(Boolean).map((d) => new Date(d).getTime());
  return valid.length ? new Date(Math.max(...valid)) : undefined;
};

const postDate = (post) => new Date(post.updatedAt || post.publishedAt);
const lastPost = latest(BLOG_POSTS.map(postDate));
const lastReel = latest(reelsData.map(reelDate));

const YOUTUBE_EMBED = /youtube(?:-nocookie)?\.com\/embed\/([\w-]{6,})/;

function reelVideo(reel) {
  const embed = [reel.videoUrl, reel.links?.youtube].find((u) =>
    YOUTUBE_EMBED.test(u || ""),
  );
  const date = reelDate(reel);
  const thumb = reel.coverImage || reel.coverImageReel;
  if (!embed || !thumb) return null;
  const id = embed.match(YOUTUBE_EMBED)[1];
  return {
    title: xml(stripEmoji(reel.title)),
    thumbnail_loc: xml(absolute(thumb)),
    description: xml(reel.notes || reelSummary(reel, 300)),
    player_loc: xml(`https://www.youtube.com/embed/${id}`),
    ...(reel.duration ? { duration: Math.round(reel.duration) } : {}),
    ...(date ? { publication_date: date.toISOString() } : {}),
  };
}

export default function sitemap() {
  const route = (path, extra = {}) => ({ url: `${SITE_URL}${path}`, ...extra });

  const staticRoutes = [
    route("", {
      lastModified: latest([lastPost, lastReel]),
      changeFrequency: "weekly",
      priority: 1,
      images: [absolute("/og-image.png")],
    }),
    route("/hire-react-native-developer-karachi", {
      changeFrequency: "monthly",
      priority: 0.95,
    }),
    route("/blog", { lastModified: lastPost, changeFrequency: "weekly", priority: 0.85 }),
    route("/reels", { lastModified: lastReel, changeFrequency: "weekly", priority: 0.9 }),
    route("/apps", { changeFrequency: "monthly", priority: 0.8 }),
    route("/tools", { changeFrequency: "monthly", priority: 0.8 }),
    // Not listed, on purpose: /projects/{nearby,whatsupfire,reacttube} and
    // /extensions/youtube-fullscreen-focus 301 to their /apps/<slug> pages
    // (next.config.mjs), and the per-app legal pages are noindex.
    route("/privacy", { changeFrequency: "yearly", priority: 0.3 }),
    route("/terms", { changeFrequency: "yearly", priority: 0.3 }),
  ];

  const appRoutes = Object.values(APPS_DATA).map((app) =>
    route(`/apps/${app.slug}`, {
      changeFrequency: "monthly",
      priority: 0.7,
      ...(app.icon ? { images: [xml(absolute(app.icon))] } : {}),
    }),
  );

  const toolRoutes = TOOLS.map((tool) =>
    route(`/tools/${tool.slug}`, { changeFrequency: "monthly", priority: 0.7 }),
  );

  const blogRoutes = BLOG_POSTS.map((post) =>
    route(`/blog/${post.slug}`, {
      lastModified: postDate(post),
      changeFrequency: "monthly",
      priority: 0.75,
      images: [xml(absolute(ogImageFor(post)))],
    }),
  );

  const reelRoutes = reelsData.map((reel) => {
    const date = reelDate(reel);
    const cover = reel.coverImage || reel.coverImageReel;
    const video = reelVideo(reel);
    return route(`/reels/${reel.slug}`, {
      ...(date ? { lastModified: date } : {}),
      changeFrequency: "yearly",
      priority: 0.6,
      ...(cover ? { images: [xml(absolute(cover))] } : {}),
      ...(video ? { videos: [video] } : {}),
    });
  });

  return [...staticRoutes, ...appRoutes, ...toolRoutes, ...blogRoutes, ...reelRoutes];
}
