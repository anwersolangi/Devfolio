"use client";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Mobile",
    skills: [
      ["React Native", 95],
      ["JavaScript ES6+", 95],
      ["TypeScript", 85],
      ["Redux / MobX", 90],
      ["React Navigation", 95],
      ["Native Modules", 75],
    ],
  },
  {
    title: "Backend",
    skills: [
      ["Firebase", 95],
      ["Node.js", 85],
      ["REST APIs", 95],
      ["GraphQL", 70],
      ["Socket.io", 85],
      ["MongoDB", 75],
    ],
  },
  {
    title: "Tools",
    skills: [
      ["Git / GitHub", 95],
      ["VS Code", 95],
      ["Xcode", 85],
      ["Android Studio", 85],
      ["Postman", 90],
      ["Figma", 75],
    ],
  },
];

const additional = [
  "Expo",
  "RN Paper",
  "Styled Components",
  "Async Storage",
  "Reanimated",
  "Lottie",
  "Push Notifications",
  "CodePush",
  "Fastlane",
  "TestFlight",
  "Play Console",
  "Chrome Ext APIs",
  "Webpack",
  "Babel",
  "Jest",
  "Detox",
];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.05 },
    );
    const node = ref.current;
    if (node) obs.observe(node);
    return () => node && obs.unobserve(node);
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div
          className={`mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="font-mono text-[11px] tracking-[0.14em] text-[#ff6a3d]">
            04 · STACK
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] mt-3 text-[#f4efe7]">
            Tools I reach for.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className="transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${ci * 120}ms`,
              }}
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase mb-4 pb-3 border-b border-white/10">
                {cat.title}
              </div>
              {cat.skills.map(([name, pct], si) => (
                <div key={name} className="mb-4">
                  <div className="flex items-center justify-between text-[13px] mb-1.5">
                    <span className="text-[#f4efe7]">{name}</span>
                    <span className="font-mono text-[11px] text-white/40">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-[3px] bg-[#1f1d1b] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ff6a3d] transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${pct}%` : "0%",
                        transitionDelay: `${ci * 120 + si * 80 + 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-6 rounded-xl bg-[#161514] flex flex-wrap items-center gap-2 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "500ms",
          }}
        >
          <div className="font-mono text-[11px] tracking-[0.1em] text-white/40 mr-2">
            +ALSO:
          </div>
          {additional.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] px-2.5 py-1.5 border border-white/10 rounded-md text-white/62"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
