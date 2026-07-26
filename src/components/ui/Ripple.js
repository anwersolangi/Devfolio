/**
 * Concentric rings that breathe in and out on a stagger.
 *
 * Ported from Inspira UI's Ripple (MIT). Pure CSS, so no "use client" — it
 * fills its nearest positioned ancestor, which needs `overflow-hidden`.
 */
export default function Ripple({
  baseSize = 210,
  baseOpacity = 0.24,
  opacityStep = 0.03,
  spacing = 70,
  waveSpeed = 80,
  count = 7,
  className = "",
}) {
  return (
    <div className={`ripple-bg ${className}`} aria-hidden>
      {Array.from({ length: count }, (_, k) => {
        const i = k + 1;
        const size = baseSize + i * spacing;
        return (
          <span
            key={i}
            className="ripple-circle"
            style={{
              width: size,
              height: size,
              opacity: Math.max(baseOpacity - i * opacityStep, 0),
              animationDelay: `${i * waveSpeed}ms`,
              // Inspira dashes the second-to-last ring to break up the pattern.
              borderStyle: i === count - 1 ? "dashed" : "solid",
            }}
          />
        );
      })}
    </div>
  );
}
