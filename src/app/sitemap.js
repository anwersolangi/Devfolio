import { reelsData } from "@/data/reels";
import { TOOLS } from "@/data/tools";
import { APPS_LIST } from "@/data/apps";
import { SITE_URL } from "@/data/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    {
      path: "/hire-react-native-developer-karachi",
      changeFrequency: "monthly",
      priority: 0.95,
    },
    { path: "/reels", changeFrequency: "weekly", priority: 0.9 },
    { path: "/apps", changeFrequency: "monthly", priority: 0.8 },
    { path: "/tools", changeFrequency: "weekly", priority: 0.8 },
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
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Individual app detail pages (now first-party /apps/<slug> URLs).
  const appRoutes = APPS_LIST.map((app) => ({
    url: `${SITE_URL}/apps/${app.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const reelRoutes = reelsData.map((reel) => ({
    url: `${SITE_URL}/reels/${reel.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const toolRoutes = TOOLS.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...appRoutes, ...reelRoutes, ...toolRoutes];
}
