"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Minus, Sparkles } from "lucide-react";

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bg-2 rounded-xl border border-rule overflow-hidden transition-all duration-300">
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="font-mono text-[11px] text-accent tracking-[0.1em] pt-1 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-ink leading-snug">
            {question}
          </span>
        </div>
        {isOpen ? (
          <Minus className="w-4 h-4 text-ink-2 mt-1 shrink-0" />
        ) : (
          <Plus className="w-4 h-4 text-ink-2 mt-1 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-1 border-t border-rule">
          <p className="text-ink-2 leading-relaxed pl-9">{answer}</p>
        </div>
      )}
    </div>
  );
}

// Layout 2 — Full case study with tech stack, FAQ, "perfect for". Best for
// flagship commercial apps (Nearby, WhatsupFire).
export default function Layout2({ app }) {
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
          style={{ top: -200, right: -200, width: 800, height: 800 }}
        />
        {app.icon && (
          <Image
            src={app.icon}
            alt=""
            width={400}
            height={400}
            className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-[3rem] opacity-[0.07] pointer-events-none"
            aria-hidden
          />
        )}

        <div className="max-w-screen w-full mx-auto relative">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-12 group font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            all apps
          </Link>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 items-center">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                Case study · Commercial product
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[112px] font-extrabold tracking-[-0.045em] leading-[0.92] mt-3 text-ink">
                {app.name}
                <span className="text-accent">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink-2 font-light leading-[1.5] mt-6 max-w-2xl">
                {app.subtitle || app.description}
              </p>
              <p className="text-[15px] text-ink-2 leading-[1.7] mt-5 max-w-2xl">
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
                <Link
                  href={`https://apps.anwersolangi.com/${app.slug}/help`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-ink-2 text-sm font-mono uppercase tracking-[0.08em] hover:text-ink transition"
                >
                  ▸ help & support
                </Link>
              </div>
            </div>

            {app.icon && (
              <div className="lg:hidden flex justify-center">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  width={160}
                  height={160}
                  className="w-32 h-32 rounded-[1.8rem] shadow-2xl border border-rule"
                />
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
                Designed end-to-end.
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {app.features.map((feature, i) => (
                  <div
                    key={i}
                    ref={(el) => (featuresRef.current[i] = el)}
                    className={`p-6 rounded-xl border border-rule bg-bg transition-all duration-700 ${
                      activeFeatures.includes(i)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold text-ink leading-tight tracking-[-0.01em] mt-2">
                      {feature}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS */}
      {app.sections?.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                02 · HOW IT WORKS
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

      {/* TECH STACK */}
      {app.techStack && (
        <section className="py-24 lg:py-32 px-6 lg:px-16 bg-bg-2">
          <div className="max-w-screen mx-auto">
            <div className="mb-12">
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                03 · TECH STACK
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.035em] text-ink mt-3">
                Tools used.
              </h2>
            </div>

            <div
              className={`grid gap-4 ${app.techStack.features ? "md:grid-cols-3" : "md:grid-cols-2"}`}
            >
              {app.techStack.frontend && (
                <StackCard title="Frontend" items={app.techStack.frontend} />
              )}
              {app.techStack.backend && (
                <StackCard title="Backend" items={app.techStack.backend} />
              )}
              {app.techStack.features && (
                <StackCard title="Features" items={app.techStack.features} />
              )}
            </div>

            {app.perfectFor?.length > 0 && (
              <div className="mt-10 p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-3 to-bg-2">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-ink tracking-[-0.01em]">
                    Perfect for
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {app.perfectFor.map((item, i) => (
                    <div key={i}>
                      <div className="text-[15px] font-semibold text-ink">
                        {item.title}
                      </div>
                      <div className="text-[13px] text-ink-2 mt-1.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQs */}
      {app.faqs?.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
                04 · FAQs
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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95] text-ink">
            {app.ctaTitle || `Launch ${app.name}`}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-ink-2 mt-6 leading-relaxed">
            {app.ctaDescription ||
              `Get the complete source code and start building with ${app.name} today.`}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {app.links?.playstore && (
              <a
                href={app.links.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent text-[#1a0a02] text-[15px] font-bold hover:opacity-90 transition"
              >
                Play Store ↗
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
              href="https://anwersolangi.com/#contact"
              className="px-6 py-3.5 rounded-xl border border-rule text-ink-2 text-[15px] font-medium hover:text-ink hover:bg-white/5 transition"
            >
              Contact developer
            </Link>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-10 px-6 lg:px-16 border-t border-rule">
        <div className="max-w-screen mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs font-mono text-ink-3 tracking-[0.08em]">
          <Link
            href={`https://apps.anwersolangi.com/${app.slug}/privacy`}
            className="hover:text-ink transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <Link
            href={`https://apps.anwersolangi.com/${app.slug}/terms`}
            className="hover:text-ink transition-colors"
          >
            TERMS OF SERVICE
          </Link>
          <Link
            href={`https://apps.anwersolangi.com/${app.slug}/help`}
            className="hover:text-ink transition-colors"
          >
            HELP
          </Link>
          {app.slug === "nearby" && (
            <Link
              href={`https://apps.anwersolangi.com/${app.slug}/child-safety`}
              className="hover:text-ink transition-colors"
            >
              CHILD SAFETY
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

function StackCard({ title, items }) {
  return (
    <div className="p-6 rounded-xl border border-rule bg-bg">
      <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase mb-4 pb-3 border-b border-rule">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="text-ink text-[14px] flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
