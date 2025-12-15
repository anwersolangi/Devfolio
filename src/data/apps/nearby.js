export const nearby = {
  slug: "nearby",
  name: "Nearby",
  icon: "/nearby_icon.png",
  layout: 2,
  subtitle: "Location-Based Social Discovery App",
  description:
    "Find and chat with people around you using GPS technology and easy filters.",
  fullDescription:
    "Nearby is a location-based social discovery app that allows you to find and chat with people around you using GPS technology. It features real-time messaging, image sharing, and easy filters to connect with people nearby. Whether you are looking for new friends or networking opportunities, Nearby makes it simple.",
  features: [
    "GPS Proximity Search",
    "Real-time 1-on-1 Chat",
    "Advanced User Filters",
    "Image & Media Sharing",
    "Multi-Account Support",
    "Secure Payment Gateway",
    "Push Notifications",
    "Profile Customization"
  ],
  techStack: {
    frontend: ["React Native", "Expo", "Gifted Chat", "Reanimated"],
    backend: ["Firebase Realtime DB", "Cloud Functions", "Firebase Auth"],
    features: ["GeoFire", "In-App Purchases", "Image Compression"]
  },
  perfectFor: [
    {
      title: "Social Networking",
      description: "Meet people in your immediate vicinity and expand your social circle."
    },
    {
      title: "Community Events",
      description: "Connect with attendees at conferences, festivals, or local gatherings."
    },
    {
      title: "Dating & Matchmaking",
      description: "A robust foundation for building location-aware dating applications."
    }
  ],
  sections: [
    {
      title: "Key Functionality",
      content: "The app leverages Geo-hashing technology to efficiently query users within a specific radius, ensuring battery efficiency and fast query times.",
      items: [
        "Dynamic radius adjustment",
        "Block and Report user mechanisms",
        "End-to-end encrypted messaging",
        "Real-time presence indicators"
      ]
    }
  ],
  faqs: [
    {
      question: "Is Nearby available for both iOS and Android?",
      answer:
        "Yes! Nearby is built with React Native, making it available for both iOS and Android platforms with a single codebase.",
    },
    {
      question: "How does the location feature work?",
      answer:
        "Nearby uses GPS technology to determine your accurate location and queries the database for other users within your set radius.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! All data is stored securely using Firebase with industry-standard encryption and security rules.",
    },
  ],
  links: {
    playStore:
      "https://play.google.com/store/apps/details?id=com.nearbyreactive",
    codecanyon:
      "https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722",
  },
  ctaTitle: "Ready to Launch Your Own?",
  ctaDescription:
    "Get the complete source code and start your location-based social platform today",
};

