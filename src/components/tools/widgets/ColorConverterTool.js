"use client";
import { useState } from "react";
import { CopyButton } from "../ui";

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

function rgbToHex({ r, g, b }) {
  return (
    "#" +
    [r, g, b]
      .map((x) => clamp(Math.round(x), 0, 255).toString(16).padStart(2, "0"))
      .join("")
  );
}
function parseHex(s) {
  let m = s.trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(m)) m = m.split("").map((c) => c + c).join("");
  if (!/^[0-9a-fA-F]{6}$/.test(m)) return null;
  return {
    r: parseInt(m.slice(0, 2), 16),
    g: parseInt(m.slice(2, 4), 16),
    b: parseInt(m.slice(4, 6), 16),
  };
}
function parseRgb(s) {
  const m = s.match(/(\d+)\D+(\d+)\D+(\d+)/);
  if (!m) return null;
  const r = +m[1], g = +m[2], b = +m[3];
  if ([r, g, b].some((x) => x > 255)) return null;
  return { r, g, b };
}
function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function hslToRgb(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
function parseHsl(s) {
  const m = s.match(/(\d+)\D+(\d+)\D+(\d+)/);
  if (!m) return null;
  const h = +m[1], sat = +m[2], l = +m[3];
  if (h > 360 || sat > 100 || l > 100) return null;
  return hslToRgb(h, sat, l);
}

export default function ColorConverterTool() {
  const [rgb, setRgb] = useState({ r: 255, g: 106, b: 61 });
  const [text, setText] = useState({
    hex: "#ff6a3d",
    rgb: "rgb(255, 106, 61)",
    hsl: "hsl(16, 100%, 62%)",
  });

  const sync = (next, except) => {
    setRgb(next);
    const hsl = rgbToHsl(next);
    setText((t) => ({
      hex: except === "hex" ? t.hex : rgbToHex(next),
      rgb: except === "rgb" ? t.rgb : `rgb(${next.r}, ${next.g}, ${next.b})`,
      hsl: except === "hsl" ? t.hsl : `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
    }));
  };

  const onField = (key, value, parser) => {
    setText((t) => ({ ...t, [key]: value }));
    const parsed = parser(value);
    if (parsed) sync(parsed, key);
  };

  const fields = [
    { key: "hex", label: "HEX", parser: parseHex },
    { key: "rgb", label: "RGB", parser: parseRgb },
    { key: "hsl", label: "HSL", parser: parseHsl },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-[auto_1fr]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-40 w-40 rounded-2xl border border-rule shadow-inner"
          style={{ background: rgbToHex(rgb) }}
        />
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-rule bg-bg px-3 py-2 text-xs font-medium text-ink-2">
          <input
            type="color"
            value={rgbToHex(rgb)}
            onChange={(e) => sync(parseHex(e.target.value))}
            className="h-6 w-6 cursor-pointer rounded border-none bg-transparent p-0"
          />
          Pick a colour
        </label>
      </div>

      <div className="space-y-4">
        {fields.map(({ key, label, parser }) => {
          const valid = !!parser(text[key]);
          return (
            <div key={key}>
              <div className="mb-1.5 text-xs font-medium text-ink-2">{label}</div>
              <div className="flex gap-2">
                <input
                  value={text[key]}
                  onChange={(e) => onField(key, e.target.value, parser)}
                  spellCheck={false}
                  className={`w-full rounded-lg border bg-bg px-3 py-2.5 font-mono text-sm text-ink focus:outline-none ${
                    valid ? "border-rule focus:border-accent/50" : "border-[#ff7a7a]/50"
                  }`}
                />
                <CopyButton value={text[key]} label="" className="px-3" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
