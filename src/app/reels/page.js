// app/reels/page.js — V2 dark theme, updated for square (1080x1080) reel covers
import Link from "next/link";
import Image from "next/image";
import { reelsData } from "@/data/reels";
import {
  formatReelDuration,
  formatReelViews,
  getReelsStats,
} from "@/lib/reelStats";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

export const revalidate = 3600;

export const metadata = {
  title: "UI Reels & Shorts | Anwer Solangi",
  description:
    "Screen-recorded React Native UI builds — posted across YouTube, Instagram, TikTok, Facebook & Pinterest. Now with source code.",
  openGraph: {
    title: "UI Reels & Shorts | Anwer Solangi",
    description:
      "Screen-recorded React Native UI builds — posted across YouTube, Instagram, TikTok, Facebook & Pinterest. Now with source code.",
    url: "https://anwersolangi.com/reels",
    siteName: "Anwer Solangi",
    type: "website",
    images: [
      {
        url: "https://anwersolangi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "UI Reels & Shorts by Anwer Solangi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Reels & Shorts | Anwer Solangi",
    description: "Screen-recorded React Native UI builds with full source.",
    creator: "@anwerxolangi",
  },
};

function cleanTitle(s) {
  if (!s) return "";
  return s
    .replace(
      /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu,
      "",
    )
    .trim();
}

export default async function ReelsPage() {
  const featured = reelsData[reelsData.length - 1];
  const rest = [...reelsData].slice(0, -1).reverse();
  const statsBySlug = await getReelsStats(reelsData);
  const featuredStats = featured ? statsBySlug[featured.slug] : null;

  return (
    <main className="min-h-screen pt-28 pb-28 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-12 group font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          back to home
        </Link>

        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            UI SHORTS · {reelsData.length} REELS
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.045em] leading-[0.95] mt-3 text-ink">
            Screen-recorded UI builds.{" "}
            <span className="font-serif italic text-accent font-normal">
              Now with source.
            </span>
          </h1>
          <p className="text-lg text-ink-2 leading-relaxed mt-6">
            A weekly notebook of React Native experiments — posted across
            YouTube, Instagram, TikTok, Facebook & Pinterest. Tap any reel for
            the full write-up and source code on GitHub.
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                ▸ Latest
              </span>
              <div className="flex-1 h-px bg-rule" />
            </div>

            <Link href={`/reels/${featured.slug}`}>
              <div className="group relative w-full h-[420px] md:h-[560px] rounded-2xl overflow-hidden border border-rule hover:border-accent/40 transition-all duration-500 cursor-pointer">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={cleanTitle(featured.title)}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-bg-2" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/70 to-bg/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-end p-8 md:p-14">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-2 mb-4">
                      <span>{featured.category}</span>
                      {formatReelViews(featuredStats?.views, {
                        compact: true,
                      }) && (
                        <span className="text-ink-2">
                          {formatReelViews(featuredStats.views, {
                            compact: true,
                          })}{" "}
                          views
                        </span>
                      )}
                      {formatReelDuration(featuredStats?.durationSeconds) && (
                        <span className="text-ink-2">
                          {formatReelDuration(featuredStats.durationSeconds)}
                        </span>
                      )}
                      {featuredStats?.isLive && (
                        <span className="text-accent">live</span>
                      )}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                      {cleanTitle(featured.title)}
                    </h2>
                    <p className="text-ink-2 font-light text-base leading-relaxed mb-6 line-clamp-2 max-w-lg">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-5 flex-wrap">
                      <div className="inline-flex items-center gap-2 text-ink text-sm font-medium">
                        <div className="w-10 h-10 rounded-full bg-accent text-[#1a0a02] flex items-center justify-center">
                          <Play
                            className="w-3.5 h-3.5 ml-0.5"
                            fill="currentColor"
                          />
                        </div>
                        Watch & view source
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {featured.technologies.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-ink-2 px-2 py-1 rounded border border-rule"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-8 right-10 text-ink/8 font-extrabold select-none leading-none tracking-[-0.05em]"
                  style={{ fontSize: "8rem" }}
                >
                  {String(reelsData.length).padStart(2, "0")}
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            ▸ All reels
          </span>
          <div className="flex-1 h-px bg-rule" />
          <span className="text-ink-3 text-xs font-mono tabular-nums">
            {reelsData.length} total
          </span>
        </div>

        {/* GRID — updated for square covers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rest.map((reel, index) => (
            <GridReelCard
              key={reel.id}
              reel={reel}
              stats={statsBySlug[reel.slug]}
              displayIndex={reelsData.length - 1 - index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function GridReelCard({ reel, stats, displayIndex }) {
  const viewsLabel = formatReelViews(stats?.views, { compact: true });
  const durationLabel = formatReelDuration(stats?.durationSeconds);

  return (
    <Link href={`/reels/${reel.slug}`}>
      <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-rule hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 bg-bg-2">
        {/* Square cover (1080x1080 covers fit perfectly here) */}
        <div className="relative aspect-square w-full overflow-hidden">
          {reel.coverImage ? (
            <Image
              src={reel.coverImage}
              alt={cleanTitle(reel.title)}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-end p-5 bg-bg-2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(244,239,231,0.04) 0 1px, transparent 1px 14px)",
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                ↘ {cleanTitle(reel.title).slice(0, 40)}…
              </div>
            </div>
          )}

          {/* Play overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <div className="w-14 h-14 rounded-full bg-accent text-[#1a0a02] flex items-center justify-center shadow-xl">
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            </div>
          </div>

          {/* Category + index */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-2 bg-bg/60 backdrop-blur-sm border border-rule px-2 py-1 rounded">
              {reel.category}
            </span>
            <span className="text-ink/30 font-extrabold text-xl leading-none select-none tracking-[-0.02em] bg-bg/60 backdrop-blur-sm border border-rule px-2 py-1 rounded">
              {String(displayIndex).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Bottom info BELOW the cover (since the cover is square + self-contained) */}
        <div className="p-5">
          <h3 className="text-ink font-semibold text-[15px] leading-[1.3] tracking-[-0.01em] mb-3 transition-transform duration-300 group-hover:-translate-y-0.5 line-clamp-2">
            {cleanTitle(reel.title)}
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {reel.technologies.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-ink-2 bg-bg/40 px-2 py-0.5 rounded border border-rule"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pt-3 border-t border-rule flex items-center justify-between text-ink-3 text-[10px] font-mono uppercase tracking-wider">
            <span className="inline-flex items-center gap-2">
              {viewsLabel && <span>{viewsLabel} views</span>}
              {durationLabel && <span>{durationLabel}</span>}
              {stats?.isLive && <span className="text-accent">live</span>}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1">
              View details <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
