"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion, useScrollSignal } from "@/components/SmoothScroll";

/**
 * A marquee that reads the scroll. It idles at `speed` px/s, gets shoved along
 * by scroll velocity, and reverses when you scroll back up.
 *
 * `children` are rendered twice — the track wraps at the width of one copy, so
 * whatever you pass has to tile seamlessly.
 */
export default function VelocityMarquee({
  speed = 45,
  className = "",
  children,
}) {
  const trackRef = useRef(null);
  const state = useRef({ offset: 0, boost: 0, direction: 1, width: 0 });
  const reducedMotion = useReducedMotion();

  useScrollSignal(({ velocity, direction }) => {
    const s = state.current;
    if (direction !== 0) s.direction = direction;
    s.boost = Math.min(Math.abs(velocity) * 4, 400);
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;

    const measure = () => {
      // Two copies in the track, so one copy is half the scroll width.
      state.current.width = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);
    const settle = setTimeout(measure, 600);

    let raf = 0;
    let last = performance.now();

    const tick = (now) => {
      // Clamp dt so a backgrounded tab doesn't teleport the track on return.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const s = state.current;
      s.boost *= 0.94; // fall back to the idle crawl once scrolling stops
      if (s.width > 0) {
        s.offset += (speed + s.boost) * s.direction * dt;
        s.offset = ((s.offset % s.width) + s.width) % s.width;
        track.style.transform = `translate3d(${-s.offset}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
      window.removeEventListener("resize", measure);
    };
  }, [speed, reducedMotion]);

  return (
    <div className={`marquee ${className}`} aria-hidden>
      <div ref={trackRef} className="inline-flex will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
