"use client";

import { useEffect, useRef } from "react";

/**
 * A dot grid that only lights up under the cursor.
 *
 * Two stacked grids: a dim one that's always on, and a bright accent one
 * revealed through a radial mask that tracks the pointer — the reveal trick
 * from Inspira UI's CardSpotlight (MIT), scaled up to a full section.
 *
 * Renders as the background layer of whatever wraps it, so the parent needs
 * `position: relative`. Pointer tracking is skipped on touch and under
 * reduced motion; the dim grid still renders in both cases.
 */
export default function Spotlight({ size = 520, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No cursor to follow on touch, and the reveal is motion under the
    // reduced-motion definition. Either way the static grid is enough.
    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    const parent = el.parentElement;
    if (!parent) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
    };

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      // Coalesce to one write per frame — pointermove can fire far more often.
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onEnter = () => el.style.setProperty("--spot-opacity", "1");
    const onLeave = () => el.style.setProperty("--spot-opacity", "0");

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerenter", onEnter);
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerenter", onEnter);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`spotlight ${className}`}
      style={{ "--spot-size": `${size}px` }}
    >
      <div className="spotlight-grid" />
      <div className="spotlight-reveal" />
      <div className="spotlight-glow" />
    </div>
  );
}
