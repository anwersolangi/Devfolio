"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion, useScrollSignal } from "@/components/SmoothScroll";

/**
 * Drifts its children against the scroll to fake depth.
 *
 * `speed` is how far the element lags behind the page: 0 is welded to the
 * layout, 0.2 is noticeably further away. Keep it small — anything past ~0.3
 * reads as a glitch rather than distance.
 */
export default function Parallax({
  speed = 0.12,
  className = "",
  style,
  children,
}) {
  const ref = useRef(null);
  const metrics = useRef({ center: 0, viewport: 0 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const measure = () => {
      // Measure from the untransformed position, or each pass compounds the
      // offset of the one before it.
      const previous = el.style.transform;
      el.style.transform = "none";
      const rect = el.getBoundingClientRect();
      metrics.current = {
        center: rect.top + window.scrollY + rect.height / 2,
        viewport: window.innerHeight,
      };
      el.style.transform = previous;
    };

    measure();
    window.addEventListener("resize", measure);
    // Late images and web fonts push everything below them around.
    const settle = setTimeout(measure, 600);

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(settle);
    };
  }, [reducedMotion]);

  useScrollSignal(({ scroll }) => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    const { center, viewport } = metrics.current;
    if (!viewport) return;
    // How far this element's centre sits from the viewport's centre.
    const distance = center - scroll - viewport / 2;
    el.style.transform = `translate3d(0, ${(-distance * speed).toFixed(2)}px, 0)`;
  });

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
