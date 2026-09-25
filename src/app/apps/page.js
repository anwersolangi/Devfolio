import AppCard from "@/components/apps/AppCard";
import { PageShell, PageHeader, CtaPanel } from "@/components/PageHeader";
import { APPS_LIST } from "@/data/apps";
import { SITE_URL } from "@/data/site";
import { jsonLd } from "@/lib/jsonld";
import { DEFAULT_OG_IMAGE, breadcrumbJsonLd, TWITTER_BASE } from "@/lib/seo";

const DESCRIPTION =
  "React Native apps, Chrome extensions and open-source projects built by Anwer Solangi, a mobile developer in Karachi, Pakistan — 100K+ downloads.";

export const metadata = {
  title: "React Native Apps & Extensions | Anwer Solangi",
  description: DESCRIPTION,
  keywords: [
    "Anwer Solangi apps",
    "React Native apps",
    "React Native developer Karachi",
    "mobile app developer Pakistan",
    "Expo apps",
    "Play Store apps",
  ],
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "React Native Apps & Extensions by Anwer Solangi",
    description: DESCRIPTION,
    url: "/apps",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    ...TWITTER_BASE,
    title: "React Native Apps & Extensions by Anwer Solangi",
    description: DESCRIPTION,
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Apps by Anwer Solangi",
  url: `${SITE_URL}/apps`,
  description: DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: APPS_LIST.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/apps/${app.slug}`,
      name: app.name,
    })),
  },
};

export default function AppsPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Apps", path: "/apps" },
            ]),
          ),
        }}
      />
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Apps" }]}
        title="Apps I’ve shipped."
        lede="Mobile apps, browser extensions and open-source projects — each one designed and built end-to-end. Open any tile for the full story, tech stack and download links."
        meta={`${APPS_LIST.length} apps · Google Play, Chrome Web Store, CodeCanyon and GitHub`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-x-5">
        {APPS_LIST.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>

      <CtaPanel
        title="Got an app idea? Let’s ship it."
        body="Available for freelance and contract work. Typical reply within a day, almost always inside two."
        secondary={{
          href: "https://github.com/anwersolangi",
          label: "GitHub",
          external: true,
        }}
      />
    </PageShell>
  );
}
