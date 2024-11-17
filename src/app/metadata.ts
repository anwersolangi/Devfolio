import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl || "https://anwersolangi.com"),
  title: {
    default: "Anwer Solangi | Mobile App Developer - React Native & iOS",
    template: "%s | Anwer Solangi",
  },
  description:
    "Mobile app developer specializing in React Native and iOS development. Creating seamless mobile experiences with beautiful design and stellar performance.",
  keywords: [
    "Anwer Solangi",
    "Mobile App Developer",
    "React Native Developer",
    "iOS Developer",
    "Swift Developer",
    "Mobile Development",
    "App Development",
    "React Native",
    "Swift",
    "iOS Development",
    "Mobile Apps",
  ],
  authors: [{ name: "Anwer Solangi" }],
  creator: "Anwer Solangi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Anwer Solangi | Mobile App Developer - React Native & iOS",
    description:
      "Mobile app developer specializing in React Native and iOS development. Creating seamless mobile experiences with beautiful design and stellar performance.",
    siteName: "Anwer Solangi",
    images: [
      {
        url: `${baseUrl}/openGraph.png`,
        width: 1200,
        height: 544,
        alt: "Anwer Solangi - Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anwer Solangi | Mobile App Developer",
    description:
      "Mobile app developer specializing in React Native and iOS development.",
    creator: "@anwerxolangi",
    images: [`${baseUrl}/openGraph.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};
