// components/tools/ToolShell.js
// Server-rendered SEO wrapper around an interactive tool widget. All the
// crawlable copy (intro, how-to, features, FAQ, related tools) lives here so
// the page ranks even though the widget itself is a client island.
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Zap, Gift } from "lucide-react";
import ToolIcon from "./ToolIcon";
import { getRelatedTools } from "@/data/tools";

const TRUST = [
  { icon: ShieldCheck, label: "Runs in your browser" },
  { icon: Zap, label: "No uploads, instant" },
  { icon: Gift, label: "Free, no sign-up" },
];

export default function ToolShell({ tool, children }) {
  const related = getRelatedTools(tool.slug);

  return (
    <main className="min-h-screen px-6 pb-28 pt-28 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex items-center gap-2 font-mono text-xs text-ink-3"
        >
          <Link href="/" className="hover:text-ink">
            home
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-ink">
            tools
          </Link>
          <span>/</span>
          <span className="text-ink-2">{tool.slug}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rule bg-bg-2 text-accent">
              <ToolIcon name={tool.icon} className="h-7 w-7" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {tool.category}
              </div>
              <h1 className="mt-1 text-3xl font-extrabold tracking-[-0.03em] text-ink md:text-4xl lg:text-5xl">
                {tool.name}
              </h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            {tool.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-3"
              >
                <Icon className="h-3.5 w-3.5 text-good" />
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* Interactive widget */}
        <section
          aria-label={`${tool.name} tool`}
          className="rounded-2xl border border-rule bg-bg-2 p-5 md:p-7"
        >
          {children}
        </section>

        {/* Features */}
        {tool.features?.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                ▸ Highlights
              </span>
              <div className="h-px flex-1 bg-rule" />
            </div>
            <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {tool.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-rule bg-bg-2 p-4 text-sm text-ink-2"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-good" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* How to use */}
        {tool.howTo?.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
              How to use the {tool.name}
            </h2>
            <ol className="mt-6 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {tool.howTo.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-rule bg-bg-2 p-5"
                >
                  <div className="font-mono text-2xl font-extrabold text-accent/70">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* FAQ */}
        {tool.faqs?.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
              Frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-rule rounded-2xl border border-rule bg-bg-2">
              {tool.faqs.map((faq) => (
                <details key={faq.question} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink marker:hidden">
                    {faq.question}
                    <span className="font-mono text-ink-3 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related tools */}
        {related.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                ▸ Related tools
              </span>
              <div className="h-px flex-1 bg-rule" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/tools/${r.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-rule bg-bg-2 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rule bg-bg text-accent">
                    <ToolIcon name={r.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink group-hover:text-accent">
                      {r.name}
                    </span>
                    <span className="block truncate text-xs text-ink-3">
                      {r.category}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-20 grid items-center gap-8 rounded-2xl border border-rule bg-bg-2 p-8 md:grid-cols-[1.5fr_1fr] lg:p-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
              ▸ BUILT BY ANWER SOLANGI
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-ink md:text-3xl">
              Need a custom tool or a mobile app?{" "}
              <span className="font-serif italic font-normal text-accent">
                Let&rsquo;s build it.
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-ink-2">
              I&rsquo;m a React Native &amp; web developer in Karachi. These free
              tools are built with the same care I bring to client work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#1a0a02] transition hover:opacity-90"
            >
              Start a project →
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 rounded-lg border border-rule px-5 py-3 text-sm font-medium text-ink transition hover:bg-white/5"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All tools
            </Link>
          </div>
        </section>

        {/* Footer nav */}
        <div className="mt-12">
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 font-mono text-sm text-ink-2 hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            back to all tools
          </Link>
        </div>
      </div>
    </main>
  );
}
