---
name: Anwer Solangi
description: A warm-charcoal darkroom where a single ember light source carries every accent, and mono specimen labels annotate the work.
colors:
  bg: "#0d0c0b"
  bg-2: "#161514"
  bg-3: "#1f1d1b"
  ink: "#f4efe7"
  ink-2: "rgba(244, 239, 231, 0.62)"
  ink-3: "rgba(244, 239, 231, 0.38)"
  rule: "rgba(244, 239, 231, 0.10)"
  accent: "#ff6a3d"
  accent-deep: "#ff6a3d"
  accent-2: "#ffb27a"
  accent-hot: "#fff0dc"
  on-accent: "#1a0a02"
  good: "#7af0a8"
  bad: "#ff7a7a"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 108px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-xs:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.14em"
  micro:
    fontFamily: "Geist Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.12em"
  accent-serif:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "inherit"
    fontWeight: 400
    lineHeight: "inherit"
    letterSpacing: "normal"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  icon: "40px"
  full: "9999px"
spacing:
  grid-gap: "20px"
  card: "24px"
  gutter: "24px"
  gutter-lg: "64px"
  section: "96px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.xl}"
    padding: "14px 20px"
    typography: "{typography.body}"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "14px 20px"
    typography: "{typography.body}"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
  card-surface:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  chip-badge:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.md}"
    padding: "4px 8px"
    typography: "{typography.micro}"
  metric-tile:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
---

# Design System: Anwer Solangi

## Overview

**Creative North Star: "The Darkroom"**

This is a photographic darkroom, not a dark theme. The difference matters: a dark theme is a light interface with the values flipped, while a darkroom is a room that was always dark, lit on purpose by a single warm safelight so that the work being developed is the only thing you look at. Every color decision here follows from that. The ground is a *warm* near-black (#0d0c0b, not a blue-black), the text is a *warm* off-white (#f4efe7, not white), and the one chromatic color in the entire system is an ember orange that behaves exactly like a safelight — it pools, it glows, it falls off into the dark, and it never floods the room.

The register is confident, warm, and engineered. Precision without coldness: hairline rules, mono specimen labels, numbered sections and tabular metrics give it the discipline of instrumentation, while the warmth in the palette keeps it from reading as a spec sheet. The restraint is the point. This site is the largest work sample of the craft it is selling, so nothing is decorated that isn't also demonstrating something — the motion, the light, and the labeling are all evidence, not ornament.

Depth is lighting, not elevation. Surfaces do not pretend to float above one another; they sit at different distances from the light, expressed as a three-step tonal stack and a one-pixel rule. The only things that cast real shadows are objects genuinely suspended in space — a phone frame, an app icon — and they are presented like specimens on a bench, each with a small mono label floating above it.

**Key Characteristics:**
- Warm near-black ground (#0d0c0b) with warm off-white ink (#f4efe7) — never neutral grey, never pure white
- Exactly one chromatic hue: Ember Orange (#ff6a3d), free as *light*, rationed as *fill*
- Flat by default; depth from a three-step tonal stack plus 1px hairlines
- Mono uppercase labels annotate everything — sections are numbered like plates
- Italic serif marks exactly one word per heading, never more
- Motion is short, quick-out, and fully disabled under `prefers-reduced-motion`

## Colors

A warm greyscale room lit by a single ember source. There are only three chromatic values in the whole system, and two of them are purely semantic.

### Primary
- **Ember Orange** (`{colors.accent}`): The safelight. Section eyebrows, the one word of serif emphasis, every primary action, active states, focus rings, and all atmospheric light — glow orbs, travelling border beams, the cursor spotlight, ripple rings. Also aliased as `accent-deep` for solid fills; the two are deliberately the same value today and only diverge if the accent ever darkens past labelling contrast.
- **Ember Light** (`{colors.accent-2}`): The softer falloff. Secondary accent text, the revealed spotlight dot grid, hover tints on accent-adjacent copy.
- **Ember Core** (`{colors.accent-hot}`): The near-white hot centre a beam passes through at its brightest point. Exists because `accent` and `accent-2` sit only a shade apart, so a two-stop sweep between them reads as a flat line. Beams only — never a fill, never text.
- **Ember Ink** (`{colors.on-accent}`): The near-black that sits *on* solid ember.

### Neutral
- **Darkroom Black** (`{colors.bg}`): The page ground. Warm, not blue.
- **Bench** (`{colors.bg-2}`): One step up. Cards, panels, alternating sections, inset surfaces.
- **Shelf** (`{colors.bg-3}`): Two steps up. Notes, callouts, nested surfaces inside a card.
- **Print White** (`{colors.ink}`): Headings and primary text.
- **Print Mid** (`{colors.ink-2}`): Body copy and secondary text — the workhorse; most prose on the site is this, not full ink.
- **Print Faint** (`{colors.ink-3}`): Specimen labels, metadata, disabled and de-emphasised text.
- **Hairline** (`{colors.rule}`): Every border in the system.

### Tertiary
- **Fix Green** (`{colors.good}`): Semantic success only — the "available" status dot, copy-confirmed checkmarks, positive metrics.
- **Stop Red** (`{colors.bad}`): Semantic failure only — negative metric readouts.

### Named Rules

**The Free-to-Glow Rule.** Ember is unrestricted as *light* and rationed as *fill*. Glow orbs, beams, spotlight grids, radial gradients and ripple rings may use it freely at low alpha — that atmosphere is the brand. Solid ember fills are reserved for the single primary action in view, the logo tile, and active control states. If two solid ember fills compete on one screen, one of them is wrong.

**The Dark-Label Rule.** Never put white text on ember. White on #ff6a3d is 2.84:1 and fails; the near-black `on-accent` is 6.8:1 and passes. Any solid ember surface takes `{colors.on-accent}`, without exception.

**The One Hue Rule.** The palette is warm greyscale plus ember. Green and red exist only to mean *succeeded* and *failed*. Introducing a second decorative hue breaks the room.

## Typography

**Display Font:** Hanken Grotesk (with `system-ui`, sans-serif)
**Body Font:** Hanken Grotesk — the same family; hierarchy comes from weight, size and tracking, not from a second face
**Label/Mono Font:** Geist Mono (with monospace)
**Accent Face:** Instrument Serif, italic (with Georgia, serif)

**Character:** One grotesk doing nearly all the work, tightened aggressively as it scales up, punctuated by two specialist voices — a mono that labels and a serif italic that emphasises. The grotesk is neutral and modern; the mono supplies the instrument-panel discipline; the serif supplies the single moment of warmth per screen.

> **Implementation note:** the CSS variable is `--font-inter`, but it holds **Hanken Grotesk**. The name is legacy from an earlier build. `--font-outfit` (exposed as Tailwind's `font-heading`) is not defined anywhere and resolves to nothing — do not use it.

### Hierarchy
- **Display** (800, `clamp(3rem, 8vw, 108px)`, 0.92, -0.045em): Page-owning headlines. One per page, top of the hero. Tracking is tightened hard because at this size default spacing reads loose.
- **Headline** (700, 2.25–3.75rem, 1.0, -0.035em): Section titles — "What it does.", "The track record." Usually terminated with a period and an ember full stop.
- **Title** (700, 1.5rem, -0.02em) / card titles (600, 17–18px, -0.01em): Card and subsection headings.
- **Body** (400, 15px, 1.6): The workhorse — card copy, list items and dense prose, set in `ink-2` rather than full ink. By far the most-used size in the project.
- **Body Lead** (400, 18–20px, 1.5): Opening paragraphs and subtitles that introduce a section.
- **Body Small** (400, 14px, 1.5): List items and secondary copy inside cards.
- **Body XS** (400, 13px, 1.55): Supporting descriptions and metadata — the smallest prose step.

Measure caps around 65–75ch via `max-w-xl` / `max-w-2xl` / `max-w-4xl` containers. Literal `text-[13px]` / `text-[14px]` / `text-[15px]` classes are the project's established idiom for these steps, not drift.
- **Label** (400, 11px, 0.14em, uppercase, ember): The section eyebrow. Mono, always uppercase, always ember.
- **Micro** (400, 10px, 0.12–0.18em, uppercase, `ink-3`): Specimen labels above device frames, chip text, metric captions, footer links.

### Named Rules

**The One Word Rule.** The italic serif marks exactly one word in a heading, at most once per screen, and always the word carrying the promise — *ship*, *fast*, *obvious*, *help*. Never a full phrase. Never body copy. Never twice in one heading. Its whole power is that it happens once and then stops.

**The Numbered Plate Rule.** Every major section opens with a mono uppercase eyebrow, and on index-style pages those eyebrows are numbered in reading order (`01 · KEY FEATURES`, `02 · DEEP DIVE`). Adding a section means renumbering the ones after it — the sequence is a promise that the page has a defined length.

**The Ember Stop Rule.** Display and headline text ends on a period rendered in ember. It is the smallest possible use of the accent and it terminates the sentence like a maker's mark.

## Layout

A single centred column capped at **1440px** (`max-w-screen`), with gutters of **24px** on mobile widening to **64px** from `lg`. Nothing in the system is full-bleed except atmospheric light — orbs and spotlights deliberately overflow the container and are clipped by `overflow-hidden` on their section.

Vertical rhythm is coarse and consistent: sections run `96px` tall in padding, opening to `128px` from `lg`; content-led pages that start under the fixed header use a `112px` top offset (`pt-28`) to clear it. Grids are 1 column on mobile, 2 at `sm`/`md`, and 3 at `lg` for feature cards, with a consistent `20px` gap. Editorial pages narrow to `max-w-4xl`; tool and help pages sit at `max-w-5xl`; the homepage and app pages use the full 1440.

Breakpoints are Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). The meaningful break is `lg`: that is where the hero's two-column `1.4fr 1fr` split appears, where the nav stops collapsing into a menu, and where gutters and section padding step up. Below `md`, decorative columns (the floating phone stack) are dropped entirely rather than scaled down.

**The Asymmetric Split Rule.** Two-column hero and app layouts use `1.4fr 1fr`, never `1fr 1fr`. The text column leads; the artifact column supports.

## Elevation & Depth

**This system is flat, and its depth is lighting.** Surfaces do not cast shadows to appear raised. Depth is built from three things: a three-step tonal stack (`bg` → `bg-2` → `bg-3`), a single-pixel hairline at 10% ink, and warm light that falls off into the dark. A card is not "above" the page; it is a slightly lighter plane with an edge.

Shadows are reserved exclusively for objects that are genuinely suspended in space — device frames, the app icon tile — where a real cast shadow is doing representational work rather than signalling hierarchy. There are only sixteen shadow usages in the entire codebase, and that is the correct number.

### Shadow Vocabulary
- **Focus ring** (`box-shadow: 0 0 0 2px var(--accent)`): The global `:focus-visible` treatment, with a 4px radius. Applied to everything; never removed without an equivalent replacement.
- **Suspended object** (Tailwind `shadow-lg` / `shadow-xl` / `shadow-2xl`): Device frames and the app icon only.
- **Ambient glow** (`.glow-orb`: a 20px-blurred radial of `rgba(255,106,61,0.18)`): Not a shadow — a light source. Positioned to bleed off the edge of its section.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest and flat on hover. If a new element seems to need a shadow to read as distinct, it needs a tonal step or a hairline instead. Reach for `bg-2`/`bg-3` and `rule` before you reach for `box-shadow`.

## Shapes

Soft-rectangular throughout, with a tight and consistently applied radius ladder. Nothing is sharp-cornered; nothing is a squircle-heavy blob. The ladder maps to scale of object:

- **6px** (`{rounded.md}`) — badges, chips, category tags, the logo tile
- **8px** (`{rounded.lg}`) — inputs, small controls, segmented items, metric tiles, copy buttons
- **12px** (`{rounded.xl}`) — buttons, standard cards, panels, callouts (the most-used radius in the system)
- **16px** (`{rounded.2xl}`) — feature cards, device frames, file drop zones, large containers
- **40px** (`{rounded.icon}`) — the app icon tile only
- **9999px** (`{rounded.full}`) — status dots, ripple rings, glow orbs, scrollbar thumbs, pill badges

Borders are the system's primary structural device: every bounded surface carries a **1px** hairline at `{colors.rule}`. Dashed borders appear only on drop targets. Left-border accents (`border-l-2` in ember at 40%) mark quoted or sectioned content in long-form pages.

**The Hairline Rule.** Edges warm, they do not thicken. A surface signals interactivity by shifting its 1px border from `rule` toward `accent/40` — never by growing to 2px, which shifts layout and reads as a different component.

## Components

### Buttons
- **Shape:** Gently rounded (12px, `{rounded.xl}`); tool-context buttons drop to 8px.
- **Primary:** Solid ember (`{colors.accent-deep}`) with near-black label (`{colors.on-accent}`), bold, `14px 20px` padding.
- **Hover / Focus:** Primary shifts opacity to ~0.9 over 200ms — it does not lift, scale, or change hue. Focus shows the global 2px ember ring.
- **Ghost / Secondary:** Transparent with a 1px hairline and `ink` label; hover fills to `rgba(255,255,255,0.05)`.
- **Disabled:** 40% opacity plus `cursor: not-allowed`. Never a colour change.

### Chips
- **Style:** `bg` fill inside a hairline, 6px radius, mono micro type in `ink-3`, uppercase with 0.14em tracking.
- **State:** Presentational by default. Where they act as filters, the selected state takes solid ember with `on-accent` text (see Segmented control).

### Cards / Containers
- **Corner Style:** 16px for feature and content cards; 12px for dense panels.
- **Background:** `{colors.bg-2}` on the `bg` ground; nested surfaces step to `{colors.bg-3}`.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** 1px `{colors.rule}`, warming to `accent/40` on hover.
- **Internal Padding:** 24px standard, 28–40px for editorial cards.
- **Hover:** Lifts 2–4px (`-translate-y-0.5` to `-translate-y-1`) over 300ms while the hairline warms and the title shifts to ember. No scale, no spring.

### Inputs / Fields
- **Style:** `bg` fill (one step *below* the surrounding card — inputs recess rather than raise), 1px hairline, 8px radius, `10px 12px` padding, `ink` text with `ink-3` placeholder.
- **Focus:** Border shifts to `accent/50` and the default outline is suppressed in favour of that plus the global ring.
- **Labels:** 12px medium in `ink-2` above the field; hints 11px in `ink-3` below it.
- **Drop zones:** 16px radius with a 2px *dashed* hairline; on drag the border goes ember and the fill takes `accent/5`.

### Navigation
- **Style:** Fixed, full-width, transparent at rest. Past 10px of scroll it fades to `bg/90` with a backdrop blur and gains a bottom hairline, over 500ms.
- **Typography:** 15px links in `ink-2`, hovering to `ink`. The wordmark pairs a 6px solid-ember "A" tile with the name and a mono `/ react native dev` descriptor.
- **Mobile:** Collapses below `lg` into a full-screen menu that stops the Lenis scroll loop and closes on `Escape` or route change.

### Specimen Frame (signature)
The system's most distinctive pattern: device and browser frames rendered as labelled specimens on a bench. Each frame is a 16px-radius hairline container holding a real screenshot, with a mono uppercase micro-label (10px, 0.12em, `ink-3`) floating 20px above its top-left corner. Frames are the only objects permitted a real cast shadow, and in the hero three of them are stacked at different parallax speeds so the group separates into planes as the page scrolls.

### Atmospheric Light (signature)
Four cooperating effects, all ember, all decorative-but-demonstrative, all disabled under `prefers-reduced-motion`: the **glow orb** (blurred radial bleeding off a section edge), the **spotlight** (a dim dot grid with a brighter ember grid revealed through a cursor-following radial mask), the **border beam** (a hot-cored gradient riding an `offset-path` around a border, guarded behind `@supports` so unsupported browsers get a plain border), and the **ripple** (rings pulsing between full and 90% scale). Together they are the room's lighting rig.

## Do's and Don'ts

### Do:
- **Do** put `{colors.on-accent}` (#1a0a02) on every solid ember surface — white on ember fails contrast at 2.84:1.
- **Do** open each major section with a mono uppercase ember eyebrow, numbered in reading order on index-style pages.
- **Do** reach for a tonal step (`bg` → `bg-2` → `bg-3`) or a hairline before reaching for a shadow.
- **Do** let interactive surfaces answer with a 2–4px lift and a warming hairline over ~300ms — quick, small, no spring.
- **Do** set body prose in `ink-2`, not full `ink`; reserve full ink for headings and emphasis.
- **Do** register every new animation in the `prefers-reduced-motion` block in `globals.css` — the existing block covers all of them, and that record must stay complete.
- **Do** let ember light bleed past its container and clip it with `overflow-hidden` on the section.

### Don't:
- **Don't** use white text on ember, anywhere, for any reason.
- **Don't** introduce a second decorative hue. Green (`good`) and red (`bad`) are semantic-only; everything else is warm greyscale plus ember.
- **Don't** use the italic serif for more than one word, and never in body copy.
- **Don't** touch the legacy Tailwind tokens `blue-400/500/600`, `gray-900/950`, `font-heading` (`--font-outfit`), or the `shadow-blue` / `shadow-blue-sm` entries. They reference variables that were never defined and are dead from an earlier build — they are not part of this system.
- **Don't** add a shadow to make a surface read as raised; the answer is a tonal step or an edge.
- **Don't** thicken a border on hover. Edges warm, they do not grow — a 1px→2px shift moves layout.
- **Don't** place two competing solid-ember fills in one viewport. Ember-as-light is unlimited; ember-as-fill marks the single primary action.
- **Don't** use pure black (#000) or pure white (#fff) as a surface or text color. Every neutral in this system is warm.
