"use client";
import { useCallback, useRef, useState } from "react";
import { Copy, Check, UploadCloud } from "lucide-react";

export function downloadText(text, filename, type = "text/plain") {
  downloadBlob(new Blob([text], { type: `${type};charset=utf-8` }), filename);
}

export function readTextFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).replace(/^\uFEFF/, ""));
    reader.onerror = () => reject(reader.error || new Error("Could not read file"));
    reader.readAsText(file);
  });
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  downloadUrl(url, filename);
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
                ? "bg-accent-deep text-on-accent"
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

export function CheckOption({ checked, onChange, label, hint }) {
  return (
    <label className="inline-flex cursor-pointer select-none items-start gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={`mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded border transition peer-focus-visible:ring-2 peer-focus-visible:ring-accent/60 ${
          checked
            ? "border-accent bg-accent-deep text-on-accent"
            : "border-rule bg-bg"
        }`}
      >
        {checked && <Check className="h-3 w-3" strokeWidth={3.5} />}
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-medium text-ink-2">{label}</span>
        {hint && <span className="block text-[11px] text-ink-3">{hint}</span>}
      </span>
    </label>
  );
}

export function Metric({ label, value, tone = "default" }) {
  const toneClass = {
    default: "text-ink",
    accent: "text-accent",
    good: "text-good",
    bad: "text-[#ff7a7a]",
  }[tone];
  return (
    <div className="rounded-lg border border-rule bg-bg px-3 py-2">
      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-3">
        {label}
      </div>
      <div className={`mt-0.5 text-sm font-bold tabular-nums ${toneClass}`}>
        {value}
      </div>
    </div>
  );
}

export function useDropZone(onFiles, { multiple = false } = {}) {
  const [dragging, setDragging] = useState(false);
  const depth = useRef(0);

  const emit = useCallback(
    (fileList) => {
      const files = Array.from(fileList || []);
      if (files.length) onFiles(multiple ? files : [files[0]]);
    },
    [onFiles, multiple],
  );

  const dropHandlers = {
    onDragEnter: (e) => {
      e.preventDefault();
      depth.current += 1;
      if (Array.from(e.dataTransfer?.types || []).includes("Files")) {
        setDragging(true);
      }
    },
    onDragOver: (e) => e.preventDefault(),
    onDragLeave: (e) => {
      e.preventDefault();
      depth.current = Math.max(0, depth.current - 1);
      if (depth.current === 0) setDragging(false);
    },
    onDrop: (e) => {
      e.preventDefault();
      depth.current = 0;
      setDragging(false);
      emit(e.dataTransfer?.files);
    },
  };

  return { dragging, dropHandlers, emit };
}

export function FileDrop({
  accept,
  multiple = false,
  onFiles,
  label = "Drop a file here",
  hint,
}) {
  const inputRef = useRef(null);
  const { dragging, dropHandlers, emit } = useDropZone(onFiles, { multiple });

  return (
    <div
      {...dropHandlers}
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
        onChange={(e) => emit(e.target.files)}
      />
    </div>
  );
}

export function PrimaryButton({ className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
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
