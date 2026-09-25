// Canonical host = the bare non-www apex. Vercel must redirect www -> apex so
// canonicals never point at a redirecting URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://anwersolangi.com"
).replace(/\/$/, "");

export const SITE_NAME = "Anwer Solangi";
export const TWITTER_HANDLE = "@anwersolangidev";
export const CONTACT_EMAIL = "me@anwersolangi.com";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SERVICE_ID = `${SITE_URL}/#service`;

export const GEO = { lat: 24.8607, lng: 67.0011, region: "PK-SD" };

export const absUrl = (path = "") => {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

// Verified profile URLs for schema.org `sameAs` (entity disambiguation from the
// late actor "Anwar Solangi"). Accuracy matters — a wrong URL hurts entity
// resolution. Keep name/role identical across every profile (NAP consistency).
//
// Two consistent handles: "anwersolangi" on dev platforms, "anwersolangidev"
// on content/social platforms. Still TODO: a Facebook page URL and a Wikidata
// Q-item (the single highest-impact entry — a direct feed into Google's
// Knowledge Graph; create one with occupation=software developer, then add it).
export const SOCIAL_PROFILES = [
  "https://github.com/anwersolangi",
  "https://www.linkedin.com/in/anwersolangi",
  "https://stackoverflow.com/users/12190206/anwer-solangi",
  "https://www.reddit.com/user/anwersolangi",
  "https://codecanyon.net/user/anwersolangi",
  "https://www.fiverr.com/anwer_solangi",
  "https://play.google.com/store/apps/developer?id=Anwer+Solangi",
  "https://x.com/anwersolangidev",
  "https://www.youtube.com/@anwersolangidev",
  "https://www.instagram.com/anwersolangidev",
  "https://www.tiktok.com/@anwersolangidev",
  "https://www.threads.net/@anwersolangidev",
  "https://www.pinterest.com/anwersolangidev",
  "https://www.facebook.com/anwersolangidev",
  "https://medium.com/@anwersolangy",
];
