/**
 * A button with a light sweeping around its edge.
 *
 * Ported from Inspira UI's ShimmerButton (MIT). A conic gradient spins behind
 * the button and an inset panel covers all but a `shimmerSize` sliver at the
 * rim, so only that sliver lights up as the gradient passes.
 *
 * `as` lets it render as next/link (or an <a>) instead of a <button>.
 * Pure CSS — stays a server component.
 */
export default function ShimmerButton({
  as: Tag = "button",
  shimmerColor = "#ffffff",
  shimmerSize = "0.06em",
  shimmerDuration = "3s",
  borderRadius = "9999px",
  background = "var(--accent)",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={`shimmer-btn ${className}`}
      style={{
        "--shimmer-color": shimmerColor,
        "--shimmer-cut": shimmerSize,
        "--shimmer-speed": shimmerDuration,
        "--shimmer-radius": borderRadius,
        "--shimmer-bg": background,
      }}
      {...rest}
    >
      <span className="shimmer-btn__spark" aria-hidden>
        <span className="shimmer-btn__slide">
          <span className="shimmer-btn__spin" />
        </span>
      </span>
      <span className="shimmer-btn__label">{children}</span>
      <span className="shimmer-btn__inset" aria-hidden />
    </Tag>
  );
}
