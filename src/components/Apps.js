"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { APPS_LIST } from "@/data/apps";

export default function Apps() {
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
      id="apps"
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-16 border-t border-rule"
    >
      <div className="max-w-screen mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
              03 · ALL APPS
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1] mt-3 text-ink">
              Everything I've{" "}
              <span className="font-italic-serif text-accent font-normal">
                shipped
              </span>
              .
            </h2>
            <p className="text-base md:text-lg text-ink-2 leading-relaxed mt-5 max-w-2xl">
              Mobile apps, browser extensions, and open-source projects. Tap any
              tile for the full case study — stack, features, screenshots, and
              download links.
            </p>
          </div>
          <Link
            href="/apps"
            className="group inline-flex items-center gap-2 font-mono text-xs text-ink-2 hover:text-ink transition-colors shrink-0"
          >
            view all {APPS_LIST.length} apps
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
          {APPS_LIST.map((app, index) => (
            <AppTile key={app.slug} app={app} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function isImagePath(icon) {
  if (!icon) return false;
  return icon.startsWith("/") || icon.startsWith("http");
}

function AppTile({ app, index, visible }) {
  const [imageError, setImageError] = useState(false);
  const iconIsImage = app.iconImage || isImagePath(app.icon);
  const iconPath = iconIsImage ? app.iconImage || app.icon : null;
  const showImage = iconIsImage && !imageError;

  return (
    <a
      href={`https://apps.anwersolangi.com/${app.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-end aspect-square bg-bg-2 border border-rule hover:border-accent/40 rounded-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 600ms ease ${index * 60}ms, transform 600ms ease ${index * 60}ms`,
      }}
    >
      {showImage ? (
        <>
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src={iconPath}
              alt={app.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent" />
          </div>
          <div className="relative z-10 w-full p-3.5">
            <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink text-center leading-tight drop-shadow-lg">
              {app.name}
            </h3>
          </div>
          <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent bg-bg/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-accent/30">
              open ↗
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <div className="text-3xl mb-2.5 transform group-hover:scale-110 transition-transform duration-300">
            {app.icon}
          </div>
          <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink group-hover:text-accent leading-tight transition-colors">
            {app.name}
          </h3>
        </div>
      )}
    </a>
  );
}
