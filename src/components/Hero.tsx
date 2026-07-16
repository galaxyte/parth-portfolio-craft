
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 section-bg relative overflow-hidden">
      {/* Subtle motion-driven background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zinc-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-zinc-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <HeroContent scrollToContact={scrollToContact} />
      </div>
    </section>
  );
};

// Typing Animation Component
const TypingAnimation = ({ texts, speed = 100 }: { texts: string[], speed?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed]);

  return (
    <span className="gradient-text text-glow">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Hero Content Component with Framer Motion
const HeroContent = ({ scrollToContact }: { scrollToContact: () => void }) => {
  const downloadResume = () => {
    // Create a link to download resume (you can replace with actual resume URL)
    const link = document.createElement('a');
    link.href = '/Parth_Tiwari.pdf';
    link.download = 'Parth_Tiwari_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8">
      {/* Profile Picture */}
      <HeroElement index={0}>
        <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-zinc-800 via-zinc-600 to-blue-600 p-1 shadow-xl shadow-zinc-300/50 pulse-glow">
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 flex items-center justify-center">
            <img 
              src="/Gemini_Generated_Image_8g6ysv8g6ysv8g6y.png" 
              alt="Parth Tiwari" 
              className="w-full h-full object-cover scale-[2.5] origin-[50%_22%] rounded-full"
              onError={(e) => {
                // Fallback to initials if image doesn't load
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            <div className="w-full h-full bg-gradient-to-r from-zinc-800 via-zinc-600 to-blue-600 flex items-center justify-center text-white text-5xl font-bold rounded-full" style={{display: 'none'}}>
              PT
            </div>
          </div>
        </div>
      </HeroElement>
      
      {/* Name */}
      <HeroElement index={1}>
        <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 mb-4">
          <span className="gradient-text text-glow">
            Parth Tiwari
          </span>
        </h1>
      </HeroElement>
      
      {/* Description with Typing Animation */}
      <HeroElement index={2}>
        <div className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          <span className="block mb-2">I'm a passionate</span>
          <TypingAnimation 
            texts={[
              "Backend-Focused Software Engineer",
              "Python & FastAPI Developer",
              "AI-Powered Application Developer",
              "RAG Pipeline Engineer",
              "Scalable Systems Builder"
            ]} 
            speed={80}
          />
          <span className="block mt-2">building scalable backend systems, API-driven architectures, and AI-powered applications</span>
        </div>
      </HeroElement>
      
      {/* Contact Info */}
      <HeroElement index={3}>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 text-zinc-600 glass-effect px-4 py-2 rounded-full">
            <Phone size={20} className="text-blue-600" />
            <span>+91 9211975266</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600 glass-effect px-4 py-2 rounded-full">
            <Mail size={20} className="text-blue-600" />
            <span>parthjtgjs851@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600 glass-effect px-4 py-2 rounded-full">
            <MapPin size={20} className="text-zinc-500" />
            <span>Noida, India</span>
          </div>
        </div>
      </HeroElement>
      
      {/* Action Buttons */}
      <HeroElement index={4}>
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="cursor-pointer border-2 border-zinc-900 text-zinc-900 bg-transparent hover:bg-zinc-100 transition-all duration-300"
          >
            Get In Touch
          </Button>
          <Button 
            size="lg"
            onClick={scrollToProjects}
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md shadow-blue-200/40"
          >
            View Projects
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={downloadResume}
            className="cursor-pointer border-2 border-zinc-300 text-zinc-700 bg-white hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-300"
          >
            <Download className="mr-2" size={20} />
            Resume
          </Button>
        </div>
      </HeroElement>
      
      {/* Social Links */}
      <HeroElement index={5}>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/galaxyte"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-effect hover:bg-zinc-100 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="GitHub"
          >
            <Github size={24} className="text-zinc-600 hover:text-zinc-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-tiwari-a56335291/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-effect hover:bg-zinc-100 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-zinc-600 hover:text-zinc-900" />
          </a>
        </div>
      </HeroElement>
    </div>
  );
};

// Individual Hero Element with Framer Motion
const HeroElement = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.2
      }}
    >
      {children}
    </motion.div>
  );
};
