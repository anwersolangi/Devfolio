export const metadata = {
  title: "ReactTube - YouTube Clone UI in React Native by Anwer Solangi",
  description:
    "Open source YouTube clone frontend built with React Native. Features video player, comments, user profiles, explore screen, and more. Free to use and customize. Created by Anwer Solangi, React Native developer from Karachi, Pakistan.",
  keywords: [
    "ReactTube",
    "YouTube clone",
    "React Native",
    "open source",
    "video app UI",
    "Anwer Solangi",
    "mobile app",
    "video platform",
    "GitHub",
    "Karachi developer",
    "Pakistan developer",
    "React Native components",
    "video streaming UI",
  ],
  openGraph: {
    title: "ReactTube - YouTube Clone UI in React Native",
    description:
      "Open source YouTube frontend clone with video player, comments, profiles, and more. Built with React Native.",
    type: "website",
    url: "https://anwersolangi.com/projects/reacttube",
    images: [
      {
        url: "https://raw.githubusercontent.com/anwersolangi/ReactTube-Youtube-clone-in-React-Native/master/screenshots/Cover_1.png",
        width: 1200,
        height: 630,
        alt: "ReactTube - YouTube Clone in React Native",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReactTube - Open Source YouTube Clone",
    description:
      "Complete YouTube UI clone built with React Native. Free and open source.",
    images: [
      "https://raw.githubusercontent.com/anwersolangi/ReactTube-Youtube-clone-in-React-Native/master/screenshots/Cover_1.png",
    ],
  },
  alternates: {
    canonical: "https://anwersolangi.com/projects/reacttube",
  },
};

export default function ReactTubeLayout({ children }) {
  return <>{children}</>;
}
