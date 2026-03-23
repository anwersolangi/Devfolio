// app/reels/page.js
import Link from "next/link";
import Image from "next/image";
import { reelsData } from "@/data/reels";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "UI Reels & Shorts | Anwer Solangi",
  description:
    "Browse my collection of UI development reels and shorts — React Native animations, screen recordings, and frontend builds shared on YouTube and Instagram.",
};

export default function ReelsPage() {
  // Last item = latest (array is sorted oldest → newest)
  const featured = reelsData[reelsData.length - 1];
  // Rest in reverse so newest-first in the grid
  const rest = reelsData.slice(0, -1).reverse();

  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-12 group font-light"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Page header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gray-300" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Content Creation
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-gray-900 mb-5">
            UI Shorts &amp; Reels
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Screen-recorded UI builds — with full source code on GitHub.
            Uploaded across YouTube, Instagram &amp; more.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-16" />

        {/* Featured hero card — always the latest */}
        {featured && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Latest
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <Link href={`/reels/${featured.slug}`}>
              <div className="group relative w-full h-[420px] md:h-[540px] rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-900" />
                )}
                {/* Left-to-right fade so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-8 md:p-14">
                  <div className="max-w-lg">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-[9px] uppercase tracking-[0.25em] rounded-full font-medium shadow-sm mb-5">
                      {featured.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extralight text-white leading-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                      {featured.title}
                    </h2>
                    <p className="text-white/60 font-light text-base leading-relaxed mb-6 line-clamp-2">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center gap-2 text-white text-sm font-light">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                          <Play
                            className="w-3.5 h-3.5 ml-0.5"
                            fill="currentColor"
                          />
                        </div>
                        View details
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {featured.technologies.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-white/60 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ghost index number — reflects actual position */}
                <div
                  className="absolute top-8 right-8 text-white/10 font-extralight select-none leading-none"
                  style={{ fontSize: "7rem" }}
                >
                  {String(reelsData.length).padStart(2, "0")}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid section header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            All reels
          </span>
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-gray-400 text-xs font-light tabular-nums">
            {reelsData.length} total
          </span>
        </div>

        {/* Grid — newest first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((reel, index) => (
            <GridReelCard
              key={reel.id}
              reel={reel}
              // Display number counts down from second-latest
              displayIndex={reelsData.length - 1 - index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function GridReelCard({ reel, displayIndex }) {
  return (
    <Link href={`/reels/${reel.slug}`}>
      <div className="group relative h-[400px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        {reel.coverImage ? (
          <Image
            src={reel.coverImage}
            alt={reel.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-gray-900/5" />

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl">
            <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
          </div>
        </div>

        {/* Top */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-[9px] uppercase tracking-[0.2em] rounded-full font-medium shadow-sm">
            {reel.category}
          </span>
          <span className="text-white/30 font-extralight text-2xl leading-none select-none">
            {String(displayIndex).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-light text-base leading-snug mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
            {reel.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {reel.technologies.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="text-[10px] text-white/60 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-white/40 text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View details</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
}
