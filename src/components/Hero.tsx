
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
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
    link.href = '/resume.pdf'; // Replace with your actual resume path
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
        <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl glow-effect pulse-glow">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
            <img 
              src="/profile-photo.jpg" 
              alt="Parth Tiwari" 
              className="w-full h-full object-cover rounded-full"
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
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold" style={{display: 'none'}}>
              PT
            </div>
          </div>
        </div>
      </HeroElement>
      
      {/* Name */}
      <HeroElement index={1}>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          <span className="gradient-text text-glow">
            Parth Tiwari
          </span>
        </h1>
      </HeroElement>
      
      {/* Description with Typing Animation */}
      <HeroElement index={2}>
        <div className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="block mb-2">I'm a passionate</span>
          <TypingAnimation 
            texts={[
              "Full-Stack Developer",
              "AI/ML Engineer", 
              "React Specialist",
              "Python Developer",
              "Problem Solver"
            ]} 
            speed={80}
          />
          <span className="block mt-2">building innovative web solutions with modern technologies</span>
        </div>
      </HeroElement>
      
      {/* Contact Info */}
      <HeroElement index={3}>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 text-gray-300 glass-effect px-4 py-2 rounded-full">
            <Phone size={20} className="text-blue-400" />
            <span>7267092113</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 glass-effect px-4 py-2 rounded-full">
            <Mail size={20} className="text-purple-400" />
            <span>parthjtgjs851@gmail.com</span>
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
            className="glass-effect border-2 border-blue-400 text-blue-300 hover:bg-blue-500/20 hover:text-white hover:border-blue-300 transition-all duration-300 glow-effect"
          >
            Get In Touch
          </Button>
          <Button 
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white transition-all duration-300 glow-effect"
          >
            View Projects
          </Button>
          <Button 
            size="lg"
            onClick={downloadResume}
            className="glass-effect border-2 border-green-400 text-green-300 hover:bg-green-500/20 hover:text-white hover:border-green-300 transition-all duration-300 glow-effect"
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
            className="p-4 glass-effect hover:bg-white/20 rounded-full transition-all duration-300 glow-effect"
            aria-label="GitHub"
          >
            <Github size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-tiwari-a56335291/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-effect hover:bg-white/20 rounded-full transition-all duration-300 glow-effect"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-gray-300 hover:text-white" />
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
