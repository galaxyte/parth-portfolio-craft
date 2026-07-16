
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faBriefcase,
  faFolderOpen,
  faTrophy,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
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

  const navItems: { id: string; label: string; icon: IconDefinition }[] = [
    { id: "home", label: "Home", icon: faHouse },
    { id: "about", label: "About", icon: faUser },
    { id: "experience", label: "Experience", icon: faBriefcase },
    { id: "projects", label: "Projects", icon: faFolderOpen },
    { id: "achievements", label: "Achievements", icon: faTrophy },
    { id: "contact", label: "Contact", icon: faEnvelope }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-zinc-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/85"
          : "border-transparent bg-white/55 backdrop-blur-md dark:bg-zinc-950/55"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="cursor-pointer font-heading text-xl font-bold gradient-text sm:text-2xl"
          >
            Parth Tiwari
          </button>
          
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex cursor-pointer items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 font-body ${
                    activeSection === item.id
                      ? "border border-blue-200 bg-blue-50 text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300"
                      : "border border-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xs" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-zinc-200 p-3 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-lg" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition-all duration-300 font-body ${
                    activeSection === item.id
                      ? "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
