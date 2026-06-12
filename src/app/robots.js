export default function robots() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
  ).replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/", "/*.json$", "/*.xml$"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
