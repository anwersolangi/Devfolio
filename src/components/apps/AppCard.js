"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


// Helper to check if string looks like an image path
function isImagePath(icon) {
    if (!icon) return false;
    // Simple check: starts with / or http, AND likely has an extension or is a known path
    return (icon.startsWith("/") || icon.startsWith("http"));
}

export default function AppCard({ app }) {
    const [imageError, setImageError] = useState(false);

    // Determine if we should treat the icon as an image
    // If explicitly provided iconImage, use it. 
    // Otherwise check if 'icon' property looks like a path.
    const iconIsImage = app.iconImage || isImagePath(app.icon);

    // Path to verify/load
    const iconPath = iconIsImage ? (app.iconImage || app.icon) : null;

    // We only show image if we determined it's an image path AND we haven't encountered an error
    const showImage = iconIsImage && !imageError;

    // Construct consistent URL for apps subdomain
    // This ensures that whether we are on main site or subdomain, the link goes to the right place
    const appUrl = `https://apps.anwersolangi.com/${app.slug}`;

    return (
        <a
            href={appUrl}
            className="group relative flex flex-col items-center justify-center aspect-square bg-white border border-gray-200 hover:border-gray-300 rounded-[2.5rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
        >
            {showImage ? (
                <>
                    <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                        <Image
                            src={iconPath}
                            alt={app.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={() => setImageError(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-base font-semibold text-white text-center leading-tight drop-shadow-lg">
                            {app.name}
                        </h2>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center p-6">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {app.icon}
                    </div>
                    <h2 className="text-base font-semibold text-gray-700 group-hover:text-black text-center leading-tight transition-colors">
                        {app.name}
                    </h2>
                </div>
            )}
        </a>
    );
}
