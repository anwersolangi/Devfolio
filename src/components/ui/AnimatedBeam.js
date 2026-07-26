"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { useReducedMotion } from "@/components/SmoothScroll";

/**
 * A light travelling along a curve drawn between two elements.
 *
 * Ported from Inspira UI's AnimatedBeam (MIT). Two paths are stacked: a static
 * dim one, and the same path stroked with a gradient whose coordinates are
 * animated by SMIL <animate> — so the motion needs no animation library.
 *
 * `containerRef` must be a positioned ancestor of both `fromRef` and `toRef`;
 * the SVG is absolutely positioned to fill it.
 *
 * Note: Inspira defaults `duration` to a random number. That would differ
 * between server and client render, so here it's a plain default and callers
 * stagger it explicitly.
 */
export default function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4,
  delay = 0,
  pathColor = "rgba(244, 239, 231, 0.14)",
  pathWidth = 2,
  pathOpacity = 1,
  // Three stops rather than two: the sweep ramps up through --accent, peaks
  // near-white, and falls away through --accent-2.
  gradientStartColor = "var(--accent)",
  gradientCoreColor = "var(--accent-hot)",
  gradientStopColor = "var(--accent-2)",
  beamWidth = 2.5,
  glow = true,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className = "",
}) {
  // useId can contain characters that aren't valid in an SVG id / url() ref.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gradientId = `beam-${uid}`;
  const glowId = `beam-glow-${uid}`;
  const reducedMotion = useReducedMotion();
  const [path, setPath] = useState("");
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const [isVertical, setIsVertical] = useState(false);
  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const [isBottomToTop, setIsBottomToTop] = useState(false);

  const updatePath = useCallback(() => {
    const container = containerRef?.current;
    const from = fromRef?.current;
    const to = toRef?.current;
    if (!container || !from || !to) return;

    const box = container.getBoundingClientRect();
    const a = from.getBoundingClientRect();
    const b = to.getBoundingClientRect();

    // Bail out when nothing moved — ResizeObserver fires plenty, and handing
    // back a fresh object every time would re-render on every callback.
    setDims((d) =>
      d.width === box.width && d.height === box.height
        ? d
        : { width: box.width, height: box.height },
    );

    const startX = a.left - box.left + a.width / 2 + startXOffset;
    const startY = a.top - box.top + a.height / 2 + startYOffset;
    const endX = b.left - box.left + b.width / 2 + endXOffset;
    const endY = b.top - box.top + b.height / 2 + endYOffset;

    // Which axis the beam mostly travels along decides whether the gradient
    // animates on x or y.
    setIsVertical(Math.abs(endY - startY) > Math.abs(endX - startX));
    setIsRightToLeft(endX < startX);
    setIsBottomToTop(endY < startY);

    const controlY = startY - curvature;
    const next = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
    setPath((p) => (p === next ? p : next));
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    updatePath();
    const observer = new ResizeObserver(updatePath);
    observer.observe(container);
    // Web fonts and images landing late shift the nodes underneath the beams.
    const settle = setTimeout(updatePath, 600);

    return () => {
      observer.disconnect();
      clearTimeout(settle);
    };
  }, [containerRef, updatePath]);

  const horizontal = reverse ? !isRightToLeft : isRightToLeft;
  const vertical = reverse ? !isBottomToTop : isBottomToTop;
  const x1 = horizontal ? "90%; -10%;" : "10%; 110%;";
  const x2 = horizontal ? "100%; 0%;" : "0%; 100%;";
  const y1 = vertical ? "90%; -10%;" : "10%; 110%;";
  const y2 = vertical ? "100%; 0%;" : "0%; 100%;";

  const animateProps = {
    dur: `${duration}s`,
    begin: `${delay}s`,
    keyTimes: "0; 1",
    // Inspira uses easeOutExpo (0.16 1 0.3 1), which fires the beam out and
    // then crawls for most of the cycle. A symmetric ease keeps the travel
    // legible end to end.
    keySplines: "0.45 0.05 0.35 1",
    calcMode: "spline",
    repeatCount: "indefinite",
  };

  return (
    <svg
      fill="none"
      width={dims.width}
      height={dims.height}
      viewBox={`0 0 ${dims.width} ${dims.height}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={`pointer-events-none absolute left-0 top-0 transform-gpu ${className}`}
    >
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={beamWidth}
        strokeOpacity="1"
        strokeLinecap="round"
        filter={glow ? `url(#${glowId})` : undefined}
      />
      <defs>
        {glow ? (
          <filter
            id={glowId}
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="3" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ) : null}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          x2="0%"
          y1="0%"
          y2="0%"
        >
          {/* stop-color is set through `style` rather than the attribute so
              var() actually resolves — var() is invalid in a presentation
              attribute and would silently fall back to black. */}
          <stop offset="0%" style={{ stopColor: gradientStartColor }} stopOpacity="0" />
          <stop offset="25%" style={{ stopColor: gradientStartColor }} stopOpacity="0.7" />
          <stop offset="50%" style={{ stopColor: gradientCoreColor }} stopOpacity="1" />
          <stop offset="75%" style={{ stopColor: gradientStopColor }} stopOpacity="0.7" />
          <stop offset="100%" style={{ stopColor: gradientStopColor }} stopOpacity="0" />
          {/* SMIL can't be paused from CSS, so reduced motion has to drop the
              <animate> elements entirely — the static path still renders. */}
          {reducedMotion ? null : isVertical ? (
            <>
              <animate attributeName="y1" values={y1} {...animateProps} />
              <animate attributeName="y2" values={y2} {...animateProps} />
            </>
          ) : (
            <>
              <animate attributeName="x1" values={x1} {...animateProps} />
              <animate attributeName="x2" values={x2} {...animateProps} />
            </>
          )}
        </linearGradient>
      </defs>
    </svg>
  );
}
