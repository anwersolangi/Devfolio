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

export default function Layout3({ app }) {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        <svg key="1" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>,
        <svg key="2" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>,
        <svg key="3" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>,
        <svg key="4" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>,
        <svg key="5" className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
    ];

    return (
        <div className="bg-white">

            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
                <div className="max-w-5xl w-full">
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            {app.icon && (
                                <Image
                                    src={app.icon}
                                    alt={`${app.name} Icon`}
                                    width={96}
                                    height={96}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg"
                                />
                            )}
                            <div>
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                                    {app.name}
                                </h1>
                                <div className="mt-4 h-px w-24 bg-gray-900"></div>
                            </div>
                        </div>

                        <div className="max-w-3xl space-y-4">
                            <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
                                {app.subtitle || app.description}
                            </p>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                {app.fullDescription}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 pt-4">
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
                            {app.links?.chromeStore && (
                                <a
                                    href={app.links.chromeStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Add to Chrome
                                </a>
                            )}
                            {app.links?.apkDownload && (
                                <a
                                    href={app.links.apkDownload}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
                                >
                                    DOWNLOAD APK
                                </a>
                            )}
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


            {app.builtWith && (
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-light mb-16 text-black">Built With</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {app.builtWith.map((category, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-lg">
                                    <h3 className="text-xl font-light mb-4 text-black">{category.title}</h3>
                                    <ul className="space-y-3">
                                        {category.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-600">
                                                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>


                        <div className="mt-12 bg-black p-8 rounded-lg text-white">
                            <div className="flex items-center gap-3 mb-6">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                <h3 className="text-xl font-light">Open Source</h3>
                            </div>
                            <p className="text-gray-300">
                                {app.name} is completely open source. Feel free to use it, learn from it, and contribute back to the community. Star the repository on GitHub to show your support!
                            </p>
                        </div>
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
                        {app.ctaTitle || `Start Using ${app.name}`}
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        {app.ctaDescription || `Clone the repository and start building with ${app.name} today`}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {app.links?.github && (
                            <a
                                href={app.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
                            >
                                View on GitHub
                            </a>
                        )}
                        {app.links?.chromeStore && (
                            <a
                                href={app.links.chromeStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-light tracking-widest uppercase hover:bg-blue-700 transition-colors duration-300"
                            >
                                Add to Chrome
                            </a>
                        )}
                        {app.links?.apkDownload && (
                            <a
                                href={app.links.apkDownload}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
                            >
                                DOWNLOAD APK
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
