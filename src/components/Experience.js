"use client";
import { useState, useEffect, useRef } from "react";

export default function Experience() {
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

  const experiences = [
    {
      role: "Senior React Native Developer",
      type: "Freelance / Remote",
      period: "2019 - Present",
      location: "Karachi, Pakistan",
      description:
        "Delivering high-quality mobile applications to clients worldwide through various freelance platforms. Specialized in React Native development with Firebase integration.",
      achievements: [
        "Completed 50+ successful mobile app projects for international clients",
        "Built and sold React Native templates on CodeCanyon with active sales",
        "Developed location-based social app with 10,000+ downloads on Play Store",
        "Maintained 5-star ratings and positive client feedback across platforms",
        "Specialized in Firebase integration, real-time features, and GPS technology",
      ],
      platforms: ["Fiverr", "CodeCanyon", "Direct Clients"],
    },
    {
      role: "Mobile App Development",
      type: "Independent Projects",
      period: "2018 - Present",
      location: "Remote",
      description:
        "Creating and maintaining commercial React Native applications and open-source projects for the developer community.",
      achievements: [
        "Published multiple React Native templates on CodeCanyon marketplace",
        "Open-source contributor with projects on GitHub",
        "Expertise in building messaging apps, location services, and video platforms",
        "Experience with Play Store deployment and app maintenance",
        "Active in React Native community, sharing knowledge and best practices",
      ],
      platforms: ["CodeCanyon", "GitHub", "Play Store"],
    },
  ];

  const expertise = [
    {
      category: "Mobile Development",
      items: [
        "React Native",
        "iOS & Android",
        "Cross-platform Apps",
        "Native Modules",
      ],
    },
    {
      category: "Backend & Services",
      items: [
        "Firebase",
        "Real-time Database",
        "Cloud Storage",
        "Phone Authentication",
      ],
    },
    {
      category: "Key Features",
      items: [
        "GPS/Location Services",
        "Real-time Chat",
        "Push Notifications",
        "Payment Integration",
      ],
    },
    {
      category: "Tools & Deployment",
      items: [
        "Git/GitHub",
        "Play Store Publishing",
        "App Store Connect",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Career
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6">
              Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl font-light">
              Remote React Native developer with a proven track record of
              delivering successful mobile applications to clients worldwide.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 border-l-2 border-gray-200 hover:border-gray-400 transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 rounded-full border-4 border-white"></div>

                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-light text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-gray-600 font-light">
                          {exp.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-light text-gray-900">
                          {exp.period}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
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
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full font-light"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 font-light"
                        >
                          <svg
                            className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-10 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-light text-white mb-8">
              Areas of Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area, index) => (
                <div key={index}>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
                    {area.category}
                  </h4>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-white/90 font-light flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 items-center justify-between p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <div>
                <p className="text-sm font-light text-gray-900">
                  Available for Freelance Work
                </p>
                <p className="text-xs text-gray-600">
                  Open to new projects and collaborations
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-light hover:bg-gray-800 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
