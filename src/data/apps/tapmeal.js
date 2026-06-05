// data/apps/tapmeal.js

export const tapMeal = {
  slug: "tapmeal",
  name: "TapMeal",
  icon: "/tapmeal_icon.png",
  layout: 2,
  subtitle: "QR Digital Menu & Restaurant Manager",
  description:
    "Customers scan a QR code at their table and order from their browser. You manage orders, menu, kitchen, and staff — live, from your phone.",
  fullDescription:
    "TapMeal is a complete restaurant management suite comprising three production-ready apps sharing a single Firebase backend. Restaurant owners manage live orders, menus, staff, and analytics from a React Native admin app. Customers scan a QR code at their table — the menu opens in their browser with no app download and no account required. A Next.js admin web panel adds a desktop dashboard with Kitchen Display Mode, printable QR sheets, and CSV exports.",
  features: [
    "Live Order Board with FCM Push Notifications",
    "QR Code Generation & One-Tap Print Sheet",
    "Kitchen Display Mode (KDS) for Wall Tablets",
    "Customer Web Menu — Zero Install, Zero Login",
    "Role-Based Staff Access (Manager, Waiter, Kitchen)",
    "Revenue Analytics & Busiest-Hours Heatmap",
    "Scheduled Promotions with Auto-Activate",
    "Operating Hours with Automatic Closed State",
    "Multi-Tenant — Unlimited Restaurants per Deployment",
    "In-App Subscription (Ad-Free via RevenueCat)",
  ],
  techStack: {
    frontend: [
      "React Native 0.81.5",
      "Expo SDK 54",
      "Expo Router v6",
      "Reanimated v4",
      "Gorhom Bottom Sheet v5",
      "MMKV v4",
    ],
    backend: [
      "Firebase Firestore",
      "Firebase Auth",
      "Firebase Cloud Messaging",
      "Firebase Admin SDK",
      "Next.js 16.2 (Admin Panel)",
      "Next.js 16.2 (Customer Menu)",
    ],
    features: [
      "ImageKit CDN",
      "RevenueCat Subscriptions",
      "Google AdMob",
      "react-native-qrcode-svg",
      "TypeScript Strict",
    ],
  },
  perfectFor: [
    {
      title: "Restaurant Owners",
      description:
        "Replace paper tickets and manual ordering with a live digital system managed from your phone.",
    },
    {
      title: "Cafés & Food Courts",
      description:
        "Give every table a QR code and let customers order at their own pace without waiting for a waiter.",
    },
    {
      title: "Agencies & Freelancers",
      description:
        "Deploy the full source code for restaurant clients. The multi-tenant architecture serves unlimited venues from one Firebase project.",
    },
    {
      title: "SaaS Builders",
      description:
        "Buy the Extended License on CodeCanyon and launch your own restaurant SaaS product on top of the codebase.",
    },
  ],
  sections: [
    {
      title: "Three Apps. One Purchase.",
      content:
        "TapMeal ships as a complete suite — not a single app. One Firebase project powers all three simultaneously.",
      items: [
        "Admin Mobile App — React Native, Expo SDK 54, live on Google Play",
        "Admin Web Panel — Next.js 16.2 desktop dashboard with KDS and CSV export",
        "Customer Web Menu — Next.js 16.2, zero install, works in any browser",
      ],
    },
    {
      title: "Real-Time Ordering Flow",
      content:
        "From QR scan to kitchen notification in under five seconds — entirely automated.",
      items: [
        "Customer scans QR → menu loads instantly in their browser",
        "Customer places order → FCM push fires on owner's phone immediately",
        "Owner accepts → kitchen sees it on the KDS display",
        "Status updates flow back to the customer's browser live",
      ],
    },
    {
      title: "Source Code on CodeCanyon",
      content:
        "The full TypeScript source code — all three apps, Firestore security rules, .env templates, EAS build config, and 15-section documentation — is available on CodeCanyon.",
      items: [
        "Regular License: single restaurant or single client",
        "Extended License: multi-client agency, SaaS, or white-label",
        "100% TypeScript strict mode across all three apps",
        "Multi-tenant Firestore architecture — isolated per restaurant",
      ],
      footer: "Search 'TapMeal' on CodeCanyon to find the item.",
    },
  ],
  faqs: [
    {
      question: "Do customers need to download an app?",
      answer:
        "No. The customer-facing menu is a Next.js web app. Customers scan the QR code and the menu opens in Safari, Chrome, or any browser — no download, no account, no login.",
    },
    {
      question: "How does the QR code generation work?",
      answer:
        "Each table gets a unique QR code generated offline inside the admin app using react-native-qrcode-svg. No internet is required, no third-party QR service, and no subscription. You can print a full A4 sheet for all your tables in one tap.",
    },
    {
      question: "Does it work without an internet connection?",
      answer:
        "The QR code generation works fully offline. The rest of the system (live orders, menu updates, analytics) requires an internet connection because it runs on Firebase Firestore in real-time.",
    },
    {
      question: "Can I manage multiple restaurants?",
      answer:
        "Yes. TapMeal supports multiple restaurant profiles from one account. Each restaurant has its own isolated Firestore namespace — menu, tables, staff, and orders are completely separate.",
    },
    {
      question: "What is the CodeCanyon Extended License for?",
      answer:
        "The Extended License allows you to deploy TapMeal for multiple clients, run it as a SaaS product and charge restaurants a monthly fee, or white-label and resell it under your own brand.",
    },
  ],
  links: {
    playstore:
      "https://play.google.com/store/apps/details?id=com.anwersolangi.tapmeal",
    website: "https://tapmeal.anwersolangi.com",
    codecanyon: "https://codecanyon.net",
    email: "mailto:me@anwersolangi.com",
  },

  // External URL — AppCard will open this directly instead of the internal /apps/tapmeal page
  externalUrl: "https://tapmeal.anwersolangi.com",

  ctaTitle: "Run Your Restaurant Digitally",
  ctaDescription:
    "Download TapMeal on Google Play or grab the full source code on CodeCanyon to deploy it for your restaurant or your clients.",
};
