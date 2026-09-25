// Developer-wide legal documents, served at /privacy and /terms. They cover
// every app and extension I publish, so a store listing can point at one
// stable URL. Where an app has its own policy or terms (src/data/privacy.js,
// src/data/terms.js), that document adds to this one and wins on conflict.
//
// Same shape as the per-app documents: { title, lastUpdated, sections[] },
// each section { title, content?, items?, footer?, subsections?, contactEmail? }.

import { CONTACT_EMAIL } from "./site";

export const GENERAL_PRIVACY = {
  title: "Privacy Policy",
  lastUpdated: "September 25, 2026",
  appName: "All apps",
  sections: [
    {
      title: "Overview",
      content: `This Privacy Policy applies to every mobile app, web app and browser extension developed and published by Anwer Solangi ("I", "me", "the developer"), including those listed on Google Play, the Apple App Store and the Chrome Web Store.

Some apps also have their own privacy policy with details specific to that app. Where one exists it is linked below, and it adds to this policy.`,
      footer:
        "I do not run my own servers for collecting user data, and I do not sell, rent or share personal information. Some apps use third-party services (such as Firebase and Google AdMob) that may collect information as described in their own privacy policies.",
    },
    {
      title: "Information Collection and Use",
      content: `My apps do not send personal information to me. Most of them work entirely on your device and store their data locally.

Apps that need accounts, sync or notifications use Google Firebase as their backend. In those apps, the information you enter (for example your email address for sign-in, or the menu and orders of a restaurant in TapMeal) is stored in that app's Firebase project so the app can work. It is used only to provide the app's features and is never sold or used for advertising by me.`,
    },
    {
      title: "Firebase Services",
      content: `Firebase is an app development platform provided by Google LLC. Depending on the app, the following Firebase services may be used:`,
      items: [
        "Firebase Authentication — sign-in and account management",
        "Cloud Firestore — storing app data such as profiles, menus or orders",
        "Firebase Storage — storing files and images you upload",
        "Firebase Cloud Messaging — delivering push notifications",
      ],
      footer:
        "Firebase may collect device information (model, operating system, identifiers), usage data and the details you provide when signing in. Firebase processes this data under Google's Privacy Policy (https://policies.google.com/privacy) and the Firebase Terms (https://firebase.google.com/terms).",
    },
    {
      title: "Advertising (Google AdMob)",
      content: `Some free apps show ads through Google AdMob, an advertising platform provided by Google LLC. AdMob may collect:`,
      items: [
        "Device identifiers, such as the Android Advertising ID",
        "IP address and approximate location (country or city level)",
        "Device information and ad interaction data",
      ],
      subsections: [
        {
          title: "Turning off personalised ads",
          content: `AdMob may use this information to show ads based on your interests. You can opt out in your device settings:
Android: Settings → Google → Ads → Delete advertising ID (or Opt out of Ads Personalization)
iOS: Settings → Privacy & Security → Apple Advertising → turn off Personalised Ads`,
        },
      ],
      footer:
        "See Google's Privacy Policy (https://policies.google.com/privacy) and how Google uses data from partner apps (https://policies.google.com/technologies/partner-sites).",
    },
    {
      title: "Other Third-Party Services",
      content: `A few apps rely on additional services. Each one receives only what it needs to do its job:`,
      items: [
        "RevenueCat — processes in-app subscriptions (for example ad-free upgrades). Payment itself is handled by Google Play or the App Store; I never see your card details.",
        "ImageKit — hosts and resizes images that restaurant owners upload in TapMeal.",
        "Exchange-rate APIs — ConvertiX downloads currency rates; no personal data is sent.",
      ],
    },
    {
      title: "Browser Extensions",
      content:
        "My Chrome extensions run locally in your browser. They do not collect, store or transmit personal information, do not track browsing, and do not use analytics or third-party services. Any setting they save stays in your browser's local extension storage.",
    },
    {
      title: "Data Retention and Deletion",
      content: `Data stored only on your device is deleted when you clear the app's data or uninstall it.

For apps with an account, you can ask me to delete your account and its associated data at any time by emailing me from the address you signed up with. I will confirm and complete the deletion within 30 days, except where a record must be kept to meet a legal obligation.`,
      contactEmail: CONTACT_EMAIL,
    },
    {
      title: "Data Security",
      content:
        "Data handled by Firebase and Google is protected with industry-standard security, including encryption in transit. No method of transmission or storage is completely secure, but I use the security features these platforms provide and keep access to project data limited to myself.",
    },
    {
      title: "Children's Privacy",
      content: `My apps are not directed to children under 13, and I do not knowingly collect personal information from them. The exception is YouTube Focus, a browser extension designed for family viewing that collects no information from anyone.

If you are a parent or guardian and believe your child has provided information through one of my apps, contact me and I will work with the relevant service to delete it.`,
    },
    {
      title: "Changes to This Policy",
      content:
        'I may update this policy from time to time. Changes are shown by updating the "Last updated" date above and take effect when they are posted on this page. Continued use of an app after a change means you accept the updated policy.',
    },
    {
      title: "Contact",
      content:
        "If you have questions about this policy or want to exercise any of your rights, email me. I usually reply within 48 hours.",
      contactEmail: CONTACT_EMAIL,
    },
  ],
};

export const GENERAL_TERMS = {
  title: "Terms of Service",
  lastUpdated: "September 25, 2026",
  appName: "All apps",
  sections: [
    {
      title: "Agreement to Terms",
      content: `These Terms of Service ("Terms") apply to every mobile app, web app and browser extension developed and published by Anwer Solangi ("I", "me", "the developer"). By downloading, installing or using any of them, you agree to these Terms. If you do not agree, please do not use the app.

Some apps have their own terms with conditions specific to that app. Where they exist they are linked below; they add to these Terms and take precedence where the two differ.`,
    },
    {
      title: "License",
      content:
        "Subject to these Terms, I grant you a limited, non-exclusive, non-transferable, revocable license to download, install and use my apps on devices you own or control, for their intended purpose.",
    },
    {
      title: "Acceptable Use",
      content: "You agree NOT to:",
      items: [
        "Copy, modify, distribute, sell or lease any app or its content, except where its source code is published under an open-source license",
        "Reverse engineer, decompile or disassemble an app, except as allowed by law",
        "Use an app for anything unlawful, harmful, fraudulent or abusive",
        "Interfere with an app's security, its backend services, or other users",
        "Upload content you do not have the right to share",
      ],
    },
    {
      title: "Accounts",
      content:
        "Some apps let you create an account. You are responsible for keeping your sign-in details secure and for activity on your account. I may suspend or delete accounts that break these Terms. You can ask me to delete your account at any time, as described in the Privacy Policy.",
    },
    {
      title: "Purchases and Subscriptions",
      content:
        "Paid features and subscriptions are sold through Google Play or the Apple App Store and are governed by their payment, renewal and refund policies. Subscriptions renew automatically until you cancel them in your store account settings. Removing an app does not cancel a subscription.",
    },
    {
      title: "Open-Source Projects and Source Code",
      content:
        "Projects I publish on GitHub are governed by the license in their repository. Source code sold on marketplaces such as CodeCanyon or Gumroad is governed by that marketplace's license terms. These Terms cover the apps as distributed to end users.",
    },
    {
      title: "Third-Party Services",
      content:
        "Apps may rely on third-party services such as Firebase, Google AdMob, RevenueCat or external APIs. Your use of those features is also subject to their terms, and I am not responsible for their availability or behaviour.",
    },
    {
      title: "Informational Content",
      content:
        "Calculators, converters and similar features (for example tax, inheritance, currency or unit results) are provided for general information. They are not financial, legal, religious or professional advice. Verify anything important before relying on it.",
    },
    {
      title: "Disclaimer of Warranties",
      content:
        'THE APPS ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND UNINTERRUPTED OR ERROR-FREE OPERATION, TO THE FULLEST EXTENT PERMITTED BY LAW.',
    },
    {
      title: "Limitation of Liability",
      content:
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, I WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, REVENUE OR PROFITS, ARISING FROM YOUR USE OF OR INABILITY TO USE ANY APP.",
    },
    {
      title: "Intellectual Property",
      content:
        "The apps, their design, names, logos and original content are owned by me and protected by intellectual property laws, except for open-source code and third-party content, which belong to their respective owners.",
    },
    {
      title: "Termination",
      content:
        "You may stop using an app at any time by uninstalling it. I may suspend or end your access if you break these Terms. Sections that by their nature should survive termination (such as disclaimers and limitation of liability) continue to apply.",
    },
    {
      title: "Changes to These Terms",
      content:
        'I may update these Terms from time to time. Changes are shown by updating the "Last updated" date above and take effect when posted. Continued use after a change means you accept the updated Terms.',
    },
    {
      title: "Governing Law",
      content:
        "These Terms are governed by and construed in accordance with applicable laws, without regard to conflict-of-law principles.",
    },
    {
      title: "Contact",
      content: "Questions about these Terms? Email me:",
      contactEmail: CONTACT_EMAIL,
    },
  ],
};
