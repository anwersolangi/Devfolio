"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AppNotFound() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dots, setDots] = useState(3);

    useEffect(() => {
        setIsLoaded(true);

        const interval = setInterval(() => {
            setDots((prev) => (prev % 3) + 1);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
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
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

            <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                    <div
                        className="absolute top-40 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="max-w-4xl w-full relative z-10">
                    <div className="text-center">
                        <div
                            className={`mb-8 flex justify-center transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                        >
                            <div className="relative">
                                <div className="w-64 h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                                    <div className="w-full h-full bg-white rounded-[2.3rem] relative overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-100 to-transparent z-10 flex items-center justify-between px-8">
                                            <span className="text-xs font-medium text-gray-700">
                                                10:00
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <div className="w-4 h-3 border border-gray-700 rounded-sm"></div>
                                                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center h-full px-6">
                                            <div className="text-8xl font-extralight text-gray-900 mb-4">
                                                404
                                            </div>
                                            <div className="text-sm text-gray-600 font-light mb-6">
                                                App Not Found
                                            </div>

                                            <div className="flex items-center gap-1 mb-4">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                                                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
                                            </div>

                                            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
                                                    style={{ width: "40%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                                </div>

                                <div className="absolute -right-8 top-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg animate-float flex items-center justify-center">
                                    <span className="text-2xl">📱</span>
                                </div>

                                <div
                                    className="absolute -left-8 bottom-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg animate-float flex items-center justify-center"
                                    style={{ animationDelay: "1s" }}
                                >
                                    <span className="text-2xl">⚡</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <h1
                                className={`text-5xl md:text-7xl font-extralight tracking-tight text-gray-900 animate-fade-in-up ${isLoaded ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                App Not Found
                            </h1>

                            <p
                                className={`text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto animate-fade-in-up delay-100 ${isLoaded ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                {`Looks like this app doesn't exist or has been removed`}{" "}
                                <span className="inline-block">{".".repeat(dots)}</span>
                            </p>
                        </div>

                        <div
                            className={`flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300 ${isLoaded ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Link
                                href="/apps"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-light hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                                <span>Browse Apps</span>
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-light hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
