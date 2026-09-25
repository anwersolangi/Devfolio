import Hero from "@/components/Hero";
import ReelsCarousel from "@/components/ReelsCarousel";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { reelsData } from "@/data/reels";
import { getReelsStats } from "@/lib/reelStats";
import { HomeSchemas } from "@/components/SEOComponents";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = {
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Anwer Solangi — React Native Developer in Karachi, Pakistan",
    description:
      "Senior React Native developer in Karachi, Pakistan. 50+ projects delivered, 100K+ app downloads. Available for freelance and contract work.",
    images: [DEFAULT_OG_IMAGE],
    firstName: "Anwer",
    lastName: "Solangi",
    username: "anwersolangi",
  },
};

export default async function Home() {
  const featuredReels = [...reelsData].slice(-5).reverse();
  const statsBySlug = await getReelsStats(featuredReels);

  return (
    <main>
      <HomeSchemas />
      <Hero />
      <ReelsCarousel
        reels={featuredReels}
        statsBySlug={statsBySlug}
        totalReels={reelsData.length}
      />
      <Projects />
      <Tools />
      <Blog />
      <About />
      <Skills />
      <Experience />
      <Faq />
      <Contact />
    </main>
  );
}
