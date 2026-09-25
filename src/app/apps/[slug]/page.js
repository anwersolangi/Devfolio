import { notFound } from "next/navigation";
import Layout1 from "@/components/apps/layouts/Layout1";
import Layout2 from "@/components/apps/layouts/Layout2";
import Layout3 from "@/components/apps/layouts/Layout3";
import { APPS_DATA } from "@/data/apps";
import { SITE_URL } from "@/data/site";
import { jsonLd } from "@/lib/jsonld";
import { appSubPages } from "@/lib/legal";
import {
  pageTitle,
  clampText,
  absolute,
  breadcrumbJsonLd,
  PERSON_REF, TWITTER_BASE } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(APPS_DATA).map((slug) => ({ slug }));
}

// Chrome extensions and web-only projects aren't mobile apps; everything else
// ships to Android (and iOS where noted) from a React Native codebase.
const APP_TYPE = {
  "youtube-fullscreen-focus": {
    type: "WebApplication",
    category: "BrowserApplication",
    os: "Chrome",
    kind: "Chrome extension",
  },
};
const appType = (slug) =>
  APP_TYPE[slug] ?? {
    type: "MobileApplication",
    category: "MobileApplication",
    os: "Android, iOS",
    kind: "React Native app",
  };

function metaDescription(app, slug) {
  const base = app.description.trim().replace(/\.?$/, ".");
  if (base.length >= 120) return clampText(base);
  return clampText(`${base} A ${appType(slug).kind} built by Anwer Solangi.`);
}

function AppJsonLd({ app, slug }) {
  const t = appType(slug);
  const { playstore, codecanyon, gumroad, github } = app.links ?? {};
  const live = (href) => href && href !== "#";
  const url = `${SITE_URL}/apps/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": t.type,
    "@id": `${url}#app`,
    name: app.name,
    alternateName: app.subtitle,
    description: app.fullDescription || app.description,
    url,
    image: absolute(app.icon),
    applicationCategory: t.category,
    operatingSystem: t.os,
    author: PERSON_REF,
    creator: PERSON_REF,
    ...(app.features?.length ? { featureList: app.features.join(", ") } : {}),
    ...(live(playstore) && app.released !== false
      ? { installUrl: playstore, downloadUrl: playstore }
      : {}),
    sameAs: [playstore, codecanyon, gumroad, github].filter(live),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Apps", path: "/apps" },
              { name: app.name, path: `/apps/${slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = APPS_DATA[slug];

  if (!app) {
    return {
      title: "App Not Found",
    };
  }

  const title = pageTitle(`${app.name} — ${app.subtitle}`);
  const description = metaDescription(app, slug);
  return {
    title,
    description,
    alternates: { canonical: `/apps/${slug}` },
    openGraph: {
      title,
      description,
      url: `/apps/${slug}`,
      type: "website",
    },
    twitter: { ...TWITTER_BASE, title, description },
  };
}

export default async function AppPage({ params }) {
  const { slug } = await params;
  const app = APPS_DATA[slug];

  if (!app) {
    notFound();
  }

  // Resolved here rather than in the layouts so the content maps stay out of
  // the client bundle. Apps without their own privacy policy or terms point at
  // the developer-wide ones, so every app links to both.
  const own = appSubPages(slug);
  const subPages = {
    privacy: own.includes("privacy") ? `/apps/${slug}/privacy` : "/privacy",
    terms: own.includes("terms") ? `/apps/${slug}/terms` : "/terms",
    help: own.includes("help") && `/apps/${slug}/help`,
    childSafety: own.includes("child-safety") && `/apps/${slug}/child-safety`,
  };

  const LayoutComponent =
    app.layout === 1 ? Layout1 : app.layout === 2 ? Layout2 : Layout3;

  return (
    <>
      <AppJsonLd app={app} slug={slug} />
      <LayoutComponent app={app} subPages={subPages} />
    </>
  );
}
