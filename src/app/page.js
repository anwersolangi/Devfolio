import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AppCard from "@/components/AppCard";
import Footer from "@/components/Footer";

const Portfolio = () => (
  <main className="min-h-screen relative">
    <Header />
    <Hero />
    <About />
    <Experience />
    <AppCard />
    <Footer />
  </main>
);

export default Portfolio;
