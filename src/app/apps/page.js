// app/apps/page.js — V1 dark theme
import Link from "next/link";
import AppCard from "@/components/apps/AppCard";
import { APPS_LIST } from "@/data/apps";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Apps by Anwer Solangi — React Native & iOS Apps",
  description:
    "Mobile apps and extensions built by Anwer Solangi, a React Native developer in Karachi, Pakistan — React Native apps, Chrome extensions, and open-source projects with 100K+ downloads.",
  keywords: [
    "Anwer Solangi apps",
    "React Native apps",
    "React Native developer Karachi",
    "mobile app developer Pakistan",
    "Expo apps",
    "Play Store apps",
  ],
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "Apps by Anwer Solangi",
    description:
      "React Native apps, browser extensions, and open-source projects by Anwer Solangi.",
    url: "/apps",
    type: "website",
  },
};

export default function AppsPage() {
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
            APPS · {APPS_LIST.length} SHIPPED
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.045em] leading-[0.95] mt-3 text-ink">
            Apps I’ve{" "}
            <span className="font-serif italic text-accent font-normal">
              shipped
            </span>
            .
          </h1>
          <p className="text-lg text-ink-2 leading-relaxed mt-6">
            Mobile apps, browser extensions, and open-source projects — each one
            designed and built end-to-end. Tap any tile for the full story, tech
            stack, and download links.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6">
          {APPS_LIST.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 p-8 lg:p-12 rounded-2xl border border-rule bg-bg-2 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
              ▸ HIRE ME
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mt-3 leading-tight">
              Got an app idea?{" "}
              <span className="font-serif italic text-accent font-normal">
                Let’s ship it.
              </span>
            </h2>
            <p className="text-ink-2 mt-3 max-w-lg">
              Available for freelance & contract work. Typical reply within a
              day, almost always inside two.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/#contact"
              className="px-5 py-3 rounded-lg bg-accent text-[#1a0a02] text-sm font-semibold hover:opacity-90 transition"
            >
              Start a project →
            </Link>
            <a
              href="https://github.com/anwersolangi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-rule text-ink text-sm font-medium hover:bg-white/5 transition"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
