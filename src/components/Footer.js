import React from "react";
import { Code, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ href, image, alt }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 rounded-full hover:bg-blue-500/10 transition-colors duration-300"
    aria-label={alt}
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/5 blur-lg" />

    {/* SVG Icon */}
    <div className="relative w-5 h-5">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125"
      />
    </div>
  </Link>
);

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/anwersolangi",
      image: "/Github.svg",
      alt: "Anwer Solangi - Github",
    },
    {
      href: "https://www.instagram.com/anwersolangi",
      image: "/Instagram.svg",
      alt: "Anwer Solangi - Instagram",
    },
    {
      href: "https://www.linkedin.com/in/anwersolangi",
      image: "/LinkedIn.svg",
      alt: "Anwer Solangi - LinkedIn",
    },
    {
      href: "https://twitter.com/anwerxolangi",
      image: "/Twitter.svg",
      alt: "Anwer Solangi - X",
    },
  ];

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative">
        {/* Social Links */}
        <div className="flex justify-center space-x-2 mb-8">
          {socialLinks.map((link) => (
            <SocialLink key={link.alt} {...link} />
          ))}
        </div>

        {/* Divider with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-8" />

        {/* Credit Text */}
        <div className="text-center space-y-4">
          <p className="text-gray-300 flex items-center justify-center gap-2 group">
            <span className="text-gray-400">Created with</span>
            <Heart
              size={16}
              className="text-red-500 animate-pulse"
              fill="currentColor"
            />
            <span className="text-gray-400">by</span>
            <Link
              href="https://twitter.com/anwerxolangi"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Anwer Solangi
            </Link>
          </p>

          <p className="text-gray-400/80 flex items-center justify-center gap-2 text-sm">
            <Code size={14} className="text-blue-500/80" />
            <span>Built with</span>
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="text-blue-400/80 hover:text-blue-300 transition-colors duration-300"
            >
              Next.js
            </Link>
          </p>
        </div>

        {/* Background Accents */}
        <div className="absolute left-1/2 bottom-0 w-[200%] h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50" />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(59, 130, 246, 0.1), transparent)",
        }}
      />
    </footer>
  );
};

export default Footer;
