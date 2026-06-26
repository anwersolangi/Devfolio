import Reveal from "@/components/Reveal";

const socials = [
  ["GITHUB", "https://github.com/anwersolangi"],
  ["LINKEDIN", "https://linkedin.com/in/anwersolangi"],
  ["TWITTER", "https://twitter.com/anwersolangidev"],
  ["MEDIUM", "https://medium.com/@anwersolangi"],
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 px-6 lg:px-16 overflow-hidden"
    >
      <div
        className="absolute left-1/2 -bottom-[300px] -translate-x-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,106,61,0.22), transparent 60%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative max-w-screen mx-auto text-center">
        <Reveal>
          <div className="eyebrow">08 · LET’S BUILD</div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-extrabold tracking-tightest leading-[0.95] mt-5 text-ink">
            Got an app idea?
            <br />
            <span className="font-italic-serif text-accent font-normal">
              Let’s ship it.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-ink-2 max-w-2xl mx-auto mt-8">
            Available for freelance & contract work. Typical reply within a day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">
            <a
              href="mailto:me@anwersolangi.com"
              className="px-7 py-4 rounded-xl bg-ink text-bg font-bold text-[15px] hover:bg-accent hover:text-[#1a0a02] transition"
            >
              me@anwersolangi.com
            </a>
            <a
              href="/anwer-solangi-resume.pdf"
              download
              className="px-7 py-4 rounded-xl border border-rule text-ink font-semibold text-[15px] hover:bg-white/5 transition"
            >
              Download résumé ↓
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-9 font-mono text-xs tracking-[0.08em] text-ink-2">
            {socials.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
