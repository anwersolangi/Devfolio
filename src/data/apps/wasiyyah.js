export const wasiyyah = {
  slug: "wasiyyah",
  name: "Wasiyyah",
  icon: "/wasiyyah_icon.png",
  layout: 1,
  category: "Mobile app",
  subtitle: "Islamic Will Builder & Faraid Inheritance Calculator",
  description:
    "Write a Shariah-compliant Islamic will and calculate exact faraid inheritance shares across 8 madhabs — fully offline, in 10 languages, with PDF export.",
  fullDescription:
    "Wasiyyah helps Muslims write a Shariah-compliant will and work out exactly who inherits what under the rules of faraid set out in the Qur'an and classical fiqh. A guided four-step builder covers the testator, the heirs, bequests within the one-third limit, and a formal PDF export. The faraid engine computes every share as an exact fraction — handling hajb (blocking), awl, radd, and the classical special cases including Umariyyatain, Musharaka, Akdariyya and Kalalah — and follows the position of the school you select across Hanafi, Maliki, Shafi'i, Hanbali, Ja'fari, Zaydi and Ibadi. Everything runs on the device: there is no account, no server, and the will is stored encrypted behind the platform keystore. Built with React Native, Expo (SDK 57), a 2,000-line pure-TypeScript inheritance engine covered by a 34-case test suite, encrypted MMKV storage, and full right-to-left support across 10 languages.",
  features: [
    "Guided 4-Step Islamic Will Builder",
    "Faraid Calculator with Exact Fractions",
    "8 Schools of Thought (Madhabs)",
    "Hajb — Blocked Heirs Shown with Reasons",
    "Awl & Radd Handled Automatically",
    "Classical Special Cases (Akdariyya, Musharaka, Umariyyatain)",
    "Bequests with the ⅓ Limit Enforced",
    "Formal Will PDF & Inheritance Statement Export",
    "10 Languages with Full RTL Support",
    "100% Offline — No Account, No Cloud",
    "Encrypted On-Device Storage",
    "Light & Dark Mode",
  ],
  techStack: {
    frontend: [
      "React Native",
      "Expo (SDK 57)",
      "Reanimated 4",
      "TypeScript",
      "Expo Router",
    ],
    backend: [
      "Encrypted MMKV + Expo SecureStore keystore",
      "100% Offline — no server, no accounts",
      "i18next — 10 locales with RTL",
    ],
    features: [
      "2,000-line pure-TypeScript faraid engine",
      "34-case test suite on the Node test runner",
      "expo-print PDF generation",
      "AdMob + RevenueCat monetization with UMP consent",
    ],
  },
  perfectFor: [
    {
      title: "Muslims Planning Their Estate",
      description:
        "Write a will that follows the Qur'anic shares, with each step showing what is still missing before you can export a finished document.",
    },
    {
      title: "Students of Fiqh",
      description:
        "See exactly how hajb, awl and radd play out across eight schools — every result shows the fraction, the reasoning, and which heirs were blocked and why.",
    },
    {
      title: "Imams & Legal Practitioners",
      description:
        "Produce a detailed inheritance statement showing every asset, share and formula — ready to print or take to a court for registration.",
    },
    {
      title: "Privacy-First Users",
      description:
        "Family details, estate values and heir names never leave the device. No account, no cloud, no uploads — the app works in airplane mode.",
    },
  ],
  sections: [
    {
      title: "Write a Shariah-Compliant Will",
      content:
        "A guided four-step builder takes you from your own details, to your heirs, to any special bequests, to a finished document. Nothing is left blank by accident — each step shows what is still missing before an export is allowed.",
      items: [
        "Testator details: name, date and place of birth, address, identification",
        "Named heirs with relationship, gender and living status",
        "Bequests to people or causes, with the ⅓ limit tracked live",
        "Executor, witnesses and special instructions",
        "Progress tracking across every step",
      ],
    },
    {
      title: "Calculate Faraid Shares Exactly",
      content:
        "Enter the surviving relatives and Wasiyyah computes each share as an exact fraction, not a rounded percentage. The engine handles the cases that trip people up, and explains every result rather than just printing a number.",
      items: [
        "Hajb — who is blocked from inheriting, and by whom",
        "Awl — proportional reduction when fixed shares exceed the estate",
        "Radd — return of the residue when they fall short",
        "Umariyyatain, Musharaka, Akdariyya and Kalalah",
        "The grandfather with siblings, and dhawul arham",
      ],
    },
    {
      title: "Eight Schools of Thought",
      content:
        "Choose your madhab and the rules change with it. Where the schools genuinely differ — whether the grandfather blocks siblings, whether radd applies, how a spouse is treated — Wasiyyah follows the position of the school you selected and flags cases scholars dispute.",
      items: [
        "Sunni: Hanafi, Maliki, Shafi'i, Hanbali",
        "Shia: Ja'fari, with the full three-class per-stirpes algorithm",
        "Also Zaydi and Ibadi",
        "Scholar warnings surfaced on disputed cases",
        "Verified against Al-Mughni, Al-Hidaya and Minhaj al-Talibin",
      ],
    },
    {
      title: "Export a Real Document",
      content:
        "Produce a formal will as a PDF with legal declarations, executor details and signature blocks — or a detailed inheritance statement showing every asset, every share and the working behind each calculation.",
      items: [
        "Formal last will & testament with signature blocks",
        "Inheritance statement with fractions, percentages and amounts",
        "Court matter details: suit number, court, applicant",
        "Choose the PDF's language independently of the app's",
        "Ready to print, share, or take to a scholar for review",
      ],
    },
    {
      title: "Ten Languages, Private by Design",
      content:
        "Wasiyyah speaks the languages its users actually pray in, with proper right-to-left layout — and it keeps their family's details entirely on the device.",
      items: [
        "English, Arabic, Urdu, Persian, Bengali, Hindi",
        "Turkish, Malay, Indonesian and French",
        "Full RTL layout for Arabic, Urdu and Persian",
        "Encrypted local storage behind the platform keystore",
        "Delete every trace of your data from Settings, permanently",
      ],
    },
  ],
  faqs: [
    {
      question: "Is Wasiyyah free?",
      answer:
        "Yes. Wasiyyah is free to download and use, with a daily allowance of PDF exports (ad-supported). An optional Premium subscription removes the daily cap and the ads. Every calculation feature — the full faraid engine, all eight madhabs, all ten languages — is available on the free tier.",
    },
    {
      question: "Does Wasiyyah work offline?",
      answer:
        "Completely. The will builder, the faraid calculator and PDF export all work with the device in airplane mode. An internet connection is only ever used for ads and subscription validation — never for your will.",
    },
    {
      question: "Which schools of thought does it support?",
      answer:
        "Eight: Hanafi, Maliki, Shafi'i, Hanbali, Ja'fari, Zaydi and Ibadi, plus an unspecified default that follows Sunni consensus. The rules genuinely change with your selection — for example, the paternal grandfather blocks siblings under Hanafi but not under Maliki, Shafi'i or Hanbali, and the Akdariyya case applies only in the latter three.",
    },
    {
      question: "Is my family's data private?",
      answer:
        "Yes. There are no accounts and no cloud. Your will, heirs, estate values and identification details are stored encrypted on your device, behind a key held in the iOS Keychain or Android Keystore. The only data leaving the phone belongs to the AdMob and RevenueCat SDKs, for ads and purchases. You can permanently erase everything from Settings.",
    },
    {
      question: "Is this a substitute for a scholar or a lawyer?",
      answer:
        "No — and the app says so. Wasiyyah is a study and drafting tool. Inheritance cases can turn on details no calculator can see. Have your will reviewed by a mufti or scholar you trust, and register it with the civil authority in your country if you want it enforced.",
    },
    {
      question: "How accurate is the inheritance calculation?",
      answer:
        "The engine is 2,000 lines of pure TypeScript implementing the classical rules, verified against Al-Mughni (Hanbali), Al-Hidaya (Hanafi), Mukhtasar Khalil (Maliki) and Minhaj al-Talibin (Shafi'i), and covered by a 34-case automated test suite that includes the standard textbook cases — Umariyyatain, awl to sevenths, the Minbariyya, Akdariyya per madhab, and estate-conservation invariants across all eight schools.",
    },
    {
      question: "What is Wasiyyah built with?",
      answer:
        "React Native, Expo (SDK 57), Reanimated 4 and TypeScript — with a dependency-free faraid engine, encrypted MMKV storage keyed from Expo SecureStore, i18next for ten locales with RTL, expo-print for PDF generation, and RevenueCat + AdMob (with UMP consent and ATT) for monetization.",
    },
  ],
  // Not on the Play Store yet — the listing URL below 404s until it is.
  // Flip this to true (or delete the line) on launch day and the download
  // buttons come back on their own.
  released: false,
  links: {
    playstore:
      "https://play.google.com/store/apps/details?id=com.anwersolangi.wasiyyah",
    email: "mailto:me@anwersolangi.com",
    website: "/apps/wasiyyah",
  },
  ctaTitle: "Secure your legacy.",
  ctaDescription:
    "Write a Shariah-compliant will and compute exact faraid shares across eight madhabs — fully offline, in ten languages.",
};
