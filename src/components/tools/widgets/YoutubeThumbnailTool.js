"use client";
import { useMemo, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Field, downloadUrl } from "../ui";

const QUALITIES = [
  { key: "maxresdefault", label: "Max-res HD", dim: "1280×720" },
  { key: "sddefault", label: "Standard", dim: "640×480" },
  { key: "hqdefault", label: "High", dim: "480×360" },
  { key: "mqdefault", label: "Medium", dim: "320×180" },
  { key: "default", label: "Default", dim: "120×90" },
];

function parseId(input) {
  const s = (input || "").trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    const host = u.hostname.replace(/^www\./, "");
    let id = "";
    if (host === "youtu.be") id = u.pathname.split("/").filter(Boolean)[0];
    else if (host === "youtube.com" || host.endsWith(".youtube.com")) {
      if (u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2];
      else if (u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2];
      else id = u.searchParams.get("v") || "";
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
  } catch {
    return "";
  }
}

export default function YoutubeThumbnailTool() {
  const [input, setInput] = useState("");
  // Keys whose loaded image was actually YouTube's 120px placeholder.
  const [unavailable, setUnavailable] = useState(new Set());

  const id = useMemo(() => parseId(input), [input]);

  // Reset availability when the id changes.
  const [lastId, setLastId] = useState("");
  if (id !== lastId) {
    setLastId(id);
    setUnavailable(new Set());
  }

  const markUnavailable = (key) =>
    setUnavailable((prev) => new Set(prev).add(key));

  return (
    <div className="space-y-6">
      <Field
        label="YouTube URL or video ID"
        hint="Paste a youtube.com/watch, youtu.be, or /shorts link — or the 11-character ID"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="w-full rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
        />
      </Field>

      {input && !id && (
        <p className="text-sm text-[#ff7a7a]">
          Couldn&rsquo;t find a video ID in that — check the link and try again.
        </p>
      )}

      {id && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUALITIES.filter((qq) => !unavailable.has(qq.key)).map((qq) => {
            const previewSrc = `https://i.ytimg.com/vi/${id}/${qq.key}.jpg`;
            return (
              <div
                key={qq.key}
                className="overflow-hidden rounded-xl border border-rule bg-bg"
              >
                <div className="aspect-video bg-[#0b0b0b]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewSrc}
                    alt={`${qq.label} thumbnail`}
                    className="h-full w-full object-cover"
                    onError={() => markUnavailable(qq.key)}
                    onLoad={(e) => {
                      // YouTube serves a 120px grey placeholder for missing
                      // high-res sizes — treat that as unavailable.
                      if (
                        qq.key !== "default" &&
                        e.currentTarget.naturalWidth <= 120
                      ) {
                        markUnavailable(qq.key);
                      }
                    }}
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      {qq.label}
                    </div>
                    <div className="font-mono text-[11px] text-ink-3">
                      {qq.dim}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={previewSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-rule p-2 text-ink-2 transition hover:text-ink"
                      aria-label="Open original"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        downloadUrl(
                          `/api/youtube-thumbnail?id=${id}&q=${qq.key}`,
                          `${id}-${qq.key}.jpg`,
                        )
                      }
                      className="rounded-lg bg-accent p-2 text-[#1a0a02] transition hover:opacity-90"
                      aria-label="Download thumbnail"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
