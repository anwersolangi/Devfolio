import Link from "next/link";
import { Check, MapPin, Clock, Star, Mail } from "lucide-react";
import { PageShell, Breadcrumbs, SectionHead } from "@/components/PageHeader";
import {
  BreadcrumbSchema,
  ServiceSchema,
  WebPageSchema,
} from "@/components/SEOComponents";
import { SITE_URL, CONTACT_EMAIL } from "@/data/site";
import { jsonLd } from "@/lib/jsonld";
import { TWITTER_BASE } from "@/lib/seo";

const PATH = "/hire-react-native-developer-karachi";
const URL = `${SITE_URL}${PATH}`;

const TITLE = "Hire a React Native Developer in Karachi | Anwer Solangi";
const DESCRIPTION =
  "Hire Anwer Solangi, a senior React Native developer in Karachi, Pakistan: 5+ years, 50+ projects, 100K+ downloads. Freelance and contract, local or remote.";

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
    ...TWITTER_BASE,
    title: TITLE,
    description: DESCRIPTION,
  },
};

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
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}

export default function HirePage() {
  return (
    <PageShell>
      <WebPageSchema url={URL} name={TITLE} description={DESCRIPTION} />
      <ServiceSchema />
      <FaqJsonLd />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Hire a React Native Developer in Karachi", url: URL },
        ]}
      />

      <div>
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Hire a React Native developer" },
          ]}
        />

        <header className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[13px] font-medium text-ink">
            <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
            Karachi, Pakistan
            <span className="text-ink-3 font-normal">· remote worldwide</span>
          </p>
          <h1 className="mt-5 text-display font-semibold text-ink">
            Hire a React Native developer in Karachi.
          </h1>
          <p className="text-[17px] md:text-lg text-ink-2 leading-[1.6] mt-6 max-w-2xl">
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
              className="btn-primary"
            >
              <Mail className="w-4 h-4" aria-hidden /> Start a project
            </a>
            <Link href="/apps" className="btn-secondary">
              See shipped apps
            </Link>
            <Link href="/reels" className="btn-ghost">
              Watch the UI reels
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-6 border-t border-rule">
            {[
              ["5.0", "client rating"],
              ["100K+", "app downloads"],
              ["50+", "projects delivered"],
              ["5+ yrs", "React Native"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-[13px] text-ink-3">{l}</dt>
                <dd className="mt-0.5 text-xl font-semibold tracking-[-0.02em] text-ink tabular-nums">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="mt-20 border-t border-rule pt-8">
          <SectionHead
            label="What I build"
            title="React Native and iOS development, end to end."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map(([title, body]) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-rule bg-bg-2"
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

        <section className="mt-20 border-t border-rule pt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHead
            label="Karachi, Pakistan and beyond"
            title="Local roots, global delivery."
            className="mb-0"
          />
          <div className="space-y-5 text-[17px] text-ink-2 leading-[1.6]">
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

        <section className="mt-20 border-t border-rule pt-8">
          <SectionHead label="How it works" title="Three steps, no black box." />
          <div className="grid md:grid-cols-3 gap-4">
            {PROCESS.map(([n, title, body]) => (
              <div
                key={n}
                className="p-6 rounded-2xl border border-rule bg-bg-2"
              >
                <div className="text-[13px] font-medium text-ink-3 tabular-nums">
                  Step {n}
                </div>
                <h3 className="text-lg font-semibold text-ink mt-2">{title}</h3>
                <p className="text-ink-2 text-[15px] leading-[1.6] mt-2">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-rule pt-8 max-w-3xl">
          <SectionHead label="FAQ" title="Hiring questions, answered." />
          <div className="border-t border-rule">
            {FAQS.map((f, i) => (
              <details key={i} className="faq-item group border-b border-rule">
                <summary className="flex items-start justify-between gap-6 py-4 cursor-pointer list-none select-none">
                  <h3 className="text-[17px] font-medium text-ink leading-[1.4]">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden
                    className="relative mt-2 w-3.5 h-3.5 shrink-0 text-ink-3 group-hover:text-ink transition-colors"
                  >
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current rotate-90 group-open:rotate-0 transition-transform duration-200" />
                  </span>
                </summary>
                <p className="pb-5 -mt-1 text-[15px] text-ink-2 leading-[1.65] max-w-prose">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 pt-10 border-t border-rule md:grid md:grid-cols-[1.4fr_1fr] md:gap-10 md:items-center">
          <div>
            <h2 className="text-2xl md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink max-w-xl">
              Got an app to build? Tell me what you&rsquo;re making.
            </h2>
            <p className="mt-3 text-[15px] text-ink-2 leading-[1.6] max-w-lg">
              Replies usually inside a day.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-wrap gap-3 md:justify-end">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "React Native project enquiry",
              )}`}
              className="btn-primary"
            >
              <Mail className="w-4 h-4" aria-hidden /> {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
