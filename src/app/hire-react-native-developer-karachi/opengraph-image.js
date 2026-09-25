import { ImageResponse } from "next/og";
import { ogCard, loadOgFonts, loadImage, OG_SIZE } from "@/lib/og-card";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Hire Anwer Solangi, a React Native developer in Karachi, Pakistan";

export default async function Image() {
  const [fonts, screen] = await Promise.all([
    loadOgFonts(),
    loadImage("/reels/covers/ride-hail-driver-arriving-react-native-animated-route-eta-reel.jpg"),
  ]);
  return new ImageResponse(
    ogCard({
      kicker: "Available for freelance · Karachi, Pakistan",
      title: "Hire a React Native developer in Karachi",
      subtitle: "Anwer Solangi — 5+ years, 50+ projects, 100K+ app downloads. iOS and Android, remote worldwide.",
      footer: "anwersolangi.com/hire-react-native-developer-karachi",
      screen,
    }),
    { ...size, fonts },
  );
}
