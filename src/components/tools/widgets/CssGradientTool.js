"use client";
import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Segmented, CopyButton, Field, GhostButton } from "../ui";

const randomHex = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

function ColorInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-rule bg-bg px-2 py-1.5">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-7 w-7 cursor-pointer rounded border-none bg-transparent p-0"
        aria-label="Pick colour"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent font-mono text-xs text-ink focus:outline-none"
      />
    </div>
  );
}

export default function CssGradientTool() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);
  const [from, setFrom] = useState("#ff6a3d");
  const [to, setTo] = useState("#7af0a8");

  const gradient =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${from}, ${to})`
      : `radial-gradient(circle, ${from}, ${to})`;
  const css = `background: ${gradient};`;

  const randomize = () => {
    setFrom(randomHex());
    setTo(randomHex());
    setAngle(Math.floor(Math.random() * 361));
  };

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
      <div className="space-y-5">
        <div className="flex items-end justify-between gap-3">
          <Field label="Type">
            <Segmented
              options={[
                { value: "linear", label: "Linear" },
                { value: "radial", label: "Radial" },
              ]}
              value={type}
              onChange={setType}
            />
          </Field>
          <GhostButton onClick={randomize} className="px-3 py-2">
            <Shuffle className="h-4 w-4" /> Randomize
          </GhostButton>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="From">
            <ColorInput value={from} onChange={setFrom} />
          </Field>
          <Field label="To">
            <ColorInput value={to} onChange={setTo} />
          </Field>
        </div>

        {type === "linear" && (
          <Field label={`Angle — ${angle}°`}>
            <input
              type="range"
              min={0}
              max={360}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full accent-[#ff6a3d]"
            />
          </Field>
        )}

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-xs font-medium text-ink-2">CSS</span>
            <CopyButton value={css} label="Copy CSS" />
          </div>
          <pre className="overflow-x-auto rounded-xl border border-rule bg-bg p-4 font-mono text-sm text-ink">
            {css}
          </pre>
        </div>
      </div>

      <div
        className="min-h-56 rounded-2xl border border-rule"
        style={{ background: gradient }}
      />
    </div>
  );
}
