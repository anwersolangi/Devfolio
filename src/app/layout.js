import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AllSchemas } from "@/components/SEOComponents";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com";

export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Anwer Solangi | React Native Developer in Karachi, Pakistan",
    template: "%s | Anwer Solangi - Mobile App Developer",
  },

  description:
    "Anwer Solangi is a professional React Native and iOS developer based in Karachi, Sindh, Pakistan. Specializing in cross-platform mobile app development, browser extensions, and wearable apps. Available for freelance projects worldwide.",

  keywords: [
    "Anwer Solangi",
    "Anwer Ali Solangi",
    "Anwer Solangi developer",
    "Anwer Solangi freelancer",
    "React Native developer Karachi",
    "React Native developer Pakistan",
    "React Native developer Sindh",
    "iOS developer Karachi",
    "Mobile app developer Karachi",
    "freelance developer Karachi",
    "app developer Pakistan",
    "software developer Karachi",
    "React Native",
    "iOS Development",
    "Swift Developer",
    "Mobile App Development",
    "Cross-Platform Development",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Native App Development",
    "Mobile App Development Services",
    "React Native Consultant",
    "iOS App Development Services",
    "Browser Extension Development",
    "Freelance Mobile Developer",
    "App Development Karachi",
  ],

  authors: [{ name: "Anwer Solangi", url: "https://anwersolangi.com" }],
  creator: "Anwer Solangi",
  publisher: "Anwer Solangi",

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: baseUrl,
    title: "Anwer Solangi | React Native Developer in Karachi, Pakistan",
    description:
      "Professional React Native and iOS developer based in Karachi, Pakistan. Building innovative mobile applications and cross-platform solutions for clients worldwide.",
    siteName: "Anwer Solangi Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Anwer Solangi - React Native Developer in Karachi",
        type: "image/png",
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
    title: "Anwer Solangi | React Native Developer",
    description:
      "React Native & iOS developer in Karachi, Pakistan. Building mobile apps with beautiful design and stellar performance.",
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
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <AllSchemas />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
