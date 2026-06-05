"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-16 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[11px] tracking-[0.06em] text-white/40">
        <span>© {year} ANWER SOLANGI · KARACHI, PK · 24.86°N 67.00°E</span>
        <span>BUILT WITH REACT NATIVE ENERGY</span>
      </div>
    </footer>
  );
}
