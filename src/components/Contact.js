"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    const node = ref.current;
    if (node) obs.observe(node);
    return () => node && obs.unobserve(node);
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 lg:px-16 overflow-hidden"
    >
      <div
        className="absolute left-1/2 -bottom-[300px] -translate-x-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,106,61,0.22), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="font-mono text-[11px] tracking-[0.14em] text-[#ff6a3d]">
            06 · LET'S BUILD
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-extrabold tracking-[-0.045em] leading-[0.95] mt-5 text-[#f4efe7]">
            Got an app idea?
            <br />
            <span className="font-italic-serif text-[#ff6a3d] font-normal">
              Let's ship it.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/62 max-w-2xl mx-auto mt-8">
            Available for freelance & contract work. Typical reply within a day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">
            <a
              href="mailto:me@anwersolangi.com"
              className="px-7 py-4 rounded-xl bg-[#f4efe7] text-[#0d0c0b] font-bold text-[15px] hover:bg-[#ff6a3d] hover:text-[#1a0a02] transition"
            >
              me@anwersolangi.com
            </a>
            <a
              href="/anwer-solangi-resume.pdf"
              download
              className="px-7 py-4 rounded-xl border border-white/12 text-[#f4efe7] font-semibold text-[15px] hover:bg-white/5 transition"
            >
              Download résumé ↓
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-9 font-mono text-xs tracking-[0.08em] text-white/62">
            <a
              href="https://github.com/anwersolangi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4efe7] transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://linkedin.com/in/anwersolangi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4efe7] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://twitter.com/anwerxolangi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4efe7] transition-colors"
            >
              TWITTER ↗
            </a>
            <a
              href="https://medium.com/@anwersolangi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4efe7] transition-colors"
            >
              MEDIUM ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
