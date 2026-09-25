import { Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SiteSchemas } from "@/components/SEOComponents";
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from "@/data/site";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// One family carries headings, body and data; hierarchy comes from size and
// weight. Mono is reserved for code.
const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Anwer Solangi — React Native Developer in Karachi, Pakistan",
    template: "%s",
  },
  description:
    "Senior React Native developer in Karachi, Pakistan. 50+ projects delivered, 100K+ app downloads. Available for freelance and contract iOS and Android work.",
  keywords: [
    "Anwer Solangi",
    "Anwer Ali Solangi",
    "React Native developer Karachi",
    "React Native developer Pakistan",
    "freelance React Native developer",
    "mobile app developer Karachi",
    "iOS developer Karachi",
    "React Native consultant",
    "Expo developer",
    "mobile UI reels",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // NOTE: canonical and og:url are intentionally NOT set here. Anything set in
  // the root layout leaks into every page that doesn't override it, which is
  // how legal pages and the 404 ended up claiming the homepage's URL. Each page
  // sets its own `alternates.canonical` and `openGraph.url`.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
  },
  // No twitter:image here: X falls back to og:image, so each page's own share
  // card is used instead of this layout's default.
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
  manifest: "/site.webmanifest",
  alternates: {
    types: { "application/rss+xml": `${SITE_URL}/blog/feed.xml` },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "PK-SD",
    "geo.placename": "Karachi",
    "geo.position": "24.8607;67.0011",
    ICBM: "24.8607, 67.0011",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Browser chrome colour per OS theme; THEME_SCRIPT rewrites both tags to
  // the chosen theme when the visitor has picked one.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

// Runs before first paint so the page never flashes the wrong theme. Resolves
// the saved choice (localStorage "theme") or the OS setting, stamps it on
// <html>, and keeps following the OS for visitors who never chose.
// window.__setTheme is the single entry point ThemeToggle calls.
const THEME_SCRIPT = `(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  var COLORS = { light: "#f7f7f5", dark: "#121211" };
  function saved() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      if (saved()) metas[i].setAttribute("content", COLORS[theme]);
    }
  }
  window.__setTheme = function (theme) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
    apply(theme);
  };
  var choice = saved();
  apply(choice === "dark" || choice === "light" ? choice : media.matches ? "dark" : "light");
  media.addEventListener("change", function (e) {
    if (!saved()) apply(e.matches ? "dark" : "light");
  });
  // The theme-color tags may be parsed after this script; sync them once
  // the head is complete.
  document.addEventListener("DOMContentLoaded", function () {
    var c = saved();
    if (c === "dark" || c === "light") apply(c);
  });
})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      // globals.css makes anchor links scroll smoothly; this tells Next to
      // switch that off during route changes so a new page starts at the top
      // instantly instead of gliding there.
      data-scroll-behavior="smooth"
      // data-theme and colour-scheme are set by THEME_SCRIPT before React
      // hydrates, so the server markup legitimately differs here.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <SiteSchemas />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
