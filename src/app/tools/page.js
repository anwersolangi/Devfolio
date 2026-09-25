import { ShieldCheck, Zap, Gift } from "lucide-react";
import ToolCard from "@/components/tools/ToolCard";
import {
  PageShell,
  PageHeader,
  SectionHead,
  CtaPanel,
} from "@/components/PageHeader";
import { TOOLS, TOOL_CATEGORIES } from "@/data/tools";
import { jsonLd } from "@/lib/jsonld";
import { TWITTER_BASE } from "@/lib/seo";

const baseUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

const DESCRIPTION =
  "Free, private browser tools: app icon generator, QR codes, PDF to image, image compressor, JSON formatter and more. No sign-up, and nothing is uploaded.";

export const metadata = {
  title: "Free Online Tools — Private, No Sign-up | Anwer Solangi",
  description: DESCRIPTION,
  keywords: [
    "free online tools",
    "free developer tools",
    "qr code generator",
    "app icon generator",
    "pdf to image",
    "image compressor",
    "json formatter",
    "browser tools",
  ],
  alternates: { canonical: `${baseUrl}/tools` },
  openGraph: {
    title: "Free Online Tools by Anwer Solangi",
    description: DESCRIPTION,
    url: `${baseUrl}/tools`,
    siteName: "Anwer Solangi",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Free online tools by Anwer Solangi",
      },
    ],
  },
  twitter: {
    ...TWITTER_BASE,
    title: "Free Online Tools by Anwer Solangi",
    description: DESCRIPTION,
  },
};

const TRUST = [
  { icon: ShieldCheck, label: "Runs in your browser" },
  { icon: Zap, label: "Instant, no uploads" },
  { icon: Gift, label: "Free, no sign-up" },
];

export default function ToolsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Online Tools",
    url: `${baseUrl}/tools`,
    description:
      "A collection of free, privacy-first browser tools built by Anwer Solangi.",
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: TOOLS.map((tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${baseUrl}/tools/${tool.slug}`,
        name: tool.name,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${baseUrl}/tools`,
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Free tools" }]}
        title="Free tools that just work."
        lede="A growing toolbox of fast, no-nonsense browser utilities — generate QR codes and app icons, convert PDFs to images, compress photos, format JSON and more. Every tool runs entirely on your device, so your files and data never leave your browser."
        meta={`${TOOLS.length} tools`}
      >
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 list-none m-0 p-0">
          {TRUST.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-2"
            >
              <Icon className="h-4 w-4 text-good" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </PageHeader>

      {TOOL_CATEGORIES.map((group) => (
        <section key={group.name} className="mb-14 border-t border-rule pt-8">
          <SectionHead label={group.name} count={group.tools.length} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}

      <CtaPanel
        title="Want a custom tool or a mobile app? Let’s build it."
        body="I build these for fun and to sharpen the same craft I bring to client work. Available for freelance and contract projects."
        secondary={{ href: "/apps", label: "See my apps" }}
      />
    </PageShell>
  );
}
