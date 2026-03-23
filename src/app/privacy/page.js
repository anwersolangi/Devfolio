"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
    { id: "information-collection", title: "Information Collection" },
    { id: "firebase", title: "Firebase Services" },
    { id: "admob", title: "Google AdMob" },
    { id: "data-security", title: "Data Security" },
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
              href="/"
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
              <span className="font-light">Back to Portfolio</span>
            </Link>
            <div className="text-sm text-gray-500 font-light">
              Last Updated: October 2025
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
                Privacy policy for mobile applications developed by Anwer
                Solangi
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <section id="overview" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Overview
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    This Privacy Policy applies to all mobile applications
                    developed and published by Anwer Solangi. This policy
                    describes how information is handled in our applications.
                  </p>
                  <p>
                    <strong className="text-gray-900 font-medium">
                      Important Notice:
                    </strong>{" "}
                    We, as the developer, do not directly collect, store, or
                    share any personal information from users. However, our
                    applications use third-party services (Firebase and Google
                    AdMob) that may collect information as described in their
                    respective privacy policies.
                  </p>
                </div>
              </section>

              <section
                id="information-collection"
                className="mb-16 scroll-mt-32"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Information Collection and Use
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Our applications do not directly collect any personal
                    information. We do not have access to, store, or process any
                    user data on our servers.
                  </p>
                  <p>
                    However, our applications integrate third-party services
                    that may collect information used to identify you or improve
                    their services. These third-party services have their own
                    privacy policies and operate independently.
                  </p>
                </div>
              </section>

              <section id="firebase" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Firebase Services
                </h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      What is Firebase?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Firebase is a mobile and web application development
                      platform provided by Google LLC. Our applications use
                      Firebase services for backend functionality,
                      authentication, database, and storage.
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-gray-900 font-medium">
                        Firebase Services Used:
                      </strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong className="font-medium">
                          Firebase Authentication:
                        </strong>{" "}
                        For user login and account management
                      </li>
                      <li>
                        <strong className="font-medium">
                          Firebase Firestore:
                        </strong>{" "}
                        For storing application data
                      </li>
                      <li>
                        <strong className="font-medium">
                          Firebase Storage:
                        </strong>{" "}
                        For storing user-uploaded files and media
                      </li>
                      <li>
                        <strong className="font-medium">
                          Firebase Cloud Messaging:
                        </strong>{" "}
                        For push notifications
                      </li>
                    </ul>

                    <p>
                      <strong className="text-gray-900 font-medium">
                        Information Firebase May Collect:
                      </strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Device information (model, operating system, unique
                        identifiers)
                      </li>
                      <li>Usage data and analytics</li>
                      <li>Crash reports and performance data</li>
                      <li>Information you provide during authentication</li>
                    </ul>

                    <p>
                      Firebase processes this data according to{" "}
                      <a
                        href="https://firebase.google.com/support/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        {`Google's Privacy Policy`}
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://firebase.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Firebase Terms of Service
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section id="admob" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Google AdMob
                </h2>
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      What is AdMob?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Google AdMob is an advertising platform provided by Google
                      LLC that displays advertisements in mobile applications.
                      Some of our applications may show ads through AdMob.
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-gray-900 font-medium">
                        Information AdMob May Collect:
                      </strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Device identifiers (such as Advertising ID)</li>
                      <li>IP address</li>
                      <li>Device information and specifications</li>
                      <li>Ad interaction data</li>
                      <li>
                        General location information (country, city level)
                      </li>
                    </ul>

                    <p>
                      <strong className="text-gray-900 font-medium">
                        Personalized Ads:
                      </strong>
                    </p>
                    <p>
                      AdMob may use the collected information to display
                      personalized advertisements based on your interests. You
                      can opt-out of personalized advertising by adjusting your
                      device settings:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong className="font-medium">Android:</strong>{" "}
                        Settings → Google → Ads → Opt out of Ads Personalization
                      </li>
                      <li>
                        <strong className="font-medium">iOS:</strong> Settings →
                        Privacy → Apple Advertising → Turn off Personalized Ads
                      </li>
                    </ul>

                    <p>
                      For more information, please review{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        {`Google's Privacy Policy`}
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://support.google.com/admob/answer/6128543"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        {`AdMob's Privacy Information`}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section id="data-security" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Data Security
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Since we do not directly collect or store user data, the
                    security of your information depends on the third-party
                    services we use (Firebase and Google AdMob).
                  </p>
                  <p>
                    Both Firebase and Google implement industry-standard
                    security measures to protect data. However, please remember
                    that no method of transmission over the internet or
                    electronic storage is 100% secure.
                  </p>
                  <p>
                    We recommend reviewing the security practices of Firebase
                    and Google for detailed information about how they protect
                    your data.
                  </p>
                </div>
              </section>

              <section id="children-privacy" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  {`Children's Privacy`}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Our applications are not directed to children under the age
                    of 13. We do not knowingly collect personal information from
                    children under 13.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has
                    provided information through our applications, please
                    contact us immediately, and we will work with the
                    third-party services to address the issue.
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
                    Continued use of our applications after any modifications to
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
                    this Privacy Policy or the data practices of our
                    applications, please contact us:
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
                    <strong className="text-gray-900 font-medium">Note:</strong>{" "}
                    This privacy policy applies to mobile applications developed
                    by Anwer Solangi. For privacy practices specific to
                    individual applications, please refer to the information
                    provided within each application or on their respective
                    store listings.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
