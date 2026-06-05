import Hero from "@/components/Hero";
import ReelsCarousel from "@/components/ReelsCarousel";
import Projects from "@/components/Projects";
import Apps from "@/components/Apps";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { reelsData } from "@/data/reels";
import { getReelsStats } from "@/lib/reelStats";

export const revalidate = 3600;

export default async function Home() {
  const featuredReels = [...reelsData].slice(-5).reverse();
  const statsBySlug = await getReelsStats(featuredReels);

  return (
    <main>
      <Hero />
      <ReelsCarousel
        reels={featuredReels}
        statsBySlug={statsBySlug}
        totalReels={reelsData.length}
      />
      <Projects />
      <Apps />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
