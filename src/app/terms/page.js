import LegalDocument, { CoveredApps } from "@/components/legal/LegalDocument";
import { GENERAL_TERMS } from "@/data/legal";
import { coveredApps, unifiedMetadata } from "@/lib/unified-legal";

// Developer-wide terms of service for store listings. Per-app terms add to it.
export const metadata = unifiedMetadata({
  path: "/terms",
  title: "Terms of Service",
  description:
    "Terms of service for every app and extension by Anwer Solangi: license, acceptable use, subscriptions, disclaimers and how to get in touch.",
});

export default function TermsPage() {
  return (
    <LegalDocument
      doc={GENERAL_TERMS}
      eyebrow="ALL APPS · LEGAL"
      back={{ href: "/apps", label: "back to apps" }}
      question="Have questions about these terms?"
    >
      <CoveredApps apps={coveredApps("terms")} kind="terms of service" />
    </LegalDocument>
  );
}
