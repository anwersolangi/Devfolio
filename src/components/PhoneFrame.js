"use client";
import Image from "next/image";

export default function PhoneFrame({
  src,
  alt = "",
  width = 240,
  label,
  glow = false,
  placeholder = "Coming soon",
  priority = false,
  rotate = 0,
}) {
  const height = Math.round(width * 2.06);
  const radius = Math.round(width * 0.155);
  const innerRadius = radius - 8;

  return (
    <div
      className="relative inline-block"
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {label ? (
        <div className="absolute -top-5 left-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3 z-10">
          {label}
        </div>
      ) : null}

      <div
        className="relative"
        style={{
          width,
          height,
          borderRadius: radius,
          background: "#0a0908",
          padding: 8,
          boxSizing: "border-box",
          boxShadow: glow
            ? "0 50px 140px -30px rgba(255,106,61,0.35), 0 30px 70px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 6px #1a1816"
            : "0 30px 80px -30px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 6px #1a1816",
        }}
      >
        <div
          className="relative w-full h-full bg-black overflow-hidden"
          style={{ borderRadius: innerRadius }}
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
            <PhonePlaceholder text={placeholder} />
          )}
        </div>
      </div>
    </div>
  );
}

function PhonePlaceholder({ text }) {
  return (
    <div
      className="absolute inset-0 flex items-end p-4"
      style={{
        background:
          "linear-gradient(160deg,#1a1714 0%,#2a2622 45%,#1a1714 100%)",
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
