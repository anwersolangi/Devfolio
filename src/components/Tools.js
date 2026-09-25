import Link from "next/link";
import { TOOLS, FEATURED_TOOLS } from "@/data/tools";
import { SITE_URL } from "@/data/site";
import { Section } from "@/components/Section";
import { jsonLd } from "@/lib/jsonld";

export default function Tools() {
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
    <Section
      id="tools"
      label="Free tools"
      title="Free browser tools that run entirely on your device."
      intro="Alongside client work I build free utilities — an app icon generator, QR code generator, PDF-to-image converter, image compressor, JSON formatter and more. Each one runs in your browser: no sign-up, no uploads, nothing leaves your machine."
      more={{ href: "/tools", label: `All ${TOOLS.length} tools` }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }}
      />
      <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-rule list-none m-0 p-0">
        {FEATURED_TOOLS.map((tool) => (
          <li key={tool.slug} className="border-b border-rule">
            <Link
              href={`/tools/${tool.slug}`}
              className="group flex items-baseline justify-between gap-4 py-4"
            >
              <span className="min-w-0">
                <span className="block text-[16px] font-medium text-ink group-hover:text-accent transition-colors duration-150">
                  {tool.name}
                </span>
                <span className="block mt-0.5 text-[14px] text-ink-2 leading-[1.5]">
                  {tool.tagline}
                </span>
              </span>
              <span className="shrink-0 text-[12px] text-ink-3">
                {tool.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
