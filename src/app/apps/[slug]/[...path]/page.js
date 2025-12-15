import Link from "next/link";
import { APPS_DATA } from "@/data/apps";
import { PRIVACY_POLICIES } from "@/data/privacy";
import { TERMS_OF_SERVICE } from "@/data/terms";
import { HELP_CONTENT } from "@/data/help";
import { notFound } from "next/navigation";




export async function generateMetadata({ params }) {
  const { slug, path } = await params;
  const app = APPS_DATA[slug];
  const pageName = path?.join(" / ");

  if (!app) {
    return { title: "Not Found" };
  }

  if (path?.[0] === "privacy") {
    return {
      title: `Privacy Policy | ${app.name} | Anwer Solangi`,
      description: `Privacy Policy for ${app.name}. Learn how your data is handled.`,
    };
  }

  if (path?.[0] === "terms") {
    return {
      title: `Terms of Service | ${app.name} | Anwer Solangi`,
      description: `Terms of Service for ${app.name}. Read the terms and conditions.`,
    };
  }

  if (path?.[0] === "help") {
    return {
      title: `Help & Support | ${app.name} | Anwer Solangi`,
      description: `Get help with ${app.name}. FAQs, troubleshooting, and contact support.`,
    };
  }

  if (path?.[0] === "contact") {
    return {
      title: `Contact Us | ${app.name} | Anwer Solangi`,
      description: `Contact support for ${app.name}. Bug reports, feature requests, and inquiries.`,
    };
  }

  return {
    title: `${pageName} | ${app.name} | Anwer Solangi`,
    description: `${pageName} for ${app.name}`,
  };
}

function PrivacyPolicyPage({ policy, appSlug }) {
  return (
    <main className="container mx-auto px-4 pt-32 pb-12 max-w-4xl">
      <Link
        href={`/apps/${appSlug}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to {policy.appName}
      </Link>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          {policy.title}
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: {policy.lastUpdated}</p>

        {policy.sections.map((section, index) => (
          <section key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>

            {section.content && (
              <p className="text-gray-700 whitespace-pre-line mb-4">
                {section.content}
              </p>
            )}

            {section.items && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.footer && (
              <p className="text-gray-700 mt-4">{section.footer}</p>
            )}

            {section.subsections &&
              section.subsections.map((sub, i) => (
                <div key={i} className="ml-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {sub.content}
                  </p>
                </div>
              ))}

            {section.contactEmail && (
              <a
                href={`mailto:${section.contactEmail}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {section.contactEmail}
              </a>
            )}
          </section>
        ))}
      </article>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-gray-600 text-center">
          Have questions about privacy practices?{" "}
          <a
            href="mailto:me@anwersolangi.com"
            className="text-blue-600 hover:underline"
          >
            Contact me
          </a>
        </p>
      </div>
    </main>
  );
}

function TermsOfServicePage({ terms, appSlug }) {
  return (
    <main className="container mx-auto px-4 pt-32 pb-12 max-w-4xl">
      <Link
        href={`/apps/${appSlug}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to {terms.appName}
      </Link>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{terms.title}</h1>
        <p className="text-gray-500 mb-8">Last Updated: {terms.lastUpdated}</p>

        {terms.sections.map((section, index) => (
          <section key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>

            {section.content && (
              <p className="text-gray-700 whitespace-pre-line mb-4">
                {section.content}
              </p>
            )}

            {section.items && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.footer && (
              <p className="text-gray-700 mt-4 font-medium">{section.footer}</p>
            )}

            {section.subsections &&
              section.subsections.map((sub, i) => (
                <div key={i} className="ml-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {sub.content}
                  </p>
                </div>
              ))}

            {section.contactEmail && (
              <a
                href={`mailto:${section.contactEmail}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {section.contactEmail}
              </a>
            )}
          </section>
        ))}
      </article>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-gray-600 text-center">
          Have questions about these terms?{" "}
          <a
            href="mailto:me@anwersolangi.com"
            className="text-blue-600 hover:underline"
          >
            Contact me
          </a>
        </p>
      </div>
    </main>
  );
}

function HelpPage({ help, appSlug }) {
  const createMailtoLink = (option) => {
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${help.supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="container mx-auto px-4 pt-32 pb-12 max-w-5xl">
      <Link
        href={`/apps/${appSlug}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to {help.appName}
      </Link>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {help.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {help.description}
        </p>
      </div>

      {/* Quick Contact */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-16 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Need Immediate Help?
            </h2>
            <p className="text-gray-300">
              Reach out directly via email for personalized support.
            </p>
          </div>
          <a
            href={`mailto:${help.supportEmail}?subject=${encodeURIComponent(
              help.appName + " Support Request"
            )}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Support
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {help.faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {help.troubleshooting.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <ol className="space-y-2">
                {item.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Choose the option that best describes your inquiry. Each link opens
          your email client with a pre-filled template.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {help.contactOptions.map((option, index) => (
            <a
              key={index}
              href={createMailtoLink(option)}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{option.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black mb-1">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 ml-auto flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
        <p className="text-gray-600">
          Can't find what you're looking for? Email me directly at{" "}
          <a
            href={`mailto:${help.supportEmail}`}
            className="text-blue-600 hover:underline font-medium"
          >
            {help.supportEmail}
          </a>
        </p>
      </div>
    </main>
  );
}


function ContactPage({ contactOptions, appSlug, supportEmail }) {
  const createMailtoLink = (option) => {
    const subject = encodeURIComponent(option.subject);
    const body = encodeURIComponent(option.body);
    return `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="container mx-auto px-4 pt-32 pb-12 max-w-4xl">
      <Link
        href={`/apps/${appSlug}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to App
      </Link>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Contact Support
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          How can I help you today? Choose an option below to get in touch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {contactOptions.map((option, index) => (
          <a
            key={index}
            href={createMailtoLink(option)}
            className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </span>
              <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {option.title}
            </h2>
            <p className="text-gray-600">{option.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <p className="text-gray-600 mb-2">Prefer to send a direct email?</p>
        <a
          href={`mailto:${supportEmail}`}
          className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
        >
          {supportEmail}
        </a>
      </div>
    </main>
  );
}

function GenericSubPage({ slug, path, app }) {
  const pageName = path?.join(" / ");

  return (
    <main className="container mx-auto px-4 pt-32 pb-12">
      <Link
        href={`/apps/${slug}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to {app.name}
      </Link>
      <h1 className="text-4xl font-bold mb-4 capitalize text-gray-900">
        {pageName}
      </h1>
      <p className="text-lg text-gray-600">
        This page is coming soon for <strong>{app.name}</strong>.
      </p>
    </main>
  );
}

export default async function AppSubPage({ params }) {
  const { slug, path } = await params;
  const app = APPS_DATA[slug];

  if (!app) {
    notFound();
  }

  // Handle privacy policy pages
  if (path?.[0] === "privacy") {
    const policy = PRIVACY_POLICIES[slug];
    if (policy) {
      return <PrivacyPolicyPage policy={policy} appSlug={slug} />;
    }
  }

  // Handle terms of service pages
  if (path?.[0] === "terms") {
    const terms = TERMS_OF_SERVICE[slug];
    if (terms) {
      return <TermsOfServicePage terms={terms} appSlug={slug} />;
    }
  }

  // Handle help pages
  if (path?.[0] === "help") {
    const help = HELP_CONTENT[slug];
    if (help) {
      return <HelpPage help={help} appSlug={slug} />;
    }
  }

  // Handle contact pages
  if (path?.[0] === "contact") {
    const help = HELP_CONTENT[slug];
    if (help && help.contactOptions) {
      return (
        <ContactPage
          contactOptions={help.contactOptions}
          appSlug={slug}
          supportEmail={help.supportEmail}
        />
      );
    }
  }

  // Generic sub-page handler
  return <GenericSubPage slug={slug} path={path} app={app} />;
}
