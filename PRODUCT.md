# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — prospective clients.** Founders and product teams, mostly international, evaluating whether to hire a senior React Native developer directly. Their job: decide in one visit whether this person can take an idea from sketch to a live store listing, then make contact. They arrive from search, from a reel, or from a marketplace profile.

**Co-equal in reach — searchers and developers.** People who land from Google on a free tool, a blog explainer, or a reel, wanting to finish one small task or understand one thing. They are not leads and must not be treated as leads. Their traffic is what builds the authority the hiring audience implicitly trusts.

**Obligated — app users and store reviewers.** People arriving at `/apps/<slug>/{privacy,terms,help,child-safety}` from a Play Store listing or from inside a shipped app, needing a policy, a support route, or a data-deletion path. These visits are compliance-driven, not discretionary.

## Product Purpose

anwersolangi.com is a credibility hub, and the user confirmed both halves carry equal weight: it earns organic reach through genuinely useful public work, and it converts the trust that reach creates into client work.

Success is the two reinforcing each other — search traffic lands on real, complete utility; the same visitor can see enough shipped evidence in one scroll to start a project conversation. It fails if either half is subordinated: a pure funnel loses the traffic, a pure content farm loses the business.

## Positioning

**Motion-first craft, proven publicly.** Any freelancer can claim React Native seniority. The claim a competitor cannot truthfully copy is that the motion and feel of the work are demonstrable in public — 41 reels of actual shipped UI on YouTube, Instagram and TikTok, not screenshots and not descriptions. The hero already states the position: *"the kind of motion design that turns into a reel."*

The corollary is a standard, not just a tagline: the site is the largest sample of that craft, so it is held to the quality it is selling.

## Operating Context

- Solo operator based in Karachi, Pakistan (PKT), working remotely with international clients. No agency, no team.
- Acquisition channels: direct enquiry, Fiverr, CodeCanyon. Distribution: Google Play, Chrome Web Store, Gumroad.
- **The site is production infrastructure for shipped apps, not only marketing.** Play Console listings point at `/apps/<slug>/privacy` and `/terms`; those URLs are contractual and must keep resolving. Legacy `apps.anwersolangi.com/*` and bare root-slug URLs 301 into `/apps/*` (`next.config.mjs`, `src/proxy.ts`).
- Content is data-driven: one file per app, tool, post and reel under `src/data/`, rendered through shared layouts. A new app can ship as a data entry plus an icon *before* its store listing is live.
- Canonical host is the bare apex `https://anwersolangi.com`; `www` 308s to it. This was a hard-won fix — host duplication previously split indexing.

## Capabilities and Constraints

- Surfaces: home, `/apps` (12 apps), `/tools` (28), `/blog` (8 posts), `/reels` (41), `/hire-react-native-developer-karachi`, `/extensions/*`, and per-app legal/support subpages.
- Tools run entirely client-side — image, PDF, crypto and file work never leaves the browser. This is a real privacy property and a reason to keep them ungated.
- Terminology: **Anwer**, always with an 'e'. Shipped work is "apps", not "projects" — `/projects/*` was deliberately consolidated into `/apps/*` and must not be reintroduced as a parallel concept.
- Three app page layouts (`layout: 1|2|3`) are shared across apps; a change to one is a change to every app using it.

**Explicitly undecided — do not resolve by assumption:**
- Wasiyyah's Play Store URL is a placeholder (`TODO` in `src/data/apps/wasiyyah.js`). The app is not confirmed published, so its download CTAs may currently point at nothing.
- A Wikidata Q-item for entity disambiguation was identified as the highest-impact remaining SEO action in earlier work and is not confirmed created.

## Brand Commitments

- **Name precision is binding.** Anwer Solangi, with an 'e'. Google autocorrects toward *Anwar* Solangi, a late Pakistani TV actor (1944–2008). The on-page disambiguation note in `About.js` and the schema `sameAs` / `disambiguatingDescription` graph exist for this reason and must survive any redesign. The site must never render "Anwar."
- **Handles, kept consistent for entity resolution:** content/social = `anwersolangidev` (X, YouTube, Instagram, TikTok, Threads, Pinterest, Facebook); dev = `anwersolangi` (GitHub, Reddit, CodeCanyon, LinkedIn); Medium is `anwersolang`**`y`**. Name and role must read identically across profiles.
- **Voice: first-person, humanized, concrete.** Anwer's own voice, specific anecdotes, varied rhythm. Stock AI phrasing is banned outright — "delve", "in today's digital landscape", "in conclusion" and their family. Established for blog posts; treat it as the site's voice generally.
- **There is no headshot.** `/profile-picture.png` is an "AS" monogram tile, not a photo, and it disappears against the dark theme at small sizes. Bylines use the accent "A" brand mark instead. If a real photo ever arrives, it belongs in both the byline and the Person schema.
- Contact: `me@anwersolangi.com`.

## Evidence on Hand

**Confirmed current by the user, 2026-09-02:**
- 50+ projects delivered · 100K+ lifetime app downloads · 5.0★ client rating · 5+ years of React Native.
- 10K+ Play Store installs on the single location-based social app. This reconciles with the 100K+ figure: 10K+ is that one app, 100K+ is the lifetime total across all apps. Both stand as written.
- "Available for freelance · Karachi" is a true, current status — the hero badge is safe to keep making that promise.

**Real assets in the repo:** 11 app records, 28 client-side tools, 8 blog posts, 41 reels with YouTube embeds, hand-authored SVG covers in `public/blog/` (1200×630), and a resume PDF that is deliberately `noindex`.

**Not confirmed — do not restate as fact:** the hero proof row's "FIVERR · 5.0★ · top rated" entry was not affirmed as current. "Top Rated" is a Fiverr seller level that can lapse. Verify before repeating it.

**Never fabricate:** there are no testimonials, named clients, case-study metrics, pricing, awards, or team members anywhere in this project. Their absence is a fact about the product, not a gap to fill with plausible copy.

## Product Principles

1. **Public work is the proof.** Every claim should have a shipped artifact behind it — an app, a reel, a tool that runs right now. Prefer showing the artifact to describing it.
2. **Utility earns the audience; the pitch converts it.** A visitor who came for a free tool gets the tool — fast, complete, ungated. The hiring case sits alongside it and never in front of it.
3. **Motion is the signature, so it has to be real.** Movement on this site is a work sample for the thing being sold. Decoration that demonstrates nothing actively undercuts the position.
4. **Identity precision is load-bearing.** Spelling, handles, canonical host and structured data are not housekeeping — a namesake collision and a split domain have each measurably cost this site traffic.
5. **Store-facing URLs are contracts.** Anything Google Play or a store reviewer links to must keep resolving. Consolidate with redirects; never by deleting.
