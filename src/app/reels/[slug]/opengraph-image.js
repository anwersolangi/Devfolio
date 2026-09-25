import { ImageResponse } from "next/og";
import { reelsData } from "@/data/reels";
import { ogCard, loadOgFonts, loadImage, OG_SIZE } from "@/lib/og-card";
import { stripEmoji } from "@/lib/seo";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "React Native UI reel by Anwer Solangi";

export function generateStaticParams() {
  return reelsData.map((reel) => ({ slug: reel.slug }));
}

// YouTube's hqdefault is a 4:3 letterbox of a vertical Short; oar2 is the
// same frame at its original portrait aspect, which fits the phone frame.
function portraitCover(reel) {
  const yt = reel.coverImage?.match(/i\.ytimg\.com\/vi\/([^/]+)\//);
  if (yt) return [`https://i.ytimg.com/vi/${yt[1]}/oar2.jpg`, reel.coverImage];
  return [reel.coverImage, reel.coverImageReel].filter(Boolean);
}

export default async function Image({ params }) {
  const { slug } = await params;
  const reel = reelsData.find((r) => r.slug === slug);
  const fonts = await loadOgFonts();

  let screen = null;
  for (const src of reel ? portraitCover(reel) : []) {
    screen = await loadImage(src);
    if (screen) break;
  }

  const title = stripEmoji(reel?.title ?? "React Native UI reels");
  return new ImageResponse(
    ogCard({
      kicker: `React Native UI reel · ${reel?.category ?? "Mobile UI"}`,
      title: title.includes(" — ") ? title.split(" — ")[0] : title,
      subtitle: (reel?.technologies ?? []).slice(0, 4).join(" · "),
      footer: "anwersolangi.com/reels",
      screen,
    }),
    { ...size, fonts },
  );
}
