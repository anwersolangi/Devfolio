export const hueTrace = {
  slug: "huetrace",
  name: "HueTrace",
  icon: "/huetrace_icon.png",
  layout: 1,
  category: "Mobile game",
  subtitle: "Color Memory Game",
  description:
    "See a color, hold it in your head, then recreate it on the wheel. A color memory game scored the way human eyes see, with a new five-color Daily Challenge every day.",
  fullDescription:
    "HueTrace is a quiet, focused game about how well you actually see color. A color flashes on screen, disappears, and you rebuild it from memory on a hue ring and saturation square. Every guess is measured with CIEDE2000 — the perceptual color-difference formula used in print and design — so a guess that looks close scores close. Four modes cover different skills: Classic for single colors with three tries, Sequence for runs of three to seven colors recalled in order, Blitz for sixty seconds against the clock, and a Daily Challenge where everyone gets the same five colors on the same date, generated from the date itself with no server involved. Rounds step up through five difficulty tiers, close matches chain into combos, and a colorblind-friendly mode keeps every color distinguishable with red-green color blindness. Built with React Native, Expo (SDK 57), Skia-drawn color wheels and result rings, Reanimated 4, and a pure-TypeScript game engine covered by a 200-plus-case test suite.",
  features: [
    "Four Modes: Classic, Sequence, Blitz & Daily Challenge",
    "Perceptual Scoring with CIEDE2000",
    "Same Five Daily Colors for Everyone",
    "Five Difficulty Tiers, Warm Up to Master",
    "Combos, Streaks & Streak Freezes",
    "Shareable Daily Result Card",
    "20 Achievements to Unlock",
    "30-Day Score History & Personal Bests",
    "Colorblind-Friendly Mode",
    "Optional Daily Reminder",
    "Light & Dark Mode with Six Theme Packs",
    "No Account, Fully Offline",
    "Ads Only When You Ask, One-Time Unlock",
  ],
  techStack: {
    frontend: [
      "React Native",
      "Expo (SDK 57)",
      "React Native Skia",
      "Reanimated 4",
      "TypeScript",
      "Expo Router",
    ],
    backend: [
      "MMKV on-device storage",
      "100% Offline — no server, no accounts",
      "Local notifications for reminders",
      "RevenueCat for the one-time unlock",
      "Google AdMob rewarded ads (opt-in only)",
    ],
    features: [
      "Pure-TypeScript game engine and CIEDE2000 color math",
      "Seeded daily generation — identical on every device",
      "Dichromacy simulation for colorblind-safe palettes",
      "200+ case test suite on the Node test runner",
    ],
  },
  perfectFor: [
    {
      title: "Designers & Artists",
      description:
        "Train the color memory you use every day. The scoring follows human perception, so it rewards the matches a trained eye would actually call close.",
    },
    {
      title: "Daily Puzzle Fans",
      description:
        "One five-color challenge a day, the same for everyone. Keep a streak going and share a result card to compare with friends.",
    },
    {
      title: "Players Who Like a Clock",
      description:
        "Blitz gives you sixty seconds: close matches win time back, misses cost you some, and back-to-back hits build a combo.",
    },
    {
      title: "Colorblind Players",
      description:
        "A colorblind-friendly mode keeps every color in a run distinguishable with red-green color blindness. The Daily Challenge always works this way.",
    },
  ],
  sections: [
    {
      title: "See It. Hold It. Recreate It.",
      content:
        "Each round has three phases: a target color fills the screen for a moment, then disappears, and you rebuild it from memory on a hue ring and saturation-brightness square. The result ring shows the target and your guess side by side, with a score from 0 to 100.",
      items: [
        "Full-screen target, shown for a moment only",
        "Hue ring plus saturation and brightness square",
        "Target and guess compared side by side",
        "Scored Perfect Match, Very Close, Close, Off or Way Off",
        "Hue-family hints during the warm-up rounds",
      ],
    },
    {
      title: "Scored the Way Your Eyes See",
      content:
        "Both colors are converted to CIELAB and compared with CIEDE2000, the color-difference formula used in print and design. It follows perception rather than raw numbers, so two colors that look close score close even when their RGB values are far apart.",
      items: [
        "CIEDE2000 perceptual color difference",
        "Scores that track what the eye notices",
        "Hex values of target and guess, if you want them",
        "Stricter pass marks as rounds get harder",
      ],
    },
    {
      title: "Four Ways to Play",
      content:
        "Classic, Sequence and Blitz are always open; the Daily Challenge unlocks a new set of five colors at midnight.",
      items: [
        "Classic — one color at a time, three tries, as long as you last",
        "Sequence — three to seven colors in a row, recalled in order",
        "Blitz — sixty seconds; close matches add time, misses cost it",
        "Daily Challenge — the same five colors for everyone on the same date",
        "Five difficulty tiers from Warm Up to Master",
      ],
    },
    {
      title: "A Daily Habit",
      content:
        "One Daily Challenge a day keeps your streak alive, and a streak freeze covers a missed day. Your result becomes a share card, and an optional reminder can nudge you when the next set is out.",
      items: [
        "Streaks with streak freezes",
        "Shareable result card with a per-color breakdown",
        "Optional daily reminder at a time you choose",
        "30-day score history and personal bests",
        "20 achievements to unlock",
      ],
    },
  ],
  faqs: [
    {
      question: "Is HueTrace free?",
      answer:
        "Yes. HueTrace is free to download and play, with every game mode available to everyone. Ads appear only if you choose to watch one for a bonus Daily Challenge retry. An optional one-time purchase — not a subscription — removes ads and unlocks every theme pack. Themes are cosmetic, so paying never changes how the game plays.",
    },
    {
      question: "How does the Daily Challenge give everyone the same colors?",
      answer:
        "The five colors are generated from the calendar date itself, using a seeded generator. Every device produces the same five on the same date, so no server is involved and the Daily works offline.",
    },
    {
      question: "How is my guess scored?",
      answer:
        "Both colors are converted to CIELAB and compared with CIEDE2000, a perceptual color-difference formula. A difference too small to notice scores near 100, and the score falls away as the difference becomes obvious.",
    },
    {
      question: "Can I play if I'm colorblind?",
      answer:
        "Yes. Turn on colorblind-friendly colors in Settings and every color in a run is chosen to stay distinguishable with red-green color blindness. The Daily Challenge always uses this mode, so it is fair for everyone.",
    },
    {
      question: "Does HueTrace collect my data?",
      answer:
        "No. There is no account and no analytics, and your scores, streaks and settings stay on your device. The only outside services are Google AdMob, for the optional rewarded ads, and RevenueCat, to verify the one-time purchase — the privacy policy lists exactly what they receive.",
    },
    {
      question: "What is HueTrace built with?",
      answer:
        "React Native, Expo (SDK 57), React Native Skia for the color wheel and result rings, Reanimated 4 and TypeScript — with a pure-TypeScript game engine and color-math library covered by an automated test suite.",
    },
  ],
  // Not on the Play Store yet — the listing URL below 404s until it is.
  // Flip this to true (or delete the line) on launch day and the download
  // buttons come back on their own.
  released: false,
  links: {
    playstore:
      "https://play.google.com/store/apps/details?id=com.anwersolangi.huetrace",
    email: "mailto:me@anwersolangi.com",
    website: "/apps/huetrace",
  },
  ctaTitle: "How well do you remember color?",
  ctaDescription:
    "See a color, hold it, and find it again on the wheel — with a new five-color Daily Challenge every day.",
};
