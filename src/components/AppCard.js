"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

const PlatformBadge = ({ platform }) => {
  let color, icon, label;

  switch (platform) {
    case "android":
      color = "text-[#3DDC84]";
      label = "Android";
      icon = (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={color}
        >
          <path
            d="M17.5227 15.9523V9.99878H6.47266V15.9523C6.47266 16.5045 6.01953 16.9576 5.46734 16.9576C4.91516 16.9576 4.46203 16.5045 4.46203 15.9523V8.99346C4.46203 8.44127 4.91516 7.98813 5.46734 7.98813H18.533C19.0852 7.98813 19.5383 8.44127 19.5383 8.99346V15.9523C19.5383 16.5045 19.0852 16.9576 18.533 16.9576C17.9808 16.9576 17.5227 16.5045 17.5227 15.9523ZM5.97672 6.48253L7.43047 4.29049C7.55953 4.10315 7.51453 3.85799 7.33235 3.72893C7.145 3.59987 6.89985 3.64487 6.77078 3.82721L5.15172 6.24112C3.67953 5.58331 2.59516 4.06674 2.59516 2.48643C2.59516 2.21268 2.32625 1.99377 2.0525 1.99377C1.77875 1.99377 1.50984 2.21268 1.50984 2.48643C1.50984 4.56518 2.95391 6.48143 5.0025 7.40315C3.57781 7.42893 2.40578 8.61971 2.40578 10.0522V16.9576C2.40578 17.776 3.06453 18.4347 3.88297 18.4347H6.47266V20.9056C6.47266 21.4578 6.92578 21.9109 7.47797 21.9109C8.03016 21.9109 8.48328 21.4578 8.48328 20.9056V18.4347H15.5118V20.9056C15.5118 21.4578 15.9649 21.9109 16.5171 21.9109C17.0693 21.9109 17.5224 21.4578 17.5224 20.9056V18.4347H20.1171C20.9355 18.4347 21.5943 17.776 21.5943 16.9576V10.0522C21.5943 8.6197 20.4222 7.42893 18.9922 7.40315C21.0408 6.48142 22.4902 4.5647 22.4902 2.48642C22.4902 2.21267 22.2213 1.99377 21.9476 1.99377C21.6738 1.99377 21.4049 2.21267 21.4049 2.48642C21.4049 4.06674 20.3156 5.58331 18.8483 6.24112L17.2293 3.82721C17.1002 3.64486 16.8551 3.59987 16.6627 3.72893C16.4755 3.85799 16.4305 4.10315 16.5596 4.29049L18.0133 6.48253H5.97672Z"
            fill="currentColor"
          />
        </svg>
      );
      break;
    case "ios":
      color = "text-white";
      label = "iOS";
      icon = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={color}
        >
          <path
            d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
            fill="currentColor"
          />
        </svg>
      );
      break;
    case "web":
      color = "text-[#5FB2FF]";
      label = "Web";
      icon = (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={color}
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
            fill="currentColor"
          />
        </svg>
      );
      break;
    default:
      color = "text-gray-400";
      label = platform;
      icon = <></>;
  }

  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 rounded-md bg-gray-800/80 border border-gray-700/50 ${color} gap-2 text-sm hover:bg-gray-700/80 transition-colors duration-200`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

const AppCard = ({ app, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group h-full bg-gray-900/70 backdrop-blur-md rounded-xl border border-gray-800/60 hover:border-gray-700/80 overflow-hidden transition-all duration-300">
        <div className="p-6 md:p-8 h-full flex flex-col">
          <div className="flex gap-5 mb-6">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-800">
              <Image
                src={app.logo}
                alt={app.title}
                fill
                sizes="64px"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-blue-400 transition-colors duration-300">
                {app.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {app.platforms.map((platform) => (
                  <PlatformBadge key={platform} platform={platform} />
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
            {app.description}
          </p>

          <div className="mt-auto pt-6 border-t border-gray-800/60">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-3">
                {app.playStore && (
                  <Link
                    href={app.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <PlatformBadge platform="android" />
                  </Link>
                )}

                {app.appStore && (
                  <Link
                    href={app.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <PlatformBadge platform="ios" />
                  </Link>
                )}

                {app.website && (
                  <Link
                    href={app.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <PlatformBadge platform="web" />
                  </Link>
                )}
              </div>

              <Link
                href={app.link || app.website || app.playStore || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View Project</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const currentRef = titleRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`mb-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
        {children}
      </h2>
      <div
        className={`h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 mt-4 rounded-full transition-all duration-1000 delay-300 ${
          isVisible ? "w-24 opacity-100" : "w-12 opacity-0"
        }`}
      ></div>
    </div>
  );
};

const HireMeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const currentRef = bannerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className={`mt-16 rounded-xl border border-gray-800/60 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/10 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Looking for a Mobile Developer?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {`I specialize in creating high-performance mobile applications with
              React Native and iOS native development. Let's build something
              amazing together.`}
            </p>

            <Link
              href="mailto:me@anwersolangi.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B6B] hover:bg-[#ff5757] text-white rounded-full font-medium transition-colors duration-200"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="hidden md:block relative h-40 w-40 rounded-full">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-blue-500/10 animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full border-2 border-blue-500/5 animate-pulse-slow"></div>
            <ShieldCheck className="absolute inset-0 w-full h-full p-4 text-blue-400/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppCards = () => {
  const apps = [
    {
      id: "nearby",
      title: "Nearby - Find, Connect, Friend",
      description:
        "Nearby is a React Native app that lets you find and chat with people around you using GPS technology and intuitive filters. With Firebase-powered backend and secure storage, Nearby offers seamless one-to-one messaging and multi-login support.",
      logo: "/nearbylogo.jpg",
      platforms: ["android", "ios"],
      playStore:
        "https://play.google.com/store/apps/details?id=com.nearbyreactive",
      website:
        "https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722",
    },
    {
      id: "kravemart",
      title: "Kravemart - Grocery Delivery",
      description:
        "A comprehensive grocery delivery application that connects local stores with customers. Features include real-time order tracking, secure payment processing, and an intuitive shopping experience.",
      logo: "/nearbylogo.jpg",
      platforms: ["ios", "web"],
      appStore: "#",
      website: "#",
    },
  ];

  return (
    <section id="apps" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>

        <HireMeBanner />
      </div>
    </section>
  );
};

export default AppCards;
