import { Suspense, useEffect, useState, lazy } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faEnvelope,
  faLocationDot,
  faPhone,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const HeroScene = lazy(() =>
  import("@/components/HeroScene").then((m) => ({ default: m.HeroScene }))
);

const ROLES = [
  "Backend-Focused Software Engineer",
  "Python & FastAPI Developer",
  "AI-Powered Application Developer",
  "RAG Pipeline Engineer",
  "Scalable Systems Builder",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const TypingRole = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = full.slice(0, text.length + 1);
          setText(next);
          if (next === full) setTimeout(() => setDeleting(true), 1600);
        } else {
          const next = full.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % ROLES.length);
          }
        }
      },
      deleting ? 28 : 48
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="inline-flex min-h-[1.3em] items-center font-heading text-xl font-semibold text-zinc-800 dark:text-zinc-100 sm:text-2xl lg:text-[1.65rem]">
      <span className="gradient-text">{text}</span>
      <motion.span
        aria-hidden
        className="ml-0.5 inline-block h-[1.1em] w-[2px] bg-blue-600"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
};

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Parth_Tiwari.pdf";
    link.download = "Parth_Tiwari_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-10 sm:pt-28 lg:pb-12"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left — copy & actions */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col text-left lg:order-1"
        >
          <motion.div variants={item} className="mb-5 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-body">
            <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 dark:text-blue-400" />
            <span>Noida, India</span>
            <span className="text-zinc-300">·</span>
            <span className="rounded-full bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text whitespace-nowrap">Parth Tiwari</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 space-y-3">
            <p className="font-body text-sm uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
              I&apos;m a passionate
            </p>
            <TypingRole />
            <p className="max-w-xl font-body text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Building scalable backend systems, API-driven architectures, and
              AI-powered applications with production-grade reliability.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="cursor-pointer bg-blue-600 px-6 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 font-body"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="cursor-pointer border-zinc-300 dark:border-zinc-600 bg-white/70 dark:bg-zinc-900/70 px-6 text-zinc-800 dark:text-zinc-100 backdrop-blur-sm hover:bg-white font-body"
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.button
              type="button"
              onClick={downloadResume}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex cursor-pointer items-center gap-2 px-2 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400 font-body"
            >
              <FontAwesomeIcon icon={faDownload} />
              Resume
            </motion.button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-zinc-200/80 dark:border-zinc-700/80 pt-6"
          >
            <div className="flex items-center gap-3">
              {[
                {
                  href: "https://github.com/galaxyte",
                  icon: faGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/parth-tiwari-a56335291/",
                  icon: faLinkedin,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-200 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </motion.a>
              ))}
            </div>

            <div className="hidden h-4 w-px bg-zinc-200 sm:block" />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 font-body sm:text-sm">
              <a
                href="mailto:parthjtgjs851@gmail.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600/80 dark:text-blue-400/80" />
                <span className="truncate">parthjtgjs851@gmail.com</span>
              </a>
              <a
                href="tel:+919211975266"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faPhone} className="text-blue-600/80 dark:text-blue-400/80" />
                <span>+91 9211975266</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — premium visual */}
        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-1 relative mx-auto flex w-full max-w-md items-center justify-center lg:order-2 lg:max-w-none lg:justify-end"
        >
          <div className="relative aspect-square w-full max-w-[420px]">
            <div className="absolute inset-[-8%] opacity-90">
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto flex h-full w-full items-center justify-center"
            >
              {/* rotating gradient ring */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute h-[78%] w-[78%] rounded-full bg-[conic-gradient(from_0deg,#2563EB,#18181B,#60A5FA,#2563EB)] p-[3px] opacity-90"
              >
                <div className="h-full w-full rounded-full bg-[#f8fafc]" />
              </motion.div>

              {/* glass frame */}
              <div className="relative h-[72%] w-[72%] overflow-hidden rounded-full border border-white/70 bg-white/40 dark:bg-zinc-900/40 p-1.5 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.45)] backdrop-blur-md">
                <div className="h-full w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200/80">
                  <img
                    src="/Gemini_Generated_Image_8g6ysv8g6ysv8g6y.png"
                    alt="Parth Tiwari"
                    className="h-full w-full object-cover scale-[2.5] origin-[50%_22%]"
                  />
                </div>
              </div>

              {/* soft glow */}
              <div className="pointer-events-none absolute inset-[12%] rounded-full bg-blue-500/15 blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        aria-label="Scroll to about"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
        </motion.span>
      </motion.button>
    </section>
  );
};
