// Server-rendered JSON-LD. No "use client" — these only emit <script> tags, so
// rendering on the server ships the structured data in the initial HTML (best
// for crawlers and AI answer engines) with zero hydration cost.

import {
  SITE_URL,
  SITE_NAME,
  PERSON_ID,
  WEBSITE_ID,
  SERVICE_ID,
  GEO,
  CONTACT_EMAIL,
  SOCIAL_PROFILES,
  absUrl,
} from "@/data/site";
import { HOME_FAQS } from "@/data/faqs";

function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// The entity home. One stable @id, a rich sameAs graph, and an explicit
// disambiguatingDescription so search/AI engines never conflate this Anwer
// Solangi (the developer) with the late actor Anwar Solangi.
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Anwer Solangi",
    alternateName: ["Anwer Ali Solangi", "Anwer Solangi Developer"],
    disambiguatingDescription:
      "React Native and iOS mobile app developer based in Karachi, Pakistan (spelled Anwer, with an 'e'). Not to be confused with Anwar Solangi, the late Pakistani television actor (1944–2008).",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: absUrl("/profile-picture.png"),
      caption: "Anwer Solangi — React Native Developer",
    },
    sameAs: SOCIAL_PROFILES,
    jobTitle: "Senior React Native Developer",
    email: `mailto:${CONTACT_EMAIL}`,
    description:
      "Professional React Native and iOS developer based in Karachi, Pakistan, specializing in cross-platform mobile app development.",
    worksFor: { "@type": "Organization", name: "Langoo" },
    nationality: { "@type": "Country", name: "Pakistan" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    knowsAbout: [
      "React Native",
      "iOS Development",
      "Swift",
      "JavaScript",
      "TypeScript",
      "Mobile App Development",
      "Cross-Platform Development",
      "Expo",
      "Browser Extensions",
    ],
    knowsLanguage: ["English", "Urdu", "Sindhi"],
  };
  return <JsonLd schema={schema} />;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Anwer Solangi — React Native Developer Portfolio",
    description:
      "Portfolio of Anwer Solangi, a React Native and iOS developer based in Karachi, Pakistan.",
    publisher: { "@id": PERSON_ID },
    inLanguage: "en",
  };
  return <JsonLd schema={schema} />;
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: "Anwer Solangi — React Native App Development",
    description:
      "Freelance React Native and iOS app development in Karachi, Pakistan. Cross-platform mobile apps, browser extensions, and product builds for founders and teams worldwide.",
    provider: { "@id": PERSON_ID },
    url: SITE_URL,
    image: absUrl("/og-image.png"),
    email: `mailto:${CONTACT_EMAIL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Karachi",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Sindh",
          containedInPlace: { "@type": "Country", name: "Pakistan" },
        },
      },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Place", name: "Worldwide (remote)" },
    ],
    serviceType: [
      "React Native App Development",
      "iOS App Development",
      "Mobile App Development",
      "Cross-Platform Development",
      "Browser Extension Development",
    ],
    priceRange: "$$",
    sameAs: SOCIAL_PROFILES,
  };
  return <JsonLd schema={schema} />;
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <JsonLd schema={schema} />;
}

// Generic WebPage node. Pass per-page values; defaults describe the homepage.
export function WebPageSchema({
  url = SITE_URL,
  name = "Anwer Solangi | React Native Developer in Karachi, Pakistan",
  description = "React Native and iOS developer based in Karachi, Pakistan. Cross-platform mobile apps, browser extensions, and free developer tools.",
} = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en",
    dateModified: new Date().toISOString().split("T")[0],
  };
  return <JsonLd schema={schema} />;
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLd schema={schema} />;
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = "BrowserExtension",
  operatingSystem = "Chrome",
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  return <JsonLd schema={schema} />;
}

// Site-wide entity graph — rendered once in the root layout. Person + Website
// only (these describe the entity/site and are safe on every page). FAQ,
// ProfessionalService and WebPage are NOT here on purpose — they belong to
// specific pages (see HomeSchemas) to avoid repeating page-scoped schema on
// every URL.
export function SiteSchemas() {
  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
    </>
  );
}

// Homepage-only schema.
export function HomeSchemas() {
  return (
    <>
      <WebPageSchema />
      <ServiceSchema />
      <FAQSchema />
    </>
  );
}

// Backwards-compatible alias (older imports).
export const AllSchemas = SiteSchemas;
