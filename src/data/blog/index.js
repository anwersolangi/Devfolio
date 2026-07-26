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

export function getOtherPosts(slug, limit = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
