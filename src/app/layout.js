import { Hanken_Grotesk, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { AllSchemas } from "@/components/SEOComponents";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter", // ← matches your existing var name
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono", // ← matches your existing var name
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif", // ← new; only used by V1 accents
});

const baseUrl = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Anwer Solangi — React Native Developer building mobile apps that ship",
    template: "%s · Anwer Solangi",
  },
  description:
    "Senior React Native developer in Karachi. 50+ shipped mobile apps, 100K+ downloads, 5★ rating. Available for freelance & contract work. Browse the reels, see the projects, hire me.",
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
  authors: [{ name: "Anwer Solangi", url: "https://anwersolangi.com" }],
  creator: "Anwer Solangi",
  publisher: "Anwer Solangi",
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: baseUrl,
    title: "Anwer Solangi — React Native Developer",
    description:
      "Senior React Native developer in Karachi. Available for freelance & contract work.",
    siteName: "Anwer Solangi",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anwer Solangi",
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
    title: "Anwer Solangi — React Native Developer",
    description:
      "Senior React Native developer in Karachi. Available for freelance work.",
    creator: "@anwerxolangi",
    images: [`${baseUrl}/og-image.png`],
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <AllSchemas />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
