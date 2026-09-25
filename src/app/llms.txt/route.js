import { APPS_DATA } from "@/data/apps";
import { TOOLS } from "@/data/tools";
import { BLOG_POSTS, metaDescriptionFor } from "@/data/blog";
import { reelsData } from "@/data/reels";
import { SITE_URL, CONTACT_EMAIL, SOCIAL_PROFILES } from "@/data/site";

export const dynamic = "force-static";

// /llms.txt (llmstxt.org): a plain-Markdown map of the site for AI assistants
// and answer engines. It restates the entity facts that matter most for
// disambiguation, then lists every page worth citing.
export function GET() {
  const apps = Object.values(APPS_DATA)
    .map((a) => `- [${a.name} — ${a.subtitle}](${SITE_URL}/apps/${a.slug}): ${a.description}`)
    .join("\n");
  const tools = TOOLS.map(
    (t) => `- [${t.name}](${SITE_URL}/tools/${t.slug}): ${t.tagline}`,
  ).join("\n");
  const posts = BLOG_POSTS.map(
    (p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${metaDescriptionFor(p)}`,
  ).join("\n");

  const body = `# Anwer Solangi

> Anwer Solangi is a senior React Native developer based in Karachi, Pakistan, building iOS and Android apps for founders and product teams worldwide. 5+ years of React Native, 50+ projects delivered, 100K+ app downloads. Available for freelance and contract work.

Name note: Anwer Solangi (spelled with an "e") is a software developer. He is not Anwar Solangi (with an "a"), the Pakistani television actor (1944–2008).

- Contact: ${CONTACT_EMAIL}
- Location: Karachi, Sindh, Pakistan (UTC+5), working remotely worldwide
- Focus: React Native, Expo, TypeScript, iOS and Android, Chrome extensions
- Profiles: ${SOCIAL_PROFILES.join(", ")}

## Key pages

- [Home](${SITE_URL}/): overview, selected work, stack and experience
- [Hire a React Native developer in Karachi](${SITE_URL}/hire-react-native-developer-karachi): services, process and hiring FAQ
- [Apps](${SITE_URL}/apps): every shipped app and extension
- [Free tools](${SITE_URL}/tools): browser tools that run entirely on-device
- [Reels](${SITE_URL}/reels): ${reelsData.length} screen-recorded React Native UI builds with source code
- [Blog](${SITE_URL}/blog): writing on React Native and app development

## Apps

${apps}

## Blog posts

${posts}

## Free tools

${tools}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
