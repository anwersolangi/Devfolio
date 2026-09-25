"use client";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Plus, Minus, Sparkles } from "lucide-react";

/**
 * Renders a heading with its closing punctuation in accent (DESIGN.md's Ember
 * Stop Rule). Titles already ending in . ? or ! keep their own mark instead of
 * getting a second one appended — "Secure your legacy." must not render
 * "legacy..", and "Ready to Launch Your Own?" must not render "Own?.".
 */
export function EmberStop({ children }) {
  const raw = String(children ?? "");
  const m = raw.match(/^(.*?)([.?!])$/);
  const text = m ? m[1] : raw;
  const stop = m ? m[2] : ".";
  return (
    <>
      {text}
      <span className="text-accent">{stop}</span>
    </>
  );
}

/**
 * Primitives shared by the three app-detail layouts. FAQItem and the CTA glow
 * were duplicated verbatim across Layout2/Layout3 (and the glow across all
 * three); they live here so a change lands once.
 */

/**
 * One-shot reveal for a content section. Flips to true the first time the node
 * enters the viewport, and immediately under reduced motion (matching the
 * site's Reveal primitive).
 *
 * The failsafe only covers an observer that never reports at all — an embedded
 * context, an older engine. IntersectionObserver always delivers an initial
 * entry right after observe(), so the first callback cancels it; otherwise a
 * section below a tall hero would "reveal" off-screen and nobody would ever see
 * the entrance.
 */
export function useRevealOnce() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const failsafe = setTimeout(() => setVisible(true), 1500);
    const obs = new IntersectionObserver(
      ([e]) => {
        clearTimeout(failsafe);
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(node);
    return () => {
      obs.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return [ref, visible];
}

export function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="bg-bg-2 rounded-xl border border-rule overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 hover:bg-bg-3 transition-colors duration-150"
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="text-[13px] text-ink-3 tabular-nums pt-1 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-ink leading-snug">
            {question}
          </span>
        </div>
        {open ? (
          <Minus className="w-4 h-4 text-ink-2 mt-1 shrink-0" aria-hidden />
        ) : (
          <Plus className="w-4 h-4 text-ink-2 mt-1 shrink-0" aria-hidden />
        )}
      </button>
      {/* Always in the DOM so aria-controls resolves and the answers ship in
          the server HTML; `hidden` keeps it out of view and out of the a11y
          tree until opened. */}
      <div
        id={panelId}
        hidden={!open}
        className="px-6 pb-5 pt-1 border-t border-rule"
      >
        <p className="text-ink-2 leading-relaxed pl-9">{answer}</p>
      </div>
    </div>
  );
}

export function StackCard({ title, items }) {
  return (
    <div className="p-6 rounded-xl border border-rule bg-bg-2">
      <div className="label mb-4 pb-3 border-b border-rule">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="text-ink text-[14px] flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * "Perfect for" panel under the tech stack. Columns follow the item count so
 * three audiences never sit in a four-column grid with a hole at the end.
 */
export function PerfectFor({ items }) {
  if (!items?.length) return null;
  const cols =
    items.length % 4 === 0
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : items.length % 3 === 0
        ? "md:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className="mt-10 p-8 rounded-2xl border border-rule bg-bg-2">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-5 h-5 text-accent" aria-hidden />
        <h3 className="text-xl font-bold text-ink tracking-[-0.01em]">
          Perfect for
        </h3>
      </div>
      <div className={`grid gap-6 ${cols}`}>
        {items.map((item, i) => (
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
  );
}

/** The wide ember wash under every layout's closing CTA. */
export function CtaGlow() {
  // The light system has no atmospheric light; depth comes from surfaces and
  // hairlines. Kept as a no-op so the layouts' markup stays stable.
  return null;
}

/**
 * Legal/support footer. `subPages` holds hrefs resolved on the server (see
 * app/apps/[slug]/page.js); a falsy entry means the app has no such page.
 */
export function AppFooterLinks({ app, subPages = {} }) {
  const links = [
    subPages.privacy && ["Privacy policy", subPages.privacy],
    subPages.terms && ["Terms of service", subPages.terms],
    subPages.help && ["Help & support", subPages.help],
    subPages.childSafety && ["Child safety", subPages.childSafety],
  ].filter(Boolean);

  if (!links.length && !app.links?.email) return null;

  return (
    <section className="py-10 px-6 lg:px-16 border-t border-rule">
      <div className="max-w-screen mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-center text-[13px] text-ink-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="py-1 hover:text-ink transition-colors"
          >
            {label}
          </Link>
        ))}
        {app.links?.email && (
          <a
            href={app.links.email}
            className="py-1 hover:text-ink transition-colors"
          >
            Email support
          </a>
        )}
      </div>
    </section>
  );
}

// A "#" or empty href is a placeholder in the data, not a listing — rendering
// it would put a store button on the page that goes nowhere.
const isLive = (href) => Boolean(href) && href !== "#";

/**
 * Store buttons, rendered as siblings so they join the caller's flex row (and
 * wrap and centre with it) instead of forming a nested row of their own.
 *
 * An app whose listing is not live yet (`released: false`) shows its status
 * instead of a download link that would 404. The status is button-height so
 * the row stays aligned, but mono and inert so it never reads as clickable.
 */
export function StoreLinks({ app, size = "md" }) {
  const lg = size === "lg";
  const pad = lg ? "px-6 py-3.5 text-[15px]" : "px-5 py-3 text-sm";
  const { playstore, codecanyon, gumroad } = app.links ?? {};
  const ghost = `inline-flex items-center gap-2 rounded-xl border border-rule text-ink font-semibold hover:bg-bg-3 transition ${pad}`;

  return (
    <>
      {playstore &&
        (app.released === false ? (
          <span
            className={`inline-flex items-center gap-2.5 rounded-xl border border-rule bg-bg-2 text-ink-2 text-[14px] font-medium ${
              lg ? "px-6 py-3.5 leading-6" : "px-5 py-3 leading-5"
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-good shrink-0"
              aria-hidden
            />
            Coming soon · Google Play
          </span>
        ) : (
          isLive(playstore) && (
            <a
              href={playstore}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl bg-accent-deep text-on-accent font-bold hover:opacity-90 transition ${pad}`}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Download on Play Store ↗
            </a>
          )
        ))}
      {isLive(codecanyon) && (
        <a
          href={codecanyon}
          target="_blank"
          rel="noopener noreferrer"
          className={ghost}
        >
          CodeCanyon ↗
        </a>
      )}
      {isLive(gumroad) && (
        <a
          href={gumroad}
          target="_blank"
          rel="noopener noreferrer"
          className={ghost}
        >
          Gumroad ↗
        </a>
      )}
    </>
  );
}
