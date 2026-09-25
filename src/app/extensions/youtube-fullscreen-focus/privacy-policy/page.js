import LegalDocument from "@/components/legal/LegalDocument";
import { PRIVACY_POLICIES } from "@/data/privacy";
import { DEFAULT_OG_IMAGE, TWITTER_BASE } from "@/lib/seo";

// The Chrome Web Store listing links to this URL, so it stays live. It renders
// the same document as /apps/youtube-fullscreen-focus/privacy.
const policy = PRIVACY_POLICIES["youtube-fullscreen-focus"];
const title = "Privacy Policy — YouTube Focus";
const description =
  "Privacy policy for the YouTube Focus Chrome extension. It collects no personal data, uses no analytics and runs entirely in your browser.";

export const metadata = {
  title: `${title} | Anwer Solangi`,
  description,
  // A legal page like the per-app ones: reachable, but not meant to rank.
  robots: { index: false, follow: true },
  alternates: { canonical: "/extensions/youtube-fullscreen-focus/privacy-policy" },
  openGraph: {
    title,
    description,
    url: "/extensions/youtube-fullscreen-focus/privacy-policy",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { ...TWITTER_BASE, title, description },
};

export default function ExtensionPrivacyPolicy() {
  return (
    <LegalDocument
      doc={policy}
      eyebrow="YOUTUBE FOCUS · LEGAL"
      back={{ href: "/apps/youtube-fullscreen-focus", label: "back to YouTube Focus" }}
      question="Have questions about privacy practices?"
    />
  );
}
