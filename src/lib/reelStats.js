const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/videos";
const REEL_STATS_REVALIDATE_SECONDS = 60 * 60;
const YOUTUBE_BATCH_SIZE = 50;

export function getYouTubeVideoId(value) {
  if (!value) return "";

  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }

    const isYouTube =
      hostname === "youtube.com" ||
      hostname === "m.youtube.com" ||
      hostname.endsWith(".youtube.com");

    if (!isYouTube) return "";

    if (url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/").filter(Boolean)[1] || "";
    }

    if (url.pathname.startsWith("/shorts/")) {
      return url.pathname.split("/").filter(Boolean)[1] || "";
    }

    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

function getReelYouTubeVideoId(reel) {
  return (
    getYouTubeVideoId(reel.videoUrl) ||
    getYouTubeVideoId(reel.videoURL) ||
    getYouTubeVideoId(reel.links?.youtube)
  );
}

function getFallbackStats(reel) {
  const youtubeVideoId = getReelYouTubeVideoId(reel);
  const fallbackViews = Number.isFinite(Number(reel.views))
    ? Number(reel.views)
    : null;
  const reelDuration = Number(reel.duration);
  const fallbackDurationSeconds =
    Number.isFinite(reelDuration) && reelDuration > 0 ? reelDuration : null;

  return {
    provider: youtubeVideoId ? "youtube" : "static",
    videoId: youtubeVideoId,
    views: fallbackViews,
    durationSeconds: fallbackDurationSeconds,
    isLive: false,
  };
}

function chunkItems(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function fetchYouTubeStats(videoIds) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const uniqueVideoIds = [...new Set(videoIds.filter(Boolean))];
  const statsByVideoId = new Map();

  if (!apiKey || uniqueVideoIds.length === 0) return statsByVideoId;

  for (const chunk of chunkItems(uniqueVideoIds, YOUTUBE_BATCH_SIZE)) {
    const params = new URLSearchParams({
      part: "statistics,contentDetails",
      id: chunk.join(","),
      key: apiKey,
    });

    try {
      const response = await fetch(`${YOUTUBE_API_URL}?${params}`, {
        next: { revalidate: REEL_STATS_REVALIDATE_SECONDS },
      });

      if (!response.ok) continue;

      const data = await response.json();
      for (const item of data.items || []) {
        const videoId = item.id;
        const statistics = item.statistics;
        const durationSeconds = parseIso8601Duration(
          item.contentDetails?.duration,
        );
        const viewCount = Number(statistics?.viewCount);

        if (!videoId) continue;

        statsByVideoId.set(videoId, {
          provider: "youtube",
          videoId,
          views: Number.isFinite(viewCount) ? viewCount : null,
          durationSeconds:
            Number.isFinite(durationSeconds) && durationSeconds > 0
              ? durationSeconds
              : null,
        });
      }
    } catch {
      continue;
    }
  }

  return statsByVideoId;
}

export function parseIso8601Duration(duration) {
  if (!duration) return null;

  const match = duration.match(
    /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/,
  );
  if (!match) return null;

  const [, days = 0, hours = 0, minutes = 0, seconds = 0] = match;
  return (
    Number(days) * 86400 +
    Number(hours) * 3600 +
    Number(minutes) * 60 +
    Number(seconds)
  );
}

export async function getReelStats(reel) {
  const statsBySlug = await getReelsStats([reel]);
  return statsBySlug[reel.slug] || getFallbackStats(reel);
}

export async function getReelsStats(reels) {
  const fallbackStats = reels.map((reel) => ({
    reel,
    stats: getFallbackStats(reel),
  }));
  const youtubeStatsByVideoId = await fetchYouTubeStats(
    fallbackStats.map(({ stats }) => stats.videoId),
  );

  return fallbackStats.reduce((statsBySlug, { reel, stats }) => {
    const youtubeStats = youtubeStatsByVideoId.get(stats.videoId);
    const key = reel.slug || String(reel.id);

    statsBySlug[key] = youtubeStats
      ? {
          ...youtubeStats,
          views: youtubeStats.views ?? stats.views,
          durationSeconds:
            youtubeStats.durationSeconds ?? stats.durationSeconds,
          isLive: true,
        }
      : stats;

    return statsBySlug;
  }, {});
}

export function formatReelViews(count, { compact = false } = {}) {
  if (!Number.isFinite(Number(count))) return "";
  const value = Number(count);

  if (compact) {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    if (value >= 1_000) return `${Math.round(value / 1_000)}K`;
  }

  return value.toLocaleString();
}

export function formatReelDuration(seconds) {
  const durationSeconds = Number(seconds);
  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) return "";

  const totalSeconds = Math.round(durationSeconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  if (hours > 0) {
    return [
      hours,
      String(minutes).padStart(2, "0"),
      String(remainingSeconds).padStart(2, "0"),
    ].join(":");
  }

  return [
    minutes,
    String(remainingSeconds).padStart(2, "0"),
  ].join(":");
}

export function getStaticReelStats(reel) {
  return getFallbackStats(reel);
}
