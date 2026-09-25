import Link from "next/link";
import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import { Section } from "@/components/Section";
import { APPS_LIST } from "@/data/apps";

const projects = [
  {
    title: "Wasiyyah",
    slug: "wasiyyah",
    tag: "Islamic will & faraid calculator",
    pitch: "Write the will. Compute the shares.",
    description:
      "A guided Shariah-compliant will builder on top of a 2,000-line pure-TypeScript faraid engine — exact fractions, hajb, awl, radd and the classical special cases across 8 madhabs. Fully offline, in 10 languages with RTL, with a formal PDF export.",
    // TODO: swap in /wasiyyah_screenshot_01.png once store screenshots are cut.
    image: null,
    icon: "/wasiyyah_icon.png",
    layout: "mobile",
    stack: ["React Native", "Expo SDK 57", "TypeScript", "Encrypted MMKV"],
    facts: ["8 madhabs", "10 languages", "100% offline"],
    status: "Coming soon to Google Play",
  },
  {
    title: "Nearby",
    slug: "nearby",
    tag: "Location-based social",
    pitch: "Find and chat with people around you.",
    description:
      "GPS-driven discovery and real-time chat. 10K+ installs on Play Store. Built solo in React Native with a Firebase backend and Stripe payments.",
    image: "/nearby.png",
    icon: "/nearby_icon.png",
    layout: "mobile",
    stack: ["React Native", "Firebase", "GPS", "Stripe"],
    facts: ["10K+ installs", "Rated 4.6 on Play Store", "iOS + Android"],
    links: [
      [
        "Play Store",
        "https://play.google.com/store/apps/details?id=com.nearbyreactive",
      ],
      [
        "CodeCanyon",
        "https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722",
      ],
    ],
  },
  {
    title: "DocuLensAI",
    slug: "doculensai",
    tag: "AI document scanner",
    pitch: "A private, offline scanner in your pocket.",
    description:
      "Auto edge-detection, on-device OCR and one-tap PDF, image & text export — every scan runs entirely on the phone. No cloud, no account. Built in React Native with VisionCamera + OpenCV and Google ML Kit.",
    image: "/doculensai_screenshot_01.png",
    icon: "/doculensai_icon.png",
    layout: "mobile",
    stack: ["React Native", "VisionCamera + OpenCV", "ML Kit OCR", "SQLite"],
    facts: ["On-device OCR", "10 pro filters", "100% offline"],
  },
  {
    title: "YouTube Fullscreen Focus",
    slug: "youtube-fullscreen-focus",
    tag: "Chrome extension",
    pitch: "True fullscreen YouTube. No accidents.",
    description:
      "Locks YouTube into a distraction-free fullscreen — kills accidental keypresses, hides chrome, remembers your last state. Published on the Chrome Web Store, source on GitHub.",
    image: "/youtube-fullscreen-focus.jpg",
    icon: "/youtube-fullscreen-focus_icon.png",
    layout: "billboard",
    stack: ["JavaScript", "Chrome APIs", "LocalStorage", "CSS3"],
    facts: ["Chrome Web Store", "Open source", "Free"],
    links: [
      [
        "Chrome Web Store",
        "https://chromewebstore.google.com/detail/youtube-fullscreen-focus/cgkahhgcnekfpkbmpggblgojbjapjdom",
      ],
      ["GitHub", "https://github.com/anwersolangi/youtube-fullscreen-focus"],
    ],
  },
  {
    title: "TapMeal",
    slug: "tapmeal",
    tag: "Restaurant SaaS · QR ordering",
    pitch: "Scan the table. Order from the browser.",
    description:
      "A three-app restaurant suite on one Firebase backend — customers order by QR with no install, while owners run orders, kitchen and staff live from their phone. Full TypeScript source on CodeCanyon.",
    image: "/tabletap_featured.jpg",
    icon: "/tapmeal_icon.png",
    layout: "billboard",
    stack: ["React Native", "Firebase", "Next.js", "TypeScript"],
    facts: ["3 apps, 1 backend", "Live on Play Store", "Source on CodeCanyon"],
    links: [
      [
        "Play Store",
        "https://play.google.com/store/apps/details?id=com.anwersolangi.tableau",
      ],
      [
        "CodeCanyon",
        "https://codecanyon.net/item/tapmeal-restaurant-management-qr-ordering-system-react-native-app/63557195",
      ],
    ],
  },
  {
    title: "MemorIQ",
    slug: "memoriq",
    tag: "Memory game · rebrandable",
    pitch: "Flip, match, beat the clock.",
    description:
      "A polished memory-match brain trainer — 9 themes, animated backgrounds, a lives system and per-round timers, all offline-first. Sold on CodeCanyon as a script you can rebrand from a single config file.",
    image: "/memoriq_featured.png",
    icon: "/memoriq_icon.png",
    layout: "mobile",
    stack: ["React Native", "Reanimated", "MMKV", "TypeScript"],
    facts: ["9 themes", "Offline-first", "One-file rebrand"],
  },
];

export default function Projects() {
  return (
    <Section
      id="work"
      label="Selected work"
      title="Six shipped apps I’d show a new client first."
      more={{ href: "/apps", label: `All ${APPS_LIST.length} apps` }}
    >
      <div className="divide-y divide-rule border-t border-rule">
        {projects.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </div>

      <AllApps />
    </Section>
  );
}

function ProjectRow({ project: p }) {
  return (
    <article className="grid gap-6 py-8 md:grid-cols-[1fr_200px] md:gap-10 md:py-10">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {p.icon && (
            <Image
              src={p.icon}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-[10px] border border-rule shrink-0"
            />
          )}
          <div className="min-w-0">
            <h3 className="text-[19px] font-semibold tracking-[-0.015em] text-ink leading-tight">
              <Link
                href={`/apps/${p.slug}`}
                className="hover:text-accent transition-colors duration-150"
              >
                {p.title}
              </Link>
            </h3>
            <p className="text-[13px] text-ink-3 mt-0.5">{p.tag}</p>
          </div>
        </div>

        <p className="mt-4 text-[17px] font-medium text-ink leading-[1.4]">
          {p.pitch}
        </p>
        <p className="mt-2 text-[15px] text-ink-2 leading-[1.6] max-w-prose">
          {p.description}
        </p>

        <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-ink-3">
          <div>
            <dt className="sr-only">Stack</dt>
            <dd>{p.stack.join(" · ")}</dd>
          </div>
        </dl>
        <p className="mt-1 text-[13px] text-ink-2 tabular-nums">
          {p.facts.join(" · ")}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
          <Link href={`/apps/${p.slug}`} className="link font-medium">
            Case study →
          </Link>
          {p.links?.map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-2 hover:text-ink transition-colors duration-150"
            >
              {label} ↗
            </a>
          ))}
          {p.status && (
            <span className="text-ink-3">{p.status}</span>
          )}
        </div>
      </div>

      <Thumb project={p} />
    </article>
  );
}

function Thumb({ project: p }) {
  if (!p.image) {
    // No screenshot yet: the icon stands in, presented as the object it is.
    return (
      <div className="hidden md:flex items-start justify-center pt-1">
        <Image
          src={p.icon}
          alt={`${p.title} app icon`}
          width={112}
          height={112}
          className="w-28 h-28 rounded-[24%] border border-rule shadow-object"
        />
      </div>
    );
  }
  if (p.layout === "billboard") {
    return (
      <Link
        href={`/apps/${p.slug}`}
        className="block md:pt-1"
        aria-label={`${p.title} case study`}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg border border-rule bg-bg-3">
          <Image
            src={p.image}
            alt={`${p.title} screenshot`}
            fill
            sizes="(min-width: 768px) 200px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={`/apps/${p.slug}`}
      className="hidden md:flex justify-center pt-1"
      aria-label={`${p.title} case study`}
    >
      <PhoneFrame width={128} src={p.image} alt={`${p.title} screenshot`} />
    </Link>
  );
}

const isImagePath = (icon) =>
  typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http"));

function AllApps() {
  return (
    <div className="mt-12 pt-8 border-t border-rule">
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="text-[15px] font-medium text-ink">
          Everything I’ve shipped
        </h3>
        <Link href="/apps" className="link text-[14px]">
          Browse all apps →
        </Link>
      </div>
      <ul className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-6 list-none m-0 p-0">
        {APPS_LIST.map((app) => (
          <li key={app.slug}>
            <Link
              href={`/apps/${app.slug}`}
              className="group flex flex-col items-center text-center gap-2"
            >
              {isImagePath(app.icon) ? (
                <Image
                  src={app.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-[14px] border border-rule transition-transform duration-200 group-hover:-translate-y-0.5"
                />
              ) : (
                <span
                  className="w-14 h-14 rounded-[14px] border border-rule bg-bg-2 flex items-center justify-center text-2xl"
                  aria-hidden
                >
                  {app.icon}
                </span>
              )}
              <span className="text-[13px] leading-tight text-ink-2 group-hover:text-ink transition-colors">
                {app.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
