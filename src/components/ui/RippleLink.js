"use client";

import { useCallback, useRef, useState } from "react";

let nextId = 0;

/**
 * A link that ripples from the point you pressed.
 *
 * Same interaction as Animate UI's RippleButton, done in CSS — that component
 * is a thin wrapper over `motion/react` plus its own Slot/context helpers, and
 * a ~34kB dependency isn't worth it for one keyframe.
 */
export default function RippleLink({
  href,
  className = "",
  color = "currentColor",
  children,
  ...rest
}) {
  const [ripples, setRipples] = useState([]);
  const timers = useRef([]);

  const spawn = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = nextId++;
    // Big enough to always cover the far corner from wherever it started.
    const diameter = Math.hypot(rect.width, rect.height) * 2;
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top, diameter },
    ]);
    const t = setTimeout(
      () => setRipples((r) => r.filter((v) => v.id !== id)),
      600,
    );
    timers.current.push(t);
  }, []);

  return (
    <a
      href={href}
      onPointerDown={spawn}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden
          className="ripple-layer"
          style={{
            left: r.x,
            top: r.y,
            width: r.diameter,
            height: r.diameter,
            color,
          }}
        />
      ))}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  );
}
