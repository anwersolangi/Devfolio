"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function WhatsupFirePage() {
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
                WhatsupFire
              </h1>
              <div className="mt-4 h-px w-24 bg-gray-900"></div>
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                Real-time Messaging Application
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                A complete WhatsApp-like messaging app with real-time chat,
                image sharing, and 24-hour stories. Built with React Native and
                Firebase by{" "}
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
                href="https://codecanyon.net/item/whatsupfire-react-native-messenger/30632195"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Purchase on CodeCanyon
              </a>
              <Link
                href="/"
                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
              >
                CONTACT DEVELOPER
              </Link>
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Real-time Chat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  One-to-one messaging with instant delivery using Firebase
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Image Sharing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Send and receive images with Firebase Cloud Storage
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  24-Hour Stories
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Share daily stories that disappear after 24 hours
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Phone Authentication
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure login with Firebase phone number authentication
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Fast & Secure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lightning-fast performance with enterprise-grade security
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-light mb-2 text-black">
                  Cross-platform
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Works seamlessly on both iOS and Android devices
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
                  React Native for native experience
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Custom chat UI components
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Stories feature with timer
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
                  Firebase Cloud Storage
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  Firebase Phone Authentication
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <h3 className="text-xl font-light">Perfect For</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-lg font-light mb-2">Startups</div>
                <div className="text-sm text-gray-300">
                  Launch your messaging platform quickly
                </div>
              </div>
              <div>
                <div className="text-lg font-light mb-2">Businesses</div>
                <div className="text-sm text-gray-300">
                  Internal team communication
                </div>
              </div>
              <div>
                <div className="text-lg font-light mb-2">Communities</div>
                <div className="text-sm text-gray-300">
                  Connect your community members
                </div>
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
              question="Can I customize the app design?"
              answer="Yes! You get the complete source code, allowing you to customize every aspect of the app including colors, fonts, layouts, and features to match your brand."
            />
            <FAQItem
              question="Does it require server setup?"
              answer="No! WhatsupFire uses Firebase as its backend, so you don't need to set up or maintain any servers. Firebase handles all the infrastructure, scaling, and security for you."
            />
            <FAQItem
              question="Is it suitable for commercial use?"
              answer="Absolutely! Once you purchase the source code from CodeCanyon, you can use it for commercial purposes, rebrand it, and launch your own messaging platform."
            />
            <FAQItem
              question="What support is included?"
              answer="The package includes comprehensive documentation to help you set up and customize the app. For additional support, you can contact the developer through CodeCanyon."
            />
            <FAQItem
              question="Can I add group chat functionality?"
              answer="The current version focuses on one-to-one chat and stories. However, with the full source code, you can extend it to add group chat and other features as needed."
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-black">
            Launch Your Messaging Platform
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Get the complete source code and start your own WhatsApp-like
            messaging app today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://codecanyon.net/item/whatsupfire-react-native-messenger/30632195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
            >
              Purchase on CodeCanyon
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
