// Privacy policy content for each app
export const PRIVACY_POLICIES = {
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
};
