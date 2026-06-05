"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";

/**
 * Hero-level reels section — grid of 5 phones for desktop, horizontal
 * scroll for mobile. Reels and live/fallback stats are passed from the server.
 */
export default function ReelsCarousel({
  reels = [],
  statsBySlug = {},
  totalReels = reels.length,
}) {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    const ref = sectionRef.current;
    if (ref) obs.observe(ref);
    return () => ref && obs.unobserve(ref);
  }, []);

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.14em] text-[#ff6a3d]">
              01 · UI SHORTS
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1] mt-3 text-[#f4efe7]">
              Screen-recorded UI builds.{" "}
              <span className="text-white/40">Now with source code.</span>
            </h2>
            <p className="text-white/62 text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
              A weekly notebook of React Native experiments — posted on YouTube,
              Instagram, Facebook & TikTok. Tap any reel for the full write-up.
            </p>
          </div>
          <Link
            href="/reels"
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/62 hover:text-[#f4efe7] transition-colors shrink-0"
          >
            view all {totalReels} reels
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Grid (desktop) / horizontal scroll (mobile) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-5 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2"
        >
          {reels.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              stats={statsBySlug[reel.slug]}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel, stats, index, isVisible }) {
  const [hover, setHover] = useState(false);

  // Pluck a single technology label for the chip
  const primaryTech = reel.technologies?.[0] || "React Native";
  const viewsLabel = formatViews(stats?.views ?? reel.views);
  const durationLabel = formatDuration(stats?.durationSeconds ?? reel.duration);
  const statLabels = [viewsLabel, durationLabel].filter(Boolean);

  return (
    <Link
      href={`/reels/${reel.slug}`}
      className="shrink-0 w-[220px] md:w-auto snap-start group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 700ms ease ${index * 100}ms, transform 700ms ease ${index * 100}ms`,
      }}
    >
      <div className="flex justify-between font-mono text-[10px] tracking-[0.1em] text-white/40 mb-3 px-0.5">
        <span>REEL · {String(index + 1).padStart(2, "0")}</span>
        <span>↗</span>
      </div>

      <div
        className="relative inline-block w-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <PhoneFrame
          width={210}
          src={reel.coverImage || null}
          alt={reel.title}
          placeholder={reel.title}
        />
        {/* hover play overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: hover ? 1 : 0 }}
        >
          <div className="w-14 h-14 rounded-full bg-[#0d0c0b]/60 backdrop-blur-md border border-white/30 flex items-center justify-center">
            <Play
              className="w-5 h-5 text-[#f4efe7] ml-0.5"
              fill="currentColor"
            />
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#f4efe7] group-hover:text-[#ffb27a] transition-colors duration-200 line-clamp-2">
        {reel.title
          .replace(/[🍝🥩🍛🔐💳📊🍔📱✨🚗📍🤖⚡🐦💎📈📻🎰🎵🍕☀️🌄🤖]/g, "")
          .trim()}
      </h3>
      <div className="mt-2 flex items-center justify-between text-[10px] font-mono tracking-[0.06em]">
        <span className="text-[#ffb27a]">{primaryTech}</span>
        <span className="text-white/40 inline-flex items-center gap-1.5">
          {statLabels.join(" · ")}
          {stats?.isLive && <span className="text-[#ff6a3d]">live</span>}
        </span>
      </div>
    </Link>
  );
}

function formatViews(n) {
  if (!n && n !== 0) return "";
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return Math.round(n / 1_000) + "K";
  return String(n);
}

function formatDuration(seconds) {
  if (!Number.isFinite(Number(seconds))) return "";

  const totalSeconds = Math.round(Number(seconds));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}
