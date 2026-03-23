export const metadata = {
  title: "Nearby - Location-Based Social App by Anwer Solangi",
  description:
    "Find and chat with people around you using GPS technology. React Native app with Firebase backend, real-time chat, and image sharing. 10,000+ downloads on Play Store. Created by Anwer Solangi, React Native developer from Karachi, Pakistan.",
  keywords: [
    "Nearby app",
    "location-based social app",
    "GPS chat app",
    "React Native",
    "Firebase app",
    "Anwer Solangi",
    "social discovery app",
    "nearby people finder",
    "real-time chat",
    "CodeCanyon",
    "Karachi developer",
    "Pakistan developer",
    "mobile app developer",
  ],
  openGraph: {
    title: "Nearby - Location-Based Social Discovery App",
    description:
      "Find and chat with people around you using GPS technology. 10,000+ downloads. Built with React Native and Firebase.",
    type: "website",
    url: "https://anwersolangi.com/projects/nearby",
    images: [
      {
        url: "https://anwersolangi.com/projects/nearby-og.png",
        width: 1200,
        height: 630,
        alt: "Nearby App - Location-Based Social Discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nearby - Location-Based Social App",
    description:
      "Find and chat with people around you. 10,000+ downloads on Play Store.",
    images: ["https://anwersolangi.com/projects/nearby-og.png"],
  },
  alternates: {
    canonical: "https://anwersolangi.com/projects/nearby",
  },
};

export default function NearbyLayout({ children }) {
  return <>{children}</>;
}
