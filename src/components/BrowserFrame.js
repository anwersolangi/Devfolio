"use client";
import Image from "next/image";

export default function BrowserFrame({
  src,
  alt = "",
  width = 540,
  aspect = "16 / 10",
  url = "youtube.com",
  tabTitle = "YouTube",
  label,
  glow = false,
  placeholder = "Screenshot coming soon",
  priority = false,
}) {
  return (
    <div className="relative inline-block w-full" style={{ maxWidth: width }}>
      {label ? (
        <div className="absolute -top-5 left-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3 z-10">
          {label}
        </div>
      ) : null}

      <div
        className="relative rounded-2xl overflow-hidden border border-rule"
        style={{
          background: "#1f1d1b",
          boxShadow: glow
            ? "0 50px 140px -30px rgba(255,106,61,0.35), 0 30px 70px -20px rgba(0,0,0,0.85)"
            : "0 30px 80px -30px rgba(0,0,0,0.9)",
        }}
      >
        {/* Tab bar */}
        <div
          className="flex items-end gap-2 pl-4 pr-3 pt-3"
          style={{ background: "#0d0c0b" }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5 mb-2 mr-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#ff5f56" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#ffbd2e" }}
            />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: "#27c93f" }}
            />
          </div>

          {/* Active tab */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-t-lg max-w-[200px]"
            style={{
              background: "#1f1d1b",
              borderTop: "1px solid rgba(244,239,231,0.10)",
              borderLeft: "1px solid rgba(244,239,231,0.10)",
              borderRight: "1px solid rgba(244,239,231,0.10)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-current text-[#ff0000] shrink-0"
              aria-hidden
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
            <span className="text-[11px] text-ink font-medium truncate flex-1">
              {tabTitle}
            </span>
            <span className="text-ink-3 text-xs leading-none">×</span>
          </div>

          {/* Spacer + new-tab button */}
          <div className="flex-1" />
          <div className="text-ink-3 text-base mb-1 leading-none">+</div>
        </div>

        {/* URL bar */}
        <div
          className="flex items-center gap-2 px-3 py-2 border-b"
          style={{
            background: "#161514",
            borderColor: "rgba(244,239,231,0.10)",
          }}
        >
          <div className="flex gap-1">
            <ArrowGlyph />
            <ArrowGlyph forward />
            <RefreshGlyph />
          </div>
          <div
            className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-mono text-ink-2"
            style={{
              background: "#0d0c0b",
              border: "1px solid rgba(244,239,231,0.10)",
            }}
          >
            <LockGlyph />
            <span className="truncate">{url}</span>
          </div>
          {/* Extension puzzle icon — the meta wink */}
          <div className="text-ink-2">
            <PuzzleGlyph />
          </div>
        </div>

        {/* Content */}
        <div
          className="relative bg-black w-full"
          style={{ aspectRatio: aspect }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={`${width}px`}
              className="object-cover"
            />
          ) : (
            <BrowserPlaceholder text={placeholder} />
          )}
        </div>
      </div>
    </div>
  );
}

function ArrowGlyph({ forward = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-ink-3"
      style={{ transform: forward ? "scaleX(-1)" : "none" }}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function RefreshGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-ink-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

function LockGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3 h-3 text-ink-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PuzzleGlyph() {
  // Chrome's extensions icon, simplified
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.5 11h-1.83a1 1 0 0 1-.71-.29l-.5-.5a1 1 0 0 1 0-1.42l1.06-1.06a1 1 0 0 0 0-1.42l-1.42-1.41a1 1 0 0 0-1.41 0L14.62 6a1 1 0 0 1-1.41 0l-.5-.5a1 1 0 0 1-.29-.71V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.83a1 1 0 0 1-.29.71l-.5.5a1 1 0 0 1-1.42 0L5.16 4.97a1 1 0 0 0-1.42 0L2.32 6.4a1 1 0 0 0 0 1.41L3.4 8.88a1 1 0 0 1 0 1.41l-.5.5a1 1 0 0 1-.71.29H.5v4h1.83a1 1 0 0 1 .71.29l.5.5a1 1 0 0 1 0 1.42L2.46 18.34a1 1 0 0 0 0 1.41l1.41 1.42a1 1 0 0 0 1.42 0l1.06-1.06a1 1 0 0 1 1.41 0l.5.5c.19.19.3.45.3.71V23h4v-1.83c0-.26.1-.52.29-.71l.5-.5a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41l-1.06-1.06a1 1 0 0 1 0-1.42l.5-.5a1 1 0 0 1 .71-.29H23z" />
    </svg>
  );
}

function BrowserPlaceholder({ text }) {
  return (
    <div
      className="absolute inset-0 flex items-end p-5"
      style={{
        background:
          "linear-gradient(135deg,#1a1714 0%,#2a2622 45%,#1a1714 100%)",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px)",
      }}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 leading-tight">
        ↘ {text}
      </div>
    </div>
  );
}
