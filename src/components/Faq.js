import Reveal from "@/components/Reveal";
import { HOME_FAQS } from "@/data/faqs";

// Visible FAQ that mirrors the FAQPage JSON-LD (same source: HOME_FAQS). Plain
// <details> so it works without JavaScript and the answers are always in the DOM
// for search engines and AI answer engines to extract.
export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        <Reveal className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Questions, answered.
            </h2>
            <p className="text-ink-2 leading-[1.6] mt-5">
              The quick version of who I am, where I&rsquo;m based, and how to
              work with me.
            </p>
          </div>

          <div className="space-y-3">
            {HOME_FAQS.map((f, i) => (
              <details
                key={i}
                className="group bg-bg-2 border border-rule rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <h3 className="font-semibold text-ink leading-snug text-[15px]">
                    {f.q}
                  </h3>
                  <span className="text-accent font-mono text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-ink-2 text-[15px] leading-[1.65]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
