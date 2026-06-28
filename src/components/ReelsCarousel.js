import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";

/**
 * Hero-level reels section — grid of 5 phones for desktop, horizontal
 * scroll for mobile. Reels and live/fallback stats are passed from the server.
 */
export default function ReelsCarousel({
  reels = [],
  statsBySlug = {},
  totalReels = reels.length,
}) {
  return (
    <section id="reels" className="relative py-16 md:py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">01 · UI SHORTS</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Screen-recorded UI builds.{" "}
              <span className="text-ink-3">Now with source code.</span>
            </h2>
            <p className="text-ink-2 text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
              A weekly notebook of React Native experiments — posted on YouTube,
              Instagram, Facebook & TikTok. Tap any reel for the full write-up.
            </p>
          </div>
          <Link
            href="/reels"
            className="group inline-flex items-center gap-2 font-mono text-xs text-ink-2 hover:text-ink transition-colors shrink-0"
          >
            view all {totalReels} reels
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        {/* Grid (desktop) / horizontal scroll (mobile) */}
        <div className="flex md:grid md:grid-cols-5 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2">
          {reels.map((reel, index) => (
            <Reveal
              key={reel.id}
              delay={index * 80}
              className="shrink-0 w-[220px] md:w-auto snap-start"
            >
              <ReelCard
                reel={reel}
                stats={statsBySlug[reel.slug]}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel, stats, index }) {
  const primaryTech = reel.technologies?.[0] || "React Native";
  const viewsLabel = formatViews(stats?.views ?? reel.views);
  const durationLabel = formatDuration(stats?.durationSeconds ?? reel.duration);
  const statLabels = [viewsLabel, durationLabel].filter(Boolean);

  return (
    <Link href={`/reels/${reel.slug}`} className="group block">
      <div className="flex justify-between font-mono text-[10px] tracking-[0.1em] text-ink-3 mb-3 px-0.5">
        <span>REEL · {String(index + 1).padStart(2, "0")}</span>
        <span aria-hidden>↗</span>
      </div>

      <div className="relative inline-block w-full">
        <PhoneFrame
          width={210}
          src={reel.coverImage || null}
          alt={reel.title}
          placeholder={reel.title}
        />
        {/* hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-bg/60 backdrop-blur-md border border-white/30 flex items-center justify-center">
            <Play className="w-5 h-5 text-ink ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink group-hover:text-accent-2 transition-colors duration-200 line-clamp-2">
        {reel.title
          .replace(/[🍝🥩🍛🔐💳📊🍔📱✨🚗📍🤖⚡🐦💎📈📻🎰🎵🍕☀️🌄🤖]/g, "")
          .trim()}
      </h3>
      <div className="mt-2 flex items-center justify-between text-[10px] font-mono tracking-[0.06em]">
        <span className="text-accent-2">{primaryTech}</span>
        <span className="text-ink-3 inline-flex items-center gap-1.5">
          {statLabels.join(" · ")}
          {stats?.isLive && <span className="text-accent">live</span>}
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
  const durationSeconds = Number(seconds);
  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) return "";

  const totalSeconds = Math.round(durationSeconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}
