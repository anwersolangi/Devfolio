import Image from "next/image";

/**
 * A phone bezel around a screenshot. The bezel is a real dark object on the
 * light page, so it is the one place a cast shadow is honest.
 *
 * `fluid` lets the frame fill its container's width (the aspect ratio is
 * kept); `width` is then the layout hint for next/image and the radius scale.
 */
export default function PhoneFrame({
  src,
  alt = "",
  width = 240,
  fluid = false,
  label,
  placeholder = "Coming soon",
  priority = false,
  rotate = 0,
}) {
  const radius = Math.round(width * 0.14);

  return (
    <div
      className={`relative ${fluid ? "block w-full" : "inline-block"}`}
      style={{
        width: fluid ? undefined : width,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      {label ? (
        <div className="absolute -top-6 left-0 text-[12px] text-ink-3">
          {label}
        </div>
      ) : null}

      <div
        className="relative w-full"
        style={{
          aspectRatio: "1 / 2.06",
          borderRadius: radius,
          background: "var(--bezel)",
          padding: 6,
          boxSizing: "border-box",
          boxShadow:
            "var(--shadow-object), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="relative w-full h-full bg-black overflow-hidden"
          style={{ borderRadius: Math.max(radius - 6, 8) }}
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
    <div className="absolute inset-0 flex items-end p-3 bg-[#1c1c1a]">
      <div className="text-[11px] leading-tight text-white/60">{text}</div>
    </div>
  );
}
