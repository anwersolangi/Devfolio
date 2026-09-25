"use client";
import { useState } from "react";
import Image from "next/image";

function isImagePath(icon) {
  if (!icon) return false;
  return icon.startsWith("/") || icon.startsWith("http");
}

/**
 * One app on the /apps grid: the icon as a square tile, then the name and a
 * line of description below it. The description is rendered as text rather
 * than left to the icon alone — the index previously carried 83 words for ten
 * apps, which is nothing for a page meant to rank for "React Native apps".
 */
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
      className="group block"
    >
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-rule bg-bg-2 transition-colors duration-200 group-hover:border-accent/40">
        {showImage ? (
          <Image
            src={iconPath}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <span className="text-4xl" aria-hidden>
            {app.icon}
          </span>
        )}
      </div>

      <h2 className="mt-3 text-[16px] font-medium leading-tight tracking-[-0.01em] text-ink transition-colors duration-150 group-hover:text-accent">
        {app.name}
        {isExternal && <span className="text-ink-3"> ↗</span>}
      </h2>
      {app.description && (
        <p className="mt-1 text-[14px] leading-[1.5] text-ink-2 line-clamp-3">
          {app.description}
        </p>
      )}
    </a>
  );
}
