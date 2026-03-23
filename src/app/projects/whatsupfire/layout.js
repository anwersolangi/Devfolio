export const metadata = {
  title: "WhatsupFire - React Native Messenger by Anwer Solangi",
  description:
    "WhatsApp-like messaging app with real-time chat, image sharing, and 24-hour stories. Built with React Native and Firebase. Complete source code available on CodeCanyon. Created by Anwer Solangi, React Native developer from Karachi, Pakistan.",
  keywords: [
    "WhatsupFire",
    "React Native messenger",
    "WhatsApp clone",
    "messaging app",
    "Firebase chat",
    "Anwer Solangi",
    "real-time chat",
    "stories feature",
    "phone authentication",
    "CodeCanyon",
    "Karachi developer",
    "Pakistan developer",
    "chat app source code",
  ],
  openGraph: {
    title: "WhatsupFire - Real-time Messaging Application",
    description:
      "WhatsApp-like messenger with chat, stories, and image sharing. Built with React Native and Firebase.",
    type: "website",
    url: "https://anwersolangi.com/projects/whatsupfire",
    images: [
      {
        url: "https://anwersolangi.com/projects/whatsupfire-og.png",
        width: 1200,
        height: 630,
        alt: "WhatsupFire - React Native Messenger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsupFire - React Native Messaging App",
    description:
      "Complete messaging app with chat, stories, and Firebase backend.",
    images: ["https://anwersolangi.com/projects/whatsupfire-og.png"],
  },
  alternates: {
    canonical: "https://anwersolangi.com/projects/whatsupfire",
  },
};

export default function WhatsupFireLayout({ children }) {
  return <>{children}</>;
}
