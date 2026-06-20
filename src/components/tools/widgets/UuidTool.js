"use client";
import { useCallback, useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Field, CopyButton, PrimaryButton } from "../ui";

function randomUuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex
    .slice(6, 8)
    .join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10, 16).join("")}`;
}

export default function UuidTool() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [list, setList] = useState([]);

  const generate = useCallback(() => {
    const n = Math.min(1000, Math.max(1, count || 1));
    setList(Array.from({ length: n }, randomUuid));
  }, [count]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const format = (id) => {
    let v = hyphens ? id : id.replace(/-/g, "");
    return uppercase ? v.toUpperCase() : v;
  };
  const text = list.map(format).join("\n");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-5">
        <Field label="How many">
          <input
            type="number"
            min={1}
            max={1000}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-28 rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink focus:border-accent/50 focus:outline-none"
          />
        </Field>
        <Toggle label="Uppercase" on={uppercase} onClick={() => setUppercase((v) => !v)} />
        <Toggle label="Hyphens" on={hyphens} onClick={() => setHyphens((v) => !v)} />
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton onClick={generate}>
          <RefreshCw className="h-4 w-4" /> Generate
        </PrimaryButton>
        <CopyButton value={text} label={`Copy all (${list.length})`} />
      </div>

      <textarea
        readOnly
        value={text}
        rows={Math.min(14, Math.max(3, list.length))}
        className="w-full resize-y rounded-xl border border-rule bg-bg p-4 font-mono text-sm text-ink focus:outline-none"
      />
    </div>
  );
}

function Toggle({ label, on, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition ${
        on
          ? "border-accent/50 bg-accent/10 text-accent"
          : "border-rule text-ink-2 hover:text-ink"
      }`}
    >
      {label}: {on ? "on" : "off"}
    </button>
  );
}
