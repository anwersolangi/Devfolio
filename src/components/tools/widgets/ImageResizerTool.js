"use client";
import { useState } from "react";
import { Download, RefreshCw, Lock, Unlock } from "lucide-react";
import {
  FileDrop,
  Field,
  Segmented,
  PrimaryButton,
  GhostButton,
  downloadBlob,
} from "../ui";

const FORMATS = [
  { value: "keep", label: "Keep" },
  { value: "image/png", label: "PNG" },
  { value: "image/jpeg", label: "JPG" },
  { value: "image/webp", label: "WebP" },
];

export default function ImageResizerTool() {
  const [src, setSrc] = useState(null); // { url, img, name, type }
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [lock, setLock] = useState(true);
  const [format, setFormat] = useState("keep");
  const [quality, setQuality] = useState(0.92);

  const onFiles = ([file]) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      setSrc({ url, img, name: file.name, type: file.type });
      setW(img.naturalWidth);
      setH(img.naturalHeight);
    };
    img.src = url;
  };

  const ratio = src ? src.img.naturalWidth / src.img.naturalHeight : 1;

  const onW = (val) => {
    setW(val);
    if (lock && val) setH(Math.round(val / ratio));
  };
  const onH = (val) => {
    setH(val);
    if (lock && val) setW(Math.round(val * ratio));
  };

  const outType = format === "keep" ? src?.type || "image/png" : format;

  const download = () => {
    if (!src || !w || !h) return;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    if (outType === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(src.img, 0, 0, w, h);
    const ext = outType.split("/")[1].replace("jpeg", "jpg");
    canvas.toBlob(
      (blob) => blob && downloadBlob(blob, src.name.replace(/\.[^.]+$/, "") + `-${w}x${h}.${ext}`),
      outType,
      quality,
    );
  };

  if (!src) {
    return (
      <FileDrop
        accept="image/png,image/jpeg,image/webp"
        onFiles={onFiles}
        label="Drop an image to resize"
        hint="JPG, PNG or WebP"
      />
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-[auto_1fr]">
      <div className="flex flex-col items-center gap-3">
        <div className="overflow-hidden rounded-xl border border-rule bg-[#0b0b0b]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src.url}
            alt="Preview"
            className="max-h-56 w-auto object-contain"
          />
        </div>
        <span className="font-mono text-[11px] text-ink-3">
          original {src.img.naturalWidth}×{src.img.naturalHeight}
        </span>
      </div>

      <div className="space-y-5">
        <div className="flex items-end gap-3">
          <Field label="Width (px)">
            <input
              type="number"
              min={1}
              value={w}
              onChange={(e) => onW(Number(e.target.value))}
              className="w-28 rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink focus:border-accent/50 focus:outline-none"
            />
          </Field>
          <button
            type="button"
            onClick={() => setLock((v) => !v)}
            aria-label="Lock aspect ratio"
            className={`mb-0.5 flex h-10 w-10 items-center justify-center rounded-lg border transition ${
              lock
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-rule text-ink-3 hover:text-ink"
            }`}
          >
            {lock ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
          </button>
          <Field label="Height (px)">
            <input
              type="number"
              min={1}
              value={h}
              onChange={(e) => onH(Number(e.target.value))}
              className="w-28 rounded-lg border border-rule bg-bg px-3 py-2.5 text-sm text-ink focus:border-accent/50 focus:outline-none"
            />
          </Field>
        </div>

        <div className="flex flex-wrap items-end gap-5">
          <Field label="Output format">
            <Segmented options={FORMATS} value={format} onChange={setFormat} />
          </Field>
          {outType !== "image/png" && (
            <Field label={`Quality — ${Math.round(quality * 100)}%`}>
              <input
                type="range"
                min={0.1}
                max={1}
                step={0.01}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-40 accent-[#ff6a3d]"
              />
            </Field>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <PrimaryButton onClick={download} disabled={!w || !h}>
            <Download className="h-4 w-4" /> Download {w}×{h}
          </PrimaryButton>
          <GhostButton
            onClick={() => {
              URL.revokeObjectURL(src.url);
              setSrc(null);
            }}
          >
            <RefreshCw className="h-4 w-4" /> New image
          </GhostButton>
        </div>
      </div>
    </div>
  );
}
