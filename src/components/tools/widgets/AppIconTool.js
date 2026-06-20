"use client";
import { useState } from "react";
import JSZip from "jszip";
import { Download, Loader2, RefreshCw } from "lucide-react";
import { FileDrop, PrimaryButton, GhostButton, downloadBlob } from "../ui";

const PLATFORMS = {
  ios: {
    label: "iOS",
    sizes: [
      { size: 40, name: "ios/icon-20@2x.png" },
      { size: 60, name: "ios/icon-20@3x.png" },
      { size: 58, name: "ios/icon-29@2x.png" },
      { size: 87, name: "ios/icon-29@3x.png" },
      { size: 80, name: "ios/icon-40@2x.png" },
      { size: 120, name: "ios/icon-60@2x.png" },
      { size: 180, name: "ios/icon-60@3x.png" },
      { size: 76, name: "ios/icon-76.png" },
      { size: 152, name: "ios/icon-76@2x.png" },
      { size: 167, name: "ios/icon-83.5@2x.png" },
      { size: 1024, name: "ios/icon-1024.png" },
    ],
  },
  android: {
    label: "Android",
    sizes: [
      { size: 48, name: "android/mipmap-mdpi/ic_launcher.png" },
      { size: 72, name: "android/mipmap-hdpi/ic_launcher.png" },
      { size: 96, name: "android/mipmap-xhdpi/ic_launcher.png" },
      { size: 144, name: "android/mipmap-xxhdpi/ic_launcher.png" },
      { size: 192, name: "android/mipmap-xxxhdpi/ic_launcher.png" },
      { size: 512, name: "android/playstore-icon.png" },
    ],
  },
  web: {
    label: "Web & PWA",
    sizes: [
      { size: 16, name: "web/favicon-16x16.png" },
      { size: 32, name: "web/favicon-32x32.png" },
      { size: 48, name: "web/favicon-48x48.png" },
      { size: 180, name: "web/apple-touch-icon.png" },
      { size: 192, name: "web/icon-192.png" },
      { size: 512, name: "web/icon-512.png" },
    ],
  },
};

function renderIcon(img, size) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, size, size);
  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), "image/png"),
  );
}

export default function AppIconTool() {
  const [src, setSrc] = useState(null); // { url, img, name }
  const [selected, setSelected] = useState({
    ios: true,
    android: true,
    web: true,
  });
  const [busy, setBusy] = useState(false);
  const [warning, setWarning] = useState("");

  const onFiles = ([file]) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      setWarning(
        img.width !== img.height
          ? "Heads up: your image isn't square, so icons may look stretched. A 1024×1024 square works best."
          : img.width < 512
            ? "Your image is small — upload at least 512×512 (ideally 1024×1024) for crisp icons."
            : "",
      );
      setSrc({ url, img, name: file.name });
    };
    img.src = url;
  };

  const generate = async () => {
    if (!src) return;
    setBusy(true);
    try {
      const zip = new JSZip();
      const jobs = Object.entries(PLATFORMS)
        .filter(([key]) => selected[key])
        .flatMap(([, p]) => p.sizes);
      for (const { size, name } of jobs) {
        const blob = await renderIcon(src.img, size);
        if (blob) zip.file(name, blob);
      }
      const content = await zip.generateAsync({ type: "blob" });
      downloadBlob(content, "app-icons.zip");
    } finally {
      setBusy(false);
    }
  };

  const totalCount = Object.entries(PLATFORMS)
    .filter(([key]) => selected[key])
    .reduce((n, [, p]) => n + p.sizes.length, 0);

  if (!src) {
    return (
      <FileDrop
        accept="image/png,image/jpeg,image/webp"
        onFiles={onFiles}
        label="Drop your app artwork here"
        hint="Square PNG, 1024×1024 recommended"
      />
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-[auto_1fr]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-40 w-40 overflow-hidden rounded-[28px] border border-rule bg-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src.url}
            alt="Source artwork preview"
            className="h-full w-full object-cover"
          />
        </div>
        <GhostButton
          onClick={() => {
            URL.revokeObjectURL(src.url);
            setSrc(null);
            setWarning("");
          }}
        >
          <RefreshCw className="h-4 w-4" /> Change image
        </GhostButton>
      </div>

      <div className="space-y-5">
        {warning && (
          <p className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 text-xs text-accent-2">
            {warning}
          </p>
        )}

        <div>
          <span className="mb-2 block text-xs font-medium text-ink-2">
            Platforms
          </span>
          <div className="flex flex-wrap gap-2">
            {Object.entries(PLATFORMS).map(([key, p]) => {
              const on = selected[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() =>
                    setSelected((s) => ({ ...s, [key]: !s[key] }))
                  }
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                    on
                      ? "border-accent/50 bg-accent/10 text-accent"
                      : "border-rule text-ink-2 hover:text-ink"
                  }`}
                >
                  {p.label}
                  <span className="ml-1.5 text-ink-3">{p.sizes.length}</span>
                </button>
              );
            })}
          </div>
        </div>

        <PrimaryButton onClick={generate} disabled={busy || totalCount === 0}>
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Generating…
            </>
          ) : (
            <>
              <Download className="h-4 w-4" /> Download {totalCount} icons (.zip)
            </>
          )}
        </PrimaryButton>

        <p className="text-xs text-ink-3">
          Everything is generated in your browser — your artwork is never
          uploaded.
        </p>
      </div>
    </div>
  );
}
