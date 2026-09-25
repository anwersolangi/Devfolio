import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import PhoneFrame from "@/components/PhoneFrame";
import { reelsData } from "@/data/reels";

// The star is an icon, not a glyph: U+2605 isn't in the typeface and Chrome
// drags the neighbouring digits into the fallback font with it.
const FACTS = [
  ["50+", "projects delivered"],
  ["100K+", "app downloads"],
  [
    <span key="rating" className="inline-flex items-center gap-1">
      5.0
      <Star className="w-[0.8em] h-[0.8em] fill-current" aria-hidden />
      <span className="sr-only">out of 5</span>
    </span>,
    "client rating",
  ],
  ["5+ yrs", "React Native"],
];

// Three recent reels, straight from the screen recordings. The front frame is
// upright; the two behind it sit lower and turned out, like phones on a bench.
const HERO_REELS = [
  {
    slug: "coffee-order-carousel-react-native-swipe-tap-cards",
    rot: -8,
    dy: 30,
    scale: 0.86,
    className: "w-[36%] -mr-[7%]",
  },
  {
    slug: "live-stock-chart-react-native-self-drawing-svg-price-ticker",
    rot: 0,
    dy: 0,
    scale: 1,
    className: "w-[40%] z-10",
  },
  {
    slug: "ride-hail-driver-arriving-react-native-animated-route-eta",
    rot: 8,
    dy: 30,
    scale: 0.86,
    className: "w-[36%] -ml-[7%]",
  },
];

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu;

/**
 * Intro. The claim on the left, the evidence on the right: real frames from
 * reels of shipped UI, so the first viewport already shows the work.
 */
export default function Hero() {
  const phones = HERO_REELS.map((h) => ({
    ...h,
    reel: reelsData.find((r) => r.slug === h.slug),
  })).filter((p) => p.reel?.coverImage);

  return (
    <section className="pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-screen mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:items-center">
          <div className="max-w-2xl">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium text-ink">
              <span
                className="w-2 h-2 rounded-full bg-good shrink-0"
                aria-hidden
              />
              Available for freelance work
              <span className="text-ink-3 font-normal">
                · Karachi, Pakistan · UTC+5
              </span>
            </p>

            <h1 className="mt-6 text-display font-semibold text-ink">
              React Native developer in Karachi, shipping iOS and Android apps
              for founders worldwide.
            </h1>

            <p className="mt-6 text-[17px] md:text-lg text-ink-2 leading-[1.6] max-w-xl">
              I’m{" "}
              <strong className="font-semibold text-ink">Anwer Solangi</strong>
              . Over the last five years I’ve delivered 50+ projects and 100K+
              app downloads — a location-based social app, an offline AI
              document scanner, a restaurant ordering suite, an Islamic
              inheritance calculator — mostly solo, in React Native and
              TypeScript, and always through to a live store listing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Start a project
              </a>
              <a href="#work" className="btn-secondary">
                See the work
              </a>
              <a
                href="/anwer-solangi-resume.pdf"
                download
                className="btn-ghost"
              >
                Résumé (PDF) ↓
              </a>
            </div>
          </div>

          {phones.length > 0 && <PhoneCluster phones={phones} />}
        </div>

        <dl className="mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-6 border-t border-rule">
          {FACTS.map(([value, label]) => (
            <div key={label}>
              <dt className="text-[13px] text-ink-3">{label}</dt>
              <dd className="mt-0.5 text-xl font-semibold tracking-[-0.02em] text-ink tabular-nums">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function PhoneCluster({ phones }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div
        className="absolute inset-x-[2%] top-[16%] -bottom-2 rounded-[28px] bg-bg-3"
        aria-hidden
      />
      <ul
        className="relative flex items-end justify-center px-[5%] pt-[6%] pb-[9%] list-none m-0"
        aria-label="Frames from three recent UI reels"
      >
        {phones.map((p, i) => {
          const title = p.reel.title.replace(EMOJI, "").trim();
          return (
            <li
              key={p.slug}
              className={`hero-phone relative ${p.className}`}
              style={{
                "--rot": `${p.rot}deg`,
                "--dy": `${p.dy}px`,
                "--scale": p.scale,
                animationDelay: `${140 + i * 80}ms`,
              }}
            >
              <Link
                href={`/reels/${p.reel.slug}`}
                aria-label={`Watch reel: ${title}`}
                className="block transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
              >
                <PhoneFrame
                  fluid
                  width={i === 1 ? 240 : 200}
                  src={p.reel.coverImage}
                  alt=""
                  priority={i === 1}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="mt-5 text-[13px] text-ink-3 text-center">
        Frames from three recent reels, recorded on device.{" "}
        <Link
          href="/reels"
          className="group inline-flex items-center gap-1 font-medium text-accent hover:text-accent-deep"
        >
          Watch them
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </p>
    </div>
  );
}
