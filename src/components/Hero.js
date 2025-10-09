"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes mouseScroll {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-mouse-scroll {
          animation: mouseScroll 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 overflow-hidden">
        <div
          className={`max-w-6xl w-full transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="overflow-visible pb-4">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-none text-gray-900 animate-fade-in">
                  Anwer Solangi
                </h1>
              </div>

              <div className="flex items-center gap-4 animate-fade-in delay-100">
                <div className="h-px w-16 bg-gradient-to-r from-gray-900 to-transparent"></div>
                <span className="text-sm font-light tracking-[0.3em] text-gray-500 uppercase">
                  Developer
                </span>
              </div>
            </div>

            <div className="max-w-3xl space-y-6 animate-fade-in delay-200">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-gray-800 leading-relaxed">
                Senior React Native Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
                Crafting exceptional mobile experiences with clean, maintainable
                code. Specializing in cross-platform applications, innovative
                extensions, and solutions that delight users.
              </p>
            </div>

            <div className="animate-fade-in delay-300">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-gray-600 font-light">
                  Karachi, Pakistan
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 animate-fade-in delay-300">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-light tracking-widest text-gray-900 hover:text-gray-600 transition-colors duration-300"
              >
                <span>VIEW WORK</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <a
                href="https://github.com/anwersolangi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light tracking-widest text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                GITHUB
              </a>

              <a
                href="mailto:me@anwersolangi.com"
                className="text-sm font-light tracking-widest text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float">
          <span className="text-xs font-light tracking-wider text-gray-400 uppercase">
            Scroll
          </span>
          <div className="relative w-7 h-11 border-2 border-gray-300 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gray-600 rounded-full animate-mouse-scroll"></div>
          </div>
        </div>

        <div className="absolute top-1/4 right-10 w-2 h-2 bg-gray-300 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-gray-200 rounded-full opacity-30 animate-float delay-200"></div>
      </section>
    </>
  );
}
