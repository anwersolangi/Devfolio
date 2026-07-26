/**
 * A light travelling around an element's border.
 *
 * Ported from Inspira UI's BorderBeam (MIT), which is Vue — the technique is
 * pure CSS so nothing but the template changed. Drop it inside any element
 * that is `position: relative` and has a border radius; it inherits the radius.
 *
 * No "use client": there is no JS here at all, so it stays on the server.
 */
export default function BorderBeam({
  size = 200,
  duration = 14,
  delay = 0,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "var(--accent)",
  colorTo = "var(--accent-2)",
  className = "",
}) {
  return (
    <div
      aria-hidden
      className={`border-beam ${className}`}
      style={{
        "--beam-size": size,
        "--beam-duration": `${duration}s`,
        "--beam-delay": `${delay}s`,
        "--beam-anchor": anchor,
        "--beam-border-width": borderWidth,
        "--beam-from": colorFrom,
        "--beam-to": colorTo,
      }}
    />
  );
}
