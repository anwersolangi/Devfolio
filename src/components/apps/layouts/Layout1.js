"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GitFork } from "lucide-react";

export default function Layout1({ app }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState([]);
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = featuresRef.current.indexOf(entry.target);
            if (i !== -1 && !activeFeatures.includes(i)) {
              setActiveFeatures((prev) => [...prev, i]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    featuresRef.current.forEach((f) => f && obs.observe(f));
    return () => obs.disconnect();
  }, [activeFeatures]);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-16 overflow-hidden">
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
                {app.category || "Mobile app"} · case study
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.045em] leading-[0.92] mt-3 text-ink">
                {app.name}
                <span className="text-accent">.</span>
              </h1>
              {app.subtitle && (
                <p className="text-xl md:text-2xl text-ink-2 font-light leading-[1.5] mt-6">
                  {app.subtitle}
                </p>
              )}
              <p className="text-base md:text-lg text-ink-2 leading-[1.6] mt-5 max-w-2xl">
                {app.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                {app.links?.playstore && (
                  <a
                    href={app.links.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-[#1a0a02] text-sm font-bold hover:opacity-90 transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Play Store ↗
                  </a>
                )}
                {app.links?.codecanyon && (
                  <a
                    href={app.links.codecanyon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-rule text-ink text-sm font-semibold hover:bg-white/5 transition"
                  >
                    CodeCanyon ↗
                  </a>
                )}
                {app.links?.github && (
                  <a
                    href={app.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-rule text-ink text-sm font-semibold hover:bg-white/5 transition"
                  >
                    <GitFork className="w-4 h-4" /> Source ↗
                  </a>
                )}
              </div>
            </div>

            {/* App icon */}
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
                    className="relative w-44 h-44 md:w-60 md:h-60 rounded-[2.5rem] shadow-2xl border border-rule transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {app.features?.length > 0 && (
        <section
          ref={sectionRef}
          className="py-24 lg:py-32 px-6 lg:px-16 bg-bg-2"
        >
          <div className="max-w-screen mx-auto">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                01 · KEY FEATURES
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-ink mt-3 mb-16">
                What it does.
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {app.features.map((feature, i) => (
                  <div
                    key={i}
                    ref={(el) => (featuresRef.current[i] = el)}
                    className={`p-6 rounded-xl border border-rule bg-bg transition-all duration-700 ${
                      activeFeatures.includes(i)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold text-ink leading-tight mt-2">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS (long-form) */}
      {app.sections?.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                02 · DEEP DIVE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.035em] text-ink mt-3">
                How it’s built.
              </h2>
            </div>

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
        </section>
      )}

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 relative overflow-hidden">
        <div
          className="absolute left-1/2 -bottom-[300px] -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,106,61,0.22), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            ▸ {app.ctaTitle ? "BUILD WITH IT" : "TRY IT"}
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95] text-ink mt-3">
            {app.ctaTitle || `Get ${app.name}`}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-ink-2 mt-6 leading-relaxed">
            {app.ctaDescription || app.description}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {app.links?.playstore && (
              <a
                href={app.links.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent text-[#1a0a02] text-[15px] font-bold hover:opacity-90 transition"
              >
                Download on Play Store ↗
              </a>
            )}
            {app.links?.codecanyon && (
              <a
                href={app.links.codecanyon}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-rule text-ink text-[15px] font-semibold hover:bg-white/5 transition"
              >
                CodeCanyon ↗
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

      {/* Footer-ish legal links */}
      <section className="py-10 px-6 lg:px-16 border-t border-rule">
        <div className="max-w-screen mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs font-mono text-ink-3 tracking-[0.08em]">
          <Link
            href={`/apps/${app.slug}/privacy`}
            className="hover:text-ink transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <Link
            href={`/apps/${app.slug}/terms`}
            className="hover:text-ink transition-colors"
          >
            TERMS OF SERVICE
          </Link>
          {app.links?.email && (
            <a
              href={app.links.email}
              className="hover:text-ink transition-colors"
            >
              SUPPORT
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
