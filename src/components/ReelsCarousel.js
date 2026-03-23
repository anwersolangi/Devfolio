"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { reelsData } from "@/data/reels";
import { Play, ArrowRight } from "lucide-react";

export default function ReelsCarousel() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (dir) =>
    scrollContainerRef.current?.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-gray-300" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Content Creation
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-4">
                UI Shorts &amp; Reels
              </h2>
              <p className="text-lg text-gray-600 max-w-xl font-light leading-relaxed">
                Screen-recorded UI builds uploaded to YouTube, Instagram &amp;
                more — now with full source code on GitHub.
              </p>
            </div>

            <div className="flex items-center gap-3 md:pb-2 shrink-0">
              {/* Scroll buttons */}
              {[
                { dir: "left", can: canScrollLeft, path: "M15 19l-7-7 7-7" },
                { dir: "right", can: canScrollRight, path: "M9 5l7 7-7 7" },
              ].map(({ dir, can, path }) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  disabled={!can}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    can
                      ? "border-gray-300 hover:border-gray-900 hover:bg-gray-50 cursor-pointer"
                      : "border-gray-100 text-gray-300 cursor-default"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={path}
                    />
                  </svg>
                </button>
              ))}

              <Link
                href="/reels"
                className="group hidden md:inline-flex items-center gap-1.5 pl-4 border-l border-gray-200 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light"
              >
                View all
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reelsData.slice(-5).map((reel, index) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                index={index}
                isVisible={isVisible}
              />
            ))}

            {/* View-all ghost tile */}
            <Link
              href="/reels"
              className="snap-start shrink-0 w-[180px] self-stretch"
            >
              <div className="h-full min-h-[460px] rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 group hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <p className="text-gray-400 text-xs font-light group-hover:text-gray-600 transition-colors">
                  View all
                </p>
              </div>
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/reels"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-light hover:bg-gray-50 transition-colors text-sm"
            >
              View All Reels
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel, index, isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="snap-start shrink-0 w-[260px] sm:w-[290px]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
      }}
    >
      <Link href={`/reels/${reel.slug}`}>
        <div
          className="relative h-[460px] sm:h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={reel.coverImage}
            alt={reel.title}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            sizes="(max-width: 640px) 260px, 290px"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/20 to-transparent" />

          {/* Top row */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-[9px] uppercase tracking-[0.2em] rounded-full font-medium shadow-sm">
              {reel.category}
            </span>
            <span className="text-white/40 text-xs font-light tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Play button */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.85)",
            }}
          >
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl">
              <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
            </div>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3
              className="text-white font-light text-base leading-snug mb-3 transition-transform duration-300"
              style={{
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {reel.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {reel.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] text-white/70 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between transition-all duration-300"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(4px)",
              }}
            >
              <span className="text-white/60 text-[10px] uppercase tracking-wider font-light">
                View details
              </span>
              <ArrowRight className="w-3 h-3 text-white/60" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
