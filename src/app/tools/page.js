// app/tools/page.js — free browser tools listing
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap, Gift } from "lucide-react";
import ToolCard from "@/components/tools/ToolCard";
import { TOOLS, TOOL_CATEGORIES } from "@/data/tools";

const baseUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

export const metadata = {
  title: "Free Online Tools | Anwer Solangi",
  description:
    "A growing collection of free, fast, privacy-first browser tools — QR code generator, app icon generator, PDF to image, image compressor, JSON formatter and more. No sign-up, nothing uploaded.",
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
    title: "Free Online Tools | Anwer Solangi",
    description:
      "Free, fast, privacy-first browser tools — QR codes, app icons, PDF to image, image compression, JSON and more. Nothing is uploaded.",
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
    card: "summary_large_image",
    title: "Free Online Tools | Anwer Solangi",
    description:
      "Free, privacy-first browser tools — QR codes, app icons, PDF to image and more.",
    creator: "@anwerxolangi",
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
    <main className="min-h-screen px-6 pb-28 pt-28 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-screen">
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-ink-2 hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          back to home
        </Link>

        <div className="mb-12 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            FREE TOOLS · {TOOLS.length} UTILITIES
          </div>
          <h1 className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-ink md:text-6xl lg:text-7xl">
            Free tools that{" "}
            <span className="font-serif italic font-normal text-accent">
              just work
            </span>
            .
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            A growing toolbox of fast, no-nonsense browser utilities — generate
            QR codes and app icons, convert PDFs to images, compress photos,
            format JSON and more. Every tool runs entirely on your device, so
            your files and data never leave your browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-3"
              >
                <Icon className="h-4 w-4 text-good" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {TOOL_CATEGORIES.map((group) => (
          <section key={group.name} className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {group.name}
              </h2>
              <div className="h-px flex-1 bg-rule" />
              <span className="font-mono text-xs tabular-nums text-ink-3">
                {group.tools.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="mt-20 grid items-center gap-8 rounded-2xl border border-rule bg-bg-2 p-8 md:grid-cols-[1.4fr_1fr] lg:p-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
              ▸ HIRE ME
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-ink md:text-4xl">
              Want a custom tool or a mobile app?{" "}
              <span className="font-serif italic font-normal text-accent">
                Let&rsquo;s build it.
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-ink-2">
              I build these for fun and to sharpen the same craft I bring to
              client work. Available for freelance &amp; contract projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#1a0a02] transition hover:opacity-90"
            >
              Start a project →
            </Link>
            <Link
              href="/apps"
              className="rounded-lg border border-rule px-5 py-3 text-sm font-medium text-ink transition hover:bg-white/5"
            >
              See my apps ↗
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
