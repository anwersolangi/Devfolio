export const velocityTrack = {
  slug: "velocity-track",
  name: "Velocity Track",
  icon: "/velocity_track_icon.png",
  layout: 2,
  subtitle: "Privacy-Focused GPS Speedometer",
  description:
    "Track your speed, distance, and altitude with complete offline functionality and zero data collection.",
  fullDescription:
    "VelocityTrack is a privacy-focused GPS speedometer designed for accuracy and simplicity. Track your speed, distance, and altitude across any vehicle—car, train, bike, or boat—with complete offline functionality. We believe your location data belongs to you. That is why VelocityTrack operates entirely on your device with zero data collection.",
  features: [
    "100% Offline Functionality",
    "Real-Time Speed Tracking",
    "HUD Mode (Heads-Up Display)",
    "Altitude & Elevation Altimeter",
    "Trip Logs & Statistics",
    "Speed Zones & Visual Cues",
    "Battery Optimized Algorithms",
    "Multiple Units (km/h, mph, knots)"
  ],
  techStack: {
    frontend: ["React Native", "Expo", "Reanimated 2"],
    backend: ["Local Storage", "No Backend", "Offline First"],
    features: ["GPS Sensors", "Accelerometer", "Battery Optimization"]
  },
  perfectFor: [
    {
      title: "Car Drivers",
      description: "Verify speedometer accuracy and use HUD for safe night driving."
    },
    {
      title: "Cyclists",
      description: "Track ride performance, distance, and speed in real-time."
    },
    {
      title: "Hikers & Outdoor",
      description: "Monitor elevation gain and walking pace without needing a signal."
    },
    {
      title: "Commuters",
      description: "See the real-time speed of your train or bus commute."
    }
  ],
  sections: [
    {
      title: "Privacy First: No Tracking",
      content: "Unlike many other utility apps, we respect your digital privacy. VelocityTrack requires no accounts, no sign-ups, and collects zero analytics.",
      items: [
        "100% Offline: Works without internet",
        "No Data Collection: History stays on device",
        "No Accounts: Just open and use",
        "No Analytics: We don't track usage"
      ]
    },
    {
      title: "Advanced Speedometer Features",
      content: "Get real-time metrics in a clean, digital interface suitable for driving, cycling, or flying.",
      items: [
        "High-precision GPS tracking",
        "Switch between km/h, mph, knots, m/s",
        "HUD Mode for windshield mirroring",
        "Visual color cues for speed zones"
      ]
    },
    {
      title: "Altitude & Elevation",
      content: "More than just a speed tracker, helpful for outdoor enthusiasts to monitor their environment.",
      items: [
        "Altimeter in meters or feet",
        "Vertical trends (climbing/descending)",
        "Ideal for hiking and aviation"
      ]
    }
  ],
  faqs: [
    {
      question: "Does it strictly work offline?",
      answer: "Yes. Use it absolutely anywhere—remote ranges, open ocean, or tunnels (where GPS permits). No internet or WiFi is ever required."
    },
    {
      question: "How does HUD mode work?",
      answer: "HUD (Heads-Up Display) mode mirrors the interface so you can place your phone on the dashboard and see the reflection clearly on your windshield at night."
    },
    {
      question: "Is it battery efficient?",
      answer: "Yes. The app intelligently adjusts update frequency based on your movement (Stationary vs. Highway speeds) to minimize battery drain."
    }
  ],
  links: {
    playstore: "#", // Placeholder
    email: "mailto:me@anwersolangi.com",
    website: "https://apps.anwersolangi.com/velocity-track"
  },
  ctaTitle: "Experience True Privacy",
  ctaDescription:
    "Download VelocityTrack today for a clean, accurate, and private way to measure your speed.",
};
