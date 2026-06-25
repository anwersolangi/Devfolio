/** @type {import('next').NextConfig} */
const nextConfig = {
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
