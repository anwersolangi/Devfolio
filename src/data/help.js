export const HELP_CONTENT = {
  wasiyyah: {
    title: "Help & Support",
    appName: "Wasiyyah",
    supportEmail: "me@anwersolangi.com",
    description:
      "Answers about writing your will, how the faraid calculation works, and how to get in touch.",
    faqs: [
      {
        question: "How do I write my will?",
        answer:
          "Open the My Will tab and follow the four steps: your own details, your heirs, any bequests, then review and export. Each step shows what is still missing, and you can leave and come back at any time — everything is saved as you go.",
      },
      {
        question: "How does the faraid calculation work?",
        answer:
          "Enter the relatives who survive the deceased and Wasiyyah computes each share as an exact fraction using the rules of faraid from the Qur'an and classical fiqh. It applies hajb (blocking), awl (proportional reduction when shares exceed the estate) and radd (return of the residue), and handles the classical special cases. Each result shows the fraction, the percentage, the monetary amount, and the reason that heir received it.",
      },
      {
        question: "Why did an heir receive nothing?",
        answer:
          "They were most likely blocked — hajb. A grandson does not inherit while a son is alive, for example. Blocked heirs are listed separately in the results with the specific relative who blocked them, so you can always see why. Blocking rules differ by school: under Hanafi the paternal grandfather blocks siblings, but under Maliki, Shafi'i and Hanbali he does not.",
      },
      {
        question: "Which madhab should I choose?",
        answer:
          "Choose the school you follow. It genuinely changes the result — not just the wording. If you are unsure, leave it unspecified and the App follows Sunni consensus. You can change it any time from Settings → School of Thought, and recalculate.",
      },
      {
        question: "Why does my result differ from another calculator?",
        answer:
          "Almost always because of the madhab selected, or a genuinely disputed case. Check that both calculators use the same school, and read the warnings shown with the result — Wasiyyah flags cases where scholars differ. If a difference remains and the estate matters, take both workings to a scholar.",
      },
      {
        question: "How much can I leave as a bequest?",
        answer:
          "Up to one third of the estate, after debts and funeral expenses, and not to someone who is already a Quranic heir. The App tracks the ⅓ limit live as you add bequests and warns you before you exceed it.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes. There is no account and no cloud. Your will is stored encrypted on your device, behind a key held in the iOS Keychain or Android Keystore. Nothing is uploaded. You can erase everything permanently from Settings → Delete Will Data.",
      },
      {
        question: "How many PDFs can I export?",
        answer:
          "Free users get five PDF exports per day, which resets at midnight in your local time. Premium removes the limit and the ads. Every calculation feature is free — the limit applies only to exports.",
      },
      {
        question: "Is the exported will legally valid?",
        answer:
          "It is a properly structured draft, not a certified document. Whether it is enforceable depends on the law where you live — most countries require signatures, witnesses, and sometimes registration or notarisation. Have it reviewed by a scholar for the Islamic requirements and by a lawyer for the civil ones.",
      },
      {
        question: "Does Wasiyyah work offline?",
        answer:
          "Completely. The will builder, the calculator and PDF export all work in airplane mode. An internet connection is used only for ads and subscription validation.",
      },
    ],
    troubleshooting: [
      {
        title: "Calculation Looks Wrong",
        icon: "⚖️",
        steps: [
          "Check the selected madhab in Settings — the rules change with it",
          "Confirm each heir's relationship and gender are set correctly",
          "Check the Blocked Heirs section: someone may be excluded by hajb",
          "Read the warnings under the result for disputed or special cases",
          "Verify the estate value and that bequests are within one third",
        ],
      },
      {
        title: "PDF Won't Export",
        icon: "📄",
        steps: [
          "Check your remaining daily exports — free users get five per day",
          "Make sure every required will step is complete",
          "Ensure the device has free storage space",
          "Close and reopen the app, then try again",
          "If the share sheet does not appear, check your OS sharing permissions",
        ],
      },
      {
        title: "Purchase or Restore Failed",
        icon: "💳",
        steps: [
          "Confirm you are signed into the same store account used to purchase",
          "Check your internet connection — purchases need one",
          "Use Settings → Restore Purchases",
          "Verify the subscription is active in your App Store or Play Store account",
          "Email me with your store receipt if Premium still does not unlock",
        ],
      },
      {
        title: "Arabic or Urdu Text Looks Wrong",
        icon: "🌐",
        steps: [
          "Fully close and reopen the app after changing language",
          "Check that the device has not overridden the app's text direction",
          "Update to the latest version — layout fixes ship regularly",
          "Report the specific screen to me with a screenshot",
        ],
      },
    ],
    contactOptions: [
      {
        title: "Report a Bug",
        description: "Found something not working correctly? Let me know!",
        icon: "🐛",
        subject: "Wasiyyah Bug Report",
        body: "Hi,\n\nI found a bug in Wasiyyah:\n\nDevice: [Your device model]\niOS/Android Version: [Your version]\nApp Version: [App version]\nLanguage: [App language]\nMadhab: [Selected school]\n\nBug Description:\n[Describe the bug here]\n\nSteps to Reproduce:\n1. \n2. \n3. \n\nExpected Behavior:\n[What should happen]\n\nActual Behavior:\n[What actually happens]\n\nThank you!",
      },
      {
        title: "Report a Calculation Issue",
        description:
          "Think a share is wrong? Send the case and I'll check it against the sources.",
        icon: "⚖️",
        subject: "Wasiyyah Calculation Issue",
        body: "Assalamu alaikum,\n\nI believe a faraid calculation may be incorrect.\n\nMadhab selected: [e.g. Hanafi]\nEstate value: [Amount and currency]\n\nHeirs entered:\n- [e.g. Wife x1]\n- [e.g. Daughter x2]\n- [e.g. Father x1]\n\nShares the app produced:\n[Paste or describe the result]\n\nShares I expected:\n[What you believe is correct]\n\nSource for the expected result (book, scholar, or calculator):\n[If you have one]\n\nJazak Allah khair.",
      },
      {
        title: "Feature Request",
        description: "Have an idea to make Wasiyyah better?",
        icon: "💡",
        subject: "Wasiyyah Feature Request",
        body: "Hi,\n\nI have a feature suggestion for Wasiyyah:\n\nFeature Description:\n[Describe your idea here]\n\nWhy this would be useful:\n[Explain the benefit]\n\nThank you!",
      },
      {
        title: "Translation Correction",
        description:
          "Spotted awkward or incorrect wording in your language? Please tell me.",
        icon: "🌐",
        subject: "Wasiyyah Translation Correction",
        body: "Hi,\n\nI'd like to report a translation issue in Wasiyyah.\n\nLanguage: [e.g. Urdu]\nScreen: [Where you saw it]\n\nCurrent text:\n[What it says now]\n\nSuggested text:\n[What it should say]\n\nWhy:\n[Any context — especially for religious or legal terms]\n\nThank you!",
      },
      {
        title: "Billing & Subscriptions",
        description: "Issues with Premium, restoring, or refunds.",
        icon: "💳",
        subject: "Wasiyyah Billing Issue",
        body: "Hi,\n\nI have an issue with my Wasiyyah subscription:\n\nStore: [App Store / Google Play]\nIssue: [Purchase failed / Restore not working / Refund request / Other]\n\nDetails:\n[Describe the issue]\n\nThank you!",
      },
      {
        title: "General Inquiry",
        description: "Questions, feedback, or just want to say salaam?",
        icon: "💬",
        subject: "Wasiyyah Inquiry",
        body: "Hi,\n\n[Your message here]\n\nThank you!",
      },
    ],
  },
  "velocity-track": {
    title: "Help & Support",
    appName: "VelocityTrack",
    supportEmail: "me@anwersolangi.com",
    description:
      "Find answers to common questions, troubleshooting tips, and ways to get in touch.",
    faqs: [
      {
        question: "How does VelocityTrack measure speed?",
        answer:
          "VelocityTrack uses your device's GPS (Global Positioning System) to calculate your speed in real-time. The app determines your position multiple times per second and calculates the distance traveled to derive your current speed.",
      },
      {
        question:
          "Why is my speed reading different from my car's speedometer?",
        answer:
          "GPS speed and vehicle speedometers use different methods. Car speedometers often read slightly higher for safety margins. GPS speed is typically more accurate, but can be affected by signal quality. For legal purposes, always refer to your vehicle's speedometer.",
      },
      {
        question: "How accurate is the GPS speed?",
        answer:
          "Under ideal conditions (clear sky, good satellite visibility), GPS speed accuracy is typically within 0.1-0.5 km/h. Accuracy decreases in tunnels, dense urban areas, or areas with poor satellite coverage.",
      },
      {
        question: "Does the app work offline?",
        answer:
          "Yes! VelocityTrack works completely offline. GPS signals come directly from satellites, not the internet. However, the initial GPS lock may take longer without an internet connection for assisted GPS.",
      },
      {
        question: "How do I use HUD mode?",
        answer:
          "Tap the HUD button to activate Heads-Up Display mode. The display will mirror so you can place your phone on your dashboard and see the speed reflected on your windshield. Works best at night or in low-light conditions.",
      },
      {
        question: "Why does my GPS take a long time to get a signal?",
        answer:
          "Initial GPS lock can take 30 seconds to a few minutes, especially if you haven't used GPS recently or are in a new location. Moving outdoors with a clear view of the sky helps. Once locked, subsequent uses are much faster.",
      },
      {
        question: "How do I change speed units?",
        answer:
          "Go to Settings in the app and select your preferred unit: km/h (kilometers per hour), mph (miles per hour), knots (nautical), or m/s (meters per second).",
      },
      {
        question: "What's included in VelocityTrack Pro?",
        answer:
          "VelocityTrack Pro removes all advertisements and unlocks premium features including advanced trip statistics, data export, additional themes, and priority support.",
      },
      {
        question: "How do I restore my Pro purchase on a new device?",
        answer:
          "Open VelocityTrack, go to Settings, and tap 'Restore Purchases'. Make sure you're signed in with the same Apple ID or Google account used for the original purchase.",
      },
      {
        question: "Does VelocityTrack drain my battery?",
        answer:
          "GPS usage does consume battery. To minimize drain: lower screen brightness, use dark mode if available, and close the app when not in use. The app is optimized for efficiency, but continuous GPS use will affect battery life.",
      },
    ],
    troubleshooting: [
      {
        title: "No GPS Signal",
        icon: "📡",
        steps: [
          "Ensure Location Services are enabled in device settings",
          "Grant VelocityTrack permission to access your location",
          "Move outdoors or to an area with clear sky visibility",
          "Wait 30-60 seconds for GPS to acquire satellites",
          "Restart the app if signal is still not acquired",
        ],
      },
      {
        title: "Inaccurate Speed Readings",
        icon: "⚠️",
        steps: [
          "Check GPS signal strength indicator in the app",
          "Move away from tall buildings, tunnels, or dense foliage",
          "Ensure your phone case isn't blocking GPS antenna",
          "Restart your device to refresh GPS hardware",
          "Check if other GPS apps work correctly",
        ],
      },
      {
        title: "App Crashes or Freezes",
        icon: "🔄",
        steps: [
          "Force close the app and reopen it",
          "Ensure you have the latest app version installed",
          "Restart your device",
          "Check available storage space on your device",
          "Reinstall the app if issues persist",
        ],
      },
      {
        title: "Subscription Issues",
        icon: "💳",
        steps: [
          "Verify you're signed in with the correct App Store/Google account",
          "Go to Settings > Restore Purchases",
          "Check your subscription status in device settings",
          "Contact Apple/Google support for billing issues",
          "Email me if the issue persists after trying above steps",
        ],
      },
    ],
    contactOptions: [
      {
        title: "Report a Bug",
        description:
          "Found something not working correctly? Let me know!",
        icon: "🐛",
        subject: "VelocityTrack Bug Report",
        body: "Hi,\n\nI found a bug in VelocityTrack:\n\nDevice: [Your device model]\niOS/Android Version: [Your version]\nApp Version: [App version]\n\nBug Description:\n[Describe the bug here]\n\nSteps to Reproduce:\n1. \n2. \n3. \n\nExpected Behavior:\n[What should happen]\n\nActual Behavior:\n[What actually happens]\n\nThank you!",
      },
      {
        title: "Feature Request",
        description: "Have an idea to make VelocityTrack better?",
        icon: "💡",
        subject: "VelocityTrack Feature Request",
        body: "Hi,\n\nI have a feature suggestion for VelocityTrack:\n\nFeature Description:\n[Describe your idea here]\n\nWhy this would be useful:\n[Explain the benefit]\n\nThank you!",
      },
      {
        title: "General Inquiry",
        description: "Questions, feedback, or just want to say hi?",
        icon: "💬",
        subject: "VelocityTrack Inquiry",
        body: "Hi,\n\nI have a question about VelocityTrack:\n\n[Your message here]\n\nThank you!",
      },
      {
        title: "Subscription Support",
        description: "Issues with Pro subscription or purchases?",
        icon: "⭐",
        subject: "VelocityTrack Pro Support",
        body: "Hi,\n\nI need help with my VelocityTrack Pro subscription:\n\nDevice: [Your device model]\nPurchase Platform: [App Store / Google Play]\nPurchase Date: [Approximate date]\n\nIssue:\n[Describe your issue]\n\nThank you!",
      },
    ],
  },
};
