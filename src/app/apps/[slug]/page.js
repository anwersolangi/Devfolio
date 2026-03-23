import { notFound } from "next/navigation";
import Layout1 from "@/components/apps/layouts/Layout1";
import Layout2 from "@/components/apps/layouts/Layout2";
import Layout3 from "@/components/apps/layouts/Layout3";
import { APPS_DATA } from "@/data/apps";

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
    openGraph: {
      title: `${app.name} | Anwer Solangi`,
      description: app.description,
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

  const LayoutComponent =
    app.layout === 1 ? Layout1 : app.layout === 2 ? Layout2 : Layout3;

  return <LayoutComponent app={app} />;
}
