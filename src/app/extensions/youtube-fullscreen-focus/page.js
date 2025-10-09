"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  SoftwareApplicationSchema,
  BreadcrumbSchema,
} from "@/components/SEOComponents";

export default function YouTubeFullscreenFocusPage() {
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

  const breadcrumbItems = [
    { name: "Home", url: "https://anwersolangi.com" },
    { name: "Extensions", url: "https://anwersolangi.com/extensions" },
    {
      name: "YouTube Fullscreen Focus",
      url: "https://anwersolangi.com/extensions/youtube-fullscreen-focus",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SoftwareApplicationSchema
        name="YouTube Fullscreen Focus"
        description="Chrome extension that protects YouTube viewing by blocking accidental keystrokes in fullscreen mode. Perfect for parents and families. Created by Anwer Solangi, React Native developer from Karachi, Pakistan."
        url="https://chromewebstore.google.com/detail/youtube-fullscreen-focus/plkdmggghbaenhibengiabjlbfjipngp"
        applicationCategory="BrowserExtension"
        operatingSystem="Chrome"
      />

      <div className="bg-white">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
          <div className="max-w-5xl w-full">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                  YouTube Fullscreen Focus
                </h1>
                <div className="mt-4 h-px w-24 bg-gray-900"></div>
              </div>

              <div className="max-w-3xl space-y-4">
                <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                  Chrome Extension for Protected Viewing
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Your ultimate protection against accidental keystrokes while
                  watching YouTube videos in fullscreen mode. Built for parents
                  and families by{" "}
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
                  href="https://chromewebstore.google.com/detail/youtube-fullscreen-focus/plkdmggghbaenhibengiabjlbfjipngp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                >
                  Add to Chrome
                </a>
                <a
                  href="https://github.com/anwersolangi/youtube-fullscreen-focus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
                >
                  VIEW ON GITHUB
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
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    Smart Activation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Automatically activates only in YouTube fullscreen mode
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
                  <div className="text-4xl mb-4">👶</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    YouTube Kids Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Works perfectly on both YouTube and YouTube Kids
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
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    Instant Protection
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No configuration needed - works immediately after install
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
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    Visual Feedback
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    See when keystrokes are blocked with subtle notifications
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
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    Customizable
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose which keys remain active in fullscreen
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
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-light mb-2 text-black">
                    Privacy First
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No data collection, no tracking, works offline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-light mb-16 text-black">How to Use</h2>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-0 w-2 h-2 bg-black rounded-full -translate-x-[3.5px] top-2 hidden md:block"></div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-light mb-2 text-black">
                      Install the Extension
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {`Click "Add to Chrome" and the extension will be ready instantly`}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 w-2 h-2 bg-black rounded-full -translate-x-[3.5px] top-2 hidden md:block"></div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-light mb-2 text-black">
                      Go to YouTube or YouTube Kids
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Navigate to any video you want to watch
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 w-2 h-2 bg-black rounded-full -translate-x-[3.5px] top-2 hidden md:block"></div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-light mb-2 text-black">
                      Enter Fullscreen Mode
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Press F key or click the fullscreen button on the video
                      player
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 w-2 h-2 bg-black rounded-full -translate-x-[3.5px] top-2 hidden md:block"></div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-light mb-2 text-black">
                      Enjoy Protected Viewing
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      All keystrokes except Escape will be blocked automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-black p-8 rounded-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-300 mb-4">
                Default Settings
              </p>
              <div className="space-y-3 text-white">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Exit Fullscreen</span>
                  <span className="text-sm text-gray-300">Escape</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Toggle Extension</span>
                  <span className="text-sm text-gray-300">
                    Click extension icon
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customize allowed keys</span>
                  <span className="text-sm text-gray-300">
                    Via extension popup
                  </span>
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
                question="Does this work on YouTube Kids?"
                answer="Yes! The extension fully supports both YouTube and YouTube Kids. It automatically detects which platform you're using and adapts accordingly."
              />
              <FAQItem
                question="Why was this extension created?"
                answer="This extension was created by Anwer Solangi, a React Native developer from Karachi, Pakistan. It was born from a real need - watching his nephew accidentally press keys while watching videos. It's designed specifically for parents and families who want uninterrupted viewing experiences for their children."
              />
              <FAQItem
                question="Can I customize which keys are blocked?"
                answer="Yes! Click the extension icon and you can choose which keys remain active in fullscreen. Escape key always works to ensure you can exit fullscreen."
              />
              <FAQItem
                question="Does this collect any data?"
                answer="No. We respect your privacy completely. The extension works entirely offline, doesn't collect any data, and doesn't track your viewing habits."
              />
              <FAQItem
                question="Will this slow down my browser?"
                answer="Not at all! The extension is extremely lightweight and only activates when you're in fullscreen mode on YouTube. It has virtually no impact on browser performance."
              />
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6 text-black">
              Get Involved
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Love the extension? Help spread the word or contribute to the
              project
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
              >
                Visit My Website
              </Link>
              <a
                href="https://chromewebstore.google.com/detail/youtube-fullscreen-focus/plkdmggghbaenhibengiabjlbfjipngp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
              >
                RATE ON CHROME STORE
              </a>
              <a
                href="https://github.com/anwersolangi/youtube-fullscreen-focus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
              >
                VIEW ON GITHUB
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
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
