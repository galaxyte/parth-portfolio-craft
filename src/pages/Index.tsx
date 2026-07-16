import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { NetworkBackground } from "@/components/NetworkBackground";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-transparent">
      <NetworkBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>

      <div className="fixed bottom-6 right-5 z-[60] sm:bottom-8 sm:right-7">
        <ThemeToggle className="h-11 w-11 shadow-lg shadow-zinc-300/50 backdrop-blur-md dark:shadow-black/40" />
      </div>
    </div>
  );
};

export default Index;
