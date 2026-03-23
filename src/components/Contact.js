"use client";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/anwersolangi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/anwersolangi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/anwerxolangi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Medium",
      url: "https://medium.com/@anwersolangi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Get In Touch
              </span>
              <div className="w-12 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6">
              {`Let's Work Together`}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              {`I'm currently available for freelance projects and full-time
              opportunities. Whether you need a mobile app, browser extension,
              or just want to say hello, I'd love to hear from you.`}
            </p>
          </div>

          <div className="text-center mb-16">
            <a
              href="mailto:me@anwersolangi.com"
              className="group inline-flex items-center gap-3 text-3xl md:text-4xl font-light text-gray-900 hover:text-gray-600 transition-colors duration-300"
            >
              <span className="relative">
                me@anwersolangi.com
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-500"></span>
              </span>
              <svg
                className="w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
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
                <h3 className="text-lg font-light text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">
                Karachi, Sindh, Pakistan
                <br />
                <span className="text-sm text-gray-500">
                  Available for remote work worldwide
                </span>
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-light text-gray-900">
                  Availability
                </h3>
              </div>
              <p className="text-gray-600">
                Open to new opportunities
                <br />
                <span className="text-sm text-gray-500">
                  Freelance & Full-time positions
                </span>
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
              Connect With Me
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-md transition-all duration-300"
                  aria-label={link.name}
                >
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-sm font-light text-gray-700 group-hover:text-gray-900">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/anwer-solangi-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
