
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  useEffect(() => {
    const currentRefs = cardsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentRefs.indexOf(entry.target);
            if (index !== -1 && !activeCards.includes(index)) {
              setActiveCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [activeCards]);

  const projects = [
    {
      title: "Nearby",
      slug: "nearby",
      category: "Location-based Social App",
      description:
        "React Native app that helps users find and chat with people around them using GPS technology. Features real-time chat, user filtering, and Firebase backend with payment system integration.",
      image: "/nearby.png",
      imageUrl: null,
      technologies: [
        "React Native",
        "Firebase",
        "GPS/Location",
        "Real-time Chat",
        "Payment Integration",
      ],
      stats: {
        downloads: "10,000+",
        platform: "iOS & Android",
      },
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.nearbyreactive",
        codecanyon:
          "https://codecanyon.net/item/nearby-react-native-app-for-find-and-chat-using-gps-technology/25363722",
      },
      detailsLink: "https://apps.anwersolangi.com/nearby",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "WhatsupFire",
      slug: "whatsupfire",
      category: "Messaging Application",
      description:
        "Full-featured messaging app similar to WhatsApp, built with React Native. Includes real-time chat, image sharing, 24-hour stories feature, and Firebase phone authentication for secure login.",
      image: "/whatsupfire.png",
      imageUrl: null,
      technologies: [
        "React Native",
        "Firebase",
        "Phone Auth",
        "Stories Feature",
        "Image Sharing",
      ],
      stats: {
        type: "Commercial Product",
        platform: "iOS & Android",
      },
      links: {
        codecanyon:
          "https://codecanyon.net/item/whatsupfire-react-native-messenger/30632195",
      },
      detailsLink: "https://apps.anwersolangi.com/whatsupfire",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "YouTube Fullscreen Focus",
      slug: "youtube-fullscreen-focus",
      category: "Browser Extension",
      description:
        "Chrome extension enhancing YouTube's viewing experience with advanced fullscreen controls and focus mode features. Prevents accidental keystrokes while watching videos.",
      image: "/youtube-fullscreen-focus.jpg",
      imageUrl: null,
      technologies: [
        "JavaScript",
        "Chrome APIs",
        "CSS3",
        "HTML5",
        "LocalStorage",
      ],
      stats: {
        type: "Browser Extension",
        status: "Recently Published",
      },
      links: {
        github: "https://github.com/anwersolangi/youtube-fullscreen-focus",
        chromeStore:
          "https://chromewebstore.google.com/detail/youtube-fullscreen-focus/plkdmggghbaenhibengiabjlbfjipngp",
      },
      detailsLink: "https://apps.anwersolangi.com/youtube-fullscreen-focus",
      featured: true,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "ReactTube",
      slug: "reacttube",
      category: "Video Social Platform UI",
      description:
        "YouTube clone frontend built with React Native featuring video browsing, comments, user profiles, and earnings screens. Open source project showcasing modern UI patterns and reusable components.",
      image: null,
      imageUrl:
        "https://raw.githubusercontent.com/anwersolangi/ReactTube-Youtube-clone-in-React-Native/master/screenshots/Cover_1.png",
      technologies: [
        "React Native",
        "Custom Components",
        "Navigation",
        "UI/UX Design",
      ],
      stats: {
        type: "Open Source",
        github: "Public Repository",
      },
      links: {
        github:
          "https://github.com/anwersolangi/ReactTube-Youtube-clone-in-React-Native",
      },
      detailsLink: "https://apps.anwersolangi.com/reacttube",
      featured: false,
      gradient: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >

          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gray-300"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl font-light">
              A selection of mobile applications and browser extensions built
              for clients worldwide, showcasing expertise in React Native
              development, Firebase integration, and web technologies.
            </p>
          </div>


          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 ${activeCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">

                  <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    {project.image || project.imageUrl ? (
                      <Image
                        src={project.imageUrl || project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        <span className="text-gray-500 text-lg font-light">
                          {project.title}
                        </span>
                      </div>
                    )}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs rounded-full font-medium shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>


                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 font-light">
                      {project.description}
                    </p>


                    <div className="mb-8">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>


                    <div className="mb-8 grid grid-cols-2 gap-4">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-2xl font-light text-gray-900 mb-1">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">
                            {key.replace("_", " ")}
                          </div>
                        </div>
                      ))}
                    </div>


                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={
                          project.detailsLink || `/projects/${project.slug}`
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-light hover:bg-gray-800 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        View Details
                      </Link>
                      {project.links.playstore && (
                        <a
                          href={project.links.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          Play Store
                        </a>
                      )}
                      {project.links.chromeStore && (
                        <a
                          href={project.links.chromeStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4.44C13.26,4.44 14.45,4.78 15.5,5.36L13.47,8.53C12.76,8.2 12,8 11.18,8C9.47,8 8,9.47 8,11.18C8,12.89 9.47,14.36 11.18,14.36C12.89,14.36 14.36,12.89 14.36,11.18C14.36,10.78 14.29,10.39 14.17,10.03L17.62,5.19C18.9,6.54 19.73,8.35 19.73,10.36C19.73,14.91 16.09,18.55 11.55,18.55C7,18.55 3.36,14.91 3.36,10.36C3.36,5.82 7,2.18 11.55,2.18C11.7,2.18 11.85,2.19 12,2.2V4.44Z" />
                          </svg>
                          Chrome Store
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          View Code
                        </a>
                      )}
                      {project.links.codecanyon && (
                        <a
                          href={project.links.codecanyon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          CodeCanyon
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-6 p-12 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                  Explore More Projects
                </h3>
                <p className="text-gray-600 font-light">
                  View detailed information about each project
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {projects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.detailsLink || `/projects/${project.slug}`}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-light hover:bg-gray-50 transition-colors"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  Looking for a React Native Developer?
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  Available for freelance projects and consulting
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="#contact"
                  className="px-8 py-3 bg-gray-900 text-white rounded-xl font-light hover:bg-gray-800 transition-colors"
                >
                  Get in Touch
                </Link>
                <a
                  href="https://github.com/anwersolangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-light hover:bg-gray-50 transition-colors"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
