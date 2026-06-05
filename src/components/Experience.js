"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    years: "2019 — Now",
    role: "Senior React Native Developer",
    org: "Freelance · Remote · Karachi, Pakistan",
    chips: ["Fiverr", "CodeCanyon", "Direct clients"],
    bullets: [
      "Completed 50+ successful mobile app projects for international clients",
      "Built and sold React Native templates on CodeCanyon with active sales",
      "Shipped location-based social app with 10K+ Play Store downloads",
      "5★ ratings across Fiverr, CodeCanyon and direct client work",
      "Deep Firebase integration, real-time features, and GPS technology",
    ],
  },
  {
    years: "2018 — Now",
    role: "Independent Mobile Developer",
    org: "Self-directed projects",
    chips: ["CodeCanyon", "GitHub", "Play Store"],
    bullets: [
      "Published multiple React Native templates on the CodeCanyon marketplace",
      "Active open-source contributor across React Native and the JS ecosystem",
      "Built messaging apps, location services, and video platforms",
      "Play Store deployment and ongoing maintenance for production apps",
      "Sharing reels and tutorials with the broader React Native community",
    ],
  },
];

export default function Experience() {
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
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16 bg-[#161514]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <div className="font-mono text-[11px] tracking-[0.14em] text-[#ff6a3d]">
            05 · EXPERIENCE
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] mt-3 text-[#f4efe7]">
            The track record.
          </h2>
        </div>

        {experiences.map((x, i) => (
          <article
            key={x.role}
            className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 py-10 border-t border-white/10 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div className="font-mono text-[12px] tracking-[0.1em] text-[#ffb27a] pt-1">
              {x.years}
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#f4efe7]">
                {x.role}
              </div>
              <div className="font-mono text-[12px] tracking-[0.04em] text-white/40 mt-1.5">
                {x.org}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {x.chips.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/62"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mt-5 list-none p-0">
                {x.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-4 text-sm text-white/62 leading-[1.5]"
                  >
                    <span
                      className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#ff6a3d]"
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
