import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
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

export async function generateMetadata({ params }) {
  const { slug, path } = await params;
  const app = APPS_DATA[slug];
  if (!app) return { title: "Not Found" };

  const map = {
    privacy: [
      "Privacy Policy",
      `Privacy Policy for ${app.name}. Learn how your data is handled.`,
    ],
    terms: [
      "Terms of Service",
      `Terms of Service for ${app.name}. Read the terms and conditions.`,
    ],
    help: [
      "Help & Support",
      `Get help with ${app.name}. FAQs, troubleshooting, and contact support.`,
    ],
    contact: [
      "Contact Us",
      `Contact support for ${app.name}. Bug reports, feature requests, and inquiries.`,
    ],
    "child-safety": [
      "Child Safety Standards",
      `Child Safety Standards Policy for ${app.name}. Our commitment to child safety and protection.`,
    ],
  };
  const entry = map[path?.[0]];
  if (entry) {
    return {
      title: `${entry[0]} | ${app.name} | Anwer Solangi`,
      description: entry[1],
    };
  }
  const pageName = path?.join(" / ");
  return {
    title: `${pageName} | ${app.name} | Anwer Solangi`,
    description: `${pageName} for ${app.name}`,
  };
}

function BackLink({ appSlug, appName }) {
  return (
    <Link
      href={`/apps/${appSlug}`}
      className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-12 group font-mono"
    >
      <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
      back to {appName}
    </Link>
  );
}

function PageHeader({ eyebrow, title, lastUpdated }) {
  return (
    <header className="mb-12">
      <div className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
        {eyebrow}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[0.98] mt-3 text-ink">
        {title}
      </h1>
      {lastUpdated && (
        <p className="font-mono text-[12px] tracking-[0.06em] text-ink-3 mt-4">
          LAST UPDATED · {lastUpdated.toUpperCase()}
        </p>
      )}
    </header>
  );
}

function PolicySection({ section }) {
  return (
    <section className="mb-12 pb-12 border-b border-rule last:border-b-0">
      <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-[-0.02em] mb-5 leading-tight">
        {section.title}
      </h2>

      {section.content && (
        <p className="text-ink-2 text-[15px] leading-[1.7] whitespace-pre-line mb-4">
          {section.content}
        </p>
      )}

      {section.items && (
        <ul className="space-y-2 mb-4">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-5 text-ink-2 text-[15px] leading-[1.6]"
            >
              <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.footer && (
        <p className="text-ink leading-[1.6] mt-4 p-4 rounded-lg bg-bg-2 border border-rule border-l-2 border-l-accent">
          {section.footer}
        </p>
      )}

      {section.subsections?.map((sub, i) => (
        <div key={i} className="mt-5 p-5 bg-bg-2 rounded-xl border border-rule">
          <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
            {sub.title}
          </h3>
          <p className="text-ink-2 text-[14px] leading-[1.6] whitespace-pre-line">
            {sub.content}
          </p>
        </div>
      ))}

      {section.contactEmail && (
        <a
          href={`mailto:${section.contactEmail}`}
          className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg border border-rule text-ink hover:bg-white/5 hover:border-accent/40 transition text-sm font-mono"
        >
          <Mail className="w-4 h-4 text-accent" />
          {section.contactEmail}
        </a>
      )}
    </section>
  );
}

function FootCard({ children }) {
  return (
    <div className="mt-12 p-6 rounded-xl border border-rule bg-bg-2">
      <p className="text-ink-2 text-center text-[15px]">{children}</p>
    </div>
  );
}

function PrivacyPolicyPage({ policy, appSlug }) {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <BackLink appSlug={appSlug} appName={policy.appName} />
        <PageHeader
          eyebrow={`${policy.appName} · LEGAL`}
          title={policy.title}
          lastUpdated={policy.lastUpdated}
        />
        <article>
          {policy.sections.map((section, i) => (
            <PolicySection key={i} section={section} />
          ))}
        </article>
        <FootCard>
          Have questions about privacy practices?{" "}
          <a
            href="mailto:me@anwersolangi.com"
            className="text-accent hover:underline font-medium"
          >
            Contact me
          </a>
        </FootCard>
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Terms of Service
// ─────────────────────────────────────────────────────────────────────────
function TermsOfServicePage({ terms, appSlug }) {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <BackLink appSlug={appSlug} appName={terms.appName} />
        <PageHeader
          eyebrow={`${terms.appName} · LEGAL`}
          title={terms.title}
          lastUpdated={terms.lastUpdated}
        />
        <article>
          {terms.sections.map((section, i) => (
            <PolicySection key={i} section={section} />
          ))}
        </article>
        <FootCard>
          Have questions about these terms?{" "}
          <a
            href="mailto:me@anwersolangi.com"
            className="text-accent hover:underline font-medium"
          >
            Contact me
          </a>
        </FootCard>
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Help & Support
// ─────────────────────────────────────────────────────────────────────────
function HelpPage({ help, appSlug }) {
  const createMailtoLink = (option) => {
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${help.supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <BackLink appSlug={appSlug} appName={help.appName} />

        <header className="mb-12 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
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

        {/* Immediate-help banner */}
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
              <div className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                ▸ Need immediate help?
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-[#1a0a02] text-sm font-bold hover:opacity-90 transition shrink-0"
            >
              <Mail className="w-4 h-4" /> Email support
            </a>
          </div>
        </div>

        {/* FAQs */}
        <section className="mb-20">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent mb-3 uppercase">
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

        {/* Troubleshooting */}
        <section className="mb-20">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent mb-3 uppercase">
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

        {/* Contact options */}
        <section className="mb-12">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent mb-3 uppercase">
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

// ─────────────────────────────────────────────────────────────────────────
// Contact (standalone)
// ─────────────────────────────────────────────────────────────────────────
function ContactPage({ contactOptions, appSlug, supportEmail }) {
  const createMailtoLink = (option) => {
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <BackLink appSlug={appSlug} appName="app" />

        <header className="mb-12 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
            CONTACT
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.045em] leading-[0.95] mt-3 text-ink">
            How can I{" "}
            <span className="font-serif italic text-accent font-normal">
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

// ─────────────────────────────────────────────────────────────────────────
// Child Safety
// ─────────────────────────────────────────────────────────────────────────
function ChildSafetyPolicyPage({ policy, appSlug }) {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <BackLink appSlug={appSlug} appName={policy.appName} />

        {/* Critical safety banner — red, but tuned for the dark theme */}
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

        <PageHeader
          eyebrow={`${policy.appName} · LEGAL`}
          title={policy.title}
          lastUpdated={policy.lastUpdated}
        />

        <article>
          {policy.sections.map((section, i) => (
            <PolicySection key={i} section={section} />
          ))}
        </article>

        {/* Report section */}
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-rule text-ink text-sm font-semibold hover:bg-white/5 transition"
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

// ─────────────────────────────────────────────────────────────────────────
// Generic fallback
// ─────────────────────────────────────────────────────────────────────────
function GenericSubPage({ slug, path, app }) {
  const pageName = path?.join(" / ");
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <BackLink appSlug={slug} appName={app.name} />
        <PageHeader eyebrow={`${app.name} · SUB-PAGE`} title={pageName} />
        <p className="text-lg text-ink-2 leading-relaxed">
          This page is coming soon for{" "}
          <strong className="text-ink">{app.name}</strong>.
        </p>
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Router
// ─────────────────────────────────────────────────────────────────────────
export default async function AppSubPage({ params }) {
  const { slug, path } = await params;
  const app = APPS_DATA[slug];
  if (!app) notFound();

  if (path?.[0] === "privacy") {
    const policy = PRIVACY_POLICIES[slug];
    if (policy) return <PrivacyPolicyPage policy={policy} appSlug={slug} />;
  }

  if (path?.[0] === "terms") {
    const terms = TERMS_OF_SERVICE[slug];
    if (terms) return <TermsOfServicePage terms={terms} appSlug={slug} />;
  }

  if (path?.[0] === "help") {
    const help = HELP_CONTENT[slug];
    if (help) return <HelpPage help={help} appSlug={slug} />;
  }

  if (path?.[0] === "contact") {
    const help = HELP_CONTENT[slug];
    if (help?.contactOptions) {
      return (
        <ContactPage
          contactOptions={help.contactOptions}
          appSlug={slug}
          supportEmail={help.supportEmail}
        />
      );
    }
  }

  if (path?.[0] === "child-safety") {
    const policy = CHILD_SAFETY_POLICIES[slug];
    if (policy) return <ChildSafetyPolicyPage policy={policy} appSlug={slug} />;
  }

  return <GenericSubPage slug={slug} path={path} app={app} />;
}
