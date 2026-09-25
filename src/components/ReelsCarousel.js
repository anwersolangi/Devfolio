import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import { Section } from "@/components/Section";
import { stripEmoji } from "@/lib/seo";

export default function ReelsCarousel({
  reels = [],
  statsBySlug = {},
  totalReels = reels.length,
}) {
  return (
    <Section
      id="reels"
      label="Recent UI builds"
      title="Screen-recorded React Native UI, posted weekly on YouTube, Instagram and TikTok."
      more={{ href: "/reels", label: `All ${totalReels} reels` }}
    >
      <ul className="flex md:grid md:grid-cols-5 gap-5 lg:gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory -mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 pb-2 list-none m-0">
        {reels.map((reel) => (
          <li
            key={reel.id}
            className="shrink-0 w-[180px] md:w-auto snap-start"
          >
            <ReelCard reel={reel} stats={statsBySlug[reel.slug]} />
          </li>
        ))}
      </ul>
    </Section>
  );
}


function ReelCard({ reel, stats }) {
  const views = formatViews(stats?.views ?? reel.views);
  const duration = formatDuration(stats?.durationSeconds ?? reel.duration);
  const meta = [views && `${views} views`, duration].filter(Boolean);

  return (
    <Link href={`/reels/${reel.slug}`} className="group block">
      <div className="w-full">
        <PhoneFrame
          width={180}
          fluid
          src={reel.coverImage || null}
          alt={reel.title}
          placeholder={reel.title}
        />
      </div>
      <h3 className="mt-3 text-[15px] font-medium leading-[1.35] text-ink group-hover:text-accent transition-colors duration-150 line-clamp-2">
        {stripEmoji(reel.title)}
      </h3>
      {meta.length > 0 && (
        <p className="mt-1 text-[13px] text-ink-3 tabular-nums">
          {meta.join(" · ")}
        </p>
      )}
    </Link>
  );
}

function formatViews(n) {
  // No count (or a zero from a stats miss) is omitted rather than shown as 0.
  if (!n) return "";
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return Math.round(n / 1_000) + "K";
  return String(n);
}

function formatDuration(seconds) {
  const s = Number(seconds);
  if (!Number.isFinite(s) || s <= 0) return "";
  const total = Math.round(s);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
