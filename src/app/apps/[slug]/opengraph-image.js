import { ImageResponse } from "next/og";
import { APPS_DATA } from "@/data/apps";
import { ogCard, loadOgFonts, loadImage, OG_SIZE } from "@/lib/og-card";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "App by Anwer Solangi, React Native developer";

export function generateStaticParams() {
  return Object.keys(APPS_DATA).map((slug) => ({ slug }));
}

const KIND = {
  "youtube-fullscreen-focus": "Chrome extension",
  reacttube: "Open-source React Native app",
};

export default async function Image({ params }) {
  const { slug } = await params;
  const app = APPS_DATA[slug];
  const [fonts, icon] = await Promise.all([loadOgFonts(), loadImage(app?.icon)]);
  return new ImageResponse(
    ogCard({
      kicker: KIND[slug] || "React Native app",
      title: app ? `${app.name} — ${app.subtitle}` : "Apps by Anwer Solangi",
      subtitle: app?.description,
      footer: "anwersolangi.com/apps",
      icon,
    }),
    { ...size, fonts },
  );
}
