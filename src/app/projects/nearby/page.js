"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NearbyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState([]);
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = featuresRef.current.indexOf(entry.target);
          if (index !== -1 && !activeFeatures.includes(index)) {
            setActiveFeatures((prev) => [...prev, index]);
          }
        }
      });
    }, observerOptions);

    featuresRef.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => observer.disconnect();
  }, [activeFeatures]);

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
        <div className="max-w-5xl w-full">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                Nearby
              </h1>
              <div className="mt-4 h-px w-24 bg-gray-900"></div>
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                Location-Based Social Discovery App
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Find and chat with people around you using GPS technology and
                easy filters. Built with React Native and Firebase by{" "}
                <Link
                  href="/"
                  className="text-gray-900 hover:underline font-normal"
                >
                  Anwer Solangi
                </Link>
                , a React Native developer from Karachi, Pakistan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nearbyreactive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download on Play Store
              </a>
              <a
                href="https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
              >
                VIEW ON CODECANYON
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-light mb-16 text-black">
              Key Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                ref={(el) => (featuresRef.current[0] = el)}
                className={`bg-white p-6 rounded-lg transition-all duration-700 ${
                  activeFeatures.includes(0)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <svg
                  className="w-10 h-10 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  GPS Technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Find people near you using precise GPS location tracking
                </p>
              </div>

              <div
                ref={(el) => (featuresRef.current[1] = el)}
                className={`bg-white p-6 rounded-lg transition-all duration-700 ${
                  activeFeatures.includes(1)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <svg
                  className="w-10 h-10 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Real-time Chat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  One-to-one messaging with Firebase real-time database
                </p>
              </div>

              <div
                ref={(el) => (featuresRef.current[2] = el)}
                className={`bg-white p-6 rounded-lg transition-all duration-700 ${
                  activeFeatures.includes(2)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <svg
                  className="w-10 h-10 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Easy Filters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Filter users by distance, interests, and preferences
                </p>
              </div>

              <div
                ref={(el) => (featuresRef.current[3] = el)}
                className={`bg-white p-6 rounded-lg transition-all duration-700 ${
                  activeFeatures.includes(3)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <svg
                  className="w-10 h-10 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Image Sharing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Share photos using Firebase Cloud Storage
                </p>
              </div>

              <div
                ref={(el) => (featuresRef.current[4] = el)}
                className={`bg-white p-6 rounded-lg transition-all duration-700 ${
                  activeFeatures.includes(4)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <svg
                  className="w-10 h-10 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Multi Login
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multiple authentication options for easy access
                </p>
              </div>

              <div
                ref={(el) => (featuresRef.current[5] = el)}
                className={`bg-white p-6 rounded-lg transition-all duration-700 ${
                  activeFeatures.includes(5)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "750ms" }}
              >
                <svg
                  className="w-10 h-10 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Payment Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built-in payment system for monetization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-black">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  React Native for cross-platform development
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  GPS location services integration
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Custom UI components and animations
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-black">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Firebase Real-time Database
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Firebase Cloud Storage for images
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Firebase Authentication
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-black p-8 rounded-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl font-light">Performance</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-light mb-2">10,000+</div>
                <div className="text-sm text-gray-300">
                  Play Store Downloads
                </div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">iOS & Android</div>
                <div className="text-sm text-gray-300">
                  Cross-platform Support
                </div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">Real-time</div>
                <div className="text-sm text-gray-300">Chat Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Is Nearby available for both iOS and Android?"
              answer="Yes! Nearby is built with React Native, making it available for both iOS and Android platforms. You can download it from the Google Play Store."
            />
            <FAQItem
              question="How does the location feature work?"
              answer="Nearby uses GPS technology to determine your location and show you people nearby. The app uses efficient location services to minimize battery usage while providing accurate results."
            />
            <FAQItem
              question="Is my data secure?"
              answer="Absolutely! All data is stored securely using Firebase with industry-standard encryption. Your location is only used to connect you with nearby users and is not shared without your permission."
            />
            <FAQItem
              question="Can I customize the app for my business?"
              answer="Yes! The app is available for purchase on CodeCanyon with full source code. You can customize it according to your business needs and brand it as your own."
            />
            <FAQItem
              question="Does it require a server setup?"
              answer="No! Nearby uses Firebase as its backend, so you don't need to worry about server setup, maintenance, or scaling. Firebase handles everything for you."
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-black">
            Ready to Launch Your Own?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Get the complete source code and start your location-based social
            platform today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
            >
              Purchase on CodeCanyon
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.nearbyreactive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
            >
              TRY THE APP
            </a>
            <Link
              href="/"
              className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
            >
              CONTACT DEVELOPER
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300">
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-light text-gray-900">{question}</span>
        <span className="text-gray-400 ml-4">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
