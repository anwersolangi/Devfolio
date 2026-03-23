"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExtensionPrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "data-collection", title: "Data Collection" },
    { id: "permissions", title: "Permissions Used" },
    { id: "data-storage", title: "Data Storage" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-24">
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/extensions/youtube-fullscreen-focus"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-light">Back to Extension</span>
            </Link>
            <div className="text-sm text-gray-500 font-light">
              Last Updated: October 12, 2025
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-gray-900 text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100 font-light"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main
            className={`lg:col-span-9 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Privacy Policy for YouTube Fullscreen Focus Chrome Extension
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <section id="overview" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Overview
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {`YouTube Fullscreen Focus ("the Extension") is committed to
                    protecting your privacy. This policy explains our data
                    practices.`}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-gray-900 font-medium mb-2">
                      ✅ We do NOT collect any personal data
                    </p>
                    <p className="text-gray-700">
                      The Extension operates entirely locally in your browser
                      and does not collect, store, or transmit any personal
                      information.
                    </p>
                  </div>
                </div>
              </section>

              <section id="data-collection" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Data Collection
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900 font-medium">
                      We do NOT collect any personal data.
                    </strong>{" "}
                    The Extension:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Does not collect, store, or transmit any personal
                      information
                    </li>
                    <li>Does not track your browsing activity</li>
                    <li>Does not use cookies or analytics</li>
                    <li>Does not communicate with external servers</li>
                    <li>Does not share any data with third parties</li>
                  </ul>
                </div>
              </section>

              <section id="permissions" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Permissions Used
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {`The Extension requires certain permissions to function
                    properly. Here's what each permission is used for:`}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        activeTab
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Purpose:</strong> To
                        {`detect when you're on YouTube or YouTube Kids`}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Data Access:</strong>{" "}
                        {`None - only checks the current tab's URL`}
                      </p>
                      <p className="text-gray-600">
                        <strong className="font-medium">Data Storage:</strong>{" "}
                        None
                      </p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        scripting
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Purpose:</strong> To
                        inject code that detects fullscreen mode and blocks
                        keystrokes
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Data Access:</strong>{" "}
                        None - only monitors fullscreen state
                      </p>
                      <p className="text-gray-600">
                        <strong className="font-medium">Data Storage:</strong>{" "}
                        None
                      </p>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        storage (Chrome Storage API)
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Purpose:</strong> To
                        save your enable/disable preference
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Data Stored:</strong>{" "}
                        Only a single boolean value (on/off)
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong className="font-medium">Data Location:</strong>{" "}
                        Stored locally in your browser only
                      </p>
                      <p className="text-gray-600">
                        <strong className="font-medium">Data Sharing:</strong>{" "}
                        Never shared or transmitted
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="data-storage" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  How the Extension Works
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Extension operates entirely locally in your browser by:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Detecting when you enter fullscreen mode on YouTube</li>
                    <li>
                      Temporarily blocking keyboard inputs to prevent accidental
                      interruptions
                    </li>
                    <li>
                      Restoring keyboard functionality when you exit fullscreen
                    </li>
                  </ol>
                  <p>
                    All processing happens in your browser. No data is sent to
                    any server or third party.
                  </p>
                </div>
              </section>

              <section id="third-party" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Third-Party Services
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Extension does not use any third-party services,
                    analytics, or tracking tools.
                  </p>
                  <p>
                    We do not integrate with Google Analytics, advertising
                    networks, or any other external services.
                  </p>
                </div>
              </section>

              <section id="children-privacy" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  {`Children's Privacy`}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Extension is safe for users of all ages, including
                    children. We do not collect any information from anyone,
                    including children under 13.
                  </p>
                  <p>
                    The Extension is specifically designed to work with YouTube
                    Kids, making it safe for family viewing.
                  </p>
                </div>
              </section>

              <section id="changes" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {`We may update this Privacy Policy from time to time. Any
                    changes will be reflected by updating the "Last Updated"
                    date at the top of this policy.`}
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                  <p>
                    Continued use of the Extension after any modifications to
                    this Privacy Policy constitutes your acceptance of such
                    changes.
                  </p>
                </div>
              </section>

              <section id="contact" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy, please contact us:
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                        <a
                          href="mailto:me@anwersolangi.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          me@anwersolangi.com
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        <a
                          href="https://anwersolangi.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          anwersolangi.com
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-600">Karachi, Pakistan</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    We will respond to your inquiry as soon as possible,
                    typically within 48 hours.
                  </p>
                </div>
              </section>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 font-medium">
                      Summary:
                    </strong>{" "}
                    YouTube Fullscreen Focus is a privacy-focused Chrome
                    extension that does not collect, store, or transmit any
                    personal data. All functionality operates locally in your
                    browser.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    🔗 Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/extensions/youtube-fullscreen-focus"
                      className="block text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      ← Back to Extension Page
                    </Link>
                    <a
                      href="https://chrome.google.com/webstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Install from Chrome Web Store →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
