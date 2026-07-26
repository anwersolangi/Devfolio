import Reveal from "@/components/Reveal";
import { HOME_FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-screen mx-auto">
        <Reveal className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="eyebrow">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-extra-tight leading-[1] mt-3 text-ink">
              Questions, answered.
            </h2>
            <p className="text-ink-2 leading-[1.6] mt-5">
              The quick version of who I am, where I&rsquo;m based, and how to
              work with me.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.1em] text-ink-3">
              {String(HOME_FAQS.length).padStart(2, "0")} QUESTIONS · STILL
              STUCK?{" "}
              <a
                href="#contact"
                className="text-accent hover:text-accent-2 transition-colors"
              >
                ASK ME →
              </a>
            </p>
          </div>

          <div className="space-y-2.5">
            {HOME_FAQS.map((f, i) => (
              <details
                key={i}
                /* Shared name = only one open at a time, no JS needed. */
                name="home-faq"
                className="faq-item group relative bg-bg-2 border border-rule rounded-xl overflow-hidden transition-colors duration-200 hover:border-accent/30 open:border-accent/40 open:bg-bg-3"
              >
                {/* Accent rail — grows down the card as it opens. */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 w-[2px] h-full bg-accent origin-top scale-y-0 group-open:scale-y-100 transition-transform duration-300 ease-out"
                />

                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none select-none">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-ink-3 pt-1 tabular-nums shrink-0 group-open:text-accent transition-colors duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-semibold text-ink leading-snug text-[15px]">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden
                    className="relative w-5 h-5 shrink-0 mt-0.5 text-ink-3 group-hover:text-accent group-open:text-accent transition-colors duration-200"
                  >
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current rotate-90 group-open:rotate-0 transition-transform duration-300 ease-out" />
                  </span>
                </summary>

                <div className="pl-[3.75rem] pr-5 pb-5 -mt-1">
                  <p className="text-ink-2 text-[15px] leading-[1.65]">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
