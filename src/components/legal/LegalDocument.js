import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/site";

// Renders a privacy policy or terms document from the shared data shape
// ({ title, lastUpdated, sections[] }) used by src/data/legal.js,
// src/data/privacy.js and src/data/terms.js.

// Bare https:// URLs in the copy become links; trailing punctuation and
// closing brackets stay outside the link.
const URL_RE = /(https:\/\/[^\s)]+[^\s).,;:])/g;

function Linkified({ text }) {
  return text.split(URL_RE).map((part, i) =>
    i % 2 ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline break-words"
      >
        {part.replace(/^https:\/\//, "")}
      </a>
    ) : (
      part
    ),
  );
}

export function BackLink({ href, label }) {
  return (
    <Link href={href} className="group back-link mb-10">
      <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}

export function LegalHeader({ eyebrow, title, lastUpdated }) {
  return (
    <header className="mb-12">
      <div className="label">{eyebrow}</div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[0.98] mt-3 text-ink">
        {title}
      </h1>
      {lastUpdated && (
        <p className="font-mono text-[12px] tracking-[0.06em] text-ink-3 mt-4">
          LAST UPDATED · {lastUpdated.toUpperCase()}
        </p>
      )}
    </header>
  );
}

export function PolicySection({ section }) {
  return (
    <section className="mb-12 pb-12 border-b border-rule last:border-b-0">
      <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-[-0.02em] mb-5 leading-tight">
        {section.title}
      </h2>

      {section.content && (
        <p className="text-ink-2 text-[15px] leading-[1.7] whitespace-pre-line mb-4">
          <Linkified text={section.content} />
        </p>
      )}

      {section.items && (
        <ul className="space-y-2 mb-4">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-5 text-ink-2 text-[15px] leading-[1.6]"
            >
              <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
              <Linkified text={item} />
            </li>
          ))}
        </ul>
      )}

      {section.footer && (
        <p className="text-ink font-medium leading-[1.6] mt-4 p-4 rounded-lg bg-bg-2 border border-rule">
          <Linkified text={section.footer} />
        </p>
      )}

      {section.subsections?.map((sub, i) => (
        <div key={i} className="mt-5 p-5 bg-bg-2 rounded-xl border border-rule">
          <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
            {sub.title}
          </h3>
          <p className="text-ink-2 text-[14px] leading-[1.6] whitespace-pre-line">
            <Linkified text={sub.content} />
          </p>
        </div>
      ))}

      {section.contactEmail && (
        <a
          href={`mailto:${section.contactEmail}`}
          className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg border border-rule text-ink hover:bg-bg-3 hover:border-accent/40 transition text-sm font-mono"
        >
          <Mail className="w-4 h-4 text-accent" />
          {section.contactEmail}
        </a>
      )}
    </section>
  );
}

export function FootCard({ children }) {
  return (
    <div className="mt-12 p-6 rounded-xl border border-rule bg-bg-2">
      <p className="text-ink-2 text-center text-[15px]">{children}</p>
    </div>
  );
}

/**
 * A full legal page. `children` renders between the header and the document
 * body (the unified pages use it to list the apps they cover).
 */
export default function LegalDocument({
  doc,
  eyebrow,
  back,
  question = "Have questions about this document?",
  children,
}) {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {back && <BackLink href={back.href} label={back.label} />}
        <LegalHeader
          eyebrow={eyebrow}
          title={doc.title}
          lastUpdated={doc.lastUpdated}
        />
        {children}
        <article>
          {doc.sections.map((section, i) => (
            <PolicySection key={i} section={section} />
          ))}
        </article>
        <FootCard>
          {question}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent hover:underline font-medium"
          >
            Contact me
          </a>
        </FootCard>
      </div>
    </main>
  );
}

/**
 * The per-app documents covered by a unified page. Apps with their own
 * document link to it; the rest are covered by the unified text alone.
 */
export function CoveredApps({ apps, kind }) {
  return (
    <section className="mb-12 p-6 rounded-xl border border-rule bg-bg-2">
      <h2 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
        Apps covered
      </h2>
      <p className="text-ink-2 text-[14px] leading-[1.6] mb-4">
        This {kind} applies to all of the apps below. Where an app has its own{" "}
        {kind}, it adds app-specific details and takes precedence.
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {apps.map((app) => (
          <li key={app.slug} className="text-[14px] text-ink-2 flex flex-wrap gap-x-2">
            <Link href={`/apps/${app.slug}`} className="text-ink hover:text-accent">
              {app.name}
            </Link>
            {app.href ? (
              <Link href={app.href} className="text-accent hover:underline">
                own {kind} →
              </Link>
            ) : (
              <span className="text-ink-3">this {kind}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
