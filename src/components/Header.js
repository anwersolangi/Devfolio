"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, ChevronRight } from "lucide-react";

const GlowingButton = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Update button position on mount and window resize
  useEffect(() => {
    const button = document.querySelector(".glow-button");
    if (button) {
      const rect = button.getBoundingClientRect();
      setButtonPosition({ x: rect.left, y: rect.top });
    }

    const handleResize = () => {
      const button = document.querySelector(".glow-button");
      if (button) {
        const rect = button.getBoundingClientRect();
        setButtonPosition({ x: rect.left, y: rect.top });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mouse move for glow effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href="mailto:me@anwersolangi.com"
      className="relative group glow-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient background with glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70 blur-md group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-full opacity-60 blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
          }}
        />
      )}

      {/* Button content */}
      <div className="relative px-5 py-2.5 bg-gray-900 rounded-full border border-blue-500/20 flex items-center gap-2 group-hover:border-blue-500/50 transition-colors duration-500">
        <Mail
          size={16}
          className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
        />
        <span className="text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text group-hover:from-white group-hover:to-blue-100 transition-all duration-300">
          Contact
        </span>
        <ChevronRight
          size={16}
          className="text-blue-400/70 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300"
        />

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rotate-180 overflow-hidden rounded-full">
            <div className="absolute top-1/2 left-0 h-[300%] w-[50%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled ? "bg-gray-900/70 backdrop-blur-lg" : "bg-transparent"
        }`}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            className="text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <span className="text-lg font-medium">
              Anwer<span className="text-blue-400">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <GlowingButton />
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
  </Link>
);

export default Header;
