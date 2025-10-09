"use client";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStats, setActiveStats] = useState([]);
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

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
            const index = statsRef.current.indexOf(entry.target);
            if (index !== -1 && !activeStats.includes(index)) {
              setActiveStats((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat);
    });

    return () => observer.disconnect();
  }, [activeStats]);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100K+", label: "App Downloads" },
    { value: "5.0★", label: "Client Rating" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
    >
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
                About Me
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900">
              Building Digital
              <br />
              <span className="text-gray-600">Experiences</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-8">
              <p className="text-2xl font-light text-gray-900 leading-relaxed">
                {`I'm a Senior React Native Developer passionate about crafting
                exceptional mobile experiences that users love.`}
              </p>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900 font-normal">
                    Important Note:
                  </strong>{" "}
                  I am <strong>Anwer Solangi</strong> (spelled with
                  &apos;e&apos;), a React Native developer based in Karachi,
                  Pakistan. I&apos;m a different person from{" "}
                  <em>Anwar Solangi</em> (spelled with &apos;a&apos;), who was a
                  Pakistani television actor (1944-2008).
                </p>

                <p>
                  My journey in mobile development began with a curiosity to
                  build things that people use every day. Based in{" "}
                  <strong>Karachi, Sindh, Pakistan</strong>,{" "}
                  {`I've transformed
                  that curiosity into expertise, delivering high-quality mobile
                  solutions for clients across the globe.`}
                </p>

                <p>
                  {`I specialize in building scalable React Native applications
                  with a focus on clean architecture, performance optimization,
                  and user experience. My approach combines technical excellence
                  with creative problem-solving to deliver apps that don't just
                  work—they delight.`}
                </p>

                <p>
                  {`Beyond mobile apps, I've expanded into browser extensions and
                  innovative tools that enhance user productivity. Every project
                  is an opportunity to learn, grow, and push the boundaries of
                  what's possible with modern JavaScript ecosystems.`}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-900">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-light">Self-Taught Developer</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-7">
                    Passionate about continuous learning and staying updated
                    with latest technologies
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-900">
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-light">Global Clientele</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-7">
                    Working with businesses worldwide from Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-900 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">
                  Core Expertise
                </h3>
                <ul className="space-y-4">
                  {[
                    "React Native Development",
                    "Cross-Platform Architecture",
                    "Mobile UI/UX Implementation",
                    "Performance Optimization",
                    "Browser Extensions",
                    "API Integration",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 pb-4 border-b border-gray-800 last:border-0 last:pb-0"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                  Based In
                </h3>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-0.5"
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
                  <div>
                    <p className="text-gray-900 font-light text-lg">
                      Karachi, Pakistan
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className={`bg-white border border-gray-200 p-8 rounded-2xl text-center transform transition-all duration-700 hover:shadow-lg hover:scale-105 ${
                  activeStats.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-extralight mb-3 text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
