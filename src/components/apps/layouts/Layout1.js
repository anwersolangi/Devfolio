"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Layout1({ app }) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeatures, setActiveFeatures] = useState([]);
    const sectionRef = useRef(null);
    const featuresRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = featuresRef.current.indexOf(entry.target);
                    if (index !== -1 && !activeFeatures.includes(index)) {
                        setActiveFeatures((prev) => [...prev, index]);
                    }
                }
            });
        }, observerOptions);

        featuresRef.current.forEach((feature) => {
            if (feature) observer.observe(feature);
        });

        return () => observer.disconnect();
    }, [activeFeatures]);

    return (
        <div className="bg-white">

            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
                <div className="max-w-5xl w-full">
                    <div className="space-y-8 relative">
                        <div>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                                {app.name}
                            </h1>
                            <div className="mt-4 h-px w-24 bg-gray-900"></div>
                        </div>

                        {app.icon && (
                            <div className="absolute top-10 right-10 md:static md:mb-8 hidden md:block">
                                <img
                                    src={app.icon}
                                    alt={`${app.name} Icon`}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
                                />
                            </div>
                        )}

                        <div className="max-w-3xl space-y-4">
                            {app.subtitle && (
                                <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                                    {app.subtitle}
                                </p>
                            )}
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                {app.fullDescription}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {app.links?.playstore && (
                                <a
                                    href={app.links.playstore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    Download on Play Store
                                </a>
                            )}
                            {app.links?.codecanyon && (
                                <a
                                    href={app.links.codecanyon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
                                >
                                    VIEW ON CODECANYON
                                </a>
                            )}
                            {app.links?.github && (
                                <a
                                    href={app.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section >


            {
                app.features && app.features.length > 0 && (
                    <section ref={sectionRef} className="py-32 px-6 bg-gray-50">
                        <div className="max-w-5xl mx-auto">
                            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                                <h2 className="text-4xl font-light mb-16 text-black">Key Features</h2>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {app.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            ref={(el) => (featuresRef.current[index] = el)}
                                            className={`bg-white p-6 rounded-lg transition-all duration-700 ${activeFeatures.includes(index)
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-10"
                                                }`}
                                            style={{ transitionDelay: `${index * 150}ms` }}
                                        >
                                            <div className="w-10 h-10 text-gray-700 mb-4 flex items-center justify-center">
                                                <span className="text-2xl">✓</span>
                                            </div>
                                            <h3 className="text-xl font-light mb-2 text-black">{feature}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }


            {
                app.sections && app.sections.length > 0 && (
                    <section className="py-32 px-6 bg-gray-50">
                        <div className="max-w-5xl mx-auto">
                            <div className="space-y-16">
                                {app.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-2xl font-light text-gray-900 mb-4">{section.title}</h3>
                                        {section.content && <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>}
                                        {section.items && (
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                                        <span className="text-gray-900 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }


            <section className="py-32 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-6 text-black">
                        {app.ctaTitle || `Get ${app.name}`}
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        {app.ctaDescription || app.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {app.links?.playstore && (
                            <a
                                href={app.links.playstore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                            >
                                Download on Play Store
                            </a>
                        )}
                        {app.links?.codecanyon && (
                            <a
                                href={app.links.codecanyon}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                            >
                                Purchase on CodeCanyon
                            </a>
                        )}
                        <Link
                            href="/"
                            className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
                        >
                            CONTACT DEVELOPER
                        </Link>
                    </div>
                </div>
            </section>


            <section className="py-12 px-6 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap gap-6 justify-center text-sm">
                        <Link href={`/apps/${app.slug}/privacy`} className="text-gray-500 hover:text-black transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href={`/apps/${app.slug}/terms`} className="text-gray-500 hover:text-black transition-colors">
                            Terms of Service
                        </Link>
                        {app.links?.email && (
                            <a href={app.links.email} className="text-gray-500 hover:text-black transition-colors">
                                Contact Support
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </div >
    );
}
