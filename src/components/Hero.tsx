
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

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
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              PT
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Parth Tiwari
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Software Developer passionate about building innovative web solutions with modern technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={20} />
              <span>7267092113</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={20} />
              <span>parthjtgjs851@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-scale"
              onClick={() => window.open('https://github.com/galaxyte', '_blank')}
            >
              <Github className="mr-2" size={20} />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-scale"
              onClick={() => window.open('https://www.linkedin.com/in/parth-tiwari-a56335291/', '_blank')}
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={scrollToContact} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover-scale">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="hover-scale">
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
