export const PRIVACY_POLICIES = {
  wasiyyah: {
    title: "Privacy Policy",
    lastUpdated: "August 16, 2026",
    appName: "Wasiyyah",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how information is handled when you use the Wasiyyah mobile application (the "App").

Wasiyyah is an offline Islamic will builder and faraid inheritance calculator. A will is among the most private documents a person writes — it names your family, your assets and your intentions after death. That data stays on your device. I run no servers and have no access to it.`,
      },
      {
        title: "Information I Do NOT Collect",
        content: `Wasiyyah is designed to be a privacy-first application. I do NOT collect, store, or share:`,
        items: [
          "Your will, or any part of it",
          "Your name, date of birth, place of birth, address or identification numbers",
          "The names, relationships or details of your heirs",
          "Your estate values, assets, currency or bequests",
          "Executor names, witnesses or special instructions",
          "Your location or precise GPS data",
          "Usage analytics or behavioral data",
        ],
        footer:
          "There is no account and no sign-up. Everything you enter is stored only in the App's private, encrypted storage on your device.",
      },
      {
        title: "On-Device Processing",
        content: `All of the App's core work happens locally on your device, with nothing sent to a server:`,
        items: [
          "The will builder and every detail you enter into it",
          "The complete faraid calculation — shares, blocking, awl and radd",
          "Madhab selection and all jurisprudential rules",
          "PDF generation for both the will and the inheritance statement",
          "Language, theme and fiqh preferences",
        ],
        footer:
          "The App needs no network connection to build a will, calculate shares, or export a PDF. You can use every feature in airplane mode.",
      },
      {
        title: "How Your Data Is Stored",
        content: `Your will is stored in an encrypted database on the device. The encryption key is generated per install and held in the platform's secure hardware-backed keystore — the iOS Keychain or the Android Keystore — not in the App's own files.`,
        items: [
          "Encrypted at rest on the device",
          "Never transmitted to any server",
          "Not backed up to any cloud service by me",
          "Permanently erased when you delete it in the App or uninstall",
        ],
        footer:
          "Because I never receive a copy, deleting your data on your device deletes it everywhere.",
      },
      {
        title: "Third-Party Services",
        content: "Wasiyyah uses the following third-party services:",
        subsections: [
          {
            title: "Google AdMob",
            content: `The free plan displays advertisements through Google AdMob to support development. AdMob may collect certain information as described in Google's Privacy Policy: https://policies.google.com/privacy

AdMob may use:
• Device advertising identifiers
• General location (country/region level, not precise GPS)
• Device information and ad-interaction data for ad personalization

If you are in the EEA or the UK, you are shown a consent form before any personalized advertising, and you can change your answer at any time from Settings → Ad Privacy Settings. On iOS you are asked separately through Apple's App Tracking Transparency prompt. Declining either means you still see ads — just non-personalized ones. Upgrading to Premium removes ads, and this data flow, entirely.`,
          },
          {
            title: "RevenueCat",
            content: `I use RevenueCat to manage the optional Wasiyyah Premium subscription. RevenueCat processes:
• Purchase and subscription status
• Anonymous user identifiers for purchase verification
• Transaction information necessary for billing

RevenueCat never receives your will, your heirs or any part of your estate. Learn more at: https://www.revenuecat.com/privacy`,
          },
          {
            title: "Apple App Store & Google Play",
            content: `Purchases are processed by Apple or Google depending on your platform. I receive only an anonymous receipt used to unlock Premium — never your name, card number, or billing address. These transactions are governed by Apple's and Google's respective privacy policies.`,
          },
        ],
      },
      {
        title: "Permissions",
        content: `Wasiyyah requests no runtime permissions of its own. The only permissions present are added by the advertising and purchase SDKs:`,
        items: [
          "Internet access — used solely to serve ads and validate subscriptions",
          "Network state — used to skip ad requests when you are offline",
          "Advertising ID — used by AdMob, and refusable through the consent form",
        ],
        footer:
          "The App does not request access to your camera, contacts, location, files or photo library.",
      },
      {
        title: "Your Choices",
        content: `You have complete control over your data:`,
        items: [
          "Delete all will data permanently from Settings → Delete Will Data",
          "Uninstall the App to remove everything stored locally",
          "Change your advertising consent from Settings → Ad Privacy Settings",
          "Reset or delete your advertising identifier in your device settings",
          "Upgrade to Premium to remove ads entirely",
          "Use the App fully offline, with no internet connection at all",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "Wasiyyah is intended for adults writing a will and is not directed at children under 13. I do not knowingly collect any personal information from children. Since I don't collect personal information from any users, this applies universally.",
      },
      {
        title: "A Note on the App's Purpose",
        content:
          "Wasiyyah helps you draft a will and estimate inheritance shares under Islamic jurisprudence. It is not legal advice and not a substitute for a qualified scholar or lawyer. Please have your will reviewed by someone qualified, and register it with the appropriate authority in your country if you want it to be enforceable.",
      },
      {
        title: "Changes to This Policy",
        content:
          'I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  doculensai: {
    title: "Privacy Policy",
    lastUpdated: "July 12, 2026",
    appName: "DocuLensAI",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how information is handled when you use the DocuLensAI mobile application (the "App").

DocuLensAI is an offline document scanner. Your scans are yours: every page you capture stays on your device, and privacy is a core design principle of the App — not an afterthought.`,
      },
      {
        title: "Information I Do NOT Collect",
        content: `DocuLensAI is designed to be a privacy-first application. I do NOT collect, store, or share:`,
        items: [
          "Your scanned documents, images, or pages",
          "The text recognised from your scans (OCR)",
          "Document titles, tags, or folders you create",
          "Your personal information (name, email, phone number)",
          "Your location or precise GPS data",
          "Usage analytics or behavioral data",
        ],
        footer:
          "There is no account and no sign-up. Everything you scan is stored only in the App's private storage on your device — I run no servers and have no access to it.",
      },
      {
        title: "On-Device Processing",
        content: `All of the App's core work happens locally on your device, with nothing sent to a server:`,
        items: [
          "Camera capture, edge detection, and perspective correction",
          "Image filters and brightness/contrast adjustments",
          "Text recognition (OCR) via on-device Google ML Kit",
          "Full-text search across your scans",
          "PDF, image, and text export",
        ],
        footer:
          "No image, page, or recognised text ever leaves your phone for processing.",
      },
      {
        title: "Third-Party Services",
        content: "DocuLensAI uses the following third-party services:",
        subsections: [
          {
            title: "Google AdMob",
            content: `The free plan displays advertisements through Google AdMob to support development. AdMob may collect certain information as described in Google's Privacy Policy: https://policies.google.com/privacy

AdMob may use:
• Device advertising identifiers
• General location (country/region level, not precise GPS)
• Device information and ad-interaction data for ad personalization

You can opt out of personalized advertising in your device settings, or upgrade to Pro to remove all ads — and this data flow — entirely.`,
          },
          {
            title: "RevenueCat",
            content: `I use RevenueCat to manage in-app purchases and subscriptions for DocuLensAI Pro. RevenueCat processes:
• Purchase and subscription status
• Anonymous user identifiers for purchase verification
• Transaction information necessary for billing

RevenueCat never receives your documents or scanned text. Learn more at: https://www.revenuecat.com/privacy`,
          },
          {
            title: "Apple App Store & Google Play",
            content: `Purchases are processed by Apple or Google depending on your platform. I receive only an anonymous receipt used to unlock Pro — never your name, card number, or billing address. These transactions are governed by Apple's and Google's respective privacy policies.`,
          },
        ],
      },
      {
        title: "Camera & Photo Permissions",
        content: `DocuLensAI requests only the permissions it needs to scan:`,
        items: [
          "Camera — used solely to capture the documents you scan",
          "Photo library — requested only when you choose to import an existing image yourself",
        ],
        footer:
          "Nothing is read in the background, and the App does not access your contacts, location, or other libraries.",
      },
      {
        title: "Data Storage",
        content: `All app data — your scanned pages, recognised text, titles, tags, and settings — is stored locally on your device (an on-device SQLite database and private files). This data:`,
        items: [
          "Never leaves your device",
          "Is not transmitted to any server",
          "Is not backed up to any cloud service by me",
          "Is completely deleted when you delete a document or uninstall the App",
        ],
      },
      {
        title: "Your Choices",
        content: `You have complete control over your data:`,
        items: [
          "Delete any document in the App to remove it immediately",
          "Uninstall the App to erase everything it stored",
          "Opt out of personalized ads in your device settings",
          "Upgrade to Pro to remove ads entirely",
          "Use the App fully offline — an internet connection is only ever used for ads and purchases",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "DocuLensAI is a general-purpose utility and is not directed at children under 13. I do not knowingly collect any personal information from children. Since I don't collect personal information from any users, this applies universally.",
      },
      {
        title: "Changes to This Policy",
        content:
          'I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  "velocity-track": {
    title: "Privacy Policy",
    lastUpdated: "December 12, 2024",
    appName: "VelocityTrack",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how I handle information when you use the VelocityTrack mobile application (the "App").

I believe your location data belongs to you. That's why VelocityTrack is designed from the ground up with privacy as a core principle.`,
      },
      {
        title: "Information I Do NOT Collect",
        content: `VelocityTrack is designed to be a privacy-first application. I do NOT collect, store, or share:`,
        items: [
          "Your location data or GPS coordinates",
          "Your speed, distance, or trip history",
          "Your personal information (name, email, phone number)",
          "Device identifiers or unique IDs",
          "Usage analytics or behavioral data",
          "Any other personal or sensitive information",
        ],
        footer:
          "All speed, distance, altitude, and trip data is processed and stored locally on your device only. I have no access to this information.",
      },
      {
        title: "Third-Party Services",
        content: "VelocityTrack uses the following third-party services:",
        subsections: [
          {
            title: "Google AdMob",
            content: `I display advertisements through Google AdMob to support the free version of the app. AdMob may collect certain information as described in Google's Privacy Policy. You can learn more about how Google uses information at: https://policies.google.com/privacy

AdMob may use:
• Device advertising identifiers
• General location (country/region level, not precise GPS)
• Device information for ad personalization

You can opt out of personalized advertising in your device settings.`,
          },
          {
            title: "RevenueCat",
            content: `I use RevenueCat to manage in-app purchases and subscriptions for VelocityTrack Pro. RevenueCat processes:
• Purchase and subscription status
• Anonymous user identifiers for purchase verification
• Transaction information necessary for billing

RevenueCat does not have access to your location data or app usage. Learn more at: https://www.revenuecat.com/privacy`,
          },
        ],
      },
      {
        title: "Data Storage",
        content: `All app data including your speed records, trip logs, and settings are stored locally on your device. This data:`,
        items: [
          "Never leaves your device",
          "Is not transmitted to any server",
          "Is not backed up to any cloud service by me",
          "Is completely deleted when you uninstall the app",
        ],
      },
      {
        title: "Your Choices",
        content: `You have complete control over your data:`,
        items: [
          "You can delete all trip history within the app",
          "You can uninstall the app to remove all locally stored data",
          "You can opt out of personalized ads in your device settings",
          "You can use the app in offline mode without any internet connection",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "VelocityTrack is not directed at children under 13. I do not knowingly collect any personal information from children. Since I don't collect personal information from any users, this applies universally.",
      },
      {
        title: "Changes to This Policy",
        content:
          'I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  nearby: {
    title: "Privacy Policy",
    lastUpdated: "December 12, 2024",
    appName: "Nearby",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how I collect, use, and protect information when you use the Nearby mobile application (the "App").

Nearby is a location-based social discovery app that helps you connect with people around you. I take your privacy seriously and am transparent about how your data is handled.`,
      },
      {
        title: "Information I Collect",
        content: `To provide location-based services, the following information is collected:`,
        subsections: [
          {
            title: "Account Information",
            content: `When you create an account, the app collects:
• Email address (for authentication)
• Profile name and photo (optional)
• Authentication credentials via Firebase Authentication

You may also sign in using Google or Facebook, in which case basic profile information is received from those services.`,
          },
          {
            title: "Location Data",
            content: `Nearby requires access to your device's location to function. The app collects:
• Your GPS coordinates when you use the app
• Location updates to show your position on the map

IMPORTANT: Your location data is used ONLY to display your position on the in-app map so other users can discover you nearby. I do NOT share your location data with any third-party services or advertisers.`,
          },
          {
            title: "Chat and Messages",
            content: `When you use the messaging feature:
• Messages are stored in Firebase Realtime Database
• Images shared in chat are stored in Firebase Cloud Storage
• Chat history is retained to provide message synchronization across devices`,
          },
        ],
      },
      {
        title: "How Your Information Is Used",
        content: `The collected information is used for the following purposes:`,
        items: [
          "Display your location on the map for nearby discovery",
          "Enable real-time chat with other users",
          "Authenticate your identity and secure your account",
          "Send push notifications for new messages",
          "Improve the app experience and fix bugs",
        ],
        footer:
          "I do NOT sell, rent, or share your personal information or location data with third parties for their marketing purposes.",
      },
      {
        title: "Third-Party Services",
        content: "Nearby uses the following third-party services:",
        subsections: [
          {
            title: "Firebase (Google)",
            content: `The app uses Firebase for backend infrastructure:
• Firebase Authentication - For secure user login
• Firebase Realtime Database - For storing user profiles and chat messages
• Firebase Cloud Storage - For storing profile pictures and shared images
• Firebase Cloud Messaging - For push notifications

Firebase is operated by Google. Learn more about Firebase privacy at: https://firebase.google.com/support/privacy`,
          },
          {
            title: "Google AdMob",
            content: `Advertisements are displayed through Google AdMob. AdMob may collect:
• Device advertising identifiers
• General location (country/region level, derived from IP)
• Device information for ad personalization

Note: AdMob does NOT have access to your precise GPS location. You can opt out of personalized advertising in your device settings.

Learn more: https://policies.google.com/privacy`,
          },
        ],
      },
      {
        title: "Data Security",
        content: `Appropriate security measures are implemented to protect your information:`,
        items: [
          "All data transmission is encrypted using HTTPS/TLS",
          "Firebase provides enterprise-grade security for data storage",
          "Authentication tokens are securely managed",
          "Security practices are regularly reviewed and updated",
        ],
      },
      {
        title: "Your Privacy Controls",
        content: `You have control over your data:`,
        items: [
          "You can hide your location by going offline in the app",
          "You can delete your chat history",
          "You can delete your account and all associated data",
          "You can opt out of personalized ads in device settings",
          "You can revoke location permissions in your device settings",
        ],
      },
      {
        title: "Data Retention",
        content:
          "Your account data is retained for as long as your account is active. If you delete your account, your personal data, including your location history and chat messages, will be deleted within 30 days. Some anonymized data may be retained for analytics purposes.",
      },
      {
        title: "Children's Privacy",
        content:
          "Nearby is not intended for children under 13 years of age. I do not knowingly collect personal information from children under 13. If I discover that a child under 13 has provided personal information, I will delete it immediately.",
      },
      {
        title: "Changes to This Policy",
        content:
          "I may update this Privacy Policy from time to time. I will notify you of any significant changes through the app or via email. Your continued use of the app after changes constitutes acceptance of the updated policy.",
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy or data practices, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  whatsupfire: {
    title: "Privacy Policy",
    lastUpdated: "December 12, 2024",
    appName: "WhatsupFire",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how I collect, use, and protect information when you use the WhatsupFire mobile application (the "App").

WhatsupFire is a real-time messaging application built with React Native and Firebase. I prioritize your privacy and security in all practices.`,
      },
      {
        title: "Information I Collect",
        content: `To provide messaging services, the following information is collected:`,
        subsections: [
          {
            title: "Account Information",
            content: `When you create an account using phone authentication:
• Phone number (for Firebase Phone Authentication)
• Profile name and photo (that you choose to provide)
• Device tokens for push notifications

Your phone number is verified through Firebase Authentication and is used solely for account verification and login.`,
          },
          {
            title: "Messages and Media",
            content: `When you use the messaging feature:
• Text messages are stored in Firebase Realtime Database
• Images and media files are stored in Firebase Cloud Storage
• Stories (24-hour content) are stored temporarily and auto-deleted after 24 hours

Messages are stored to enable message synchronization across devices and to allow you to access your chat history.`,
          },
          {
            title: "Contacts",
            content: `If you grant permission:
• The app accesses your contact list to help you find friends on WhatsupFire
• Contact data is processed on-device and only phone numbers that match existing users are stored
• Your entire contact list is NOT uploaded or stored on servers`,
          },
        ],
      },
      {
        title: "How Your Information Is Used",
        content: `The collected information is used for the following purposes:`,
        items: [
          "Enable real-time messaging between users",
          "Authenticate your identity via phone number",
          "Store and sync your chat history across devices",
          "Display your stories to your contacts for 24 hours",
          "Send push notifications for new messages",
          "Help you find and connect with contacts using WhatsupFire",
        ],
        footer:
          "I do NOT sell, rent, or share your personal information, messages, or contact data with any third parties.",
      },
      {
        title: "Third-Party Services",
        content: "WhatsupFire uses the following third-party services:",
        subsections: [
          {
            title: "Firebase (Google)",
            content: `The app uses Firebase for backend infrastructure:
• Firebase Phone Authentication - For secure phone number verification
• Firebase Realtime Database - For storing messages and user data
• Firebase Cloud Storage - For storing images, media, and stories
• Firebase Cloud Messaging - For push notifications

Firebase is operated by Google and provides enterprise-grade security. Learn more at: https://firebase.google.com/support/privacy`,
          },
          {
            title: "Google AdMob",
            content: `Advertisements are displayed through Google AdMob to support the app. AdMob may collect:
• Device advertising identifiers
• General location (country/region level, from IP address)
• Device information for ad personalization

You can opt out of personalized advertising in your device settings.

Learn more: https://policies.google.com/privacy`,
          },
        ],
      },
      {
        title: "Message Privacy",
        content: `Your message privacy is taken seriously:`,
        items: [
          "Messages are transmitted over encrypted connections (HTTPS/TLS)",
          "I do not read or analyze the content of your messages",
          "Messages are stored securely in Firebase with access controls",
          "Stories automatically expire and are deleted after 24 hours",
          "Message content is not shared with advertisers or third parties",
        ],
      },
      {
        title: "Data Security",
        content: `Appropriate security measures are implemented:`,
        items: [
          "All data transmission is encrypted using HTTPS/TLS",
          "Firebase provides enterprise-grade security infrastructure",
          "Phone authentication ensures account security",
          "Regular security reviews and updates",
        ],
      },
      {
        title: "Your Privacy Controls",
        content: `You have control over your data:`,
        items: [
          "You can delete individual messages or entire conversations",
          "You can delete your stories before they expire",
          "You can control who sees your profile information",
          "You can delete your account and all associated data",
          "You can revoke contact access permissions at any time",
          "You can opt out of personalized ads in device settings",
        ],
      },
      {
        title: "Data Retention",
        content: `Data retention practices:`,
        items: [
          "Messages are retained as long as your account is active",
          "Stories are automatically deleted after 24 hours",
          "Deleted messages are removed from servers",
          "Account deletion removes all your data within 30 days",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "WhatsupFire is not intended for children under 13 years of age. I do not knowingly collect personal information from children under 13. If I discover that a child under 13 has created an account, I will delete it immediately.",
      },
      {
        title: "Changes to This Policy",
        content:
          "I may update this Privacy Policy from time to time. I will notify you of any significant changes through the app. Your continued use of the app after changes constitutes acceptance of the updated policy.",
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy or data practices, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  convertix: {
    title: "Privacy Policy",
    lastUpdated: "March 23, 2026",
    appName: "ConvertiX",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how I handle information when you use the ConvertiX mobile application (the "App").

I believe your data belongs to you. That's why ConvertiX is designed from the ground up as a privacy-first application — no accounts, no cloud sync, no tracking of any kind.`,
      },
      {
        title: "Information I Do NOT Collect",
        content: `ConvertiX is designed to be a privacy-first application. I do NOT collect, store, or share:`,
        items: [
          "Your conversion history or favorite unit pairs",
          "Your personal information (name, email, phone number)",
          "Device identifiers or unique IDs",
          "Usage analytics or behavioral data",
          "Location data of any kind",
          "Any other personal or sensitive information",
        ],
        footer:
          "All conversion history, favorites, and settings are stored locally on your device only using fast on-device MMKV storage. I have no access to this information.",
      },
      {
        title: "Currency Exchange Rates",
        content: `ConvertiX fetches live currency exchange rates from a third-party exchange rate API when your device is connected to the internet. Regarding this:`,
        items: [
          "Only a standard HTTP request is made — no personal data is sent",
          "The response (exchange rates) is cached locally on your device",
          "When offline, the app uses the last cached rates",
          "No account, API key linked to you, or identifier is transmitted",
        ],
      },
      {
        title: "Third-Party Services",
        content: "ConvertiX uses the following third-party services:",
        subsections: [
          {
            title: "Google AdMob",
            content: `I display advertisements through Google AdMob to support the free version of the app. AdMob may collect certain information as described in Google's Privacy Policy. You can learn more at: https://policies.google.com/privacy

AdMob may use:
• Device advertising identifiers
• General location (country/region level, not precise GPS)
• Device information for ad personalization

You can opt out of personalized advertising in your device settings.`,
          },
        ],
      },
      {
        title: "Data Storage",
        content: `All app data including your conversion history, favorites, and settings are stored locally on your device using MMKV storage. This data:`,
        items: [
          "Never leaves your device",
          "Is not transmitted to any server",
          "Is not backed up to any cloud service by me",
          "Is completely deleted when you uninstall the app",
        ],
      },
      {
        title: "Your Choices",
        content: `You have complete control over your data:`,
        items: [
          "You can clear your conversion history within the app settings",
          "You can remove individual favorites at any time",
          "You can uninstall the app to remove all locally stored data",
          "You can opt out of personalized ads in your device settings",
          "You can use the app in offline mode without any internet connection",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "ConvertiX is not directed at children under 13. I do not knowingly collect any personal information from children. Since I don't collect personal information from any users, this applies universally.",
      },
      {
        title: "Changes to This Policy",
        content:
          'I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  memoriq: {
    title: "Privacy Policy",
    lastUpdated: "June 20, 2026",
    appName: "MemorIQ",
    sections: [
      {
        title: "Introduction",
        content: `I ("Anwer Solangi", the developer) am committed to protecting your privacy. This Privacy Policy explains how I handle information when you use the MemorIQ mobile game (the "App").

MemorIQ is a memory match brain-training game designed to be offline-first and privacy-conscious. The App requires no account, no email, and no personal information to play.`,
      },
      {
        title: "Information I Collect",
        content: `MemorIQ collects the absolute minimum needed to deliver notifications and keep the lives system working across devices:`,
        subsections: [
          {
            title: "Anonymous Authentication",
            content: `MemorIQ signs you in anonymously using Firebase Anonymous Authentication. This creates a random, anonymous user identifier on your device.
• No email address, name, phone number, or password is requested or collected
• The anonymous ID cannot be used to identify you personally
• You are never asked to create or log into an account`,
          },
          {
            title: "Minimal Gameplay Sync",
            content: `Tied to your anonymous ID, the App writes only three fields to Firebase Firestore:
• Device push token (to send notifications)
• The time you last played
• Your remaining lives

This sync is write-only — the App does not read your data back — and is used solely to power push notifications and the lives system. No scores, gameplay content, or personal data are uploaded.`,
          },
        ],
      },
      {
        title: "Information Stored Only on Your Device",
        content: `The vast majority of your data never leaves your device. The following are stored locally using fast on-device MMKV storage:`,
        items: [
          "Game progress, scores, and best scores",
          "Selected theme and background",
          "Sound, difficulty, grid size, and timer preferences",
          "Lives and refill timers",
        ],
        footer:
          "This local data is completely removed when you uninstall the App.",
      },
      {
        title: "Push Notifications",
        content: `With your permission, MemorIQ sends push notifications (for example, when your lives have refilled) using Firebase Cloud Messaging and Notifee. To do this, your device's push token is stored as described above. You can disable notifications at any time in your device settings.`,
      },
      {
        title: "Third-Party Services",
        content: "MemorIQ uses the following third-party services:",
        subsections: [
          {
            title: "Firebase (Google)",
            content: `The App uses Firebase for backend infrastructure:
• Firebase Anonymous Authentication — for an anonymous user ID
• Firebase Firestore — for the minimal write-only sync described above
• Firebase Cloud Messaging — for push notifications

Firebase is operated by Google. Learn more at: https://firebase.google.com/support/privacy`,
          },
          {
            title: "Google AdMob",
            content: `Free versions of the App display a banner ad through Google AdMob. Premium users never see ads. AdMob may collect:
• Device advertising identifiers
• General location (country/region level, not precise GPS)
• Device information for ad personalization

You can opt out of personalized advertising in your device settings. Learn more: https://policies.google.com/privacy`,
          },
          {
            title: "RevenueCat",
            content: `I use RevenueCat to manage in-app purchases (premium themes and the ad-free upgrade). RevenueCat processes:
• Purchase and entitlement status
• Anonymous user identifiers for purchase verification
• Transaction information necessary for billing

RevenueCat does not have access to your gameplay data. Learn more at: https://www.revenuecat.com/privacy`,
          },
        ],
      },
      {
        title: "Data Security",
        content: `Appropriate security measures are implemented to protect your information:`,
        items: [
          "All data transmission is encrypted using HTTPS/TLS",
          "Firebase provides enterprise-grade security for data storage",
          "Only anonymous, non-identifying data is ever synced",
          "Security practices are regularly reviewed and updated",
        ],
      },
      {
        title: "Your Choices",
        content: `You have control over your data:`,
        items: [
          "You can disable push notifications in your device settings",
          "You can opt out of personalized ads in your device settings",
          "You can uninstall the App to remove all locally stored data",
          "You can play entirely offline; sync simply pauses until you reconnect",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "MemorIQ is suitable for a general audience and does not knowingly collect personal information from children. As the App uses only anonymous identifiers and does not request names, emails, or other personal details, no personally identifiable information is collected from any user, including children.",
      },
      {
        title: "Changes to This Policy",
        content:
          'I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      {
        title: "Contact Me",
        content: `If you have any questions about this Privacy Policy, please contact me at:`,
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
  // Also served at /extensions/youtube-fullscreen-focus/privacy-policy, the
  // URL the Chrome Web Store listing links to.
  "youtube-fullscreen-focus": {
    title: "Privacy Policy",
    lastUpdated: "October 12, 2025",
    appName: "YouTube Focus",
    sections: [
      {
        title: "Overview",
        content: `YouTube Fullscreen Focus ("the Extension") is committed to protecting your privacy. This policy explains its data practices.`,
        footer:
          "The Extension does NOT collect any personal data. It operates entirely locally in your browser and does not collect, store, or transmit any personal information.",
      },
      {
        title: "Data Collection",
        content: "The Extension:",
        items: [
          "Does not collect, store, or transmit any personal information",
          "Does not track your browsing activity",
          "Does not use cookies or analytics",
          "Does not communicate with external servers",
          "Does not share any data with third parties",
        ],
      },
      {
        title: "Permissions Used",
        content:
          "The Extension requires certain permissions to function. Here's what each one is used for:",
        subsections: [
          {
            title: "activeTab",
            content:
              "Used to detect when you're on YouTube or YouTube Kids. Data accessed: none — it only checks the current tab's URL. Data stored: none.",
          },
          {
            title: "scripting",
            content:
              "Used to inject code that detects fullscreen mode and blocks keystrokes. Data accessed: none — it only monitors fullscreen state. Data stored: none.",
          },
          {
            title: "storage (Chrome Storage API)",
            content:
              "Used to save your enable/disable preference. Data stored: a single on/off value, kept locally in your browser and never shared or transmitted.",
          },
        ],
      },
      {
        title: "How the Extension Works",
        content: "The Extension operates entirely locally in your browser by:",
        items: [
          "Detecting when you enter fullscreen mode on YouTube",
          "Temporarily blocking keyboard inputs to prevent accidental interruptions",
          "Restoring keyboard functionality when you exit fullscreen",
        ],
        footer:
          "All processing happens in your browser. No data is sent to any server or third party.",
      },
      {
        title: "Third-Party Services",
        content:
          "The Extension does not use any third-party services, analytics, or tracking tools. It does not integrate with Google Analytics, advertising networks, or any other external services.",
      },
      {
        title: "Children's Privacy",
        content: `The Extension is safe for users of all ages, including children. It does not collect any information from anyone, including children under 13.

The Extension is specifically designed to work with YouTube Kids, making it safe for family viewing.`,
      },
      {
        title: "Changes to This Privacy Policy",
        content: `I may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated" date at the top of this policy, and are effective when posted on this page.

Continued use of the Extension after any modifications constitutes your acceptance of the changes.`,
      },
      {
        title: "Contact",
        content:
          "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact me. I typically respond within 48 hours.",
        contactEmail: "me@anwersolangi.com",
      },
    ],
  },
};
