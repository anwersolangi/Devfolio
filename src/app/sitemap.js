import { reelsData } from "@/data/reels";

export default function sitemap() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
  ).replace(/\/$/, "");

  const staticRoutes = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/reels", changeFrequency: "weekly", priority: 0.9 },
    { path: "/apps", changeFrequency: "monthly", priority: 0.8 },
    { path: "/projects/nearby", changeFrequency: "monthly", priority: 0.7 },
    { path: "/projects/whatsupfire", changeFrequency: "monthly", priority: 0.7 },
    { path: "/projects/reacttube", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/extensions/youtube-fullscreen-focus",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const reelRoutes = reelsData.map((reel) => ({
    url: `${baseUrl}/reels/${reel.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...reelRoutes];
}
