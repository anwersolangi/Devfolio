"use client";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://anwersolangi.com/#person",
    name: "Anwer Solangi",
    alternateName: ["Anwer Ali Solangi", "Anwer Solangi Developer"],
    url: "https://anwersolangi.com",
    image: {
      "@type": "ImageObject",
      url: "https://anwersolangi.com/profile-picture.png",
      caption: "Anwer Solangi - React Native Developer",
    },
    sameAs: [
      "https://www.fiverr.com/anwer_solangi",
      "https://x.com/anwerxolangi",
      "https://twitter.com/anwerxolangi",
      "https://github.com/anwersolangi",
      "https://instagram.com/anwersolangi",
      "https://medium.com/@anwersolangi",
    ],
    jobTitle: "Senior React Native Developer",
    description:
      "Professional React Native and iOS developer based in Karachi, Pakistan, specializing in cross-platform mobile app development.",
    worksFor: {
      "@type": "Organization",
      name: "Langoo",
    },
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
      "Browser Extensions",
    ],
    knowsLanguage: ["English", "Urdu", "Sindhi"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://anwersolangi.com/#service",
    name: "Anwer Solangi - Mobile App Development Services",
    description:
      "Professional React Native and iOS development services in Karachi, Pakistan. Specializing in cross-platform mobile applications, browser extensions, and wearable apps.",
    provider: {
      "@id": "https://anwersolangi.com/#person",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Karachi",
        containedIn: {
          "@type": "State",
          name: "Sindh",
          containedIn: {
            "@type": "Country",
            name: "Pakistan",
          },
        },
      },
      {
        "@type": "Country",
        name: "Worldwide",
      },
    ],
    serviceType: [
      "React Native App Development",
      "iOS App Development",
      "Mobile App Development",
      "Cross-Platform Development",
      "Browser Extension Development",
      "Wearable App Development",
    ],
    url: "https://anwersolangi.com",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Anwer Solangi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anwer Solangi is a professional React Native and iOS developer based in Karachi, Pakistan. He is NOT the same person as Anwar Solangi (with 'a'), who was a Pakistani TV actor (1944-2008). Anwer Solangi specializes in mobile app development and has been working as a freelance developer since 2020.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Anwer Solangi and Anwar Solangi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anwer Solangi (spelled with 'e') is a React Native developer from Karachi working since 2020. Anwar Solangi (spelled with 'a') was a Pakistani television actor who lived from 1944 to 2008. They are completely different people with different professions.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Anwer Solangi located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anwer Solangi is located in Karachi, Sindh, Pakistan. He works with clients both locally in Karachi and remotely from around the world.",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire Anwer Solangi for React Native development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can hire Anwer Solangi through his website at anwersolangi.com, on Fiverr at fiverr.com/anwer_solangi, or by contacting him directly at me@anwersolangi.com for React Native and iOS app development projects.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Anwer Solangi offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anwer Solangi offers React Native app development, iOS development using Swift, cross-platform mobile app development, browser extension development (Chrome, Firefox, Safari), wearable app development, and mobile app consultation services.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://anwersolangi.com/#website",
    url: "https://anwersolangi.com",
    name: "Anwer Solangi - React Native Developer Portfolio",
    description:
      "Professional portfolio of Anwer Solangi, a React Native and iOS developer based in Karachi, Pakistan.",
    publisher: {
      "@id": "https://anwersolangi.com/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://anwersolangi.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://anwersolangi.com/#webpage",
    url: "https://anwersolangi.com",
    name: "Anwer Solangi | React Native Developer in Karachi, Pakistan",
    isPartOf: {
      "@id": "https://anwersolangi.com/#website",
    },
    about: {
      "@id": "https://anwersolangi.com/#person",
    },
    description:
      "Professional React Native and iOS developer based in Karachi, Pakistan. Specializing in cross-platform mobile app development and browser extensions.",
    inLanguage: "en-US",
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": item.url,
        name: item.name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
    name: name,
    description: description,
    url: url,
    applicationCategory: applicationCategory,
    operatingSystem: operatingSystem,
    author: {
      "@id": "https://anwersolangi.com/#person",
    },
    creator: {
      "@id": "https://anwersolangi.com/#person",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AllSchemas() {
  return (
    <>
      <PersonSchema />
      <ServiceSchema />
      <FAQSchema />
      <WebsiteSchema />
      <WebPageSchema />
    </>
  );
}
