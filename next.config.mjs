// Vercel's domain redirect can't prepend `/apps`, so apps.* traffic lands on
// the apex as a bare path that would 404. These rules forward it to /apps/<slug>.
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

// Consolidated onto /apps/<slug>. Keep in sync with sitemap.js, which no
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
      // Exact match must precede the wildcard so the bare slug redirects cleanly.
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
    // REPORT-ONLY on purpose: an over-tight CSP fails silently in production,
    // so violations go to the browser console first. Once it's clean, rename the
    // header below to "Content-Security-Policy" to enforce it.
    // 'unsafe-inline'/'unsafe-eval' cover Next's inline bootstrap and pdfjs;
    // tightening them needs a nonce pipeline.
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://i.ytimg.com https://img.youtube.com https://www.googletagmanager.com https://*.google-analytics.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
      // blob: covers the tools' Web Workers (regex timeout guard, pdfjs).
      "worker-src 'self' blob:",
      "child-src 'self' blob:",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      "media-src 'self' blob: data:",
      "manifest-src 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            // No includeSubDomains: tapmeal.* and apps.* are separate hosts and
            // must not inherit this policy without being checked first.
            key: "Strict-Transport-Security",
            value: "max-age=31536000",
          },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
      {
        // Must NOT be blocked in robots.txt or Google can't crawl it to see
        // this header.
        source: "/anwer-solangi-resume.pdf",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Next emits /favicon.ico?favicon.<hash>.ico in the icon <link>; GSC
        // indexed it. Must NOT be blocked in robots.txt (see above).
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
};

export default nextConfig;
