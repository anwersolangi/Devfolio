"use client";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !activeCards.includes(index)) {
              setActiveCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [activeCards]);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: (
        <svg
          className="w-10 h-10 text-gray-700"
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
      ),
      skills: [
        { name: "React Native", level: 95 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Redux / MobX", level: 90 },
        { name: "React Navigation", level: 95 },
        { name: "Native Modules", level: 75 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: (
        <svg
          className="w-10 h-10 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        { name: "Firebase", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 70 },
        { name: "Socket.io", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: (
        <svg
          className="w-10 h-10 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          />
        </svg>
      ),
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Xcode", level: 85 },
        { name: "Android Studio", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  const additionalSkills = [
    "Expo",
    "React Native Paper",
    "Styled Components",
    "Async Storage",
    "React Native Reanimated",
    "Lottie Animations",
    "Push Notifications",
    "CodePush",
    "Fastlane",
    "TestFlight",
    "Google Play Console",
    "Chrome Extension APIs",
    "Webpack",
    "Babel",
    "Jest",
    "Detox",
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 bg-white">
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
                Technical Stack
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900">
              Tools &amp; Technologies
            </h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl font-light">
              A comprehensive toolkit built over years of experience in React
              Native development and mobile app architecture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-700 ${
                  activeCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-8">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-light text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 font-light">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-gray-800 to-gray-600 rounded-full transition-all duration-1000 ease-out ${
                            activeCards.includes(index) ? "" : "w-0"
                          }`}
                          style={{
                            width: activeCards.includes(index)
                              ? `${skill.level}%`
                              : "0%",
                            transitionDelay: `${index * 150 + i * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className={`bg-gray-900 p-10 rounded-2xl shadow-xl transition-all duration-700 ${
              activeCards.includes(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
                Additional Technologies
              </h3>
              <p className="text-white font-light text-lg">
                Extended toolkit for modern mobile development
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-light hover:bg-white/20 transition-colors duration-300 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="text-lg font-light text-gray-900">
                  Continuous Learning
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Staying updated with the latest React Native updates, mobile
                development best practices, and emerging technologies in the
                JavaScript ecosystem.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-lg font-light text-gray-900">
                  Open Source Contributor
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Active in the React Native community, sharing knowledge through
                GitHub repositories, technical articles, and helping fellow
                developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
