import Link from "next/link";
import { ArrowLeft, Check, MapPin, Clock, Star, Mail } from "lucide-react";
import {
  BreadcrumbSchema,
  ServiceSchema,
  WebPageSchema,
} from "@/components/SEOComponents";
import { SITE_URL, CONTACT_EMAIL } from "@/data/site";

const PATH = "/hire-react-native-developer-karachi";
const URL = `${SITE_URL}${PATH}`;

const TITLE =
  "Hire a React Native Developer in Karachi, Pakistan — Anwer Solangi";
const DESCRIPTION =
  "Hire Anwer Solangi, a senior React Native developer in Karachi, Pakistan. 5+ years, 100K+ downloads, 50+ shipped apps. Available for freelance & contract work locally and remotely worldwide.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "hire React Native developer Karachi",
    "React Native developer Karachi",
    "React Native developer Pakistan",
    "mobile app developer Karachi",
    "freelance React Native developer Pakistan",
    "hire mobile app developer Karachi",
    "iOS developer Karachi",
    "Expo developer Pakistan",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// AEO: each answer leads with a direct, self-contained 1–2 sentence response so
// answer engines can extract it cleanly.
const FAQS = [
  {
    q: "How do I hire a React Native developer in Karachi?",
    a: "You can hire Anwer Solangi, a senior React Native developer based in Karachi, Pakistan, directly through anwersolangi.com or by emailing me@anwersolangi.com. He works with clients in Karachi in person and with teams worldwide remotely, on both freelance and contract terms.",
  },
  {
    q: "How much does a React Native developer cost in Pakistan?",
    a: "Rates for an experienced React Native developer in Pakistan are typically far lower than in the US or Europe while keeping senior-level quality. Anwer Solangi works on hourly, fixed-scope, and monthly retainer terms — share your project at me@anwersolangi.com for a tailored quote.",
  },
  {
    q: "Can you build for both iOS and Android?",
    a: "Yes. React Native ships a single codebase to both iOS and Android. Anwer Solangi has 100K+ downloads across the App Store and Google Play and handles the full pipeline — build, native modules, store submission, and updates.",
  },
  {
    q: "Do you work with international clients remotely?",
    a: "Yes. Anwer Solangi is based in Karachi (PKT, UTC+5) and works remotely with founders and product teams across the US, Europe, the Middle East, and Australia, with overlapping hours and async updates.",
  },
  {
    q: "Is Anwer Solangi the actor?",
    a: "No. Anwer Solangi (spelled with an 'e') is a React Native and iOS app developer in Karachi. Anwar Solangi (spelled with an 'a') was a Pakistani television actor (1944–2008) — a different person.",
  },
];

const SERVICES = [
  [
    "React Native app development",
    "Cross-platform iOS + Android apps from a single codebase — built with Expo, Reanimated, and TypeScript.",
  ],
  [
    "iOS development",
    "Native Swift work and React Native native modules when an app needs to go beyond the bridge.",
  ],
  [
    "MVP to App Store",
    "Idea → architecture → motion → payments → store submission. I'm fluent in Fastlane, TestFlight, and Play Console.",
  ],
  [
    "Rescue & scale",
    "Take over an existing React Native codebase, fix performance, ship the backlog, and stabilise releases.",
  ],
];

const PROCESS = [
  ["01", "Scope", "A short call to pin down the goal, platforms, and timeline."],
  ["02", "Build", "Weekly demoable builds — you watch it take shape, not a black box."],
  ["03", "Ship", "Store submission, review handling, and a clean handover or ongoing support."],
];

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${URL}#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HirePage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-16 overflow-hidden">
      <WebPageSchema url={URL} name={TITLE} description={DESCRIPTION} />
      <ServiceSchema />
      <FaqJsonLd />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Hire a React Native Developer in Karachi", url: URL },
        ]}
      />

      <div
        className="glow-orb"
        style={{ top: -200, right: -200, width: 700, height: 700 }}
      />

      <div className="max-w-screen mx-auto relative">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-12 group font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          back to home
        </Link>

        {/* Hero */}
        <header className="max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 font-mono text-[11px] tracking-[0.06em] text-accent-2">
            <MapPin className="w-3 h-3" /> KARACHI · PAKISTAN · REMOTE WORLDWIDE
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[1.02] mt-5 text-ink">
            Hire a React Native developer in{" "}
            <span className="font-serif italic text-accent font-normal">
              Karachi
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-ink-2 leading-[1.55] mt-6">
            I&rsquo;m <strong className="text-ink font-semibold">Anwer Solangi</strong>,
            a senior React Native developer based in Karachi, Pakistan. I build
            cross-platform iOS and Android apps — 5+ years in, 50+ projects
            shipped, 100K+ downloads — and I&rsquo;m available for freelance and
            contract work both in Karachi and remotely worldwide.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "React Native project enquiry",
              )}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-accent text-[#1a0a02] font-bold text-sm hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" /> Start a project
            </a>
            <Link
              href="/apps"
              className="inline-flex items-center px-5 py-3.5 rounded-xl border border-rule text-ink font-semibold text-sm hover:bg-white/5 transition"
            >
              See shipped apps
            </Link>
            <Link
              href="/reels"
              className="inline-flex items-center px-5 py-3.5 rounded-xl border border-rule text-ink-2 font-semibold text-sm hover:bg-white/5 hover:text-ink transition"
            >
              Watch the UI reels
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-[11px] tracking-[0.08em] text-ink-3 max-w-xl">
            {[
              ["5.0★", "Fiverr rating"],
              ["100K+", "Downloads"],
              ["50+", "Projects"],
              ["5+ yrs", "React Native"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-accent text-2xl font-display font-extrabold tracking-[-0.03em]">
                  {v}
                </dt>
                <dd className="mt-1 uppercase">{l}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Services */}
        <section className="mt-24">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            ▸ WHAT I BUILD
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mt-3 max-w-2xl">
            React Native &amp; iOS development, end to end.
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {SERVICES.map(([title, body]) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-rule bg-bg-2 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink tracking-[-0.01em]">
                      {title}
                    </h3>
                    <p className="text-ink-2 text-[15px] leading-[1.6] mt-2">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why local */}
        <section className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
              ▸ KARACHI, PAKISTAN &amp; BEYOND
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mt-3">
              Local roots, global delivery.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-ink-2 leading-[1.6]">
            <p>
              Based in Karachi, I work with Pakistani founders and startups who
              want someone in their timezone they can actually meet — and with
              international teams who want senior React Native work without
              senior-market rates.
            </p>
            <p className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <span>
                I&rsquo;m on PKT (UTC+5), with comfortable overlap for the
                Middle East, Europe, the UK, and morning hours for the US East
                Coast. Clear async updates fill the gaps.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Star className="w-5 h-5 text-accent shrink-0 mt-1" />
              <span>
                5.0★ top-rated on Fiverr, 5+ products on CodeCanyon, and apps
                with 10K–100K+ installs on the Play Store.
              </span>
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mt-24">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            ▸ HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mt-3">
            Three steps, no black box.
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {PROCESS.map(([n, title, body]) => (
              <div
                key={n}
                className="p-6 rounded-2xl border border-rule bg-bg-2"
              >
                <div className="font-display text-4xl font-extrabold text-accent tracking-[-0.04em]">
                  {n}
                </div>
                <h3 className="text-lg font-semibold text-ink mt-3">{title}</h3>
                <p className="text-ink-2 text-[15px] leading-[1.6] mt-2">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent">
            ▸ FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mt-3">
            Hiring questions, answered.
          </h2>
          <div className="space-y-3 mt-10">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group bg-bg-2 border border-rule rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <h3 className="font-semibold text-ink leading-snug text-[15px]">
                    {f.q}
                  </h3>
                  <span className="text-accent font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-ink-2 text-[15px] leading-[1.65]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 p-8 lg:p-12 rounded-2xl border border-rule bg-bg-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink">
            Got an app to build?
          </h2>
          <p className="text-ink-2 mt-3 max-w-xl mx-auto">
            Tell me what you&rsquo;re making. Replies usually inside a day.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "React Native project enquiry",
            )}`}
            className="inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-xl bg-accent text-[#1a0a02] font-bold text-sm hover:opacity-90 transition"
          >
            <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
          </a>
        </section>
      </div>
    </main>
  );
}
