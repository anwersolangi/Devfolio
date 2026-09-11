import PhoneFrame from "@/components/PhoneFrame";
import Parallax from "@/components/Parallax";
import VelocityMarquee from "@/components/VelocityMarquee";
import Spotlight from "@/components/ui/Spotlight";
import BorderBeam from "@/components/ui/BorderBeam";
import RippleLink from "@/components/ui/RippleLink";
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
  ["PROJECTS", "50+ delivered"],
  ["CODECANYON", "5+ products"],
  ["PLAY STORE", "10K+ installs"],
];

export default function Hero() {
  const center = reelsData[reelsData.length - 1] || null;
  const left = reelsData[reelsData.length - 2] || null;
  const right = reelsData[reelsData.length - 3] || null;

  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <Spotlight size={560} />

      <Parallax
        speed={0.22}
        className="glow-orb"
        style={{ top: -220, right: -220, width: 820, height: 820 }}
      />

      {/* Above the spotlight and orb, both of which are absolutely positioned. */}
      <div className="relative z-10 max-w-screen mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="hero-enter">
            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 font-mono text-[11px] tracking-[0.06em] text-accent-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-good"
                style={{ boxShadow: "0 0 8px #7af0a8" }}
                aria-hidden
              />
              AVAILABLE FOR FREELANCE · KARACHI
              <BorderBeam size={60} duration={8} borderWidth={1} />
            </div>

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

            {/* Phones: the primary spans the row and the two secondaries share
                the next, so one action leads instead of three equal slabs. */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap mt-9">
              <RippleLink
                href="#contact"
                color="var(--on-accent)"
                overlay={
                  <BorderBeam
                    size={70}
                    duration={6}
                    borderWidth={1.5}
                    colorFrom="var(--on-accent)"
                    colorTo="var(--accent-2)"
                  />
                }
                // The self-coloured border matches the outlined buttons' box,
                // so the rows line up at the same 50px.
                className="col-span-2 inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-accent-deep bg-accent-deep text-on-accent font-bold text-sm hover:opacity-90 transition-opacity duration-200"
              >
                Start a project →
              </RippleLink>
              <a
                href="#reels"
                className="relative inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-rule text-ink font-semibold text-sm hover:bg-white/5 transition"
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

            {/* The figures are the evidence, so they take full ink; the
                platform names are captions and recede, as in the project stats. */}
            <dl className="mt-12 lg:mt-14 grid grid-cols-3 gap-6 sm:gap-8 font-mono text-[11px] tracking-[0.08em] max-w-md">
              {PROOF.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-ink-3">{label}</dt>
                  <dd className="mt-1 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Capped below lg, where the stack drops under the copy and spans the
              full column: uncapped, the side phones pin to the viewport edges
              and get sliced by the section's overflow clip. */}
          <div className="relative hidden md:flex justify-center items-center w-full max-w-[560px] mx-auto lg:max-w-none min-h-[640px] hero-enter-late">
            {/* Each phone lags the scroll by a different amount, so the stack
                separates into three planes as the page moves. The centre one
                is the nearest plane, so it paints over the two behind it. */}
            {left ? (
              <div className="absolute top-12 -left-6 opacity-60">
                <Parallax speed={0.14}>
                  <PhoneFrame
                    width={170}
                    src={left.coverImage || null}
                    alt={left.title}
                    placeholder={left.title}
                    rotate={-8}
                  />
                </Parallax>
              </div>
            ) : null}

            {center ? (
              <Parallax speed={0.04} className="relative z-10">
                <div className="relative rounded-[44px]">
                  <PhoneFrame
                    width={280}
                    src={center.coverImage || null}
                    alt={center.title}
                    placeholder={center.title}
                    glow
                    priority
                  />
                  <BorderBeam size={220} duration={11} borderWidth={2} />
                </div>
              </Parallax>
            ) : null}

            {right ? (
              <div className="absolute bottom-12 -right-6 opacity-60">
                <Parallax speed={0.2}>
                  <PhoneFrame
                    width={170}
                    src={right.coverImage || null}
                    alt={right.title}
                    placeholder={right.title}
                    rotate={8}
                  />
                </Parallax>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <VelocityMarquee className="relative z-10 mt-16 lg:mt-24 border-t border-b border-rule py-4 font-mono text-sm text-ink-2 tracking-[0.06em]">
        <span className="inline-flex">
          {TICKER.map((t, i) => (
            <span key={i} className="px-6">
              {t}
              {i % 3 === 0 ? <span className="text-accent"> ●</span> : null}
            </span>
          ))}
        </span>
      </VelocityMarquee>
    </section>
  );
}
