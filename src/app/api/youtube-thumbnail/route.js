// app/api/youtube-thumbnail/route.js
// Same-origin proxy so the YouTube Thumbnail Downloader can force a real file
// download. Browsers ignore the `download` attribute on cross-origin links, so
// we fetch the image server-side and re-serve it with an attachment header.
// (This route is disallowed in robots.js so it won't be indexed.)

const ALLOWED = new Set([
  "maxresdefault",
  "sddefault",
  "hqdefault",
  "mqdefault",
  "default",
]);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  const q = searchParams.get("q") || "hqdefault";

  if (!/^[A-Za-z0-9_-]{11}$/.test(id) || !ALLOWED.has(q)) {
    return new Response("Bad request", { status: 400 });
  }

  let upstream;
  try {
    upstream = await fetch(`https://i.ytimg.com/vi/${id}/${q}.jpg`, {
      cache: "no-store",
    });
  } catch {
    return new Response("Upstream fetch failed", { status: 502 });
  }

  if (!upstream.ok) {
    return new Response("Thumbnail not found", { status: 404 });
  }

  const buffer = await upstream.arrayBuffer();
  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": upstream.headers.get("content-type") || "image/jpeg",
      "Content-Disposition": `attachment; filename="${id}-${q}.jpg"`,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
