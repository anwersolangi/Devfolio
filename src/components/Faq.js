import { Section } from "@/components/Section";
import { HOME_FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <Section
      id="faq"
      label="FAQ"
      title="The questions I get asked, answered plainly."
    >
      <div className="border-t border-rule">
        {HOME_FAQS.map((f) => (
          <details
            key={f.q}
            name="home-faq"
            className="faq-item group border-b border-rule"
          >
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
    </Section>
  );
}
