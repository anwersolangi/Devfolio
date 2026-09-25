import Link from "next/link";
import Image from "next/image";
import { reelsData } from "@/data/reels";
import {
  formatReelDuration,
  formatReelViews,
  getReelsStats,
} from "@/lib/reelStats";
import { Play, ArrowRight } from "lucide-react";
import { PageShell, PageHeader, SectionHead } from "@/components/PageHeader";
import { jsonLd } from "@/lib/jsonld";
import { DEFAULT_OG_IMAGE, breadcrumbJsonLd, stripEmoji, TWITTER_BASE } from "@/lib/seo";
import { SITE_URL } from "@/data/site";

export const revalidate = 3600;

const DESCRIPTION =
  "Screen-recorded React Native UI builds by Anwer Solangi, posted weekly on YouTube, Instagram and TikTok — with write-ups and source code.";

export const metadata = {
  title: "React Native UI Reels with Source Code | Anwer Solangi",
  description: DESCRIPTION,
  alternates: { canonical: "/reels" },
  openGraph: {
    title: "React Native UI Reels by Anwer Solangi",
    description: DESCRIPTION,
    url: "/reels",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    ...TWITTER_BASE,
    title: "React Native UI Reels by Anwer Solangi",
    description: DESCRIPTION,
  },
};

function cleanTitle(s) {
  return stripEmoji(s || "");
}

export default async function ReelsPage() {
  const featured = reelsData[reelsData.length - 1];
  const rest = [...reelsData].slice(0, -1).reverse();
  const statsBySlug = await getReelsStats(reelsData);
  const featuredStats = featured ? statsBySlug[featured.slug] : null;

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "React Native UI reels by Anwer Solangi",
            url: `${SITE_URL}/reels`,
            description: DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#person` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [...reelsData].reverse().map((reel, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}/reels/${reel.slug}`,
                name: stripEmoji(reel.title),
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Reels", path: "/reels" },
            ]),
          ),
        }}
      />
      <div>
        <PageHeader
          crumbs={[{ label: "Home", href: "/" }, { label: "Reels" }]}
          title="Screen-recorded UI builds. Now with source."
          lede="A weekly notebook of React Native experiments — posted across YouTube, Instagram, TikTok, Facebook and Pinterest. Open any reel for the full write-up and source code on GitHub."
          meta={`${reelsData.length} reels`}
        />

        {featured && (
          <div className="mb-16 border-t border-rule pt-8">
            <SectionHead label="Latest" />

            <Link href={`/reels/${featured.slug}`}>
              <div className="group relative w-full h-[420px] md:h-[560px] rounded-2xl overflow-hidden border border-rule bg-bg-2 shadow-card hover:border-accent/40 transition-colors duration-300 cursor-pointer">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={cleanTitle(featured.title)}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-bg-2" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/70 to-bg/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-end p-8 md:p-14">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-3 label-2 mb-4">
                      <span className="font-medium text-accent">{featured.category}</span>
                      {formatReelViews(featuredStats?.views, {
                        compact: true,
                      }) && (
                        <span className="text-ink-2">
                          {formatReelViews(featuredStats.views, {
                            compact: true,
                          })}{" "}
                          views
                        </span>
                      )}
                      {formatReelDuration(featuredStats?.durationSeconds) && (
                        <span className="text-ink-2">
                          {formatReelDuration(featuredStats.durationSeconds)}
                        </span>
                      )}
                      {featuredStats?.isLive && (
                        <span className="text-accent">live</span>
                      )}
                    </div>
                    <h2 className="text-3xl md:text-[2.75rem] font-semibold tracking-[-0.03em] text-ink leading-[1.08] mb-4">
                      {cleanTitle(featured.title)}
                    </h2>
                    <p className="text-ink-2 text-[15px] leading-[1.6] mb-6 line-clamp-2 max-w-lg">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-5 flex-wrap">
                      <div className="inline-flex items-center gap-2 text-ink text-sm font-medium">
                        <div className="w-10 h-10 rounded-full bg-accent-deep text-on-accent flex items-center justify-center">
                          <Play
                            className="w-3.5 h-3.5 ml-0.5"
                            fill="currentColor"
                          />
                        </div>
                        Watch & view source
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {featured.technologies.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="chip"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        )}

        <div className="border-t border-rule pt-8">
          <SectionHead label="All reels" count={`${reelsData.length} total`} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rest.map((reel, index) => (
            <GridReelCard
              key={reel.id}
              reel={reel}
              stats={statsBySlug[reel.slug]}
              displayIndex={reelsData.length - 1 - index}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function GridReelCard({ reel, stats, displayIndex }) {
  const viewsLabel = formatReelViews(stats?.views, { compact: true });
  const durationLabel = formatReelDuration(stats?.durationSeconds);

  return (
    <Link href={`/reels/${reel.slug}`}>
      <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-rule hover:border-accent/40 transition-colors duration-200 bg-bg-2">
        <div className="relative aspect-square w-full overflow-hidden">
          {reel.coverImage ? (
            <Image
              src={reel.coverImage}
              alt={cleanTitle(reel.title)}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-end p-5 bg-bg-2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, color-mix(in oklab, var(--ink) 7%, transparent) 0 1px, transparent 1px 14px)",
              }}
            >
              <div className="text-[13px] text-ink-3">
                {cleanTitle(reel.title).slice(0, 40)}…
              </div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <div className="w-14 h-14 rounded-full bg-accent-deep text-on-accent flex items-center justify-center shadow-xl">
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            </div>
          </div>

          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <span className="chip bg-bg-2/90 backdrop-blur-sm border border-rule">
              {reel.category}
            </span>
            <span className="chip bg-bg-2/90 backdrop-blur-sm border border-rule tabular-nums">
              #{String(displayIndex).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-ink font-medium text-[16px] leading-[1.35] mb-3 transition-colors duration-150 group-hover:text-accent line-clamp-2">
            {cleanTitle(reel.title)}
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {reel.technologies.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="chip"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pt-3 border-t border-rule flex items-center justify-between text-ink-3 text-[13px] tabular-nums">
            <span className="inline-flex items-center gap-2">
              {viewsLabel && <span>{viewsLabel} views</span>}
              {durationLabel && <span>{durationLabel}</span>}
              {stats?.isLive && <span className="text-accent">live</span>}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1">
              View details <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
