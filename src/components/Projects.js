import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Nearby",
    slug: "nearby",
    n: "01",
    tag: "Location-based social",
    pitch: "Find and chat with people around you.",
    description:
      "GPS-driven discovery and real-time chat. 10K+ installs on Play Store. Built solo in React Native with a Firebase backend and Stripe payments.",
    image: "/nearby.png",
    layout: "mobile",
    stage: "linear-gradient(135deg, #2a1410 0%, #1a0d08 100%)",
    accent: "#ff8259",
    stack: ["React Native", "Firebase", "GPS", "Stripe"],
    stats: [
      ["10K+", "installs"],
      ["4.6★", "Play Store"],
      ["iOS+AND", "platforms"],
      ["Live", "on stores"],
    ],
    primary: {
      label: "Play Store",
      href: "https://play.google.com/store/apps/details?id=com.nearbyreactive",
    },
    secondary: {
      label: "CodeCanyon",
      href: "https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722",
    },
    detailsLink: "/apps/nearby",
  },
  {
    title: "WhatsupFire",
    slug: "whatsupfire",
    n: "02",
    tag: "Messaging app · template",
    pitch: "A WhatsApp-shaped messenger you can buy.",
    description:
      "Real-time chat, 24-hour stories and Firebase phone auth. Sold as a commercial React Native template on CodeCanyon.",
    image: "/whatsupfire.png",
    layout: "mobile",
    stage: "linear-gradient(135deg, #2d180f 0%, #1c0e07 100%)",
    accent: "#ffb27a",
    stack: ["React Native", "Firebase", "Phone Auth", "Stories"],
    stats: [
      ["Commercial", "template"],
      ["iOS+AND", "platforms"],
      ["Live", "CodeCanyon"],
    ],
    primary: {
      label: "CodeCanyon",
      href: "https://codecanyon.net/item/whatsupfire-react-native-messenger/30632195",
    },
    detailsLink: "/apps/whatsupfire",
  },
  {
    title: "YouTube Fullscreen Focus",
    slug: "youtube-fullscreen-focus",
    n: "03",
    tag: "Chrome extension",
    pitch: "True fullscreen YouTube. No accidents.",
    description:
      "Locks YouTube into a distraction-free fullscreen — kills accidental keypresses, hides chrome, remembers your last state. Published on the Chrome Web Store, source on GitHub.",
    image: "/youtube-fullscreen-focus.jpg",
    layout: "billboard", // full-width cinematic strip
    stage: "linear-gradient(135deg, #1f0e0c 0%, #15090a 50%, #2a0f0e 100%)",
    accent: "#ff5a4a",
    stack: ["JavaScript", "Chrome APIs", "LocalStorage", "CSS3"],
    stats: [
      ["Chrome Store", "published"],
      ["Open source", "GitHub"],
      ["Free", "forever"],
    ],
    primary: {
      label: "Chrome Store",
      href: "https://chromewebstore.google.com/detail/youtube-fullscreen-focus/cgkahhgcnekfpkbmpggblgojbjapjdom",
    },
    secondary: {
      label: "GitHub",
      href: "https://github.com/anwersolangi/youtube-fullscreen-focus",
    },
    detailsLink: "/apps/youtube-fullscreen-focus",
  },
  {
    title: "ReactTube",
    slug: "reacttube",
    n: "04",
    tag: "Open-source UI clone",
    pitch: "A YouTube clone you can read.",
    description:
      "Front-end in React Native — video browsing, comments, profiles, earnings. Public on GitHub as a reference for modern UI patterns and reusable components.",
    image:
      "https://raw.githubusercontent.com/anwersolangi/ReactTube-Youtube-clone-in-React-Native/master/screenshots/Cover_1.png",
    layout: "mobile",
    stage: "linear-gradient(135deg, #16181c 0%, #0f1115 100%)",
    accent: "#7af0a8",
    stack: ["React Native", "Navigation", "Reusable components"],
    stats: [
      ["Open source", "GitHub"],
      ["Reusable", "components"],
    ],
    primary: {
      label: "View on GitHub",
      href: "https://github.com/anwersolangi/ReactTube-Youtube-clone-in-React-Native",
    },
    detailsLink: "/apps/reacttube",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="eyebrow">02 · FEATURED PROJECTS</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Shipped &{" "}
              <span className="font-italic-serif text-accent font-normal">
                in production
              </span>
              .
            </h2>
            <p className="text-base md:text-lg text-ink-2 leading-relaxed mt-5 max-w-2xl">
              Four selected case studies. The full list — six apps, multiple
              templates, and a handful of open-source side quests — lives in the
              Apps section below.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              {p.layout === "billboard" ? (
                <BillboardCard project={p} />
              ) : (
                <MobileCard project={p} reverse={i % 2 !== 0} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Mobile project card — screenshot floats bare with rounded corners +
   heavy shadow on a warm-tinted stage. Project name + copy on the side.
   ───────────────────────────────────────────────────────────────────── */
function MobileCard({ project, reverse }) {
  return (
    <article
      className="group relative rounded-3xl overflow-hidden border border-rule"
      style={{ background: project.stage }}
    >
      {/* Ghost numeral baked into the stage */}
      <div
        className="absolute -top-6 right-6 lg:right-10 select-none pointer-events-none font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(140px, 22vw, 280px)",
          color: project.accent,
          opacity: 0.06,
          letterSpacing: "-0.05em",
        }}
        aria-hidden
      >
        {project.n}
      </div>

      <div className="relative grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center px-6 sm:px-8 lg:px-14 py-10 sm:py-14 lg:py-20">
        {/* Screenshot — no frame, just clean image + heavy shadow */}
        <div
          className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}
        >
          <div
            className="relative w-[220px] md:w-[260px] lg:w-[300px] aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-black transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
            style={{
              boxShadow:
                "0 60px 120px -40px rgba(0,0,0,0.7), 0 30px 60px -20px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} app screenshot`}
                fill
                sizes="300px"
                className="object-cover"
              />
            ) : (
              <ScreenshotPlaceholder text={project.title} />
            )}
          </div>
        </div>

        {/* Copy */}
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
            <span style={{ color: project.accent }}>● {project.n}</span>
            <span className="text-ink-3">{project.tag}</span>
          </div>
          <h3
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink"
            style={{ textWrap: "balance" }}
          >
            {project.title}
          </h3>
          <p
            className="font-italic-serif text-xl md:text-2xl mt-4"
            style={{ color: project.accent }}
          >
            {project.pitch}
          </p>
          <p className="text-[15px] text-ink-2 leading-[1.65] mt-4 max-w-xl">
            {project.description}
          </p>

          <Meta project={project} />
          <Cta project={project} />
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Billboard project card — wider, full-bleed treatment for things
   that aren't shaped like phones (Chrome extensions, web apps, etc).
   ───────────────────────────────────────────────────────────────────── */
function BillboardCard({ project }) {
  return (
    <article
      className="group relative rounded-3xl overflow-hidden border border-rule"
      style={{ background: project.stage }}
    >
      <div
        className="absolute -top-10 -right-6 select-none pointer-events-none font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(180px, 30vw, 380px)",
          color: project.accent,
          opacity: 0.06,
          letterSpacing: "-0.05em",
        }}
        aria-hidden
      >
        {project.n}
      </div>

      <div className="relative px-6 sm:px-8 lg:px-14 pt-10 sm:pt-12 lg:pt-16 pb-0">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-end mb-10">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
              <span style={{ color: project.accent }}>● {project.n}</span>
              <span className="text-ink-3">{project.tag}</span>
            </div>
            <h3
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink"
              style={{ textWrap: "balance" }}
            >
              {project.title}
            </h3>
            <p
              className="font-italic-serif text-xl md:text-2xl mt-4"
              style={{ color: project.accent }}
            >
              {project.pitch}
            </p>
          </div>
          <div>
            <p className="text-[15px] text-ink-2 leading-[1.65] md:pb-2">
              {project.description}
            </p>
            <Meta project={project} compact />
            <Cta project={project} />
          </div>
        </div>

        {/* Screenshot — wide aspect, bleeds to the bottom edge of the card */}
        <div
          className="relative w-full overflow-hidden rounded-t-2xl border-t border-l border-r border-rule"
          style={{
            aspectRatio: "16 / 9",
            background: "#0a0908",
            boxShadow: "0 -40px 80px -30px rgba(0,0,0,0.4)",
          }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <ScreenshotPlaceholder text={project.title} />
          )}

          {/* Subtle bottom gradient so the card edge feels intentional */}
          <div
            className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
            }}
          />
        </div>
      </div>
    </article>
  );
}

/* ───────────────────────────────────────── shared bits ───── */

function Meta({ project, compact = false }) {
  const statCols =
    project.stats.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3";

  return (
    <>
      <div className={`flex flex-wrap gap-1.5 ${compact ? "mt-5" : "mt-6"}`}>
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] px-2.5 py-1 border border-rule rounded-md text-ink-2 bg-black/20"
          >
            {s}
          </span>
        ))}
      </div>
      <div
        className={`grid grid-cols-2 ${statCols} gap-4 ${compact ? "mt-5" : "mt-7"}`}
      >
        {project.stats.map(([v, l]) => (
          <div key={l}>
            <div
              className="text-[20px] md:text-[22px] font-bold tracking-[-0.02em] text-ink"
              style={{ textWrap: "balance" }}
            >
              {v}
            </div>
            <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-3 mt-1">
              {l}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Cta({ project }) {
  return (
    <div className="flex flex-wrap gap-2 mt-7">
      <Link
        href={project.detailsLink}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-ink text-bg text-[13px] font-semibold hover:bg-accent hover:text-[#1a0a02] transition"
      >
        View details
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>
      {project.primary && (
        <a
          href={project.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-rule text-ink text-[13px] font-semibold hover:bg-white/5 transition"
        >
          {project.primary.label}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
      {project.secondary && (
        <a
          href={project.secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-ink-2 text-[13px] font-medium hover:text-ink transition"
        >
          {project.secondary.label}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}

function ScreenshotPlaceholder({ text }) {
  return (
    <div
      className="absolute inset-0 flex items-end p-6"
      style={{
        background:
          "linear-gradient(160deg,#1a1714 0%,#2a2622 45%,#1a1714 100%)",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 14px)",
      }}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 leading-tight">
        ↘ {text}
      </div>
    </div>
  );
}
