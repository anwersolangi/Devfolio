"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <button
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-light text-gray-900">{question}</span>
                <span className="text-gray-400 ml-4">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
                <div className="px-6 py-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function Layout2({ app }) {
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

    const featureIcons = [
        <svg key="0" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>,
        <svg key="1" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>,
        <svg key="2" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="3" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>,
        <svg key="4" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
        <svg key="5" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>,
    ];

    return (
        <div className="bg-white">

            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 overflow-hidden">
                <div className="max-w-5xl w-full relative z-10">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                                {app.name}
                            </h1>
                            <div className="mt-4 h-px w-24 bg-gray-900"></div>
                        </div>

                        {app.icon && (
                            <div className="absolute top-20 right-6 md:top-1/2 md:-translate-y-1/2 md:right-0 lg:-right-20 hidden lg:block opacity-10">
                                <Image
                                    src={app.icon}
                                    alt={`${app.name} Icon`}
                                    width={384}
                                    height={384}
                                    className="w-96 h-96 rounded-3xl filter grayscale"
                                />
                            </div>
                        )}

                        {app.icon && (
                            <div className="block lg:hidden mb-8">
                                <Image
                                    src={app.icon}
                                    alt={`${app.name} Icon`}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 rounded-2xl shadow-lg"
                                />
                            </div>
                        )}

                        <div className="max-w-3xl space-y-4">
                            <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                                {app.subtitle || app.description}
                            </p>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                {app.fullDescription}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 pt-4">
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
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Purchase on CodeCanyon
                                </a>
                            )}
                            <Link
                                href={`/apps/${app.slug}/help`}
                                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
                            >
                                HELP & SUPPORT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {app.features && app.features.length > 0 && (
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
                                        <div className="mb-4">
                                            {featureIcons[index % featureIcons.length]}
                                        </div>
                                        <h3 className="text-xl font-light mb-2 text-black">{feature}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}


            {app.sections && app.sections.length > 0 && (
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-light mb-16 text-black">How It Works</h2>
                        <div className="space-y-16">
                            {app.sections.map((section, idx) => (
                                <div key={idx} className="border-l-2 border-gray-200 pl-8">
                                    <h3 className="text-2xl font-light text-gray-900 mb-4">{section.title}</h3>
                                    {section.content && (
                                        <p className="text-gray-600 mb-6 leading-relaxed">{section.content}</p>
                                    )}
                                    {section.items && (
                                        <ul className="grid md:grid-cols-2 gap-4">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
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
            )}


            {app.techStack && (
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-light mb-16 text-black">Technology Stack</h2>

                        <div className={`grid gap-8 ${app.techStack.features ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                            {app.techStack.frontend && (
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <h3 className="text-xl font-light mb-4 text-black">Frontend</h3>
                                    <ul className="space-y-3">
                                        {app.techStack.frontend.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600">
                                                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {app.techStack.backend && (
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <h3 className="text-xl font-light mb-4 text-black">Backend</h3>
                                    <ul className="space-y-3">
                                        {app.techStack.backend.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600">
                                                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {app.techStack.features && (
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <h3 className="text-xl font-light mb-4 text-black">Features</h3>
                                    <ul className="space-y-3">
                                        {app.techStack.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600">
                                                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {app.perfectFor && (
                            <div className="mt-12 bg-black p-8 rounded-lg text-white">
                                <div className="flex items-center gap-3 mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    <h3 className="text-xl font-light">Perfect For</h3>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {app.perfectFor.map((item, i) => (
                                        <div key={i}>
                                            <div className="text-lg font-light mb-2">{item.title}</div>
                                            <div className="text-sm text-gray-300">{item.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}


            {app.faqs && app.faqs.length > 0 && (
                <section className="py-32 px-6 bg-gray-50">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-light mb-16 text-black">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {app.faqs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            )}


            <section className="py-32 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-6 text-black">
                        {app.ctaTitle || `Launch Your ${app.name}`}
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        {app.ctaDescription || `Get the complete source code and start building with ${app.name} today`}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
    );
}
