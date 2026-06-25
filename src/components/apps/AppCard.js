"use client";
import { useState } from "react";
import Image from "next/image";

function isImagePath(icon) {
  if (!icon) return false;
  return icon.startsWith("/") || icon.startsWith("http");
}

export default function AppCard({ app }) {
  const [imageError, setImageError] = useState(false);
  const iconIsImage = app.iconImage || isImagePath(app.icon);
  const iconPath = iconIsImage ? app.iconImage || app.icon : null;
  const showImage = iconIsImage && !imageError;

  // Use externalUrl if provided (e.g. TapMeal → tapmeal.anwersolangi.com),
  // otherwise link to the first-party /apps/<slug> page.
  const appUrl = app.externalUrl ?? `/apps/${app.slug}`;
  const isExternal = Boolean(app.externalUrl);

  return (
    <a
      href={appUrl}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col items-center justify-center aspect-square bg-bg-2 border border-rule hover:border-accent/40 rounded-[2rem] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {showImage ? (
        <>
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <Image
              src={iconPath}
              alt={app.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink text-center leading-tight drop-shadow-lg">
              {app.name}
            </h2>
          </div>
          {/* hover hint */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent bg-bg/70 backdrop-blur-sm px-2 py-1 rounded border border-accent/30">
              open ↗
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-6">
          <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
            {app.icon}
          </div>
          <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink group-hover:text-accent text-center leading-tight transition-colors">
            {app.name}
          </h2>
        </div>
      )}
    </a>
  );
}
