import PhoneFrame from "@/components/PhoneFrame";
import { reelsData } from "@/data/reels";

const TICKER = [
  "REACT NATIVE",
  "EXPO",
  "REANIMATED",
  "FIREBASE",
  "TYPESCRIPT",
  "iOS",
  "ANDROID",
  "CHROME EXT",
  "GRAPHQL",
  "REDUX",
  "STRIPE",
  "FASTLANE",
  "CODEPUSH",
];

const PROOF = [
  ["FIVERR", "5.0★ · top rated"],
  ["CODECANYON", "5+ products"],
  ["PLAY STORE", "10K+ installs"],
];

export default function Hero() {
  // Hero collage: the newest reel as centerpiece + two flanking ones.
  const center = reelsData[reelsData.length - 1] || null;
  const left = reelsData[reelsData.length - 2] || null;
  const right = reelsData[reelsData.length - 3] || null;

  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Ambient orb */}
      <div
        className="glow-orb"
        style={{ top: -200, right: -200, width: 800, height: 800 }}
      />

      <div className="max-w-screen mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: claim + CTAs */}
          <div className="hero-enter">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 font-mono text-[11px] tracking-[0.06em] text-accent-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-good"
                style={{ boxShadow: "0 0 8px #7af0a8" }}
                aria-hidden
              />
              AVAILABLE FOR FREELANCE · KARACHI
            </p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[108px] font-extrabold leading-[0.92] tracking-tightest mt-6 text-ink">
              I build
              <br />
              mobile apps
              <br />
              that{" "}
              <span className="font-italic-serif text-accent font-normal">
                ship
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-ink-2 leading-[1.5] max-w-xl mt-7">
              I&rsquo;m <strong className="text-ink font-semibold">Anwer Solangi</strong>,
              a senior <strong className="text-ink font-semibold">React Native developer in Karachi, Pakistan</strong>,
              with 5+ years and 100K+ downloads behind me. I take ideas from
              sketch to App Store — cleanly, quickly, and with the kind of motion
              design that turns into a reel.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-9">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-accent text-[#1a0a02] font-bold text-sm hover:opacity-90 transition"
              >
                Start a project →
              </a>
              <a
                href="#reels"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-rule text-ink font-semibold text-sm hover:bg-white/5 transition"
              >
                See the reels
              </a>
              <a
                href="/anwer-solangi-resume.pdf"
                download
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-rule text-ink-2 font-mono text-[13px] hover:bg-white/5 hover:text-ink transition"
              >
                ↓ resume.pdf
              </a>
            </div>

            <dl className="mt-12 lg:mt-14 grid grid-cols-3 gap-6 sm:gap-8 font-mono text-[11px] tracking-[0.08em] text-ink-3 max-w-md">
              {PROOF.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-ink">{label}</dt>
                  <dd className="mt-0.5">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: phone collage (desktop only — mobile gets reels below) */}
          <div className="relative hidden md:flex justify-center items-center min-h-[640px] hero-enter-late">
            {left ? (
              <div className="absolute top-12 -left-6 opacity-60">
                <PhoneFrame
                  width={170}
                  src={left.coverImage || null}
                  alt={left.title}
                  placeholder={left.title}
                  rotate={-8}
                />
              </div>
            ) : null}

            {center ? (
              <PhoneFrame
                width={280}
                src={center.coverImage || null}
                alt={center.title}
                placeholder={center.title}
                glow
                priority
              />
            ) : null}

            {right ? (
              <div className="absolute bottom-12 -right-6 opacity-60">
                <PhoneFrame
                  width={170}
                  src={right.coverImage || null}
                  alt={right.title}
                  placeholder={right.title}
                  rotate={8}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="mt-16 lg:mt-24 border-t border-b border-rule py-4 marquee font-mono text-sm text-ink-2 tracking-[0.06em]"
        aria-hidden
      >
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="inline-flex">
              {TICKER.map((t, i) => (
                <span key={i} className="px-6">
                  {t}
                  {i % 3 === 0 ? <span className="text-accent"> ●</span> : null}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
