"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    const node = ref.current;
    if (node) obs.observe(node);
    return () => node && obs.unobserve(node);
  }, []);

  const stats = [
    ["50+", "Projects delivered"],
    ["100K+", "App downloads"],
    ["5.0★", "Client rating"],
    ["5+", "Years of RN"],
  ];

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-[#ff6a3d]">
              03 · ABOUT
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1] mt-3 text-[#f4efe7]">
              Building things people use every day.
            </h2>
          </div>
          <div>
            <p className="text-lg text-white/62 leading-[1.6]">
              I started writing React Native because I wanted to ship the kinds
              of apps I keep on my own home screen. Five years and fifty-plus
              projects later, I'm still here — based in Karachi, working with
              founders and product teams worldwide on apps that have to feel{" "}
              <em className="text-[#f4efe7] not-italic font-italic-serif">
                fast
              </em>{" "}
              and{" "}
              <em className="text-[#f4efe7] not-italic font-italic-serif">
                obvious
              </em>
              .
            </p>
            <p className="text-lg text-white/62 leading-[1.6] mt-5">
              My sweet spot is taking an early-stage idea and walking it through
              architecture, motion, Firebase wiring, payments, and submission.
              I'm fluent in the boring parts (CodePush, Fastlane, TestFlight,
              Play Console) so you don't have to be.
            </p>

            <div className="mt-7 p-5 rounded-xl bg-[#1f1d1b] text-sm text-white/62 leading-[1.6]">
              <span className="font-mono text-[11px] tracking-[0.08em] text-[#ffb27a]">
                NOTE ·{" "}
              </span>
              I'm{" "}
              <strong className="text-[#f4efe7] font-semibold">Anwer</strong>{" "}
              Solangi (with an 'e'), the React Native developer. Different
              person from <em className="font-italic-serif">Anwar</em> Solangi
              (with an 'a'), the late Pakistani TV actor (1944–2008).
            </div>
          </div>
        </div>

        {/* Stats banner */}
        <div className="mt-20 border-t border-b border-white/10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map(([v, l], i) => (
              <div
                key={l}
                className={`px-4 md:px-8 ${
                  i === 0 ? "" : "md:border-l md:border-white/10"
                } transition-all duration-700`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-extrabold tracking-[-0.04em] leading-[1] text-[#ff6a3d]">
                  {v}
                </div>
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/62 mt-3">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
