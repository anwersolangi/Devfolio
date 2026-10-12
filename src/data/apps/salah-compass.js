export const salahCompass = {
  slug: "salah-compass",
  name: "Salah Compass",
  icon: "/salah_compass_icon.png",
  layout: 1,
  category: "Mobile app",
  subtitle: "Offline Prayer Times, Qibla Compass & Duas",
  description:
    "Prayer times, a live Qibla compass, adhan alerts and 40 duas, all calculated on your phone. It makes no network requests: no account, no ads, no tracking.",
  fullDescription:
    "Salah Compass answers the two questions a Muslim asks several times a day: when is the next prayer, and which way is the Qibla. It works both out on the phone, from the sun's position and the device's location, and it makes no network requests at all. The home screen leads with a live countdown to the next prayer, then today's five times, sunrise, sunset and the Hijri date. Eleven calculation methods, Standard or Hanafi Asr and a minute adjustment for each prayer let it match a local masjid's timetable. The Qibla screen is a live compass that corrects to true north, works with the phone flat or upright, and tells you when you are facing the Kaaba. Prayer alerts are local notifications — the full adhan as an alarm, the adhan as a notification, or a plain sound — and 40 duas ship inside the app in Arabic, transliteration and translation, each with its source. Built with React Native, Expo (SDK 57), Reanimated 4 and MMKV, on a prayer-time, Qibla and Hijri engine written in plain TypeScript, checked against the adhan library across eleven cities, with a 187-test Jest suite over the calculations, hooks and components.",
  features: [
    "Today's Prayer Times with a Live Countdown",
    "11 Calculation Methods",
    "Standard or Hanafi Asr",
    "Minute Adjustments for Each Prayer",
    "Qibla Compass Corrected to True North",
    "Bearing & Distance to the Kaaba",
    "Adhan Alarm, Adhan Notification or Simple Alert",
    "Optional Reminder Before Each Prayer",
    "40 Duas with Arabic, Transliteration & Source",
    "Offline Dua Search & Favorites",
    "Hijri Date, Light & Dark Mode",
    "100% Offline — No Account, No Ads, No Tracking",
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
      "MMKV on-device storage",
      "100% Offline — no server, no accounts",
      "Local notifications for prayer alerts",
      "No network code anywhere in the app",
    ],
    features: [
      "Pure-TypeScript solar position and prayer-time engine",
      "Great-circle Qibla bearing with a filtered compass heading",
      "Tabular Hijri calendar and 128 bundled cities",
      "187-test Jest suite, checked against the adhan library",
    ],
  },
  perfectFor: [
    {
      title: "Anyone Who Prays on Time",
      description:
        "One glance gives the next prayer and how long is left. The five times, sunrise and sunset sit right below it.",
    },
    {
      title: "Travelers",
      description:
        "It works in airplane mode and abroad without a data plan. Pick a city from the built-in list or enter coordinates, and the times and the Qibla follow.",
    },
    {
      title: "Privacy-First Users",
      description:
        "Your location is used on the phone and stays there. No account, no ads and no analytics, so there is nothing to opt out of.",
    },
    {
      title: "Followers of a Local Timetable",
      description:
        "Choose the method your masjid follows, pick Standard or Hanafi Asr, then move any prayer by a few minutes until the two match.",
    },
  ],
  sections: [
    {
      title: "Know When to Pray",
      content:
        "The home screen is built to be read in a second. The next prayer and a live countdown fill a single card at the top, with a bar showing how far through the current prayer window you are. Today's five prayers sit below it, with the current one marked Now and the next one marked Next.",
      items: [
        "Live countdown to the next prayer",
        "Today's five prayers, with Now and Next marked",
        "Sunrise, sunset and the Qibla bearing in one strip",
        "Hijri and Gregorian date",
        "A bell on each prayer to switch its alert on or off",
        "A dua of the day under the timetable",
      ],
    },
    {
      title: "Calculated on the Phone, Not Downloaded",
      content:
        "Each prayer time is the moment the sun reaches the angle its calculation method defines, worked out from the sun's declination and the equation of time for your coordinates. Nothing is fetched, so the times are there on a fresh install with no connection. Where the sun never reaches the Fajr or Isha angle, the night is divided in proportion to it.",
      items: [
        "11 methods: Karachi, Muslim World League, ISNA, Egypt, Umm al-Qura and more",
        "Fajr and Isha angles shown beside every method",
        "Standard or Hanafi Asr",
        "Each prayer adjustable by up to 30 minutes either way",
        "Location from the device, a list of 128 cities, or coordinates",
        "High-latitude handling for long summer twilights",
      ],
    },
    {
      title: "A Qibla Compass That Says When You're There",
      content:
        "The bearing to the Kaaba is a great-circle calculation from your coordinates, so the number itself never depends on the compass. The compass then reads the phone's motion sensors, filters out the jitter, and turns a dial until the Qibla marker sits under the pointer. When it does, the ring fills in and the phone gives a short vibration.",
      items: [
        "Corrected from magnetic to true north",
        "Works with the phone flat in your palm or held upright",
        "Aligned state within three degrees, with haptic feedback",
        "Bearing in degrees and distance to the Kaaba in km",
        "Calibration hint when the sensor's accuracy drops",
        "Shows the bearing as a number on phones with no compass",
      ],
    },
    {
      title: "Adhan Alerts Without a Server",
      content:
        "Prayer alerts are local notifications scheduled on the phone, so there is no push service behind them and nothing to sign up for. You choose how loud they are once, then switch individual prayers on or off.",
      items: [
        "Adhan alarm: the full adhan, even when the phone is on silent",
        "Adhan notification: the adhan with an ordinary notification",
        "Simple notification: a standard sound, without the adhan",
        "Optional reminder 5, 10, 15 or 30 minutes before",
        "Rescheduled after a restart or a change of location or method",
        "A test alert, so you can hear it before you rely on it",
      ],
    },
    {
      title: "Duas, with Their Sources",
      content:
        "Forty supplications from the Quran and the hadith collections ship inside the app, grouped by the part of the day they belong to. Each one opens to its Arabic text set in a typeface that carries every diacritic, with a transliteration, an English translation and the reference it comes from.",
      items: [
        "Eight categories, from morning and evening to travel",
        "Search by title, translation, transliteration or source",
        "Favorites, kept on the device",
        "Copy or share a dua with its reference",
        "Adjustable Arabic text size",
      ],
    },
  ],
  faqs: [
    {
      question: "Is Salah Compass free?",
      answer:
        "Yes. There are no ads, no in-app purchases and no subscription.",
    },
    {
      question: "Does it work without the internet?",
      answer:
        "Yes. Prayer times and the Qibla are calculated on the phone from the sun's position and your location, and the duas, the city list and the adhan recording are part of the app. It makes no network requests, so it keeps working in airplane mode. If your phone cannot get a location fix, choose a city from the built-in list or enter coordinates.",
    },
    {
      question: "How accurate are the prayer times?",
      answer:
        "During development the times were checked against the adhan library for eleven cities, from Quito to Tromsø, on both solstices and both equinoxes, across all eleven methods. They agreed to within a minute, except Asr above 60° north, which can differ by up to two. In practice the bigger difference is the method: choose the one your masjid follows, and use the minute adjustments if its printed timetable adds a margin.",
    },
    {
      question: "How does the Qibla compass work?",
      answer:
        "It calculates the great-circle bearing from your location to the Kaaba and reads your phone's motion sensors to show which way you are facing. It corrects for true north, works with the phone flat or held upright, and confirms with a vibration when you are within three degrees.",
    },
    {
      question: "Does Salah Compass collect my data?",
      answer:
        "No. There is no account, no analytics and no advertising SDK, and the app contains no network code. Your location, settings and favorite duas are stored only on your phone.",
    },
    {
      question: "Which phones does it run on?",
      answer:
        "Android for now. It is a React Native app, so an iPhone version is possible, but I have not built or tested one yet.",
    },
    {
      question: "What is Salah Compass built with?",
      answer:
        "React Native, Expo (SDK 57), Reanimated 4, MMKV and TypeScript — with a prayer-time, Qibla and Hijri engine written in plain TypeScript, and a 187-test Jest suite covering the calculations, hooks and components.",
    },
  ],
  // Not on the Play Store yet. "#" keeps the "Coming soon" status on the page
  // without publishing a link that still 404s. The package ID is final, so on
  // launch day replace "#" with
  // https://play.google.com/store/apps/details?id=com.anwersolangi.salahcompass
  // and flip `released` to true (or delete the line); the download buttons
  // appear on their own.
  released: false,
  links: {
    playstore: "#",
    email: "mailto:me@anwersolangi.com",
    website: "/apps/salah-compass",
  },
  ctaTitle: "Know when to pray. Know where to face.",
  ctaDescription:
    "Prayer times, a Qibla compass, adhan alerts and 40 duas, worked out on your phone with nothing sent anywhere.",
};
