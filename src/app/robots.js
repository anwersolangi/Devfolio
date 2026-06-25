import { SITE_URL } from "@/data/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep these crawlable: do NOT disallow *.xml (it would block sitemap.xml)
      // and do NOT disallow the resume PDF (it's served with X-Robots-Tag:
      // noindex so Google must crawl it to see the noindex).
      disallow: ["/api/", "/private/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
