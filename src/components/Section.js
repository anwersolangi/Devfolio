import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Homepage section. On desktop the section name sits in a narrow left column
 * and stays pinned while the content scrolls; on phones it sits above the
 * content.
 *
 * Heading semantics: when a section has a `title`, that sentence is the <h2>
 * (it carries the section's meaning and keywords) and the short name is a
 * visual label. A section without a title uses its name as the <h2>.
 */
export function Section({
  id,
  label,
  title,
  intro,
  more,
  children,
  className = "",
}) {
  const headingId = `${id}-heading`;
  const LabelTag = title ? "p" : "h2";
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-rule ${className}`}
    >
      <div className="max-w-screen mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-20 lg:grid lg:grid-cols-[200px_1fr] lg:gap-x-16">
        <div className="mb-6 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
          <LabelTag
            id={title ? undefined : headingId}
            className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3"
          >
            {label}
          </LabelTag>
        </div>

        <div className="min-w-0">
          {(title || more) && (
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 mb-8">
              {title && (
                <h2
                  id={headingId}
                  className="text-2xl md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink max-w-2xl text-balance"
                >
                  {title}
                </h2>
              )}
              {more && <MoreLink href={more.href}>{more.label}</MoreLink>}
            </div>
          )}
          {intro && (
            <p className="text-[17px] text-ink-2 leading-[1.6] max-w-2xl -mt-3 mb-8">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function MoreLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:text-accent-deep shrink-0"
    >
      {children}
      <ArrowRight
        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}
