export const HELP_CONTENT = {
  "salah-compass": {
    title: "Help & Support",
    appName: "Salah Compass",
    supportEmail: "me@anwersolangi.com",
    description:
      "Answers about how prayer times are calculated, how the Qibla compass and adhan alerts work, and how to get in touch.",
    faqs: [
      {
        question: "How are the prayer times calculated?",
        answer:
          "On your phone, from the position of the sun at your location. Each prayer is the moment the sun reaches the angle your calculation method defines. Nothing is downloaded, so the times are there even with no connection.",
      },
      {
        question: "Which calculation method should I choose?",
        answer:
          "The one your local masjid or authority follows. Open Settings → Prayer calculation to see all eleven, each with its Fajr and Isha angles and the regions that use it. If you are not sure, ask at your masjid or compare the app with its printed timetable for a few days.",
      },
      {
        question: "What is the difference between Standard and Hanafi Asr?",
        answer:
          "Standard starts Asr when an object's shadow equals its height, plus its shadow at noon. Hanafi starts when the shadow is twice the height, which is later. Choose the one you follow in Settings → Prayer calculation.",
      },
      {
        question: "My masjid's timetable is a few minutes different. Can I match it?",
        answer:
          "Yes. Many timetables add a few minutes of precaution. Settings → Minute adjustments lets you move each prayer by up to 30 minutes either way, and the alerts follow the adjusted times.",
      },
      {
        question: "How do I use the Qibla compass?",
        answer:
          "Open the Qibla tab and hold the phone flat in your palm, or upright in portrait with the screen facing you. Turn until the Qibla marker sits under the pointer at the top. The app says You are facing the Qibla and the phone gives a short vibration.",
      },
      {
        question: "What are the three alert styles?",
        answer:
          "Adhan alarm plays the full adhan on the alarm volume, even when the phone is on silent or vibrate. Adhan notification plays the adhan with an ordinary notification and stays quiet when the phone is on silent. Simple notification uses a standard sound, without the adhan. You choose one style, then switch each prayer on or off.",
      },
      {
        question: "Why did my alerts stop?",
        answer:
          "Alerts are scheduled seven days ahead and renewed every time you open the app. If the app stays closed for a week, they run out until you open it again.",
      },
      {
        question: "Does Salah Compass need the internet?",
        answer:
          "No. Prayer times, the Qibla, the duas, the city list and the adhan are all on your phone, and the app makes no network requests.",
      },
      {
        question: "Can I use it without giving it my location?",
        answer:
          "Yes. Tap Choose a city instead on the first screen, or go to Settings → Location to pick a city or enter exact coordinates. Times are shown in your phone's time zone.",
      },
      {
        question: "Why is the Hijri date a day different from the one announced?",
        answer:
          "The app calculates the Hijri date with the tabular Islamic calendar, and a local moon sighting can fall a day either side of it. Settings → Hijri date has a day adjustment to bring it in line.",
      },
      {
        question: "Where do the duas come from?",
        answer:
          "From the Quran and the hadith collections. Every dua shows its source, such as the surah and ayah or the collection and number, under the translation. If you spot a mistake in a text or a reference, please tell me.",
      },
      {
        question: "Is my location private?",
        answer:
          "Yes. Your location is used on your phone to work out the times and the Qibla, and it is saved only there. There is no account, no analytics and no server behind the app.",
      },
    ],
    troubleshooting: [
      {
        title: "Times Don't Match My Masjid",
        icon: "🕌",
        steps: [
          "Check the calculation method in Settings → Prayer calculation",
          "Check Standard or Hanafi under Asr method — it moves Asr by a long way",
          "Confirm the city or location shown at the top of the home screen",
          "Make sure your phone's date, time and time zone are correct",
          "Use Settings → Minute adjustments to close any gap that remains",
        ],
      },
      {
        title: "Alerts Are Late or Missing",
        icon: "🔔",
        steps: [
          "Make sure notifications are allowed for Salah Compass in your phone's settings",
          "Allow Alarms and reminders for the app, so alerts sound on the exact minute",
          "Turn off battery optimisation for Salah Compass",
          "Open the app at least once a week — alerts are planned seven days ahead",
          "Use Send a test alert on the Adhan and notifications screen to hear it",
        ],
      },
      {
        title: "The Compass Points the Wrong Way",
        icon: "🧭",
        steps: [
          "Move away from metal, magnets, speakers and laptops",
          "Take off a case with a magnetic clasp or mount plate",
          "Move the phone in a figure of eight to recalibrate it",
          "Hold it flat, or upright in portrait — not on its side",
          "Check the city under the Qibla title, since the bearing depends on it",
        ],
      },
      {
        title: "My Location Can't Be Found",
        icon: "📍",
        steps: [
          "Check that location is switched on, and allowed for Salah Compass",
          "Step outside or stand near a window, then tap Try again",
          "Or tap Choose a city instead and pick the nearest one",
          "For an exact position, enter coordinates in Settings → Location",
        ],
      },
    ],
    contactOptions: [
      {
        title: "Report a Bug",
        description: "Found something not working correctly? Let me know!",
        icon: "🐛",
        subject: "Salah Compass Bug Report",
        body: "Hi,\n\nI found a bug in Salah Compass:\n\nDevice: [Your device model]\nAndroid Version: [Your version]\nApp Version: [App version]\n\nBug Description:\n[Describe the bug here]\n\nSteps to Reproduce:\n1. \n2. \n3. \n\nExpected Behavior:\n[What should happen]\n\nActual Behavior:\n[What actually happens]\n\nThank you!",
      },
      {
        title: "Report a Prayer Time Issue",
        description:
          "Think a time is wrong? Send the details and I'll check the calculation.",
        icon: "🕌",
        subject: "Salah Compass Prayer Time Issue",
        body: "Assalamu alaikum,\n\nI believe a prayer time in Salah Compass may be incorrect.\n\nCity or coordinates: [e.g. Karachi, or 24.86 N, 67.00 E]\nDate: [The date you checked]\nCalculation method: [e.g. University of Islamic Sciences, Karachi]\nAsr method: [Standard / Hanafi]\nMinute adjustments: [Any you have set]\n\nPrayer: [e.g. Fajr]\nTime the app shows: [e.g. 5:11 AM]\nTime I expected: [e.g. 5:14 AM]\n\nSource for the expected time (masjid timetable, authority, another app):\n[If you have one]\n\nJazak Allah khair.",
      },
      {
        title: "Correct a Dua",
        description:
          "Spotted a mistake in a text, a translation or a reference? Please tell me.",
        icon: "📖",
        subject: "Salah Compass Dua Correction",
        body: "Assalamu alaikum,\n\nI'd like to report a correction to a dua in Salah Compass.\n\nDua title: [As shown in the app]\nWhat is wrong: [Arabic text / transliteration / translation / source]\n\nCurrent text:\n[What it says now]\n\nSuggested text:\n[What it should say]\n\nSource:\n[Book, collection and number, or another reference]\n\nJazak Allah khair.",
      },
      {
        title: "Feature Request",
        description: "Have an idea to make Salah Compass better?",
        icon: "💡",
        subject: "Salah Compass Feature Request",
        body: "Hi,\n\nI have a feature suggestion for Salah Compass:\n\nFeature Description:\n[Describe your idea here]\n\nWhy this would be useful:\n[Explain the benefit]\n\nThank you!",
      },
      {
        title: "General Inquiry",
        description: "Questions, feedback, or just want to say salaam?",
        icon: "💬",
        subject: "Salah Compass Inquiry",
        body: "Hi,\n\n[Your message here]\n\nThank you!",
      },
    ],
  },
  huetrace: {
    title: "Help & Support",
    appName: "HueTrace",
    supportEmail: "me@anwersolangi.com",
    description:
      "Answers about how HueTrace works, how scoring and the Daily Challenge work, and how to get in touch.",
    faqs: [
      {
        question: "How do I play?",
        answer:
          "A color fills the screen for a moment, then disappears. Rebuild it from memory: drag the hue ring to pick the color family, then the square to set saturation and brightness. The swatch beside the title shows your pick. Tap Lock it in when it matches what you remember.",
      },
      {
        question: "How is my guess scored?",
        answer:
          "Both colors are compared with CIEDE2000, a perceptual color-difference formula, and scored from 0 to 100: Perfect Match (95+), Very Close (85+), Close (70+), Off (45+) and Way Off. The score follows what the eye notices, so a difference you can't see barely costs you anything.",
      },
      {
        question: "What are the four modes?",
        answer:
          "Classic gives you one color at a time with three tries. Sequence shows three to seven colors in a row to recall in order. Blitz puts sixty seconds on the clock — close matches win time back, misses cost you some. The Daily Challenge is five colors, the same for everyone on the same date.",
      },
      {
        question: "Why does everyone get the same Daily Challenge?",
        answer:
          "The five colors are generated from the date itself, so every device produces the same set with no server involved. You get one attempt a day, and it counts as soon as the first color appears — leaving partway through uses it.",
      },
      {
        question: "How do streaks and streak freezes work?",
        answer:
          "Finishing the Daily Challenge extends your streak. If you miss a day, a streak freeze covers it automatically — one freeze per missed day — so a single busy day doesn't reset your progress.",
      },
      {
        question: "Can I play if I'm colorblind?",
        answer:
          "Yes. Turn on Settings → Colorblind-friendly colors and every color in a run stays distinguishable with red-green color blindness. The Daily Challenge always uses this mode.",
      },
      {
        question: "Does HueTrace need the internet?",
        answer:
          "No. Every mode, including the Daily Challenge, works offline. An internet connection is only used to load an optional ad or to make or restore a purchase.",
      },
      {
        question: "Are there ads?",
        answer:
          "Only if you ask for one. You get one Daily Challenge attempt a day, and you can watch a short optional video for a bonus retry. There are no banner ads and nothing interrupts a game.",
      },
      {
        question: "What does Remove Ads + Unlock All Themes include?",
        answer:
          "It's a single one-time purchase, not a subscription. It unlocks every premium theme pack, including any added later, and gives you the bonus Daily retry without watching an ad. Themes are cosmetic only, so it never changes how the game plays.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes. There is no account and no analytics, and your scores, streaks and settings are stored only on your device. Optional ads are served by Google AdMob and purchases are verified by RevenueCat; the privacy policy explains exactly what they receive.",
      },
    ],
    troubleshooting: [
      {
        title: "Daily Reminder Doesn't Arrive",
        icon: "🔔",
        steps: [
          "Check Settings → Daily reminder is on, and pick a time",
          "Make sure notifications are allowed for HueTrace in your phone's settings",
          "Turn off battery optimisation for HueTrace if your phone is aggressive about it",
          "Open the app once — reminders are planned a week ahead each time it opens",
          "Remember a reminder is skipped on days you've already played",
        ],
      },
      {
        title: "My Progress Came Back After Reinstalling",
        icon: "💾",
        steps: [
          "That's Android's device backup restoring your saved progress",
          "To start fresh, use Settings → Reset progress",
          "Or clear the app's storage in your phone's App info settings",
        ],
      },
      {
        title: "My Purchase Isn't Showing",
        icon: "🛒",
        steps: [
          "Make sure you're signed in to the same App Store or Google Play account you bought with",
          "Connect to the internet, open the unlock screen and tap Restore purchase",
          "Wait a few minutes if the payment was pending, then try Restore purchase again",
          "Still missing? Email me with your store order number and I'll sort it out",
        ],
      },
      {
        title: "Colors Look Different From Expected",
        icon: "🎨",
        steps: [
          "Turn off night light, blue-light filters or reading modes while playing",
          "Set screen brightness to a comfortable, steady level",
          "Check your display isn't using a vivid or custom color profile",
          "Play in even light — glare changes how colors read",
        ],
      },
    ],
    contactOptions: [
      {
        title: "Report a Bug",
        description: "Found something not working correctly? Let me know!",
        icon: "🐛",
        subject: "HueTrace Bug Report",
        body: "Hi,\n\nI found a bug in HueTrace:\n\nDevice: [Your device model]\niOS/Android Version: [Your version]\nApp Version: [App version]\nMode: [Classic / Sequence / Blitz / Daily]\n\nBug Description:\n[Describe the bug here]\n\nSteps to Reproduce:\n1. \n2. \n3. \n\nExpected Behavior:\n[What should happen]\n\nActual Behavior:\n[What actually happens]\n\nThank you!",
      },
      {
        title: "Suggest a Feature",
        description: "Have an idea for a mode, a theme or anything else?",
        icon: "💡",
        subject: "HueTrace Feature Suggestion",
        body: "Hi,\n\nI have an idea for HueTrace:\n\n[Describe your idea]\n\nThanks!",
      },
    ],
  },
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
