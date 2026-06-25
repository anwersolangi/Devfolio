"use client";
import { useState } from "react";
import Image from "next/image";

function isImagePath(icon) {
  if (!icon) return false;
  return icon.startsWith("/") || icon.startsWith("http");
}

export default function AppTile({ app }) {
  const [imageError, setImageError] = useState(false);
  const iconIsImage = app.iconImage || isImagePath(app.icon);
  const iconPath = iconIsImage ? app.iconImage || app.icon : null;
  const showImage = iconIsImage && !imageError;

  return (
    <a
      href={`/apps/${app.slug}`}
      className="group relative flex flex-col items-center justify-end aspect-square bg-bg-2 border border-rule hover:border-accent/40 rounded-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {showImage ? (
        <>
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src={iconPath}
              alt={app.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent" />
          </div>
          <div className="relative z-10 w-full p-3.5">
            <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink text-center leading-tight drop-shadow-lg">
              {app.name}
            </h3>
          </div>
          <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent bg-bg/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-accent/30">
              open ↗
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <div className="text-3xl mb-2.5 transform group-hover:scale-110 transition-transform duration-300">
            {app.icon}
          </div>
          <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink group-hover:text-accent leading-tight transition-colors">
            {app.name}
          </h3>
        </div>
      )}
    </a>
  );
}
