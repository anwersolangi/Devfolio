"use client";
// components/tools/ui.js — shared client primitives + helpers for tool widgets.
import { useCallback, useRef, useState } from "react";
import { Copy, Check, UploadCloud } from "lucide-react";

/* ─────────────────────────── helpers ─────────────────────────── */

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  downloadUrl(url, filename);
  // Revoke on the next tick so the download has a chance to start.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadUrl(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let i = 0;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  return `${value.toFixed(value < 10 ? 1 : 0)} ${units[i]}`;
}

/* ─────────────────────────── copy ─────────────────────────── */

export function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }, []);
  return { copied, copy };
}

export function CopyButton({ value, disabled, className = "", label = "Copy" }) {
  const { copied, copy } = useCopy();
  return (
    <button
      type="button"
      disabled={disabled || !value}
      onClick={() => copy(typeof value === "function" ? value() : value)}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-rule px-3 py-2 text-xs font-medium text-ink-2 transition hover:bg-white/5 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-good" /> Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> {label}
        </>
      )}
    </button>
  );
}

/* ─────────────────────────── controls ─────────────────────────── */

export function Segmented({ options, value, onChange, className = "" }) {
  return (
    <div
      className={`inline-flex flex-wrap gap-1 rounded-xl border border-rule bg-bg p-1 ${className}`}
      role="tablist"
    >
      {options.map((opt) => {
        const val = typeof opt === "string" ? opt : opt.value;
        const lbl = typeof opt === "string" ? opt : opt.label;
        const active = val === value;
        return (
          <button
            key={val}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(val)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              active
                ? "bg-accent text-[#1a0a02]"
                : "text-ink-2 hover:text-ink"
            }`}
          >
            {lbl}
          </button>
        );
      })}
    </div>
  );
}

export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-2">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-ink-3">{hint}</span>}
    </label>
  );
}

/* ─────────────────────────── file drop ─────────────────────────── */

export function FileDrop({
  accept,
  multiple = false,
  onFiles,
  label = "Drop a file here",
  hint,
}) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFiles = (fileList) => {
    const files = Array.from(fileList || []);
    if (files.length) onFiles(multiple ? files : [files[0]]);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      role="button"
      tabIndex={0}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition ${
        dragging
          ? "border-accent bg-accent/5"
          : "border-rule bg-bg hover:border-accent/40"
      }`}
    >
      <UploadCloud
        className={`h-8 w-8 ${dragging ? "text-accent" : "text-ink-3"}`}
      />
      <p className="mt-3 text-sm font-medium text-ink">{label}</p>
      <p className="mt-1 text-xs text-ink-3">
        {hint || "or click to browse"}
      </p>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}

/* ─────────────────────────── misc ─────────────────────────── */

export function PrimaryButton({ className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#1a0a02] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      {...props}
    />
  );
}

export function GhostButton({ className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-rule px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      {...props}
    />
  );
}
