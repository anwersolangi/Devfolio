import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ReelsCarousel from "@/components/ReelsCarousel";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ReelsCarousel />
      <Experience />
      <Contact />
    </main>
  );
}
