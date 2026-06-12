import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPS_LIST } from "@/data/apps";
import AppTile from "@/components/AppTile";
import Reveal from "@/components/Reveal";

export default function Apps() {
  return (
    <section
      id="apps"
      className="py-16 md:py-24 lg:py-32 px-6 lg:px-16 border-t border-rule"
    >
      <div className="max-w-screen mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <div className="eyebrow">03 · ALL APPS</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Everything I’ve{" "}
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
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
          {APPS_LIST.map((app, index) => (
            <Reveal key={app.slug} delay={index * 60}>
              <AppTile app={app} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
