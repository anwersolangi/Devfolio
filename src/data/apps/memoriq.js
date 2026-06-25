export const memorIQ = {
  slug: "memoriq",
  name: "MemorIQ",
  icon: "/memoriq_icon.png",
  layout: 1,
  category: "Mobile game",
  subtitle: "Memory Match Brain-Training Game",
  description:
    "A polished memory match game with 9 themes, animated backgrounds, lives, and timers. Offline-first. Fully rebrandable.",
  fullDescription:
    "MemorIQ is a beautifully crafted memory match brain-training game built with React Native. Flip cards, find pairs, and beat the clock across multiple grid sizes and difficulty levels — all wrapped in 9 stunning themes and animated backgrounds. It ships offline-first with a lives system, per-round timers, sound, haptics, and built-in monetization (AdMob + in-app purchases). Sold on CodeCanyon as a single-file-configurable script, the entire game can be rebranded and shipped to the stores in minutes.",
  features: [
    "Classic Memory Match Gameplay",
    "Multiple Grid Sizes & Difficulties",
    "Configurable Per-Round Timer",
    "Lives System with Timed Refills",
    "9 Themes (6 Free + 3 Premium)",
    "Animated Game Backgrounds",
    "Sound Effects & Haptics",
    "Offline-First (MMKV Storage)",
    "AdMob + In-App Purchases Built-In",
    "Rebrandable from One Config File",
  ],
  techStack: {
    frontend: ["React Native", "Expo", "Reanimated 4", "TypeScript"],
    backend: [
      "Firebase (Anonymous Auth + Firestore)",
      "MMKV Local Storage",
      "Offline First",
    ],
    features: [
      "AdMob Banner Ads",
      "RevenueCat In-App Purchases",
      "FCM Push + Notifee",
      "Lottie Animations",
    ],
  },
  perfectFor: [
    {
      title: "Puzzle Lovers",
      description:
        "Train focus and short-term memory with quick, replayable rounds you can pick up any time.",
    },
    {
      title: "Families & Kids",
      description:
        "Simple, friendly card-matching that's easy to learn and fun for all ages.",
    },
    {
      title: "Commuters",
      description:
        "Fully offline gameplay — play on the train, on a flight, or anywhere without a signal.",
    },
    {
      title: "Developers & Founders",
      description:
        "Grab the source on CodeCanyon, rebrand from one config file, and launch your own memory game.",
    },
  ],
  sections: [
    {
      title: "Gameplay Built to Be Replayed",
      content:
        "MemorIQ keeps every round fresh and quick. Pick your grid, set the timer, and race to clear the board before time runs out.",
      items: [
        "Multiple grid sizes (2×2, 4×4, 6×6)",
        "Easy / Medium / Hard difficulty",
        "Adjustable per-round timer (30–180s)",
        "Lives system with automatic timed refills",
        "Score and best-score tracking",
        "Satisfying sound effects and haptics",
      ],
    },
    {
      title: "9 Themes & Animated Backgrounds",
      content:
        "A carousel theme picker lets players preview and switch looks instantly, with smooth Reanimated transitions and animated game backgrounds.",
      items: [
        "Free: Classic Light, Modern Dark, Neon Arcade",
        "Free: Sunset Glow, Deep Ocean, Forest Canopy",
        "Premium: Aurora, Rose Gold, Galaxy",
        "Animated, theme-aware backgrounds",
      ],
    },
    {
      title: "Monetization, Ready Out of the Box",
      content:
        "Earn from day one with a privacy-conscious setup. Free players see a single banner ad; premium unlocks remove ads and open the premium themes.",
      items: [
        "AdMob banner ads (toggleable)",
        "RevenueCat-powered in-app purchases",
        "Premium entitlement unlocks themes + ad-free",
        "Anonymous, offline-first sync — no accounts",
      ],
    },
    {
      title: "Rebrandable in Minutes",
      content:
        "MemorIQ ships as a configurable CodeCanyon script. A single app-config file controls branding, the lives system, timers, gameplay defaults, and ads — no hunting through the codebase.",
      items: [
        "One central config file (appConfig.ts)",
        "Swap name, tagline, splash, and accent colors",
        "Tune lives, refill timing, and round length",
        "Clearly separated keys for AdMob, RevenueCat & themes",
      ],
    },
  ],
  faqs: [
    {
      question: "Does MemorIQ work offline?",
      answer:
        "Yes. The game is offline-first — all gameplay, scores, and settings are stored locally on your device with MMKV. The minimal cloud sync simply queues while offline and flushes when you're back online.",
    },
    {
      question: "What data does the app collect?",
      answer:
        "Very little. MemorIQ uses anonymous sign-in (no email or name) and writes only three fields to the cloud — your push token, when you last played, and your remaining lives — to power notifications. Everything else stays on your device.",
    },
    {
      question: "How do premium themes work?",
      answer:
        "Premium themes (Aurora, Rose Gold, Galaxy) and an ad-free experience unlock through a one-time in-app purchase managed by RevenueCat. Purchases restore across reinstalls on the same store account.",
    },
    {
      question: "Is the source code available?",
      answer:
        "Yes! The full React Native + Expo + TypeScript source is available on CodeCanyon, ready to rebrand from a single config file and publish to the Play Store or App Store.",
    },
    {
      question: "What's it built with?",
      answer:
        "React Native, Expo, Reanimated 4, and TypeScript, with Firebase (anonymous auth + Firestore), MMKV storage, AdMob, RevenueCat, and Notifee for notifications.",
    },
  ],
  links: {
    // TODO: replace with the real store / CodeCanyon URLs once published.
    playstore:
      "https://play.google.com/store/apps/details?id=com.anwersolangi.memoriq",
    codecanyon: "https://codecanyon.net/item/memoriq",
    email: "mailto:me@anwersolangi.com",
    website: "/apps/memoriq",
  },
  ctaTitle: "Match. Memorize. Master.",
  ctaDescription:
    "Download MemorIQ free on the Play Store — or grab the full React Native source on CodeCanyon and launch your own branded memory game.",
};
