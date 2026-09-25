import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Frame for inner pages. Clears the fixed header and shares the homepage's
 * gutters and column width so every route lines up with the one before it.
 */
export function PageShell({ children, width = "max-w-screen", className = "" }) {
  return (
    <main
      className={`min-h-screen pt-28 md:pt-32 pb-24 md:pb-28 px-5 sm:px-8 lg:px-10 ${className}`}
    >
      <div className={`${width} mx-auto`}>{children}</div>
    </main>
  );
}

export function BackLink({ href = "/", children = "Home", className = "" }) {
  return (
    <Link href={href} className={`group back-link ${className}`}>
      <ArrowLeft
        className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
        aria-hidden
      />
      {children}
    </Link>
  );
}

export function Breadcrumbs({ items, className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-ink-3 list-none m-0 p-0">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li
              key={item.href ?? item.label}
              className="flex items-center gap-2 min-w-0"
            >
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="hover:text-ink transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-ink-2 truncate"
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Page opener: breadcrumb trail, title, lede and a small fact line. Sized to
 * match the homepage hero one step down.
 */
export function PageHeader({
  crumbs,
  title,
  lede,
  meta,
  children,
  className = "",
}) {
  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      {crumbs?.length > 0 && <Breadcrumbs items={crumbs} className="mb-8" />}
      <h1 className="text-display font-semibold text-ink max-w-3xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-5 text-[17px] md:text-lg text-ink-2 leading-[1.6] max-w-2xl">
          {lede}
        </p>
      )}
      {meta && <p className="mt-4 text-[13px] text-ink-3">{meta}</p>}
      {children}
    </header>
  );
}

/**
 * Opener for a section inside an inner page. Mirrors the homepage's Section
 * head (label above, lede beside a "more" link) without the sticky column.
 */
export function SectionHead({ label, title, more, count, className = "" }) {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="label">{label}</h2>
          {count != null && (
            <span className="text-[13px] text-ink-3 tabular-nums">{count}</span>
          )}
        </div>
      )}
      {(title || more) && (
        <div
          className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 ${label ? "mt-3" : ""}`}
        >
          {title && (
            <p className="text-2xl md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink max-w-2xl text-balance">
              {title}
            </p>
          )}
          {more && (
            <Link
              href={more.href}
              className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:text-accent-deep shrink-0"
            >
              {more.label}
              <ArrowRight
                className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/** The "work with me" closer at the foot of inner pages. */
export function CtaPanel({
  title = "Have an app to build? Tell me about it.",
  body = "Available for freelance and contract work — new builds, rescues and ongoing product work. I usually reply within a day.",
  primary = { href: "/#contact", label: "Start a project" },
  secondary,
  className = "",
}) {
  return (
    <section
      className={`mt-20 pt-10 border-t border-rule md:grid md:grid-cols-[1.4fr_1fr] md:gap-10 md:items-center ${className}`}
    >
      <div>
        <h2 className="text-2xl md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink max-w-xl">
          {title}
        </h2>
        {body && (
          <p className="mt-3 text-[15px] text-ink-2 leading-[1.6] max-w-lg">
            {body}
          </p>
        )}
      </div>
      <div className="mt-6 md:mt-0 flex flex-wrap gap-3 md:justify-end">
        <Link href={primary.href} className="btn-primary">
          {primary.label}
        </Link>
        {secondary &&
          (secondary.external ? (
            <a
              href={secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {secondary.label} ↗
            </a>
          ) : (
            <Link href={secondary.href} className="btn-secondary">
              {secondary.label}
            </Link>
          ))}
      </div>
    </section>
  );
}
