// app/tools/[slug]/page.js
import { notFound } from "next/navigation";
import ToolShell from "@/components/tools/ToolShell";
import ToolRunner from "@/components/tools/ToolRunner";
import { TOOLS, getTool } from "@/data/tools";

const baseUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool Not Found" };

  const url = `${baseUrl}/tools/${tool.slug}`;
  const title = `${tool.name} — Free Online Tool | Anwer Solangi`;
  return {
    title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: tool.description,
      url,
      siteName: "Anwer Solangi",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${tool.name} by Anwer Solangi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tool.description,
      creator: "@anwerxolangi",
    },
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const url = `${baseUrl}/tools/${tool.slug}`;

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url,
    description: tool.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": `${baseUrl}/#person` },
    creator: { "@id": `${baseUrl}/#person` },
    isAccessibleForFree: true,
  };

  const faqJsonLd = tool.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tool.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const howToJsonLd = tool.howTo?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to use the ${tool.name}`,
        step: tool.howTo.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.text,
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${baseUrl}/tools` },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.name,
        item: url,
      },
    ],
  };

  const schemas = [appJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd].filter(
    Boolean,
  );

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ToolShell tool={tool}>
        <ToolRunner slug={tool.slug} />
      </ToolShell>
    </>
  );
}
