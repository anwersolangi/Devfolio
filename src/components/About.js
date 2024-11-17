import React from "react";

const About = () => (
  <section className="py-20 px-6 relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
        About Me
      </h2>
      <div className="text-lg space-y-4">
        <p className="text-gray-300/90">
          I'm a self-taught software developer with a passion for mobile
          development. My journey in programming started with a curiosity to
          build things that people can use in their daily lives.
        </p>
        <p className="text-gray-300/90">
          Currently focusing on React Native and iOS development, I love
          creating seamless, user-friendly applications that solve real-world
          problems.
        </p>
      </div>
    </div>
    {/* Glass effect background */}
    <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
  </section>
);

export default About;
