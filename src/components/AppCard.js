import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, PlayCircle, Monitor } from "lucide-react";

const PlayStoreIcon = () => (
  <svg
    viewBox="0 0 50 50"
    width="18"
    height="18"
    className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300"
  >
    <path
      fill="currentColor"
      d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M14.994 3.374c.623-.701 1.043-1.677 1.043-2.874 0-.15-.005-.3-.016-.447-.952.038-2.091.587-2.766 1.33-.607.554-1.137 1.44-1.137 2.647 0 .166.014.331.028.389.043.007.118.014.193.014.817 0 1.847-.518 2.655-1.059zm3.914 13.975c1.401-1.867 1.963-2.754 1.963-4.539 0-2.663-1.776-3.986-3.361-3.986-.961 0-1.961.502-2.628.959-.513.349-1.039.709-1.563.709-.474 0-.98-.341-1.596-.724-.748-.466-1.595-.994-2.628-.994-1.961 0-4.047 1.652-4.047 4.802 0 2.936 2.05 6.392 3.642 8.316.75.907 1.627 1.915 2.764 1.927h.024c1.137-.014 1.585-.725 3.063-.725 1.443 0 1.859.711 3.029.711h.024c1.154-.012 2.077-1.11 2.804-1.989.446-.542.827-1.069 1.137-1.539-1.311-.574-2.627-2.26-2.627-3.928z" />
  </svg>
);

const StoreButton = ({ href, icon: Icon, label, isStore = false }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm 
    hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 gap-2
    backdrop-blur-sm group"
  >
    {isStore ? <Icon /> : <Icon size={16} />}
    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
      {label}
    </span>
  </Link>
);

const Item = ({
  title,
  description,
  logo,
  playStore,
  appStore,
  github,
  website,
}) => (
  <div className="flex-shrink-0 w-[380px] group">
    <div
      className="relative bg-gray-900/40 backdrop-blur-md rounded-xl border border-blue-500/20 
    hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/5 opacity-0 
      group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Content */}
      <div className="relative p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className="relative w-16 h-16 rounded-2xl overflow-hidden border border-blue-500/20 
          shadow-lg shadow-black/20"
          >
            <Image
              src={logo}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <h3
              className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 
            transition-colors duration-300"
            >
              {title}
            </h3>
            <div
              className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
            opacity-60 group-hover:w-full transition-all duration-500"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300/90 leading-relaxed min-h-[80px]">
          {description}
        </p>

        {/* Links */}
        <div className="space-y-3">
          {/* Store Links */}
          <div className="flex flex-wrap gap-3">
            {playStore && (
              <StoreButton
                href={playStore}
                icon={PlayStoreIcon}
                label="Google Play"
                isStore={true}
              />
            )}
            {appStore && (
              <StoreButton
                href={appStore}
                icon={AppStoreIcon}
                label="App Store"
                isStore={true}
              />
            )}
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-blue-500/10">
            {github && (
              <StoreButton href={github} icon={Github} label="Source Code" />
            )}
            {website && (
              <StoreButton href={website} icon={Globe} label="Website" />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppCard = () => {
  const apps = [
    {
      id: "nearby",
      title: "Nearby - Find, Connect, Friend",
      description:
        "Nearby is a React Native app that lets you find and chat with people around you using GPS technology and intuitive filters. With Firebase-powered backend and secure storage, Nearby offers seamless one-to-one messaging and multi-login support for a simple, hassle-free experience.",
      logo: "/nearbylogo.jpg",
      playStore:
        "https://play.google.com/store/apps/details?id=com.nearbyreactive",
      website:
        "https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722?srsltid=AfmBOoqy44Mgtoy3HVnGwB6g-Wg3qL8CNnJrMe17Cyeo-XnaMFtaSFjv",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Section content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-500 
        text-transparent bg-clip-text"
        >
          Apps
        </h2>

        {/* Cards container with custom scrollbar */}
        <div
          className="flex gap-8 overflow-x-auto pb-8 px-1
        scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent
        hover:scrollbar-thumb-blue-500/40 transition-colors duration-300"
        >
          {apps.map((app) => (
            <Item key={app.id} {...app} />
          ))}
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
    </section>
  );
};

export default AppCard;
