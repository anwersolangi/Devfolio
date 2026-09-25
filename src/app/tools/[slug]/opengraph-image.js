import { ImageResponse } from "next/og";
import { TOOLS, getTool } from "@/data/tools";
import { ogCard, loadOgFonts, OG_SIZE } from "@/lib/og-card";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Free online tool by Anwer Solangi — runs in your browser";

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  const fonts = await loadOgFonts();
  return new ImageResponse(
    ogCard({
      kicker: `Free online tool · ${tool?.category ?? "Utilities"}`,
      title: tool?.name ?? "Free online tools",
      subtitle: tool?.tagline,
      footer: "anwersolangi.com/tools · runs in your browser, nothing uploaded",
    }),
    { ...size, fonts },
  );
}
