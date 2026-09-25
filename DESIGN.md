---
name: Anwer Solangi
description: A light, typographic portfolio — off-white paper, near-black ink, one deep green that means "you can act on this", and real phone frames as the only objects that cast a shadow.
colors:
  bg: "#f7f7f5"
  bg-2: "#ffffff"
  bg-3: "#eeeeea"
  ink: "#171716"
  ink-2: "#5a5a55"
  ink-3: "#77776f"
  rule: "#e2e2dd"
  rule-2: "#c9c9c3"
  accent: "#0d6b4b"
  accent-deep: "#0a563c"
  accent-tint: "#e4f1ea"
  on-accent: "#ffffff"
  good: "#1a7f4b"
  bad: "#b42318"
  bezel: "#111110"
  # Dark theme (html[data-theme="dark"], or the OS setting before a choice).
  bg-dark: "#121211"
  bg-2-dark: "#1a1a18"
  bg-3-dark: "#252522"
  ink-dark: "#f1f0ea"
  ink-2-dark: "#b3b2aa"
  ink-3-dark: "#8d8c84"
  rule-dark: "#2b2b28"
  rule-2-dark: "#3e3e3a"
  accent-dark: "#52c48f"
  accent-deep-dark: "#74d6a8"
  accent-tint-dark: "#16291f"
  on-accent-dark: "#06140d"
  good-dark: "#52c48f"
  bad-dark: "#f07b70"
  bezel-dark: "#0a0a09"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1rem + 3.2vw, 3.375rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  display-sm:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 0.9rem + 2.9vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  section-lede:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2vw, 28px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.6vw, 24px)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  item:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  meta:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
  label-sm:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
  code:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  bench: "28px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-lg: "40px"
  section: "56px"
  section-lg: "80px"
  label-column: "200px"
  column-gap: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
    typography: "{typography.body}"
  button-secondary:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
    typography: "{typography.body}"
  card-surface:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  chip:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
    typography: "{typography.body-sm}"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
---

# Design System: Anwer Solangi

## Overview

**Creative North Star: "The Paper Portfolio"**

The site is a printed portfolio, not a dashboard and not a dark theme with the values flipped. The ground is warm off-white paper, the ink is warm near-black, and there is exactly one chromatic colour — a deep green — that means one thing: *you can act on this*. Links, primary buttons, the category word in a meta line, the "more" arrow at the end of a section. Nothing else is green.

Hierarchy comes from typography, not decoration. One grotesk (Schibsted Grotesk) carries every role; weight, size and tracking do the work. A mono face (Geist Mono) appears only where the content is code or a measurement. There are no eyebrows above headings, no serif accent words, no numbered plates, no gradients and no glow. Structure is a one-pixel hairline and a tonal step.

The evidence is the point. Shipped screens sit inside a real phone bezel — the dark object on the light page — and those bezels, the app icon tiles and the featured blog cover are the only things allowed a cast shadow. Motion is rationed to one authored moment: the hero phones rise into place on load. Everything else transitions colour or nudges by a pixel or two.

**Key Characteristics:**
- Warm off-white ground (#f7f7f5) with warm near-black ink (#171716) — never pure white, never pure black
- One accent (deep green #0d6b4b) that only ever marks an action or a category
- Flat surfaces; depth is a hairline (`rule`) and a three-step tonal stack (`bg` → `bg-2` → `bg-3`)
- Homepage sections carry their name in a sticky 200px left column; inner pages open with a breadcrumb, a title and a lede
- Motion: the hero phone entrance, colour transitions, and 0.5–1.5px hover lifts; nothing else moves

## Themes

The site ships a light and a dark theme built from the same token names. Every Tailwind colour is a CSS variable (`tailwind.config.js` → `var(--bg)`), so components never branch on theme; only the variable values change.

- **Resolution.** An inline script in `layout.js` runs before first paint: a saved choice (`localStorage.theme`) wins, otherwise the OS setting, and it keeps following the OS until the visitor chooses. It stamps `data-theme` and `color-scheme` on `<html>` and syncs the `theme-color` meta. Without JS, `@media (prefers-color-scheme: dark)` applies the dark values.
- **Toggle.** `ThemeToggle` (header, all widths) shows a moon in light and a sun in dark. The switch is one authored moment: the new theme grows as a circle from the button via the View Transitions API (560ms, expo-out); per-element colour transitions are suppressed for that instant. Under reduced motion, or without View Transitions, it switches instantly.
- **Dark palette.** Warm near-black paper (#121211), off-white ink (#f1f0ea), and a lighter green (#52c48f) so links and focus rings keep 8:1 contrast. Solid green buttons take near-black text (`on-accent-dark`). Shadows switch to black at higher opacity; the phone bezel goes a step darker so it still reads on the dark bench.
- **Imagery.** Photos, app icons and screen recordings are theme-neutral. The blog's hand-drawn SVGs have generated `-dark.svg` twins (`npm run og:assets`); `ThemedImage` renders the pair and CSS shows the matching one. Share images (OG cards) stay light.
- **Inverse surfaces.** Where an older page uses a solid ink panel or button, it is `bg-ink text-bg`, so it stays inverted in both themes.

## Colors

### Primary
- **Accent** (`{colors.accent}`): Every link, primary button fill, category word, "more" arrow and focus ring. Solid fills are limited to the single primary action in view plus the header CTA.
- **Accent Deep** (`{colors.accent-deep}`): Hover state of accent text and fills.
- **Accent Tint** (`{colors.accent-tint}`): Text selection, and the wash behind a callout or a "deep dive" banner. Never text.
- **On Accent** (`{colors.on-accent}`): White label on a green fill (7.1:1).

### Neutral
- **Paper** (`{colors.bg}`): The page ground.
- **Card** (`{colors.bg-2}`): Cards, panels, the footer, phone bench interiors.
- **Shelf** (`{colors.bg-3}`): Chips, the hero bench, hover fill on secondary controls, inline code.
- **Ink** (`{colors.ink}`): Headings, item titles, emphasis.
- **Ink Mid** (`{colors.ink-2}`): Body copy, descriptions, nav links at rest.
- **Ink Faint** (`{colors.ink-3}`): Labels, meta lines, dates, counts, placeholders.
- **Rule** (`{colors.rule}`): Every hairline. **Rule Strong** (`{colors.rule-2}`): secondary button border, hover border on cards.

### Tertiary
- **Good** (`{colors.good}`): The availability dot, trust-row checkmarks, "coming soon" status dot.
- **Bad** (`{colors.bad}`): Failed metric readouts in tools only.

### Named Rules

**The One Action Colour Rule.** Green is the only hue. If something is green it can be clicked, or it names the category of something that can. Decorative green (washes, halos, borders) is wrong.

**The Warm Neutral Rule.** No `#fff` surface, no `#000` text, no grey that isn't one of the seven neutrals above. Hard-coded colours break the dark theme; use a token, or `color-mix(in oklab, var(--ink) N%, transparent)` for a tint.

## Typography

**Display, headings, body:** Schibsted Grotesk (`--font-sans`).
**Code and measurements only:** Geist Mono (`--font-mono`).

One family, tightened as it scales: display and headlines at -0.03em, ledes at -0.02em, body at normal tracking. Weight tops out at 600; there is no extrabold anywhere.

### Hierarchy
- **Display** (600, 2.125→3.375rem, 1.06, -0.03em, `.text-display`): The homepage h1 and inner-page titles via `PageHeader`.
- **Display small** (600, 2→3rem, 1.06, -0.03em, `.text-display-sm`): Article and tool titles — one step under the page display so the breadcrumb and meta line above them still read as the top of the page.
- **Headline** (600, 2→2.75rem, 1.08, -0.03em): App-detail titles and the contact closer.
- **Section lede** (600, 24–28px, 1.2, -0.02em): The sentence beside each homepage section label, and `SectionHead` titles.
- **Title** (600, 19–24px, 1.25, -0.02em): Card and featured-post titles.
- **Item** (500, 17px, 1.35): Row titles in lists (posts, tools, reels).
- **Body lead** (400, 17px, 1.6, `ink-2`): Ledes and long-form prose.
- **Body** (400, 15px, 1.6, `ink-2`): Descriptions and card copy.
- **Body small** (400, 14px, 1.55, `ink-2`): Secondary copy, footer links.
- **Meta** (400, 13px, `ink-3`): Dates, counts, categories, breadcrumbs, captions.
- **Label** (500, 13px, uppercase, 0.06em, `ink-3`): Section names (`.label`). **Label small** (11px) for field labels inside tools.
- **Code** (Geist Mono, 13px, 1.7): Code blocks and inline code only.

### Named Rules

**The No-Kicker Rule.** Headings carry their own weight. The only uppercase label in the system is a section *name* (the homepage's left column, `SectionHead`), never a kicker above a title.

**The Mono-Means-Data Rule.** Monospace is for code, file names and measurements. It is never a costume for "technical".

## Layout

A single centred column capped at **1200px** (`max-w-screen`) with gutters of 20px on phones, 32px from `sm`, 40px from `lg`. Homepage sections are a `200px + 1fr` grid from `lg` with a 64px gap; the section name sits sticky in the left column. Inner pages use `PageShell` (same gutters and cap) and open with `PageHeader`.

Vertical rhythm: sections are 56px tall in padding, 80px from `lg`, separated by a top hairline. Inside a section, the head is followed by a hairline and 32px. Lists are hairline-divided rows; grids are 16–20px gaps. Editorial pages narrow to `max-w-3xl`; tool pages to `max-w-5xl`.

**The Asymmetric Split Rule.** The hero is `1.05fr 0.95fr`; closers are `1.4fr 1fr`; the blog teaser is `1.1fr 1fr`. Never `1fr 1fr`.

## Elevation & Depth

Flat by default. Depth is a hairline and a tonal step. Two shadows exist, both with offset and blur:

- **`shadow-card`** — resting featured surfaces (the featured post card, the tool panel, the reel banner).
- **`shadow-object`** — things genuinely suspended: phone bezels, app icon tiles.

Hover never adds a shadow. Interactive surfaces answer by warming their hairline (`rule` → `accent/40` or `rule-2`) and shifting a title to accent.

## Shapes

- **6px** (`md`) — chips.
- **8px** (`lg`) — buttons, inputs, small controls, breadcrumb pills.
- **12px** (`xl`) — covers, list thumbnails, panels inside cards.
- **16px** (`2xl`) — cards, the tool panel, app tiles.
- **28px** (`bench`) — the hero bench only.
- Phone bezels use 14% of their width; app icons 22–25%.

Every bounded surface carries a 1px `rule` hairline. Dashed borders only on drop zones.

## Components

### Buttons (`.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-sm`)
- Primary: solid accent, white label, 8px radius, `12px 20px`. Hover darkens to accent-deep; active nudges 1px down.
- Secondary: card fill, `rule-2` hairline, ink label; hover fills to `bg-3`.
- Ghost: ink-2 label, no border; hover to ink. Used for tertiary actions (résumé, "watch the reels").
- `btn-sm` shrinks any of them for the header.

### Section head
- Homepage: `Section` — sticky label column, lede + optional "more →" link, then a hairline.
- Inner pages: `SectionHead` — label (with optional count on the right), then lede + link.

### Page header (`PageHeader`)
Breadcrumbs (13px, `/` separators, current page in ink-2) → Display title → lede (17–18px ink-2, `max-w-2xl`) → meta line (13px ink-3). Children (trust rows) sit below.

### Cards
`bg-2` on `rule`, 16px radius, 20–24px padding. Hover warms the hairline; the title goes accent. No lift beyond 0.5px, no scale.

### Chips (`.chip`)
`bg-3` fill, 6px radius, 12px medium ink-2, sentence case. Categories and stack items.

### Phone frame (signature)
A dark bezel (`#111110`, 6px padding, inner 1px light ring) around a real screenshot, `shadow-object`. The hero stacks three on a `bg-3` bench: front upright, sides scaled 0.86, rotated ±8°, lowered 30px. Each is a link to its reel.

### Closer (`CtaPanel`)
Every inner page ends the same way: hairline, section-lede title, one line of body, primary + secondary button on the right.

### FAQ
Native `<details>` rows divided by hairlines, plus/minus glyph drawn with two 1.5px bars, `interpolate-size` open animation.

### Navigation
Fixed, `bg/90` with backdrop blur; hairline appears after 8px of scroll. 15px ink-2 links, current route in ink at 500. Header CTA is `btn-primary btn-sm`. Below `md` a panel opens under the bar (not a takeover).

## Motion

- **Hero phones**: 900ms rise + fade, `cubic-bezier(0.16,1,0.3,1)`, staggered 80ms, disabled under `prefers-reduced-motion`.
- **Everything else**: 150–200ms colour transitions; 300ms 0.5–1.5px lifts on phones and covers; 500ms 1.5–3% image scale inside covers.
- No parallax, marquees, beams, ripples, spotlights or scroll-triggered reveals.

## Do's and Don'ts

### Do:
- Set body prose in `ink-2`; reserve `ink` for headings, titles and emphasis.
- Open each inner page with `PageShell` + `PageHeader`, and close it with `CtaPanel`.
- Use `.label` for a section *name* and `text-[13px] text-ink-3` for meta.
- Put real screenshots in `PhoneFrame`; it is the one honest shadow.
- Keep every new animation inside the `prefers-reduced-motion` block.

### Don't:
- Add a kicker above a heading, a serif italic word, a numbered plate or a mono "tech" label.
- Use white on `bg-2`, grey text that isn't `ink-2`/`ink-3`, or any second hue.
- Add glows, halos, blurred radials or gradient text.
- Thicken a border on hover or lift a card more than 1px.
- Restate unverified claims (the Fiverr "top rated" level) as fact.
