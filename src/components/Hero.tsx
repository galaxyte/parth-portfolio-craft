
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeroContent scrollToContact={scrollToContact} />
      </div>
    </section>
  );
};

// Hero Content Component with Framer Motion
const HeroContent = ({ scrollToContact }: { scrollToContact: () => void }) => {
  return (
    <div className="space-y-8">
      {/* Profile Picture */}
      <HeroElement index={0}>
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          PT
        </div>
      </HeroElement>
      
      {/* Name */}
      <HeroElement index={1}>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Parth Tiwari
          </span>
        </h1>
      </HeroElement>
      
      {/* Description */}
      <HeroElement index={2}>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Software Developer passionate about building innovative web solutions with modern technologies
        </p>
      </HeroElement>
      
      {/* Contact Info */}
      <HeroElement index={3}>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={20} />
            <span>7267092113</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail size={20} />
            <span>parthjtgjs851@gmail.com</span>
          </div>
        </div>
      </HeroElement>
      
      {/* Action Buttons */}
      <HeroElement index={4}>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300"
          >
            View Projects
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
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-tiwari-a56335291/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-blue-700" />
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
