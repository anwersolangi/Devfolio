import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ShieldCheck,
  Zap,
  Gift,
} from "lucide-react";
import ToolIcon from "./ToolIcon";
import {
  PageShell,
  Breadcrumbs,
  BackLink,
  SectionHead,
  CtaPanel,
} from "@/components/PageHeader";
import { getRelatedTools } from "@/data/tools";

const TRUST = [
  { icon: ShieldCheck, label: "Runs in your browser" },
  { icon: Zap, label: "No uploads, instant" },
  { icon: Gift, label: "Free, no sign-up" },
];

export default function ToolShell({ tool, children }) {
  const related = getRelatedTools(tool.slug);

  return (
    <PageShell width="max-w-5xl">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Free tools", href: "/tools" },
          { label: tool.name },
        ]}
      />

      <header className="mb-10">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rule bg-bg-2 text-accent">
            <ToolIcon name={tool.icon} className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <p className="label">{tool.category}</p>
            <h1 className="mt-1 text-display-sm font-semibold text-ink">
              {tool.name}
            </h1>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-[17px] md:text-lg leading-[1.6] text-ink-2">
          {tool.intro}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 list-none m-0 p-0">
          {TRUST.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-2"
            >
              <Icon className="h-3.5 w-3.5 text-good" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </header>

      <section
        aria-label={`${tool.name} tool`}
        className="rounded-2xl border border-rule bg-bg-2 p-5 md:p-7 shadow-card"
      >
        {children}
      </section>

      {tool.article && (
        <Link
          href={`/blog/${tool.article.slug}`}
          className="group mt-6 flex items-start gap-4 rounded-2xl border border-rule bg-accent-tint/60 p-5 transition-colors duration-200 hover:border-accent/40 md:items-center"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-2 border border-rule text-accent">
            <BookOpen className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block label">Deep dive on the blog</span>
            <span className="mt-1 block text-[15px] font-semibold text-ink group-hover:text-accent transition-colors duration-150">
              {tool.article.title}
            </span>
            <span className="mt-0.5 block text-[14px] leading-[1.55] text-ink-2">
              {tool.article.description}
            </span>
          </span>
          <ArrowRight
            className="hidden h-4 w-4 shrink-0 text-accent transition-transform duration-150 group-hover:translate-x-0.5 md:block"
            aria-hidden
          />
        </Link>
      )}

      {tool.features?.length > 0 && (
        <section className="mt-16 border-t border-rule pt-8">
          <SectionHead label="Highlights" />
          <ul className="grid list-none grid-cols-1 gap-3 p-0 m-0 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-rule bg-bg-2 p-4 text-[14px] leading-[1.55] text-ink-2"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-good"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {tool.howTo?.length > 0 && (
        <section className="mt-16 border-t border-rule pt-8">
          <SectionHead
            label="How to use it"
            title={`How to use the ${tool.name}`}
          />
          <ol className="grid list-none grid-cols-1 gap-4 p-0 m-0 sm:grid-cols-2 lg:grid-cols-4">
            {tool.howTo.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-rule bg-bg-2 p-5"
              >
                <div className="text-[13px] font-medium text-ink-3 tabular-nums">
                  Step {i + 1}
                </div>
                <h3 className="mt-2 text-[15px] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {tool.faqs?.length > 0 && (
        <section className="mt-16 border-t border-rule pt-8">
          <SectionHead label="FAQ" title="Frequently asked questions" />
          <div className="border-t border-rule">
            {tool.faqs.map((faq) => (
              <details
                key={faq.question}
                className="faq-item group border-b border-rule"
              >
                <summary className="flex cursor-pointer list-none select-none items-start justify-between gap-6 py-4">
                  <h3 className="text-[17px] font-medium leading-[1.4] text-ink">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden
                    className="relative mt-2 h-3.5 w-3.5 shrink-0 text-ink-3 transition-colors group-hover:text-ink"
                  >
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rotate-90 bg-current transition-transform duration-200 group-open:rotate-0" />
                  </span>
                </summary>
                <p className="-mt-1 max-w-prose pb-5 text-[15px] leading-[1.65] text-ink-2">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-16 border-t border-rule pt-8">
          <SectionHead label="Related tools" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/tools/${r.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-rule bg-bg-2 p-4 transition-colors duration-200 hover:border-accent/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rule bg-bg text-accent">
                  <ToolIcon name={r.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-medium text-ink transition-colors duration-150 group-hover:text-accent">
                    {r.name}
                  </span>
                  <span className="block truncate text-[13px] text-ink-3">
                    {r.category}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaPanel
        title="Need a custom tool or a mobile app? Let’s build it."
        body="I’m a React Native and web developer in Karachi. These free tools are built with the same care I bring to client work."
        secondary={{ href: "/tools", label: "All tools" }}
      />

      <div className="mt-12">
        <BackLink href="/tools">Back to all tools</BackLink>
      </div>
    </PageShell>
  );
}
