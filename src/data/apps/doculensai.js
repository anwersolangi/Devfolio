export const docuLensAI = {
  slug: "doculensai",
  name: "DocuLensAI",
  icon: "/doculensai_icon.png",
  layout: 1,
  category: "Mobile app",
  subtitle: "Private, Offline Document Scanner & PDF Maker with OCR",
  description:
    "A private, offline document scanner & PDF maker for Android — auto edge detection, on-device OCR, 10 pro filters, and one-tap PDF, image & text export.",
  fullDescription:
    "DocuLensAI turns your phone into a fast, private document scanner. Point the camera at any page and it automatically detects the edges, corrects the perspective, and captures a clean, high-quality scan. On-device AI reads the text with OCR so you can copy and search it, ten professional filters and manual brightness/contrast make every page look professionally scanned, and one tap exports to PDF, image, or plain text. Every scan, filter, and text-recognition step runs entirely on the device — no cloud, no uploads, no account. Built with React Native, Expo, VisionCamera + OpenCV edge detection, a TFLite corner model, and Google ML Kit OCR, with an offline-first SQLite store and AdMob + RevenueCat monetization.",
  features: [
    "Automatic Edge Detection & Auto-Capture",
    "On-Device OCR Text Recognition",
    "Multi-Page Document Scanning",
    "10 Professional Scan Filters",
    "Brightness, Contrast, Crop, Rotate & Flip",
    "One-Tap PDF, Image & Text Export",
    "Full-Text Search Across Every Scan",
    "Smart Tags — Invoices, Receipts, IDs & More",
    "Gallery Import",
    "100% Offline — No Account, No Cloud",
    "Ad-Supported Free Tier + Pro Upgrade",
    "Light & Dark Mode",
  ],
  techStack: {
    frontend: ["React Native", "Expo (SDK 56)", "Reanimated", "TypeScript"],
    backend: [
      "SQLite (expo-sqlite) + on-device file storage",
      "100% Offline — no server, no accounts",
      "Gorhom Bottom Sheet UI",
    ],
    features: [
      "VisionCamera + OpenCV edge detection",
      "TFLite document-corner model",
      "Google ML Kit on-device OCR",
      "AdMob + RevenueCat monetization",
    ],
  },
  perfectFor: [
    {
      title: "Freelancers & Small Businesses",
      description:
        "Scan receipts, invoices and contracts to PDF on the go, extract the text, and share or file them in seconds.",
    },
    {
      title: "Students & Researchers",
      description:
        "Digitize notes, textbook pages and handouts, then copy or search the text later thanks to on-device OCR.",
    },
    {
      title: "Privacy-First Users",
      description:
        "Everything stays on your device — no account, no cloud, no uploads. Your documents never leave your phone.",
    },
    {
      title: "Frequent Travelers",
      description:
        "Fully offline scanning, OCR and PDF export — capture documents on a flight or anywhere without a signal.",
    },
  ],
  sections: [
    {
      title: "Scan Any Document in Seconds",
      content:
        "A real-time camera engine finds the page and snaps it for you. VisionCamera drives a live OpenCV + TFLite edge detector that locks onto the document, corrects the perspective, and auto-captures when the frame is steady.",
      items: [
        "Automatic edge detection with hands-free auto-capture",
        "Perspective correction for flat, straight pages",
        "Multi-page documents — scan a whole stack at once",
        "Manual corner-crop editor for full control",
        "Import existing photos from your gallery",
      ],
    },
    {
      title: "Read & Extract Text with On-Device OCR",
      content:
        "Google ML Kit reads every page directly on the device, so you can copy the text out of a scan or find any document later just by the words inside it — with nothing sent to a server.",
      items: [
        "On-device OCR text recognition (offline)",
        "Copy extracted text or export it as a .txt file",
        "Recognized text is indexed for full-text search",
        "No images or text ever leave the phone",
      ],
    },
    {
      title: "A Full Editing Suite — 10 Filters & Adjustments",
      content:
        "Every page gets a proper edit pass. Ten one-tap filters plus manual brightness and contrast turn a phone photo into a crisp, professional-looking scan, and standard tools handle framing.",
      items: [
        "Filters: Original, Lighten, Grayscale, Enhance, Magic",
        "Filters: Vivid, Warm, Cool, Black & White, Ink",
        "Brightness & contrast sliders",
        "Crop, rotate and flip per page",
      ],
    },
    {
      title: "Export to PDF, Organize & Find Everything",
      content:
        "Turn scans into shareable files in one tap and keep them findable. Export as PDF, JPG, PNG or plain text, print directly, tag documents, and search across titles, tags and the recognized text.",
      items: [
        "One-tap PDF, image (JPG/PNG) and text export",
        "Print straight from the app",
        "Smart tags: invoices, receipts, IDs, contracts, notes",
        "Full-text search over all scans (offline SQLite)",
      ],
    },
    {
      title: "Private by Design & Ready to Monetize",
      content:
        "DocuLensAI is offline-first with a privacy-conscious business model. The free tier is ad-supported with a generous daily scan allowance; a Pro upgrade unlocks unlimited scans, every filter and export, and removes ads.",
      items: [
        "AdMob banner, interstitial and rewarded ads",
        "RevenueCat-powered Pro subscription & lifetime unlock",
        "Watch-an-ad unlocks for premium filters & exports",
        "No sign-up, no cloud sync, no personal data collected",
      ],
    },
  ],
  faqs: [
    {
      question: "Is DocuLensAI free?",
      answer:
        "Yes. DocuLensAI is free to download and use with a generous daily scan allowance (ad-supported). An optional Pro upgrade unlocks unlimited scans, every filter and export format, and removes ads — and free users can also watch a short ad to unlock premium filters or exports on demand.",
    },
    {
      question: "Does DocuLensAI work offline?",
      answer:
        "Completely. Scanning, edge detection, filters, OCR text recognition, search and PDF export all run on your device. An internet connection is only ever used for ads and purchases — never for your documents.",
    },
    {
      question: "Can I convert my scans to PDF?",
      answer:
        "Yes. Any document — single or multi-page — can be exported to PDF in one tap, and you can also export as a JPG/PNG image or plain text, or print directly from the app.",
    },
    {
      question: "How does the text recognition (OCR) work?",
      answer:
        "DocuLensAI uses Google ML Kit's on-device text recognition to read each page as you scan. The recognized text can be copied, exported, and is indexed so you can search your library by the words inside your documents — all without uploading anything.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes. There are no accounts and no cloud. Your scanned documents, extracted text and settings are stored only on your device (SQLite + local files). The only data that leaves the phone is handled by the AdMob and RevenueCat SDKs for ads and purchases.",
    },
    {
      question: "What is DocuLensAI built with?",
      answer:
        "React Native, Expo (SDK 56), Reanimated and TypeScript — with react-native-vision-camera + react-native-fast-opencv and a TFLite corner model for live edge detection, Google ML Kit for OCR, expo-sqlite for offline storage, and RevenueCat + AdMob for monetization.",
    },
  ],
  links: {
    // TODO: replace with the live Play Store URL once published.
    playstore:
      "https://play.google.com/store/apps/details?id=com.doculensai.app",
    email: "mailto:me@anwersolangi.com",
    website: "/apps/doculensai",
  },
  ctaTitle: "Scan. Read. Export.",
  ctaDescription:
    "Turn your phone into a private, offline document scanner — auto-crop, on-device OCR, and one-tap PDF export. Download DocuLensAI on Google Play.",
};
