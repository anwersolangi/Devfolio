// data/blog/index.js — one file per post, mirroring data/apps/.
//
// Post shape:
//   slug          URL segment under /blog/
//   title         H1 + <title>
//   description   meta description (also used on cards)
//   category      editorial label ("React Native", "Business", "Guides", "Pakistan")
//   tags          extra keywords for metadata
//   publishedAt   "YYYY-MM-DD"
//   updatedAt     optional "YYYY-MM-DD"
//   cover         path under /public (SVG/PNG), 1200×630
//   coverAlt      alt text for the cover
//   featured      optional — post takes the hero (top) slot on the listing
//                 regardless of date (currently the React Native 2026 post)
//   pinToBottom   optional — post always sorts LAST on the listing no matter
//                 how new the others are (used by the CNIC explainer, which is
//                 a tool companion rather than a feed post)
//   content       array of blocks rendered by components/blog/BlogContent.js:
//     { type: "p",       text }                          — inline markdown: [link](href), **bold**, `code`, _italic_
//     { type: "h2"|"h3", text }
//     { type: "list",    items: [text], ordered? }
//     { type: "image",   src, alt, caption?, width, height }
//     { type: "video",   src, title, caption?, aspect: "vertical"|"wide" }     — iframe embed URL
//     { type: "quote",   text, cite? }
//     { type: "code",    code, lang? }
//     { type: "callout", title?, text }
//     { type: "table",   head: [], rows: [[]] }
//     { type: "hr" }

import { restaurantQrMenu2026 } from "./restaurant-qr-menu-2026";
import { reactNativeIn2026 } from "./react-native-in-2026";
import { howToChooseStack } from "./how-to-choose-stack";
import { appMustForBusiness2026 } from "./app-must-for-business-2026";
import { howMuchDoesAnAppCost } from "./how-much-does-an-app-cost";
import { whyYouNeedAMobileApp } from "./why-you-need-a-mobile-app";
import { howNadraStructuresCnic } from "./how-nadra-structures-cnic";

const ALL_POSTS = [
  restaurantQrMenu2026,
  reactNativeIn2026,
  howToChooseStack,
  appMustForBusiness2026,
  howMuchDoesAnAppCost,
  whyYouNeedAMobileApp,
  howNadraStructuresCnic,
];

const byDateDesc = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);

// Listing order: featured post(s) claim the hero slot first, then regular
// posts newest-first, then pinned-to-bottom posts. The CNIC explainer stays
// last even when nothing newer has shipped.
export const BLOG_POSTS = [
  ...ALL_POSTS.filter((p) => p.featured && !p.pinToBottom).sort(byDateDesc),
  ...ALL_POSTS.filter((p) => !p.featured && !p.pinToBottom).sort(byDateDesc),
  ...ALL_POSTS.filter((p) => p.pinToBottom).sort(byDateDesc),
];

export const POSTS_BY_SLUG = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
);

export const getPost = (slug) => POSTS_BY_SLUG[slug] ?? null;

// Words across every text-bearing block → "N min read". Computed here so the
// estimate never drifts from the actual content.
export function readingTimeMinutes(post) {
  const words = post.content
    .flatMap((block) => {
      if (block.text) return [block.text];
      if (block.items) return block.items;
      if (block.rows) return block.rows.flat();
      return [];
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.round(words / 220));
}

// Up to `limit` other posts for the "keep reading" rail, preserving listing
// order (so the pinned CNIC post also comes last here).
export function getOtherPosts(slug, limit = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
