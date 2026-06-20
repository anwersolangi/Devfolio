"use client";
import { useEffect, useState } from "react";
import { Download, RefreshCw } from "lucide-react";
import {
  FileDrop,
  Field,
  Segmented,
  PrimaryButton,
  GhostButton,
  downloadBlob,
  formatBytes,
} from "../ui";

function compress(img, format, quality) {
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (format === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);
  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), format, quality),
  );
}

export default function ImageCompressorTool() {
  const [src, setSrc] = useState(null); // { url, img, name, size }
  const [format, setFormat] = useState("image/webp");
  const [quality, setQuality] = useState(0.7);
  const [result, setResult] = useState(null); // { url, blob }

  const onFiles = ([file]) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () =>
      setSrc({ url, img, name: file.name, size: file.size, type: file.type });
    img.src = url;
  };

  useEffect(() => {
    if (!src) return;
    let active = true;
    compress(src.img, format, quality).then((blob) => {
      if (!active || !blob) return;
      setResult((prev) => {
        if (prev?.url) URL.revokeObjectURL(prev.url);
        return { url: URL.createObjectURL(blob), blob };
      });
    });
    return () => {
      active = false;
    };
  }, [src, format, quality]);

  if (!src) {
    return (
      <FileDrop
        accept="image/png,image/jpeg,image/webp"
        onFiles={onFiles}
        label="Drop an image to compress"
        hint="JPG, PNG or WebP"
      />
    );
  }

  const ext = format === "image/jpeg" ? "jpg" : "webp";
  const outName = src.name.replace(/\.[^.]+$/, "") + `-compressed.${ext}`;
  const saving = result
    ? Math.max(0, Math.round((1 - result.blob.size / src.size) * 100))
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Stat label="Original" value={formatBytes(src.size)} sub={src.type.split("/")[1]?.toUpperCase()} />
        <Stat
          label="Compressed"
          value={result ? formatBytes(result.blob.size) : "…"}
          sub={result ? `−${saving}% smaller` : ""}
          highlight
        />
      </div>

      <div className="flex flex-wrap items-end gap-5">
        <Field label="Output format">
          <Segmented
            options={[
              { value: "image/webp", label: "WebP" },
              { value: "image/jpeg", label: "JPG" },
            ]}
            value={format}
            onChange={setFormat}
          />
        </Field>
        <Field label={`Quality — ${Math.round(quality * 100)}%`}>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.01}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-48 accent-[#ff6a3d]"
          />
        </Field>
      </div>

      <div className="overflow-hidden rounded-xl border border-rule bg-[#0b0b0b]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={result?.url || src.url}
          alt="Compressed preview"
          className="mx-auto max-h-80 w-auto object-contain"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton
          onClick={() => result && downloadBlob(result.blob, outName)}
          disabled={!result}
        >
          <Download className="h-4 w-4" /> Download {ext.toUpperCase()}
        </PrimaryButton>
        <GhostButton
          onClick={() => {
            URL.revokeObjectURL(src.url);
            if (result?.url) URL.revokeObjectURL(result.url);
            setSrc(null);
            setResult(null);
          }}
        >
          <RefreshCw className="h-4 w-4" /> New image
        </GhostButton>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, highlight }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? "border-accent/40 bg-accent/5" : "border-rule bg-bg"
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold text-ink">{value}</div>
      {sub && (
        <div
          className={`mt-0.5 text-xs ${highlight ? "text-good" : "text-ink-3"}`}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
