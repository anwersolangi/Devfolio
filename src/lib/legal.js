import { APPS_DATA } from "@/data/apps";
import { PRIVACY_POLICIES } from "@/data/privacy";
import { TERMS_OF_SERVICE } from "@/data/terms";
import { HELP_CONTENT } from "@/data/help";
import { CHILD_SAFETY_POLICIES } from "@/data/child-safety";

/**
 * The /apps/<slug>/<page> sub-pages that have real content. This is the single
 * source for the route's static params, its 404s, and each app's footer links,
 * so nothing ever links to or renders a page without data behind it.
 */
export function appSubPages(slug) {
  return [
    PRIVACY_POLICIES[slug] && "privacy",
    TERMS_OF_SERVICE[slug] && "terms",
    HELP_CONTENT[slug] && "help",
    HELP_CONTENT[slug]?.contactOptions && "contact",
    CHILD_SAFETY_POLICIES[slug] && "child-safety",
  ].filter(Boolean);
}

// Store listings need a privacy policy and terms for every app. An app
// without its own falls back to the developer-wide page (/privacy, /terms).
export const UNIFIED_FALLBACK = { privacy: "/privacy", terms: "/terms" };

export function allAppSubPageParams() {
  return Object.keys(APPS_DATA).flatMap((slug) => {
    const pages = new Set([...appSubPages(slug), ...Object.keys(UNIFIED_FALLBACK)]);
    return [...pages].map((page) => ({ slug, path: [page] }));
  });
}
