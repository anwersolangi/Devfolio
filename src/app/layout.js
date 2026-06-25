import { Hanken_Grotesk, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SiteSchemas } from "@/components/SEOComponents";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  TWITTER_HANDLE,
  absUrl,
} from "@/data/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Anwer Solangi — React Native Developer in Karachi, Pakistan",
    template: "%s · Anwer Solangi",
  },
  description:
    "Anwer Solangi is a senior React Native developer in Karachi, Pakistan — 50+ shipped mobile apps, 100K+ downloads. Available for freelance & contract app development. Hire me.",
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
  // NOTE: canonical is intentionally NOT set here. Setting it in the root layout
  // makes every page canonicalize to the homepage. Each page sets its own
  // self-referencing canonical via `alternates.canonical`.
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    title: "Anwer Solangi — React Native Developer in Karachi, Pakistan",
    description:
      "Senior React Native developer in Karachi, Pakistan. Available for freelance & contract mobile app development.",
    siteName: SITE_NAME,
    images: [
      {
        url: absUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Anwer Solangi — React Native Developer",
      },
    ],
    profile: {
      firstName: "Anwer",
      lastName: "Solangi",
      username: "anwersolangi",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Anwer Solangi — React Native Developer in Karachi, Pakistan",
    description:
      "Senior React Native developer in Karachi, Pakistan. Available for freelance work.",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [absUrl("/og-image.png")],
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
  themeColor: "#0d0c0b",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${hanken.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <SiteSchemas />
        {/* Scroll-reveal content must stay visible without JavaScript */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
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
