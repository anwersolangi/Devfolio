export const metadata = {
  title: "YouTube Fullscreen Focus - Chrome Extension by Anwer Solangi",
  description:
    "Free Chrome extension for protected YouTube viewing. Prevents accidental keystrokes in fullscreen mode. Perfect for parents and families. Works on YouTube and YouTube Kids. Created by Anwer Solangi, React Native developer from Karachi.",
  keywords: [
    "YouTube Fullscreen Focus",
    "Chrome Extension",
    "YouTube extension",
    "YouTube Kids",
    "Anwer Solangi",
    "browser extension",
    "YouTube protection",
    "fullscreen protection",
    "parental controls YouTube",
    "YouTube keyboard blocker",
    "Karachi developer",
    "Pakistan developer",
  ],
  openGraph: {
    title: "YouTube Fullscreen Focus - Chrome Extension",
    description:
      "Protect your YouTube viewing experience from accidental keystrokes. Free Chrome extension by Anwer Solangi.",
    type: "website",
    url: "https://anwersolangi.com/extensions/youtube-fullscreen-focus",
    images: [
      {
        url: "https://anwersolangi.com/extensions/youtube-fullscreen-focus-og.png",
        width: 1200,
        height: 630,
        alt: "YouTube Fullscreen Focus Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Fullscreen Focus Extension",
    description:
      "Free Chrome extension for protected YouTube viewing in fullscreen mode.",
    images: [
      "https://anwersolangi.com/extensions/youtube-fullscreen-focus-og.png",
    ],
  },
  alternates: {
    canonical: "https://anwersolangi.com/extensions/youtube-fullscreen-focus",
  },
};

export default function ExtensionLayout({ children }) {
  return <>{children}</>;
}
