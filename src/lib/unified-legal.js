import { APPS_LIST } from "@/data/apps";
import { appSubPages } from "@/lib/legal";
import { clampText, DEFAULT_OG_IMAGE, TWITTER_BASE } from "@/lib/seo";

/** Apps listed on a unified legal page, each linked to its own document. */
export function coveredApps(kind) {
  return APPS_LIST.map(({ slug, name }) => ({
    slug,
    name,
    href: appSubPages(slug).includes(kind) ? `/apps/${slug}/${kind}` : null,
  }));
}

export function unifiedMetadata({ path, title, description }) {
  const desc = clampText(description);
  return {
    title: `${title} | Anwer Solangi`,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: desc,
      url: path,
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { ...TWITTER_BASE, title, description: desc },
  };
}
