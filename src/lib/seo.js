import { SITE_NAME, SITE_URL } from "@/data/site";

// Search results show roughly 60 characters of a title and 155–160 of a
// description before truncating. These helpers keep generated metadata inside
// those limits without cutting a word in half.
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 158;
const BRAND_SUFFIX = ` | ${SITE_NAME}`;

/** Appends " | Anwer Solangi" only when the whole title still fits. */
export function pageTitle(base) {
  const t = base.trim();
  return t.length + BRAND_SUFFIX.length <= TITLE_MAX ? `${t}${BRAND_SUFFIX}` : t;
}

/**
 * Shortens text to `max` characters. Prefers ending on a full sentence; falls
 * back to the last whole word plus an ellipsis.
 */
export function clampText(text = "", max = DESCRIPTION_MAX) {
  const s = text.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max + 1);
  const sentenceEnd = Math.max(
    cut.lastIndexOf(". "),
    cut.lastIndexOf("! "),
    cut.lastIndexOf("? "),
  );
  if (sentenceEnd >= max * 0.6) return cut.slice(0, sentenceEnd + 1);
  const wordEnd = cut.lastIndexOf(" ");
  return `${cut.slice(0, wordEnd > 0 ? wordEnd : max).replace(/[\s,;:—–-]+$/, "")}…`;
}

const EMOJI =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{20E3}]/gu;

export const stripEmoji = (s = "") => s.replace(EMOJI, "").replace(/\s+/g, " ").trim();

// Caption lines that are calls to action or sign-offs, not a description of
// what was built.
const CTA_LINE =
  /follow for|comment\b|link in bio|who.?s building|what should i add|drop a|let me know|save this|share this|tag a|^built with code$|^designed for mobile$|^made for developers$/i;

/**
 * A meta description for a reel, taken from the reel's own caption: the prose
 * sentences Anwer wrote, minus the title line, hashtags, emoji and CTAs. Falls
 * back to a sentence built from the reel's stack when the caption is only a
 * list of emoji bullets.
 */
export function reelSummary(reel, max = DESCRIPTION_MAX) {
  const title = stripEmoji(reel.title);
  const lines = String(reel.content || "")
    .split("\n")
    .map((l) => stripEmoji(l))
    .filter(Boolean)
    .filter((l) => !l.startsWith("#"))
    .filter((l) => !CTA_LINE.test(l))
    // Code, stack lists and list lead-ins ("…features:") aren't prose.
    .filter((l) => !/[{}<>;=]|\/\/|\w\([^)]*\)/.test(l))
    .filter((l) => !/stack\s*:/i.test(l))
    .filter((l) => !/:\s*$/.test(l))
    .filter((l) => l.toLowerCase() !== title.toLowerCase());

  // Prose: a line that reads like a sentence rather than a bullet fragment.
  const prose = lines
    .filter((l) => l.length >= 60 && /[a-z]/.test(l))
    .map((l) => (/[.!?…]$/.test(l) ? l : `${l.replace(/[\s,;:—–-]+$/, "")}.`));

  const stack = (reel.technologies || [])
    .filter((t) => !/^react native$/i.test(t))
    .slice(0, 3);
  const stackText =
    stack.length > 1
      ? `${stack.slice(0, -1).join(", ")} and ${stack.at(-1)}`
      : stack[0];
  const builtWith = stackText ? ` Built with ${stackText}.` : "";
  const source = reel.links?.github
    ? " Watch the reel and get the source code."
    : " Watch the full reel.";

  let text = prose.length
    ? prose.join(" ")
    : `${title} — a screen-recorded React Native UI build.`;
  if (text.length < 110) text += builtWith;
  if (text.length < 110) text += source;
  return clampText(text, max);
}

/** Reel page title: the headline before any " — " subtitle, branded if it fits. */
export function reelTitle(reel) {
  if (reel.seoTitle) return pageTitle(reel.seoTitle);
  const clean = stripEmoji(reel.title);
  const head = clean.length > TITLE_MAX && clean.includes(" — ")
    ? clean.split(" — ")[0]
    : clean;
  return pageTitle(head);
}

export const absolute = (path = "") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

/** Default share image, used wherever a page has nothing more specific. */
export const DEFAULT_OG_IMAGE = {
  url: absolute("/og-image.png"),
  width: 1200,
  height: 630,
  alt: "Anwer Solangi — React Native developer in Karachi, Pakistan",
};

/**
 * Spread into every page's `twitter` metadata. Next replaces the root
 * layout's twitter block wholesale when a page sets its own, so without this
 * the card type silently drops to the small "summary" card.
 */
export const TWITTER_BASE = {
  card: "summary_large_image",
  site: "@anwersolangidev",
  creator: "@anwersolangidev",
};

/** Schema.org Person reference with the fields Google reads inline. */
export const PERSON_REF = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
};

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

const MONTHS = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5, july: 6,
  august: 7, september: 8, october: 9, november: 10, december: 11,
};

/**
 * Parses a reel's `publishTime`, which comes in three shapes in the data:
 * ISO ("2026-07-08T14:30:00+05:00"), US ("03/16/2026 10:25") and
 * day-month ("12 March 2026"). Times without an offset are Karachi time.
 * Returns null when the reel has no usable date.
 */
export function reelDate(reel) {
  const v = String(reel?.publishTime || "").trim();
  if (!v) return null;
  let m = v.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) {
    const d = new Date(v.length > 10 ? v : `${v}T00:00:00+05:00`);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
  if (m) {
    const [, mo, d, y, h = "0", mi = "0"] = m;
    return new Date(Date.UTC(+y, +mo - 1, +d, +h - 5, +mi));
  }
  m = v.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (m && MONTHS[m[2].toLowerCase()] != null) {
    return new Date(Date.UTC(+m[3], MONTHS[m[2].toLowerCase()], +m[1], -5));
  }
  return null;
}

/** XML-escapes a value for hand-built XML (sitemap video fields, RSS). */
export const xml = (v = "") =>
  String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
