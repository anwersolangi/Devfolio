"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import { CopyButton, PrimaryButton } from "../ui";

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!@#$%^&*()-_=+[]{};:,.<>?",
};
const SIMILAR = /[il1Lo0O]/g;

function pick(charset) {
  // Rejection sampling to avoid modulo bias.
  const max = Math.floor(256 / charset.length) * charset.length;
  const buf = new Uint8Array(1);
  let x;
  do {
    crypto.getRandomValues(buf);
    x = buf[0];
  } while (x >= max);
  return charset[x % charset.length];
}

function strength(pw, poolSize) {
  if (!pw) return 0;
  const entropy = pw.length * Math.log2(poolSize || 1);
  if (entropy < 40) return 1;
  if (entropy < 60) return 2;
  if (entropy < 80) return 3;
  return 4;
}

const LABELS = ["", "Weak", "Fair", "Strong", "Very strong"];
const COLORS = ["", "#ff5d5d", "#ffb27a", "#ffd25e", "#7af0a8"];

export default function PasswordTool() {
  const [length, setLength] = useState(20);
  const [opts, setOpts] = useState({
    lower: true,
    upper: true,
    number: true,
    symbol: true,
    excludeSimilar: false,
  });
  const [password, setPassword] = useState("");

  const charset = useMemo(() => {
    let s = "";
    if (opts.lower) s += SETS.lower;
    if (opts.upper) s += SETS.upper;
    if (opts.number) s += SETS.number;
    if (opts.symbol) s += SETS.symbol;
    if (opts.excludeSimilar) s = s.replace(SIMILAR, "");
    return s;
  }, [opts]);

  const generate = useCallback(() => {
    if (!charset) {
      setPassword("");
      return;
    }
    let out = "";
    for (let i = 0; i < length; i++) out += pick(charset);
    setPassword(out);
  }, [charset, length]);

  useEffect(() => {
    generate();
  }, [generate]);

  const level = strength(password, charset.length);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-rule bg-bg p-4">
        <div className="flex items-center justify-between gap-3">
          <code className="min-h-[1.5rem] break-all font-mono text-lg text-ink">
            {password || "Select at least one character set"}
          </code>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-3">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${level * 25}%`,
                background: COLORS[level],
              }}
            />
          </div>
          <span className="w-24 text-right text-xs font-medium text-ink-2">
            {LABELS[level]}
          </span>
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-ink-2">
          <span>Length</span>
          <span className="font-mono text-accent">{length}</span>
        </div>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-[#ff6a3d]"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          ["upper", "A-Z"],
          ["lower", "a-z"],
          ["number", "0-9"],
          ["symbol", "!@#$"],
          ["excludeSimilar", "No look-alikes"],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setOpts((o) => ({ ...o, [key]: !o[key] }))}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
              opts[key]
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-rule text-ink-2 hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton onClick={generate} disabled={!charset}>
          <RefreshCw className="h-4 w-4" /> Regenerate
        </PrimaryButton>
        <CopyButton value={password} label="Copy password" />
      </div>
    </div>
  );
}
