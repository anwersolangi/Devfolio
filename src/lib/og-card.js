import { readFile } from "node:fs/promises";
import path from "node:path";
import { createElement as h } from "react";

/**
 * Share-card renderer for `opengraph-image.js` routes. Written with
 * createElement rather than JSX so the same module can be imported by the
 * static asset script in /scripts as well as by Next.
 *
 * The card is the site in miniature: paper ground, ink type in Schibsted
 * Grotesk, one green accent, and an optional artifact on the right (an app
 * icon or a phone frame with a real screenshot).
 */

export const OG_SIZE = { width: 1200, height: 630 };

const C = {
  bg: "#f7f7f5",
  bench: "#eeeeea",
  ink: "#171716",
  ink2: "#5a5a55",
  ink3: "#77776f",
  rule: "#e2e2dd",
  accent: "#0d6b4b",
  bezel: "#111110",
};

const FONT_DIR = path.join(process.cwd(), "src/assets/fonts");

export async function loadOgFonts() {
  const [regular, semibold] = await Promise.all([
    readFile(path.join(FONT_DIR, "SchibstedGrotesk-400.ttf")),
    readFile(path.join(FONT_DIR, "SchibstedGrotesk-600.ttf")),
  ]);
  return [
    { name: "Schibsted Grotesk", data: regular, weight: 400, style: "normal" },
    { name: "Schibsted Grotesk", data: semibold, weight: 600, style: "normal" },
  ];
}

const MIME = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp" };

/**
 * Loads an image for the card as a data URI: a /public path is read from
 * disk, a remote URL is fetched. Returns null rather than throwing so a
 * missing asset degrades to a text-only card instead of failing the build.
 */
export async function loadImage(src) {
  if (!src) return null;
  try {
    let buf;
    let type;
    if (src.startsWith("http")) {
      const res = await fetch(src, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) return null;
      type = res.headers.get("content-type") || "image/jpeg";
      if (type.includes("webp")) return null; // satori can't decode WebP
      buf = Buffer.from(await res.arrayBuffer());
    } else {
      const ext = path.extname(src).toLowerCase();
      if (!MIME[ext] || ext === ".webp") return null;
      type = MIME[ext];
      buf = await readFile(path.join(process.cwd(), "public", src));
    }
    const small = await downscale(buf);
    if (small) [buf, type] = small;
    return `data:${type};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

/**
 * Shrinks an image to roughly twice the size the card draws it at. Satori
 * decodes whatever it is given at full resolution, and multi-megabyte reel
 * covers pushed single cards past Next's 60-second prerender limit. sharp
 * ships with Next; if it can't load, the original bytes are used.
 */
async function downscale(buf) {
  try {
    const { default: sharp } = await import("sharp");
    const img = sharp(buf).resize({
      width: 600,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    });
    // Keep PNG for images with transparency (app icons); JPEG otherwise.
    const { hasAlpha } = await sharp(buf).metadata();
    return hasAlpha
      ? [await img.png().toBuffer(), "image/png"]
      : [await img.jpeg({ quality: 85 }).toBuffer(), "image/jpeg"];
  } catch {
    return null;
  }
}

function titleSize(title, hasArt) {
  const n = title.length;
  if (hasArt) return n > 70 ? 46 : n > 48 ? 54 : 64;
  return n > 80 ? 52 : n > 55 ? 62 : 72;
}

/**
 * @param {object} o
 * @param {string} o.kicker   small line above the title (section / type)
 * @param {string} o.title
 * @param {string} [o.subtitle]
 * @param {string} [o.footer]  bottom-left line; defaults to the domain
 * @param {string|null} [o.icon]   data URI of an app icon
 * @param {string|null} [o.screen] data URI of a phone screenshot
 */
export function ogCard({ kicker, title, subtitle, footer = "anwersolangi.com", icon = null, screen = null }) {
  const hasArt = Boolean(icon || screen);

  const text = h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: hasArt ? 700 : 1040,
        height: "100%",
      },
    },
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 600,
            color: C.accent,
          },
        },
        kicker,
      ),
      h(
        "div",
        {
          style: {
            marginTop: 22,
            fontSize: titleSize(title, hasArt),
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: C.ink,
          },
        },
        title,
      ),
      subtitle
        ? h(
            "div",
            {
              style: {
                marginTop: 22,
                fontSize: 28,
                lineHeight: 1.4,
                color: C.ink2,
              },
            },
            subtitle,
          )
        : null,
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          fontSize: 22,
          color: C.ink3,
        },
      },
      h("div", {
        style: {
          width: 12,
          height: 12,
          borderRadius: 999,
          background: C.accent,
          marginRight: 14,
        },
      }),
      footer,
    ),
  );

  let art = null;
  if (screen) {
    art = h(
      "div",
      {
        style: {
          display: "flex",
          width: 250,
          height: 520,
          padding: 9,
          borderRadius: 40,
          background: C.bezel,
          boxShadow: "0 30px 60px -30px rgba(23,23,22,0.55)",
        },
      },
      h("img", {
        src: screen,
        width: 232,
        height: 502,
        style: { width: 232, height: 502, borderRadius: 32, objectFit: "cover" },
      }),
    );
  } else if (icon) {
    art = h("img", {
      src: icon,
      width: 260,
      height: 260,
      style: {
        width: 260,
        height: 260,
        borderRadius: 58,
        boxShadow: "0 30px 60px -30px rgba(23,23,22,0.45)",
      },
    });
  }

  return h(
    "div",
    {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        background: C.bg,
        fontFamily: "Schibsted Grotesk",
        borderBottom: `10px solid ${C.accent}`,
      },
    },
    text,
    art
      ? h(
          "div",
          {
            style: {
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 40,
              borderRadius: 28,
              background: C.bench,
            },
          },
          art,
        )
      : null,
  );
}
