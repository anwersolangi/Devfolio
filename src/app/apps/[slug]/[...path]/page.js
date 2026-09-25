import { notFound, permanentRedirect } from "next/navigation";
import {
  ArrowRight,
  Mail,
  ChevronDown,
  AlertTriangle,
  ShieldAlert,
  ExternalLink,
  Send,
} from "lucide-react";
import { APPS_DATA } from "@/data/apps";
import { PRIVACY_POLICIES } from "@/data/privacy";
import { TERMS_OF_SERVICE } from "@/data/terms";
import { HELP_CONTENT } from "@/data/help";
import { CHILD_SAFETY_POLICIES } from "@/data/child-safety";
import { pageTitle, clampText, TWITTER_BASE } from "@/lib/seo";
import LegalDocument, {
  BackLink,
  LegalHeader,
  PolicySection,
  FootCard,
} from "@/components/legal/LegalDocument";

import { appSubPages, allAppSubPageParams, UNIFIED_FALLBACK } from "@/lib/legal";

// Every page with content is prerendered; any other path is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allAppSubPageParams();
}

export async function generateMetadata({ params }) {
  const { slug, path } = await params;
  const app = APPS_DATA[slug];
  if (!app || path?.length !== 1 || !appSubPages(slug).includes(path[0])) {
    return { title: "Not Found" };
  }

  const canonicalPath = `/apps/${slug}/${(path || []).join("/")}`;

  const map = {
    privacy: [
      "Privacy Policy",
      `Privacy policy for ${app.name} (${app.subtitle}): what information the app handles, how it is used, and how to contact the developer.`,
    ],
    terms: [
      "Terms of Service",
      `Terms of service for ${app.name} (${app.subtitle}): the terms and conditions that apply when you use the app.`,
    ],
    help: [
      "Help & Support",
      `Help and support for ${app.name}: answers to common questions, troubleshooting steps, and how to contact the developer.`,
    ],
    contact: [
      "Contact",
      `Contact the developer of ${app.name} for bug reports, feature requests and account questions.`,
    ],
    "child-safety": [
      "Child Safety Standards",
      `Child safety standards for ${app.name}: the app's policy on child safety and how to report a concern to the developer.`,
    ],
  };
  const entry = map[path?.[0]];
  const pageName = entry?.[0] ?? path?.join(" / ");
  const title = pageTitle(`${pageName} — ${app.name}`);
  const description = clampText(entry?.[1] ?? `${pageName} for ${app.name}.`);
  return {
    title,
    description,
    // Legal and support pages exist because store listings link to them, not
    // to rank. Keeping them out of the index (but followed) stops ~17
    // boilerplate-heavy pages competing with the pages that should rank; they
    // stay publicly reachable for Play Console and store reviewers.
    robots: { index: false, follow: true },
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "website",
      // The app's generated share card; file-based OG images don't cascade
      // into this catch-all segment on their own.
      images: [
        {
          url: `/apps/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${app.name} — ${app.subtitle}`,
        },
      ],
    },
    twitter: { ...TWITTER_BASE, title, description },
  };
}

const appBack = (slug, name) => ({ href: `/apps/${slug}`, label: `back to ${name}` });

function AppBackLink({ appSlug, appName }) {
  return <BackLink {...appBack(appSlug, appName)} />;
}

function HelpPage({ help, appSlug }) {
  const createMailtoLink = (option) => {
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${help.supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <AppBackLink appSlug={appSlug} appName={help.appName} />

        <header className="mb-12 max-w-3xl">
          <div className="label">
            {help.appName} · SUPPORT
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.045em] leading-[0.95] mt-3 text-ink">
            {help.title.replace(/\.$/, "")}
            <span className="text-accent">.</span>
          </h1>
          <p className="text-lg md:text-xl text-ink-2 font-light leading-[1.5] mt-5">
            {help.description}
          </p>
        </header>

        <div className="relative rounded-2xl p-8 mb-16 overflow-hidden border border-rule bg-bg-2">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255,106,61,0.25), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-xl">
              <div className="label">
                Need immediate help?
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-ink mt-2">
                Email me directly.
              </h2>
              <p className="text-ink-2 mt-2">
                Personalised support, replies usually inside a day.
              </p>
            </div>
            <a
              href={`mailto:${help.supportEmail}?subject=${encodeURIComponent(help.appName + " Support Request")}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-deep text-on-accent text-sm font-bold hover:opacity-90 transition shrink-0"
            >
              <Mail className="w-4 h-4" /> Email support
            </a>
          </div>
        </div>

        <section className="mb-20">
          <div className="label mb-3">
            01 · FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mb-8">
            Frequently asked questions.
          </h2>
          <div className="space-y-3">
            {help.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-bg-2 border border-rule rounded-xl overflow-hidden transition-colors hover:border-accent/30"
              >
                <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[11px] text-accent tracking-[0.1em] pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-ink leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-ink-2 transition-transform group-open:rotate-180 shrink-0 mt-0.5" />
                </summary>
                <div className="px-6 pb-6 pl-[68px] text-ink-2 text-[15px] leading-[1.65]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="label mb-3">
            02 · TROUBLESHOOTING
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mb-8">
            Common fixes.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {help.troubleshooting.map((item, i) => (
              <div
                key={i}
                className="bg-bg-2 border border-rule rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-ink tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
                <ol className="space-y-2.5">
                  {item.steps.map((step, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-ink-2 text-[14px] leading-[1.55]"
                    >
                      <span className="shrink-0 w-6 h-6 rounded-full bg-bg border border-rule text-accent text-[11px] font-mono flex items-center justify-center">
                        {j + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="label mb-3">
            03 · GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink mb-3">
            Pick what fits your question.
          </h2>
          <p className="text-ink-2 mb-8 max-w-2xl">
            Each link opens your email client with a ready-to-send template.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {help.contactOptions.map((option, i) => (
              <a
                key={i}
                href={createMailtoLink(option)}
                className="group block bg-bg-2 border border-rule rounded-xl p-6 hover:border-accent/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl shrink-0" aria-hidden>
                    {option.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-1 group-hover:text-accent-2 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-ink-2 text-[14px] leading-[1.55]">
                      {option.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-ink-3 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <FootCard>
          Can&apos;t find what you&apos;re looking for? Email me directly at{" "}
          <a
            href={`mailto:${help.supportEmail}`}
            className="text-accent hover:underline font-medium"
          >
            {help.supportEmail}
          </a>
        </FootCard>
      </div>
    </main>
  );
}

function ContactPage({ contactOptions, appSlug, appName, supportEmail }) {
  const createMailtoLink = (option) => {
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <AppBackLink appSlug={appSlug} appName={appName} />

        <header className="mb-12 max-w-3xl">
          <div className="label">
            {appName} · CONTACT
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.045em] leading-[0.95] mt-3 text-ink">
            How can I{" "}
            <span className="text-accent">
              help
            </span>
            <span className="text-accent">?</span>
          </h1>
          <p className="text-lg text-ink-2 font-light leading-[1.5] mt-5">
            Choose an option below to get in touch.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-5">
          {contactOptions.map((option, i) => (
            <a
              key={i}
              href={createMailtoLink(option)}
              className="group bg-bg-2 p-7 rounded-2xl border border-rule hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl bg-bg w-16 h-16 rounded-xl border border-rule flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </span>
                <Send className="w-5 h-5 text-ink-3 opacity-0 group-hover:opacity-100 group-hover:text-accent translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
              <h2 className="text-xl font-bold text-ink tracking-[-0.01em] mb-2 group-hover:text-accent-2 transition-colors">
                {option.title}
              </h2>
              <p className="text-ink-2 text-[14px] leading-[1.6]">
                {option.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-rule bg-bg-2 text-center">
          <p className="text-ink-2 mb-2 text-sm font-mono uppercase tracking-[0.08em]">
            Prefer to send a direct email?
          </p>
          <a
            href={`mailto:${supportEmail}`}
            className="text-2xl font-semibold text-ink hover:text-accent transition-colors tracking-[-0.01em]"
          >
            {supportEmail}
          </a>
        </div>
      </div>
    </main>
  );
}

function ChildSafetyPolicyPage({ policy, appSlug }) {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <AppBackLink appSlug={appSlug} appName={policy.appName} />

        <div className="bg-[#3a1a14] border border-[#f06a5a]/40 border-l-4 border-l-[#f06a5a] p-6 rounded-xl mb-12 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#f06a5a] shrink-0 mt-0.5" />
          <div>
            <h2 className="text-[#ffb1a0] font-bold text-lg mb-1 tracking-[-0.01em]">
              Child safety is our priority
            </h2>
            <p className="text-[#f4d4cd] text-[15px] leading-[1.6]">
              If you suspect a child is in immediate danger, please contact your
              local emergency services immediately.
            </p>
          </div>
        </div>

        <LegalHeader
          eyebrow={`${policy.appName} · LEGAL`}
          title={policy.title}
          lastUpdated={policy.lastUpdated}
        />

        <article>
          {policy.sections.map((section, i) => (
            <PolicySection key={i} section={section} />
          ))}
        </article>

        <div className="mt-12 p-7 rounded-xl border border-[#f06a5a]/40 bg-[#221311]">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-[#f06a5a]" />
            <h3 className="text-[#ffb1a0] font-bold text-lg tracking-[-0.01em]">
              Report child safety concerns
            </h3>
          </div>
          <p className="text-[#f4d4cd] text-[15px] leading-[1.65] mb-5">
            If you encounter content or behaviour that exploits, abuses, or
            endangers children, please report it immediately using the in-app
            Report feature or contact us directly.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:me@anwersolangi.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#f06a5a] text-[#1a0805] text-sm font-bold hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" />
              Contact safety team
            </a>
            <a
              href="https://www.cybertipline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-rule text-ink text-sm font-semibold hover:bg-bg-3 transition"
            >
              <ExternalLink className="w-4 h-4" />
              NCMEC CyberTipline
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default async function AppSubPage({ params }) {
  const { slug, path } = await params;
  const app = APPS_DATA[slug];
  const kind = path?.length === 1 ? path[0] : null;
  const back = app && appBack(slug, app.name);

  if (kind === "privacy" && PRIVACY_POLICIES[slug]) {
    return (
      <LegalDocument
        doc={PRIVACY_POLICIES[slug]}
        eyebrow={`${app.name} · LEGAL`}
        back={back}
        question="Have questions about privacy practices?"
      />
    );
  }

  if (kind === "terms" && TERMS_OF_SERVICE[slug]) {
    return (
      <LegalDocument
        doc={TERMS_OF_SERVICE[slug]}
        eyebrow={`${app.name} · LEGAL`}
        back={back}
        question="Have questions about these terms?"
      />
    );
  }

  if (kind === "help" && HELP_CONTENT[slug]) {
    return <HelpPage help={HELP_CONTENT[slug]} appSlug={slug} />;
  }

  if (kind === "contact" && HELP_CONTENT[slug]?.contactOptions) {
    const help = HELP_CONTENT[slug];
    return (
      <ContactPage
        contactOptions={help.contactOptions}
        appSlug={slug}
        appName={help.appName}
        supportEmail={help.supportEmail}
      />
    );
  }

  if (kind === "child-safety" && CHILD_SAFETY_POLICIES[slug]) {
    return (
      <ChildSafetyPolicyPage policy={CHILD_SAFETY_POLICIES[slug]} appSlug={slug} />
    );
  }

  // No app-specific document: send privacy/terms to the unified page so a
  // store listing link still lands on a real policy.
  if (app && UNIFIED_FALLBACK[kind]) permanentRedirect(UNIFIED_FALLBACK[kind]);

  // Only pages with real content exist; everything else is a 404 rather
  // than a "coming soon" stub.
  notFound();
}
