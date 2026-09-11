"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GitFork } from "lucide-react";
import {
  FAQItem,
  CtaGlow,
  AppFooterLinks,
  EmberStop,
  useRevealOnce,
} from "@/components/apps/shared";

export default function Layout3({ app, subPages }) {
  const [sectionRef, isVisible] = useRevealOnce();

  return (
    <div>
      <section className="relative pt-28 pb-20 px-6 lg:px-16 overflow-hidden">
        <div
          className="glow-orb"
          style={{ top: -200, right: -200, width: 700, height: 700 }}
        />

        <div className="max-w-screen w-full mx-auto relative">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-12 group font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            all apps
          </Link>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                {app.category || "Open source"} · {app.subcategory || "Free"}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.045em] leading-[0.92] mt-3 text-ink">
                {app.name}
                <span className="text-accent">.</span>
              </h1>
              {app.subtitle && (
                <p className="text-xl md:text-2xl text-ink-2 font-light leading-[1.5] mt-6">
                  {app.subtitle}
                </p>
              )}
              <p className="text-base text-ink-2 leading-[1.65] mt-5 max-w-2xl">
                {app.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                {app.links?.chromeStore && (
                  <a
                    href={app.links.chromeStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-deep text-on-accent text-sm font-bold hover:opacity-90 transition"
                  >
                    Chrome Web Store ↗
                  </a>
                )}
                {app.links?.github && (
                  <a
                    href={app.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-rule text-ink text-sm font-semibold hover:bg-white/5 transition"
                  >
                    <GitFork className="w-4 h-4" /> View source
                  </a>
                )}
                {app.links?.demo && (
                  <a
                    href={app.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-rule text-ink-2 text-sm font-medium hover:text-ink hover:bg-white/5 transition"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>

            {app.icon && (
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div
                    className="absolute -inset-8 rounded-[3rem] bg-accent/20 blur-3xl"
                    aria-hidden
                  />
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={240}
                    height={240}
                    className="relative w-44 h-44 md:w-56 md:h-56 rounded-[2rem] shadow-2xl border border-rule"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {app.features?.length > 0 && (
        <section
          ref={sectionRef}
          className="py-20 lg:py-28 px-6 lg:px-16 bg-bg-2"
        >
          <div className="max-w-screen mx-auto">
            <div
              className={`transition-all duration-1000 motion-reduce:transition-none motion-reduce:opacity-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                01 · WHAT IT DOES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.035em] text-ink mt-3 mb-12">
                Features.
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {app.features.map((feature, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-xl border border-rule bg-bg transition-all duration-700 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    // Capped so a long feature list doesn't leave the last card
                    // waiting a second after it has already scrolled into view.
                    style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }}
                  >
                    <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base font-semibold text-ink leading-tight tracking-[-0.01em] mt-2">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {app.sections?.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                02 · DEEP DIVE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.035em] text-ink mt-3">
                Under the hood.
              </h2>
            </div>
            <div className="space-y-12">
              {app.sections.map((section, idx) => (
                <div key={idx} className="border-l-2 border-accent/40 pl-6">
                  <h3 className="text-2xl font-bold text-ink tracking-[-0.02em]">
                    {section.title}
                  </h3>
                  {section.content && (
                    <p className="text-ink-2 leading-[1.65] text-[15px] mt-3">
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-5">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-ink-2 text-[14px] leading-[1.5] relative pl-4"
                        >
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {app.faqs?.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-16 bg-bg-2">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                03 · FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.035em] text-ink mt-3">
                Common questions.
              </h2>
            </div>
            <div className="space-y-3">
              {app.faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 lg:py-32 px-6 lg:px-16 relative overflow-hidden">
        <CtaGlow />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95] text-ink">
            <EmberStop>{app.ctaTitle || `Try ${app.name}`}</EmberStop>
          </h2>
          <p className="text-lg text-ink-2 mt-6 leading-relaxed">
            {app.ctaDescription ||
              `It's free and open source. Get it on the Chrome Web Store, or fork the code on GitHub.`}
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center mt-8">
            {app.links?.chromeStore && (
              <a
                href={app.links.chromeStore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent-deep text-on-accent text-[15px] font-bold hover:opacity-90 transition"
              >
                Chrome Web Store ↗
              </a>
            )}
            {app.links?.github && (
              <a
                href={app.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-rule text-ink text-[15px] font-semibold hover:bg-white/5 transition"
              >
                <GitFork className="w-4 h-4" aria-hidden /> GitHub ↗
              </a>
            )}
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-xl border border-rule text-ink-2 text-[15px] font-medium hover:text-ink hover:bg-white/5 transition"
            >
              Contact developer
            </Link>
          </div>
        </div>
      </section>

      <AppFooterLinks app={app} subPages={subPages} />
    </div>
  );
}
