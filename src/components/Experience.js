import React from "react";

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="relative group">
    {/* Glowing border effect */}
    <div className="absolute -left-0.5 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-transparent group-hover:opacity-100 opacity-50 transition-opacity duration-300" />

    <div className="pl-6 py-4">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 mb-2">
        {company} • <span className="text-blue-400/80">{period}</span>
      </p>
      <p className="text-gray-300/90">{description}</p>
    </div>

    {/* Hover highlight effect */}
    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Freelancer",
      company: "Fiverr",
      period: "2020 - Present",
      description:
        "Delivered high-quality mobile applications for diverse clients using React Native and Swift, ensuring tailored solutions for unique business needs. Focused on performance optimization and user experience.",
    },
    {
      title: "Author",
      company: "Codecanyon",
      period: "2020 - 2022",
      description:
        "Created and published customizable React Native templates and components, empowering developers with ready-to-use solutions and generating consistent sales revenue.",
    },
    {
      title: "Senior Mobile Developer",
      company: "Langoo",
      period: "2022 - Present",
      description:
        "Architected and implemented scalable mobile app solutions in React Native, collaborated closely with designers and backend teams, and ensured seamless app performance across iOS and Android platforms.",
    },
    {
      title: "iOS Developer",
      company: "Kravemart",
      period: "2021 - 2022",
      description:
        "Developed robust iOS applications using Swift, optimized features for enhanced user experience, and contributed to the app's overall success through innovative design and code efficiency.",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
    </section>
  );
};

export default Experience;
