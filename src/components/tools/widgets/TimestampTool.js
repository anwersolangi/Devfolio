"use client";
import { useEffect, useMemo, useState } from "react";
import { Field, Segmented, CopyButton } from "../ui";

function fmtRow(label, value) {
  return { label, value };
}

export default function TimestampTool() {
  const [now, setNow] = useState(() => Date.now());
  const [unit, setUnit] = useState("s");
  const [ts, setTs] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const fromTs = useMemo(() => {
    if (!ts.trim()) return null;
    const num = Number(ts.trim());
    if (!Number.isFinite(num)) return { error: "Enter a numeric timestamp." };
    const ms = unit === "s" ? num * 1000 : num;
    const d = new Date(ms);
    if (Number.isNaN(d.getTime())) return { error: "That timestamp is out of range." };
    return {
      rows: [
        fmtRow("Local", d.toString()),
        fmtRow("UTC", d.toUTCString()),
        fmtRow("ISO 8601", d.toISOString()),
        fmtRow("Relative", relative(ms - now)),
      ],
    };
  }, [ts, unit, now]);

  const fromDate = useMemo(() => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return null;
    const ms = d.getTime();
    return { seconds: Math.floor(ms / 1000), ms };
  }, [dateStr]);

  const currentEpoch = unit === "s" ? Math.floor(now / 1000) : now;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-rule bg-bg p-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
            Current Unix time ({unit === "s" ? "seconds" : "ms"})
          </div>
          <div className="mt-1 font-mono text-2xl font-bold tabular-nums text-ink">
            {currentEpoch}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Segmented
            options={[
              { value: "s", label: "Seconds" },
              { value: "ms", label: "Millis" },
            ]}
            value={unit}
            onChange={setUnit}
          />
          <CopyButton value={String(currentEpoch)} label="Copy" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Timestamp → Date */}
        <div className="space-y-3">
          <Field label="Timestamp → date">
            <input
              value={ts}
              onChange={(e) => setTs(e.target.value)}
              inputMode="numeric"
              placeholder={unit === "s" ? "1700000000" : "1700000000000"}
              className="w-full rounded-lg border border-rule bg-bg px-3 py-2.5 font-mono text-sm text-ink placeholder:text-ink-3 focus:border-accent/50 focus:outline-none"
            />
          </Field>
          {fromTs?.error && (
            <p className="text-sm text-[#ff7a7a]">{fromTs.error}</p>
          )}
          {fromTs?.rows && (
            <div className="divide-y divide-rule rounded-xl border border-rule bg-bg">
              {fromTs.rows.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-3 px-4 py-2.5"
                >
                  <span className="text-xs text-ink-3">{r.label}</span>
                  <span className="text-right font-mono text-xs text-ink">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date → Timestamp */}
        <div className="space-y-3">
          <Field label="Date → timestamp">
            <input
              type="datetime-local"
              value={dateStr}
              onChange={(e) => setDateStr(e.target.value)}
              className="w-full rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink focus:border-accent/50 focus:outline-none [color-scheme:dark]"
            />
          </Field>
          {fromDate && (
            <div className="divide-y divide-rule rounded-xl border border-rule bg-bg">
              <Row label="Seconds" value={fromDate.seconds} />
              <Row label="Milliseconds" value={fromDate.ms} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5">
      <span className="text-xs text-ink-3">{label}</span>
      <span className="flex items-center gap-2">
        <span className="font-mono text-xs text-ink">{value}</span>
        <CopyButton value={String(value)} label="" className="px-2 py-1" />
      </span>
    </div>
  );
}

function relative(diffMs) {
  const abs = Math.abs(diffMs);
  const units = [
    ["year", 31536000000],
    ["day", 86400000],
    ["hour", 3600000],
    ["minute", 60000],
    ["second", 1000],
  ];
  for (const [name, ms] of units) {
    if (abs >= ms) {
      const n = Math.round(abs / ms);
      const plural = n === 1 ? "" : "s";
      return diffMs >= 0
        ? `in ${n} ${name}${plural}`
        : `${n} ${name}${plural} ago`;
    }
  }
  return "just now";
}
