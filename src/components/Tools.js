import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TOOLS, FEATURED_TOOLS } from "@/data/tools";
import { SITE_URL } from "@/data/site";
import ToolCard from "@/components/tools/ToolCard";
import Reveal from "@/components/Reveal";

export default function Tools() {
  // Structured data that mirrors what's visible in this section, so search and
  // AI answer engines can attribute these free tools to Anwer Solangi.
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free online tools by Anwer Solangi",
    description:
      "Free, privacy-first browser tools — app icon generator, QR code generator, PDF to image, image compressor, JSON formatter and more. Nothing is uploaded.",
    itemListElement: FEATURED_TOOLS.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/tools/${tool.slug}`,
      name: tool.name,
    })),
  };

  return (
    <section
      id="tools"
      className="py-16 md:py-24 lg:py-32 px-6 lg:px-16 border-t border-rule"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="max-w-screen mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">04 · FREE TOOLS</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Free tools that{" "}
              <span className="font-italic-serif text-accent font-normal">
                just work
              </span>
              .
            </h2>
            <p className="text-base md:text-lg text-ink-2 leading-relaxed mt-5 max-w-2xl">
              Beyond client work, I build free, privacy-first browser tools — an{" "}
              <strong className="font-semibold text-ink">
                app icon generator
              </strong>
              , QR code generator, PDF-to-image converter, image compressor, JSON
              formatter and more. Every one runs entirely in your browser: no
              sign-up, no uploads, nothing leaves your device.
            </p>
          </div>
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 font-mono text-xs text-ink-2 hover:text-ink transition-colors shrink-0"
          >
            browse all {TOOLS.length} tools
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {FEATURED_TOOLS.map((tool, index) => (
            <Reveal key={tool.slug} delay={index * 60}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
