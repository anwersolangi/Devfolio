// Legacy app slugs that used to live on the `apps.anwersolangi.com` subdomain.
// Vercel's domain redirect can only target another *domain* (the apex) — it
// can't prepend `/apps` — so `apps.anwersolangi.com/nearby/terms` lands on the
// apex as the bare path `anwersolangi.com/nearby/terms`, which 404s because app
// pages now live under `/apps/<slug>`. These redirects catch that bare path
// (both the slug root AND sub-paths like /nearby/terms used in Play Store
// listings) and forward it to the real page, so the legacy chain lands on a 200
// instead of a 404. See notes on the one-hop alternative (assign apps.* to the
// project so src/proxy.ts maps it directly).
const LEGACY_APP_SLUGS = [
  "memoriq",
  "nearby",
  "whatsupfire",
  "velocity-track",
  "youtube-fullscreen-focus",
  "convertix",
  "reacttube",
  "tapmeal",
];

// Apps that were also documented at /projects/<slug>. We consolidate onto the
// canonical /apps/<slug> URL (single ranking surface) and 301 the old
// /projects/<slug> page to it. Keep this in sync with the sitemap, which no
// longer lists these /projects/* URLs.
const PROJECTS_CONSOLIDATED_TO_APPS = [
  "nearby",
  "whatsupfire",
  "reacttube",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy app URLs: bare slug + any sub-path (/nearby, /nearby/terms, …).
      // Exact match is listed first so the bare slug redirects cleanly; the
      // wildcard catches /privacy, /terms, /help, /contact, /child-safety.
      ...LEGACY_APP_SLUGS.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: `/apps/${slug}`,
          permanent: true,
        },
        {
          source: `/${slug}/:path*`,
          destination: `/apps/${slug}/:path*`,
          permanent: true,
        },
      ]),
      ...PROJECTS_CONSOLIDATED_TO_APPS.map((slug) => ({
        source: `/projects/${slug}`,
        destination: `/apps/${slug}`,
        permanent: true,
      })),
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/anwersolangi/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // The resume PDF was ~93% of all search impressions at ~0.03% CTR,
        // ranking instead of real HTML pages. Keep it downloadable for humans
        // but tell search engines not to index it (and not to follow it as a
        // ranking surface). Must NOT be blocked in robots.txt or Google can't
        // crawl it to see this header.
        source: "/anwer-solangi-resume.pdf",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
