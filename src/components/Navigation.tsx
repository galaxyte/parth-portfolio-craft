
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, FolderOpen, Award, Mail } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold gradient-text text-glow">
              Parth Tiwari
            </h1>
          </div>
          
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 glow-effect ${
                          activeSection === item.id
                            ? "glass-effect text-blue-300 border-blue-400/30 bg-blue-500/20 shadow-lg shadow-blue-500/25"
                            : "text-gray-300 hover:text-white hover:bg-white/10 hover:glass-effect hover:shadow-lg hover:shadow-white/10"
                        }`}
                      >
                        <IconComponent size={18} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-4 rounded-full text-gray-300 hover:text-white hover:bg-white/10 glass-effect transition-all duration-300 glow-effect"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-6 pt-6 pb-8 space-y-4 glass-effect border-t border-white/20">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 px-6 py-4 rounded-full text-lg font-medium w-full text-left transition-all duration-300 glow-effect ${
                        activeSection === item.id
                          ? "glass-effect text-blue-300 border-blue-400/30 bg-blue-500/20 shadow-lg shadow-blue-500/25"
                          : "text-gray-300 hover:text-white hover:bg-white/10 hover:glass-effect hover:shadow-lg hover:shadow-white/10"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
    </nav>
  );
};
