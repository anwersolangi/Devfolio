export const convertiX = {
  slug: "convertix",
  name: "ConvertiX",
  icon: "/convertix_icon.png",
  layout: 2,
  subtitle: "Unit & Currency Converter",
  description:
    "Convert 15+ unit categories and 170+ live currencies in 8 languages. Offline-capable. No account required.",
  fullDescription:
    "ConvertiX is the smartest unit and currency converter you'll ever use. Whether you're converting kilometers to miles, PKR to USD, or cooking measurements on the fly — ConvertiX does it instantly, beautifully, and even offline. With support for 15+ conversion categories, 170+ live currency exchange rates, and 8 languages including full RTL support for Arabic and Urdu, it's built for everyone everywhere.",
  features: [
    "15+ Conversion Categories",
    "170+ Live Currency Exchange Rates",
    "8 Languages with Full RTL Support",
    "Offline-Capable (Cached Rates)",
    "Favorites & Conversion History",
    "Dark / Light / System Theme",
    "No Account or Login Required",
    "Zero Data Collection",
  ],
  techStack: {
    frontend: ["React Native", "Expo", "Reanimated", "TypeScript"],
    backend: ["MMKV Local Storage", "No Backend", "Offline First"],
    features: [
      "Live Exchange Rate API",
      "RTL Layout Engine",
      "AdMob Integration",
    ],
  },
  perfectFor: [
    {
      title: "Travelers",
      description:
        "Convert currencies and units on the go — even without internet using cached exchange rates.",
    },
    {
      title: "Students & Engineers",
      description:
        "Quickly switch between pressure, energy, angle, frequency and more with high precision.",
    },
    {
      title: "Chefs & Home Cooks",
      description:
        "Instantly convert cooking measurements like cups, tablespoons, and grams.",
    },
    {
      title: "Global Users",
      description:
        "Full support for Arabic, Urdu, Hindi, Chinese, Bengali, Spanish and more — with RTL where needed.",
    },
  ],
  sections: [
    {
      title: "15+ Conversion Categories",
      content: "Everything you need in one place — no switching between apps.",
      items: [
        "Length, Weight, Temperature, Area",
        "Volume, Speed, Time, Data Storage",
        "Pressure, Energy, Angle, Frequency",
        "Fuel Economy & Cooking Measurements",
      ],
    },
    {
      title: "Live Currency Converter",
      content:
        "Real-time exchange rates for 170+ world currencies. Works offline using cached rates — so you're never stuck without a conversion.",
      items: [
        "USD, EUR, GBP, PKR, AED, SAR, CNY, INR and 160+ more",
        "Rates auto-refresh when online",
        "Falls back to cached rates offline",
        "Favorites for your most-used pairs",
      ],
    },
    {
      title: "Privacy First",
      content:
        "No accounts, no cloud sync, no analytics. Your conversion history and favorites are stored locally using fast on-device MMKV storage.",
      items: [
        "100% Offline: Works without internet",
        "No Data Collection: History stays on device",
        "No Accounts: Just open and use",
        "No Analytics: We don't track usage",
      ],
    },
    {
      title: "8 Languages with RTL Support",
      content:
        "ConvertiX speaks your language and lays out correctly for every script direction.",
      items: [
        "English, Español, اردو, سنڌي",
        "हिन्दी, العربية, 中文, বাংলা",
        "Full RTL layout for Arabic & Urdu",
        "Auto-detects device language on first launch",
      ],
    },
  ],
  faqs: [
    {
      question: "Does it work completely offline?",
      answer:
        "Yes. All unit conversions work offline natively. Currency rates are cached on your last sync, so you can still convert currencies without internet — just without live rates.",
    },
    {
      question: "How are currency rates updated?",
      answer:
        "When you're connected to the internet, ConvertiX fetches the latest exchange rates automatically. The rates are cached locally so the app always has something to show even offline.",
    },
    {
      question: "Is my conversion history stored on a server?",
      answer:
        "No. Everything is stored locally on your device using MMKV storage. No account, no sync, no server — your data never leaves your phone.",
    },
    {
      question: "Which languages are supported?",
      answer:
        "ConvertiX supports English, Spanish, Urdu, Sindhi, Hindi, Arabic, Chinese, and Bengali — with full RTL (right-to-left) layout for Arabic and Urdu.",
    },
    {
      question: "Is the source code available?",
      answer:
        "Yes! The full React Native + Expo + TypeScript source code is available on CodeCanyon, ready to rebrand and publish to the Play Store or App Store.",
    },
  ],
  links: {
    playstore:
      "https://play.google.com/store/apps/details?id=com.anwersolangi.convertix",
    codecanyon: "https://codecanyon.net/item/convertix",
    email: "mailto:me@anwersolangi.com",
    website: "https://apps.anwersolangi.com/convertix",
  },
  ctaTitle: "Convert Anything. In Any Language.",
  ctaDescription:
    "Download ConvertiX free today — or grab the full source code on CodeCanyon and ship your own converter app.",
};
