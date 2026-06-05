"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import { reelsData } from "@/data/reels";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  // Pick three reels for the hero collage: the centerpiece + two flanking ones.
  // Defaults work even if you change the reels data.
  const center = reelsData[reelsData.length - 1] || null;
  const left = reelsData[reelsData.length - 2] || null;
  const right = reelsData[reelsData.length - 3] || null;

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="glow-orb"
        style={{ top: -200, right: -200, width: 800, height: 800 }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          {/* Left: claim + CTAs */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6a3d]/10 border border-[#ff6a3d]/25 font-mono text-[11px] tracking-[0.06em] text-[#ffb27a]">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#7af0a8]"
                style={{ boxShadow: "0 0 8px #7af0a8" }}
              />
              AVAILABLE FOR FREELANCE · KARACHI
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[108px] font-extrabold leading-[0.92] tracking-[-0.045em] mt-6 text-[#f4efe7]">
              I build
              <br />
              mobile apps
              <br />
              that{" "}
              <span className="font-italic-serif text-[#ff6a3d] font-normal">
                ship
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-white/62 leading-[1.5] max-w-xl mt-8">
              Senior React Native developer with 5+ years and 100K+ downloads
              behind me. I take ideas from sketch to App Store — cleanly,
              quickly, and with the kind of motion design that turns into a
              reel.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-[#ff6a3d] text-[#1a0a02] font-bold text-sm hover:opacity-90 transition"
              >
                Start a project →
              </a>
              <a
                href="#reels"
                className="px-5 py-3.5 rounded-xl border border-white/12 text-[#f4efe7] font-semibold text-sm hover:bg-white/5 transition"
              >
                See the reels
              </a>
              <a
                href="/anwer-solangi-resume.pdf"
                download
                className="px-5 py-3.5 rounded-xl border border-white/12 text-white/70 font-mono text-[13px] hover:bg-white/5 transition"
              >
                ↓ resume.pdf
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 font-mono text-[11px] tracking-[0.08em] text-white/40 max-w-md">
              <div>
                <div className="text-[#f4efe7]">FIVERR</div>
                5.0★ · top rated
              </div>
              <div>
                <div className="text-[#f4efe7]">CODECANYON</div>
                5+ products
              </div>
              <div>
                <div className="text-[#f4efe7]">PLAY STORE</div>
                10K+ installs
              </div>
            </div>
          </div>

          {/* Right: phone collage */}
          <div
            className={`relative hidden md:flex justify-center items-center min-h-[640px] transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {left ? (
              <div className="absolute top-12 -left-6 opacity-60">
                <PhoneFrame
                  width={170}
                  src={left.coverImage || null}
                  alt={left.title}
                  placeholder={left.title}
                  rotate={-8}
                />
              </div>
            ) : null}

            {center ? (
              <PhoneFrame
                width={280}
                src={center.coverImage || null}
                alt={center.title}
                placeholder={center.title}
                glow
                priority
              />
            ) : null}

            {right ? (
              <div className="absolute bottom-12 -right-6 opacity-60">
                <PhoneFrame
                  width={170}
                  src={right.coverImage || null}
                  alt={right.title}
                  placeholder={right.title}
                  rotate={8}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-t border-b border-white/10 py-4 marquee font-mono text-sm text-white/62 tracking-[0.06em]">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="inline-flex">
              {[
                "REACT NATIVE",
                "EXPO",
                "REANIMATED",
                "FIREBASE",
                "TYPESCRIPT",
                "iOS",
                "ANDROID",
                "CHROME EXT",
                "GRAPHQL",
                "REDUX",
                "STRIPE",
                "FASTLANE",
                "CODEPUSH",
              ].map((t, i) => (
                <span key={i} className="px-6">
                  {t}
                  {i % 3 === 0 ? (
                    <span className="text-[#ff6a3d]"> ●</span>
                  ) : null}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
