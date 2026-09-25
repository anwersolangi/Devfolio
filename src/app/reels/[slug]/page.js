import Link from "next/link";
import { notFound } from "next/navigation";
import { reelsData } from "@/data/reels";
import { getReelStats } from "@/lib/reelStats";
import {
  Play,
  ArrowLeft,
  ArrowRight,
  Eye,
  Clock,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { jsonLd } from "@/lib/jsonld";
import {
  clampText,
  reelSummary,
  reelTitle,
  stripEmoji,
  breadcrumbJsonLd, TWITTER_BASE } from "@/lib/seo";

function cleanTitle(str) {
  return stripEmoji(str || "");
}

const SITE_URL = "https://anwersolangi.com";
const SCHEMA_TIMEZONE_OFFSET = "+05:00";
const MONTHS = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

export const revalidate = 3600;

function YouTubeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}

function PinterestIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.087-.79-.166-2.005.035-2.868.181-.78 1.172-4.971 1.172-4.971s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2c-3.23.7-3.91-1.39-3.91-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.74 0-1.27.45-2.3 1.2-3.12-.12-.29-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.19-1.19 3.19-1.19.64 1.6.24 2.79.12 3.08.75.82 1.2 1.85 1.2 3.12 0 4.46-2.72 5.45-5.31 5.74.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function getReelVideoUrl(reel) {
  return [
    reel.videoUrl,
    reel.videoURL,
    reel.links?.youtube,
    reel.links?.facebook,
    reel.links?.instagram,
    reel.links?.tiktok,
  ]
    .map((value) => (value || "").trim())
    .find(Boolean) || "";
}

function getCoverImage(reel) {
  return reel.coverImage || reel.coverImageReel || "";
}

function toAbsoluteUrl(path) {
  if (!path) return `${SITE_URL}/og-image.png`;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

function padDatePart(value) {
  return String(value).padStart(2, "0");
}

function normalizeTimezoneOffset(offset) {
  if (!offset || offset === "Z") return offset || SCHEMA_TIMEZONE_OFFSET;
  return offset.includes(":")
    ? offset
    : `${offset.slice(0, 3)}:${offset.slice(3)}`;
}

function formatSchemaDateTime({
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0,
  offset = SCHEMA_TIMEZONE_OFFSET,
}) {
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  const valid =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day &&
    date.getUTCHours() === hour &&
    date.getUTCMinutes() === minute &&
    date.getUTCSeconds() === second;

  if (!valid) return "";

  return `${year}-${padDatePart(month)}-${padDatePart(day)}T${padDatePart(
    hour,
  )}:${padDatePart(minute)}:${padDatePart(second)}${normalizeTimezoneOffset(
    offset,
  )}`;
}

function toSchemaUploadDate(value) {
  const input = (value || "").trim();
  if (!input) return "";

  const isoMatch = input.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?(Z|[+-]\d{2}:?\d{2})?)?$/,
  );
  if (isoMatch) {
    const [, year, month, day, hour, minute, second, offset] = isoMatch;
    return formatSchemaDateTime({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour || 0),
      minute: Number(minute || 0),
      second: Number(second || 0),
      offset: offset || SCHEMA_TIMEZONE_OFFSET,
    });
  }

  const numericMatch = input.match(
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/,
  );
  if (numericMatch) {
    const [, month, day, year, hour, minute, second] = numericMatch;
    return formatSchemaDateTime({
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: Number(hour || 0),
      minute: Number(minute || 0),
      second: Number(second || 0),
    });
  }

  const dayMonthMatch = input.match(
    /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/,
  );
  if (dayMonthMatch) {
    const [, day, monthName, year, hour, minute, second] = dayMonthMatch;
    const month = MONTHS[monthName.toLowerCase()];
    if (!month) return "";
    return formatSchemaDateTime({
      year: Number(year),
      month,
      day: Number(day),
      hour: Number(hour || 0),
      minute: Number(minute || 0),
      second: Number(second || 0),
    });
  }

  const monthDayMatch = input.match(
    /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/,
  );
  if (monthDayMatch) {
    const [, monthName, day, year, hour, minute, second] = monthDayMatch;
    const month = MONTHS[monthName.toLowerCase()];
    if (!month) return "";
    return formatSchemaDateTime({
      year: Number(year),
      month,
      day: Number(day),
      hour: Number(hour || 0),
      minute: Number(minute || 0),
      second: Number(second || 0),
    });
  }

  return "";
}

function getYouTubeEmbedUrl(videoUrl) {
  try {
    const url = new URL(videoUrl);
    const hostname = url.hostname.replace(/^www\./, "");
    const isYouTube =
      hostname === "youtube.com" ||
      hostname === "youtu.be" ||
      hostname.endsWith(".youtube.com");

    if (!isYouTube) return null;
    if (url.pathname.startsWith("/embed/")) return url.toString();

    let videoId = "";
    if (hostname === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] || "";
    } else if (url.pathname.startsWith("/shorts/")) {
      videoId = url.pathname.split("/").filter(Boolean)[1] || "";
    } else {
      videoId = url.searchParams.get("v") || "";
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

function getVideoSource(reel) {
  const videoUrl = getReelVideoUrl(reel);
  if (!videoUrl) return { type: "none", src: "" };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl);
  if (youtubeEmbedUrl) {
    return { type: "iframe", src: youtubeEmbedUrl, platform: "YouTube" };
  }

  if (videoUrl.includes("facebook.com/plugins/video.php")) {
    return { type: "iframe", src: videoUrl, platform: "Facebook" };
  }

  if (isDirectVideoFileUrl(videoUrl)) {
    return { type: "video", src: videoUrl, platform: "Video" };
  }

  return { type: "external", src: videoUrl, platform: "Video" };
}

function isDirectVideoFileUrl(videoUrl) {
  return /\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(videoUrl);
}

function formatViews(count) {
  if (!Number.isFinite(Number(count))) return "—";
  return Number(count).toLocaleString();
}

function formatDuration(seconds) {
  const durationSeconds = Number(seconds);
  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) return "—";

  const totalSeconds = Math.round(durationSeconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(
      remainingSeconds,
    ).padStart(2, "0")}s`;
  }

  if (minutes > 0) {
    return `${minutes}m ${String(remainingSeconds).padStart(2, "0")}s`;
  }

  return `${remainingSeconds}s`;
}

// Human date for the meta row. Falls back to the raw value when the
// publishTime string is in a shape the schema parser doesn't know.
function formatPublishDate(value) {
  const iso = toSchemaUploadDate(value);
  if (!iso) return value;
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Karachi",
  });
}

function toIsoDuration(seconds) {
  const durationSeconds = Number(seconds);
  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) {
    return undefined;
  }

  return `PT${Math.max(1, Math.round(durationSeconds))}S`;
}

export function generateStaticParams() {
  return reelsData.map((reel) => ({ slug: reel.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const reel = reelsData.find((r) => r.slug === slug);
  if (!reel) return { title: "Reel Not Found | Anwer Solangi" };

  const title = cleanTitle(reel.title);
  const description = reel.notes ? clampText(reel.notes) : reelSummary(reel);
  const url = `${SITE_URL}/reels/${reel.slug}`;
  const uploadDate = toSchemaUploadDate(reel.publishTime);

  return {
    title: reelTitle(reel),
    description,
    keywords: [
      ...reel.technologies,
      "React Native",
      "Mobile UI",
      reel.category,
      "Anwer Solangi",
      "Karachi developer",
      "Pakistani developer",
      "React Native developer",
      "Expo",
    ],
    authors: [{ name: "Anwer Solangi", url: SITE_URL }],
    creator: "Anwer Solangi",
    publisher: "Anwer Solangi",
    alternates: { canonical: url },
    // og:image comes from the generated share card (opengraph-image.js):
    // the raw covers are portrait or 4:3 and crop badly in link previews.
    openGraph: {
      title,
      description,
      url,
      type: "article",
      ...(uploadDate ? { publishedTime: uploadDate } : {}),
      authors: ["Anwer Solangi"],
    },
    twitter: { ...TWITTER_BASE, title, description },
    other: {
      ...(uploadDate ? { "article:published_time": uploadDate } : {}),
      "article:author": "Anwer Solangi",
      "article:section": reel.category,
      "article:tag": reel.technologies.join(","),
    },
  };
}

function VideoJsonLd({ reel, stats }) {
  const title = cleanTitle(reel.title);
  const videoUrl = getReelVideoUrl(reel);
  const videoSource = getVideoSource(reel);
  const cover = toAbsoluteUrl(getCoverImage(reel));
  const uploadDate = toSchemaUploadDate(reel.publishTime);
  const duration = toIsoDuration(stats.durationSeconds);

  if (!videoUrl || !uploadDate) return null;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: reel.notes || reelSummary(reel, 300),
    thumbnailUrl: [cover],
    uploadDate,
    ...(duration ? { duration } : {}),
    ...(isDirectVideoFileUrl(videoUrl) ? { contentUrl: videoUrl } : {}),
    ...(videoSource.type === "iframe" ? { embedUrl: videoSource.src } : {}),
    ...(Number.isFinite(Number(stats.views))
      ? {
          interactionStatistic: {
            "@type": "InteractionCounter",
            interactionType: { "@type": "WatchAction" },
            userInteractionCount: Math.max(0, Math.round(Number(stats.views))),
          },
        }
      : {}),
    author: {
      "@type": "Person",
      name: "Anwer Solangi",
      url: SITE_URL,
      sameAs: [
        reel.links?.youtube,
        reel.links?.instagram,
        reel.links?.tiktok,
        reel.links?.facebook,
        reel.links?.pinterest,
        reel.links?.github,
      ].filter(Boolean),
    },
    publisher: {
      "@type": "Person",
      name: "Anwer Solangi",
      url: SITE_URL,
    },
    keywords: [reel.category, ...reel.technologies].join(", "),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(videoSchema) }}
    />
  );
}

function ReelBreadcrumbJsonLd({ reel }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Reels", path: "/reels" },
            { name: cleanTitle(reel.title), path: `/reels/${reel.slug}` },
          ]),
        ),
      }}
    />
  );
}

// Three more reels to watch next, chosen as the next three in the list,
// wrapping at the end. Picking "newest in the same category" instead looked
// smarter but sent every Mobile UI reel to the same three pages: three reels
// collected 33-36 internal links while 23 had one. Walking the list gives
// every reel exactly three inbound links.
function relatedReels(reel, count = 3) {
  const i = reelsData.findIndex((r) => r.slug === reel.slug);
  if (i < 0) return reelsData.slice(0, count);
  return Array.from(
    { length: Math.min(count, reelsData.length - 1) },
    (_, n) => reelsData[(i + 1 + n) % reelsData.length],
  );
}

// Reels are short by nature, so each one points at the long-form post that
// covers its subject. Keyed on the reel's own category.
const CATEGORY_READING = {
  "Mobile UI": {
    slug: "react-native-animation-examples",
    title: "React Native animation examples, with the technique behind each",
  },
  "UI/UX": {
    slug: "react-native-animation-examples",
    title: "React Native animation examples, with the technique behind each",
  },
  "Creative Coding": {
    slug: "react-native-animation-examples",
    title: "React Native animation examples, with the technique behind each",
  },
  "Game Dev": {
    slug: "react-native-animation-examples",
    title: "React Native animation examples, with the technique behind each",
  },
  "Tools & Libraries": {
    slug: "react-native-in-2026",
    title: "React Native in 2026: what actually changed",
  },
};

function ReadNext({ reel }) {
  const post = CATEGORY_READING[reel.category];
  if (!post) return null;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group mt-10 flex items-start gap-4 rounded-xl border border-rule bg-accent-tint/60 p-5 transition-colors duration-200 hover:border-accent/40"
    >
      <span className="min-w-0 flex-1">
        <span className="block label">Read next</span>
        <span className="mt-1 block text-[15px] font-semibold text-ink transition-colors duration-150 group-hover:text-accent">
          {post.title}
        </span>
      </span>
      <ArrowRight
        className="mt-1 h-4 w-4 shrink-0 text-accent transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}

function MoreReels({ reel }) {
  const items = relatedReels(reel);
  return (
    <section className="mt-20 border-t border-rule pt-8" aria-labelledby="more-reels">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
        <h2 id="more-reels" className="text-2xl md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink">
          More React Native UI reels
        </h2>
        <Link href="/reels" className="text-[15px] font-medium text-accent hover:text-accent-deep">
          All {reelsData.length} reels →
        </Link>
      </div>
      <ul className="grid gap-5 sm:grid-cols-3 list-none m-0 p-0">
        {items.map((r) => {
          const cover = r.coverImage || r.coverImageReel;
          return (
            <li key={r.slug}>
              <Link href={`/reels/${r.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-rule bg-bg-2">
                  {cover && (
                    <Image
                      src={cover}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <p className="mt-3 text-[13px] text-ink-3">{r.category}</p>
                <h3 className="mt-1 text-[17px] font-medium leading-[1.35] text-ink group-hover:text-accent transition-colors duration-150 line-clamp-2">
                  {stripEmoji(r.title)}
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function renderInlineContent(text, keyPrefix) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+?\*\*)/g);

  return parts.map((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${keyPrefix}-code-${idx}`}
          className="bg-bg-3 border border-rule px-1.5 py-0.5 rounded font-mono text-[13px] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-strong-${idx}`} className="text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function CodeBlock({ code, language }) {
  return (
    <div className="my-7 overflow-hidden rounded-xl border border-rule bg-bg-2">
      <div className="flex items-center justify-between border-b border-rule px-4 py-2">
        <span className="label">
          {language || "code"}
        </span>
      </div>
      <pre
        className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.7] text-ink"
        style={{ tabSize: 2 }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function renderContent(markdown) {
  if (!markdown) return null;
  const lines = markdown.trim().split(/\r?\n/);
  const blocks = [];
  let paragraphLines = [];
  let listItems = [];
  let codeLines = [];
  let codeLanguage = "";
  let inCodeBlock = false;

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const text = paragraphLines.join(" ").trim();
    if (text) {
      blocks.push(
        <p
          key={`p-${blocks.length}`}
          className="text-ink-2 text-[15px] leading-[1.7] mb-4"
        >
          {renderInlineContent(text, `p-${blocks.length}`)}
        </p>,
      );
    }
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push(
      <ul key={`list-${blocks.length}`} className="space-y-2 mb-5">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="text-ink-2 leading-relaxed list-none pl-5 relative"
          >
            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-accent" />
            {renderInlineContent(item, `li-${blocks.length}-${index}`)}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  const flushCodeBlock = () => {
    blocks.push(
      <CodeBlock
        key={`code-${blocks.length}`}
        code={codeLines.join("\n")}
        language={codeLanguage}
      />,
    );
    codeLines = [];
    codeLanguage = "";
  };

  lines.forEach((line) => {
    const codeFence = line.match(/^```(\S*)\s*$/);
    if (codeFence) {
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        flushParagraph();
        flushList();
        inCodeBlock = true;
        codeLanguage = codeFence[1] || "";
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h2
          key={`h2-${blocks.length}`}
          className="text-3xl font-bold tracking-[-0.02em] text-ink mt-10 mb-4 leading-tight"
        >
          {line.replace("# ", "")}
        </h2>,
      );
      return;
    }

    // Captions written with three hashes were falling through to a paragraph
    // and rendering the literal "### " on the page.
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h4
          key={`h4-${blocks.length}`}
          className="text-[17px] font-semibold tracking-[-0.01em] text-ink mt-7 mb-2"
        >
          {line.replace("### ", "")}
        </h4>,
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3
          key={`h3-${blocks.length}`}
          className="text-2xl font-bold tracking-[-0.02em] text-ink mt-8 mb-3"
        >
          {line.replace("## ", "")}
        </h3>,
      );
      return;
    }

    if (
      line.startsWith("- ") ||
      line.startsWith("→ ") ||
      line.startsWith("✅ ")
    ) {
      flushParagraph();
      listItems.push(line.replace(/^[-→✅]\s+/, ""));
      return;
    }

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      return;
    }

    flushList();
    paragraphLines.push(line.trim());
  });

  if (inCodeBlock) flushCodeBlock();
  flushParagraph();
  flushList();

  return blocks;
}

// Social platform link config — order matters (most important first)
const SOCIAL_PLATFORMS = [
  {
    key: "youtube",
    icon: YouTubeIcon,
    label: "YouTube",
    hoverColor: "#FF0000",
    primary: true,
  },
  {
    key: "instagram",
    icon: InstagramIcon,
    label: "Instagram",
    hoverColor: "#E4405F",
  },
  { key: "tiktok", icon: TikTokIcon, label: "TikTok", hoverColor: "#000000" },
  {
    key: "facebook",
    icon: FacebookIcon,
    label: "Facebook",
    hoverColor: "#1877F2",
  },
  {
    key: "pinterest",
    icon: PinterestIcon,
    label: "Pinterest",
    hoverColor: "#E60023",
  },
  {
    key: "github",
    icon: GitHubIcon,
    label: "Source",
    hoverColor: "#FFFFFF",
    isCode: true,
  },
];

function SocialLinkPill({ link }) {
  const Icon = link.icon;
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition";
  if (link.primary) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-accent-deep text-on-accent font-semibold hover:opacity-90`}
        title={`Watch on ${link.label}`}
      >
        <Icon className="w-4 h-4" />
        {link.label}
      </a>
    );
  }
  if (link.isCode) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border border-accent/40 text-accent font-semibold hover:bg-accent/10`}
        title="View source code on GitHub"
      >
        <Icon className="w-4 h-4" />
        {link.label} code
      </a>
    );
  }
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-rule text-ink hover:bg-bg-3`}
      title={`Watch on ${link.label}`}
    >
      <Icon className="w-4 h-4" />
      {link.label}
    </a>
  );
}

export default async function ReelDetailPage({ params }) {
  const { slug } = await params;
  const reel = reelsData.find((r) => r.slug === slug);
  if (!reel) notFound();

  const title = cleanTitle(reel.title);
  const coverImage = getCoverImage(reel);
  const videoSource = getVideoSource(reel);
  const stats = await getReelStats(reel);
  const durationLabel = formatDuration(stats.durationSeconds);

  const activeLinks = SOCIAL_PLATFORMS.map((p) => ({
    ...p,
    url: reel.links?.[p.key],
  })).filter((p) => p.url && p.url.length > 0);

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <VideoJsonLd reel={reel} stats={stats} />
      <ReelBreadcrumbJsonLd reel={reel} />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/reels"
          className="group back-link mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          Back to reels
        </Link>

        <div className="mb-10 max-w-3xl">
          <div className="label">
            {reel.category} · {durationLabel}
          </div>
          <h1 className="text-display font-semibold text-ink mt-3">
            {title}
          </h1>
          <p className="text-[17px] md:text-lg text-ink-2 mt-5 leading-[1.6]">
            {stripEmoji(reel.description).toLowerCase() ===
            stripEmoji(reel.title).toLowerCase()
              ? reel.notes || reelSummary(reel, 220)
              : renderInlineContent(reel.description, "description")}
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-6 text-[13px] text-ink-3 tabular-nums">
            {Number.isFinite(Number(stats.views)) && (
              <span className="inline-flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                {formatViews(stats.views)} views
                {stats.isLive && (
                  <span className="text-accent" title="Fetched from YouTube">
                    live
                  </span>
                )}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {durationLabel}
            </span>
            {reel.publishTime && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatPublishDate(reel.publishTime)}
              </span>
            )}
          </div>
        </div>

        <div className="mb-12">
          <div className="label-sm mb-3">
            Watch on
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {activeLinks.map((link) => (
              <SocialLinkPill key={link.key} link={link} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-[340px] order-2 md:order-1 shrink-0">
            <div className="md:sticky md:top-28 space-y-8">
              {videoSource.type === "iframe" ? (
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden border border-rule bg-black">
                  <iframe
                    src={videoSource.src}
                    title={title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : videoSource.type === "video" ? (
                <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden border border-rule bg-black">
                  <video
                    src={videoSource.src}
                    poster={coverImage || undefined}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-rule">
                  {coverImage ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${coverImage})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-bg-2" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 to-transparent flex flex-col justify-end p-6">
                    <Play className="w-10 h-10 text-accent mb-3" />
                    <p className="text-[14px] text-ink-2 mb-4">
                      Watch on {videoSource.platform}
                    </p>
                    {(videoSource.src || reel.links?.facebook) && (
                      <a
                        href={videoSource.src || reel.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent-deep text-on-accent text-sm font-semibold"
                      >
                        <Play className="w-4 h-4" fill="currentColor" /> Open
                        reel
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div>
                <div className="label-sm mb-3">
                  Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {reel.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[13px]">
                <div className="border border-rule rounded-lg p-3">
                  <div className="text-ink-3 uppercase tracking-[0.12em]">
                    Views
                  </div>
                  <div className="text-ink text-lg font-semibold mt-1">
                    {formatViews(stats.views)}
                    {stats.isLive && (
                      <span
                        className="ml-2 align-middle label-sm text-accent"
                        title="Fetched from YouTube"
                      >
                        live
                      </span>
                    )}
                  </div>
                </div>
                <div className="border border-rule rounded-lg p-3">
                  <div className="text-ink-3 uppercase tracking-[0.12em]">
                    Duration
                  </div>
                  <div className="text-ink text-lg font-semibold mt-1">
                    {durationLabel}
                    {stats.isLive && (
                      <span
                        className="ml-2 align-middle label-sm text-accent"
                        title="Fetched from YouTube"
                      >
                        live
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {activeLinks.length > 0 && (
                <div>
                  <div className="label-sm mb-3">
                    Follow
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.key}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          title={link.label}
                          className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-rule text-ink-2 hover:text-ink hover:bg-bg-3 transition"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <div className="label-sm mb-6">
              Write-up
            </div>
            {reel.notes && (
              <div className="mb-10 border-l-2 border-accent/30 pl-5">
                <h2 className="text-[17px] font-semibold text-ink">
                  About this build
                </h2>
                <p className="mt-2 text-[16px] leading-[1.7] text-ink-2">
                  {reel.notes}
                </p>
              </div>
            )}
            <div>{renderContent(reel.content)}</div>

            <div className="mt-16 p-6 rounded-xl bg-bg-2 border border-rule">
              <div className="label mb-2">
                LIKE WHAT YOU SEE?
              </div>
              <p className="text-ink text-lg leading-relaxed mb-5">
                I’m available for freelance & contract React Native work — apps,
                features, UI implementation, you name it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="px-5 py-2.5 rounded-lg bg-accent-deep text-on-accent text-sm font-semibold hover:opacity-90 transition"
                >
                  Start a project →
                </Link>
                <Link
                  href="/reels"
                  className="px-5 py-2.5 rounded-lg border border-rule text-ink text-sm font-medium hover:bg-bg-3 transition"
                >
                  More reels
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ReadNext reel={reel} />
        <MoreReels reel={reel} />
      </div>
    </main>
  );
}
