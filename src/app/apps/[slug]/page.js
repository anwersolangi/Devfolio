import { notFound } from "next/navigation";
import Layout1 from "@/components/apps/layouts/Layout1";
import Layout2 from "@/components/apps/layouts/Layout2";
import Layout3 from "@/components/apps/layouts/Layout3";
import { APPS_DATA } from "@/data/apps";
import { PRIVACY_POLICIES } from "@/data/privacy";
import { TERMS_OF_SERVICE } from "@/data/terms";
import { HELP_CONTENT } from "@/data/help";
import { CHILD_SAFETY_POLICIES } from "@/data/child-safety";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = APPS_DATA[slug];

  if (!app) {
    return {
      title: "App Not Found",
    };
  }

  return {
    title: `${app.name} | Anwer Solangi`,
    description: app.description,
    alternates: { canonical: `/apps/${slug}` },
    openGraph: {
      title: `${app.name} | Anwer Solangi`,
      description: app.description,
      url: `/apps/${slug}`,
      type: "website",
    },
  };
}

export default async function AppPage({ params }) {
  const { slug } = await params;
  const app = APPS_DATA[slug];

  if (!app) {
    notFound();
  }

  // Resolved here rather than in the layouts so the content maps stay out of
  // the client bundle, and so a footer never links to a sub-page that would
  // fall through to the "coming soon" stub.
  const subPages = {
    privacy: Boolean(PRIVACY_POLICIES[slug]),
    terms: Boolean(TERMS_OF_SERVICE[slug]),
    help: Boolean(HELP_CONTENT[slug]),
    childSafety: Boolean(CHILD_SAFETY_POLICIES[slug]),
  };

  const LayoutComponent =
    app.layout === 1 ? Layout1 : app.layout === 2 ? Layout2 : Layout3;

  return <LayoutComponent app={app} subPages={subPages} />;
}
