import LegalDocument, { CoveredApps } from "@/components/legal/LegalDocument";
import { GENERAL_PRIVACY } from "@/data/legal";
import { coveredApps, unifiedMetadata } from "@/lib/unified-legal";

// Developer-wide privacy policy: the URL to give any Play Store, App Store or
// Chrome Web Store listing. Per-app policies add to it.
export const metadata = unifiedMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "Privacy policy for every app and extension by Anwer Solangi: what data is handled, how Firebase and Google AdMob are used, and how to request deletion.",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      doc={GENERAL_PRIVACY}
      eyebrow="ALL APPS · LEGAL"
      back={{ href: "/apps", label: "back to apps" }}
      question="Have questions about privacy practices?"
    >
      <CoveredApps apps={coveredApps("privacy")} kind="privacy policy" />
    </LegalDocument>
  );
}
