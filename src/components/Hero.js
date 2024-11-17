"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Code2, Laptop, Sparkles } from "lucide-react";

const TypeWriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing speed gets slightly faster towards the end of the word
          const speed = 80 - Math.min(40, currentText.length * 2);
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText.length === word.length) {
            // Wait longer at the end of the word
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting is faster than typing
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((current) => (current + 1) % words.length);
            // Pause before starting the next word
            return;
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="min-h-[2rem] inline-block">
      {currentText}
      <span className="ml-1 animate-cursor">|</span>
    </span>
  );
};

const InteractiveLaptop = () => (
  <div className="hidden lg:block absolute lg:right-20 xl:right-32 lg:bottom-32 xl:bottom-40 transform rotate-[-10deg] hover:rotate-0 transition-transform duration-700 group opacity-0 animate-fade-in">
    <div className="relative w-48 lg:w-64 h-32 lg:h-40">
      {/* Screen */}
      <div className="absolute inset-0 bg-gray-900/80 rounded-lg border-2 border-blue-500/30 overflow-hidden backdrop-blur-sm">
        {/* Screen Content */}
        <div className="p-3 space-y-2">
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          {/* Code lines */}
          <div className="space-y-1">
            <div className="h-1.5 w-3/4 bg-blue-500/20 rounded group-hover:bg-blue-500/30 transition-colors duration-300" />
            <div className="h-1.5 w-1/2 bg-purple-500/20 rounded group-hover:bg-purple-500/30 transition-colors duration-300" />
            <div className="h-1.5 w-2/3 bg-pink-500/20 rounded group-hover:bg-pink-500/30 transition-colors duration-300" />
          </div>
        </div>
        {/* Moving cursor */}
        <div
          className="absolute w-1.5 h-1.5 bg-blue-400/70 rounded-full group-hover:animate-typing"
          style={{ left: "12%", top: "60%" }}
        />
      </div>
      {/* Base */}
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 lg:w-32 h-1 bg-blue-500/30 rounded-lg" />
      {/* Keyboard glow */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 lg:w-40 h-1 bg-blue-500/20 blur-sm group-hover:bg-blue-500/30 transition-all duration-300" />
    </div>
  </div>
);

const CodeSnippets = () => (
  <>
    {/* Desktop Code Snippets */}
    <div className="hidden lg:block absolute left-10 xl:left-20 top-1/4 text-blue-500/20 font-mono text-sm opacity-0 animate-fade-in">
      <div className="group hover:text-blue-500/40 transition-colors duration-300 cursor-default">
        const developer = new Developer();
        <br />
        <span className="group-hover:translate-x-2 inline-block transition-transform duration-300">
          developer.code();
        </span>
      </div>
    </div>
    <div className="hidden lg:block absolute right-10 xl:right-20 bottom-1/4 text-blue-500/20 font-mono text-sm opacity-0 animate-fade-in delay-200">
      <div className="group hover:text-blue-500/40 transition-colors duration-300 cursor-default">
        while(true) &#123;
        <br />
        <span className="group-hover:translate-x-2 inline-block transition-transform duration-300">
          &nbsp;&nbsp;improve();
        </span>
        <br />
        &#125;
      </div>
    </div>

    {/* Mobile Code Snippets */}
    <div className="lg:hidden absolute inset-x-0 bottom-8 text-blue-500/20 font-mono text-xs text-center">
      <div className="space-y-1 opacity-0 animate-fade-in">
        <div>while(true) improve();</div>
        <div>developer.code();</div>
      </div>
    </div>
  </>
);

const Hero = () => {
  const taglines = [
    "Crafting Native Mobile Experiences",
    "Mobile Apps with Native Performance",
    "Native Mobile Development Artist",
    "Creating Mobile Excellence",
    "Building Apps People Love",
    "Mobile-First Developer",
    "From Vision to App Store",
    "Native Apps, Seamless Experiences",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      {/* Animated background dots */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-blue-400/20 rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-1 h-1 bg-blue-400/20 rounded-full top-3/4 left-1/3 animate-pulse delay-300" />
        <div className="absolute w-1 h-1 bg-blue-400/20 rounded-full top-1/3 right-1/4 animate-pulse delay-500" />
        <div className="absolute w-1 h-1 bg-blue-400/20 rounded-full top-2/3 right-1/3 animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-12 relative">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 scale-150" />

          {/* Image container with animated border */}
          <div className="relative w-48 h-48 mx-auto">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-[spin_8s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500/30 border-l-blue-500/30 animate-[spin_12s_linear_infinite]" />

            {/* Image */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-blue-500/50">
              <Image
                src="/Me.png"
                alt="Anwer Solangi"
                fill
                priority
                className="object-cover scale-110 hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Tech Stack Badges */}
          <div className="flex justify-center gap-4 mb-6">
            {["Next.js", "React Native", "iOS"].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 
                          hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Name with gradient animation */}
          <h1 className="text-5xl font-bold mb-4">
            <span
              className="animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-300% bg-clip-text text-transparent 
                           hover:animate-gradient-fast cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Anwer Solangi
            </span>
            <span className="ml-4 inline-flex items-center">
              <Sparkles className="w-8 h-8 text-blue-400 animate-sparkle" />
            </span>
          </h1>

          {/* Tagline with typing effect */}
          <p className="text-2xl font-medium text-blue-400 mb-6 flex items-center justify-center gap-3 h-12">
            <Code2 className="w-6 h-6 animate-bounce-slow" />
            <TypeWriter words={taglines} />
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Mobile app developer with expertise in React Native and iOS
            development. Building native mobile experiences that combine
            beautiful design with stellar performance and user experience.
          </p>
        </div>
      </div>

      <InteractiveLaptop />
      <CodeSnippets />
    </section>
  );
};

export default Hero;
