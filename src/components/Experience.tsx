
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import smarterCodesLogo from "./assests/1631327478988.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cardHover } from "@/lib/motion";
import { useReplayInView } from "@/hooks/use-replay-in-view";

export const Experience = () => {
  const experiences = [
    {
      company: "Done Mortgage",
      position: "Full Stack Developer",
      period: "Nov 2025 – Present",
      location: "Remote",
      type: "Current",
      description: [
        "Developed scalable backend services using Python and FastAPI for mortgage automation systems handling borrower verification, financial document processing, and high-volume workflow orchestration.",
        "Built AI-powered document processing pipelines for automated classification, structured data extraction, validation workflows, and reducing manual review effort across mortgage processing systems.",
        "Engineered ADMS self-learning AI agent architecture with persistent learning memory, correction tracking, semantic search, and Retrieval-Augmented Generation (RAG) pipelines using pgvector for context-aware document intelligence.",
        "Developed intelligent chat-agent and review systems enabling grounded LLM-based document querying, confidence scoring, anomaly detection, and automated document review workflows as part of internal TemperCheck validation systems.",
        "Improved production scalability through microservice architecture, asynchronous background task processing, Docker-based deployments, CI/CD pipelines, and backend performance optimization for production-grade infrastructure."
      ]
    },
    {
      company: "Smarter.Codes",
      logo: smarterCodesLogo,
      position: "Full Stack Developer",
      period: "Jul 2025 – Oct 2025",
      location: "Remote",
      type: "Previous",
      description: [
        "Developed scalable backend services using Python and FastAPI for AI-driven automation platforms.",
        "Built REST APIs and intelligent workflows for task automation and real-time data processing.",
        "Contributed to microservice architecture, backend optimization, and deployment workflows.",
        "Participated in debugging, code reviews, and performance improvements for production systems."
      ]
    }
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  return (
    <section id="experience" className="relative py-8 md:py-10 section-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-center md:mb-8"
        >
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Career path
          </p>
          <h2 className="mb-4 font-heading text-4xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-5xl">
            Experience
          </h2>
          <p className="mx-auto max-w-3xl font-body text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Building scalable backend systems, AI-powered workflows, and production-grade cloud applications
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline spine */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-[15px] top-6 w-0.5 origin-top bg-gradient-to-b from-blue-500 via-blue-400/60 to-zinc-300 md:left-[27px]"
          />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: {
    company: string;
    position: string;
    period: string;
    location: string;
    type: string;
    description: string[];
    logo?: string;
  };
  index: number;
}) => {
  const isCurrent = experience.type === "Current";
  const initials = experience.company
    .split(/\s|\./)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const reveal = useReplayInView(index);

  return (
    <motion.article
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      className="relative pl-12 md:pl-16"
    >
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 + index * 0.06 }}
        className={`absolute left-[7px] top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full md:left-[19px] ${
          isCurrent
            ? "bg-blue-600 shadow-[0_0_0_6px_rgba(37,99,235,0.18)]"
            : "bg-zinc-400 shadow-[0_0_0_6px_rgba(161,161,170,0.2)]"
        }`}
      >
        {isCurrent && (
          <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/40" />
        )}
      </motion.div>

      <motion.div
        whileHover={cardHover}
        className={`group relative overflow-hidden rounded-2xl border bg-white/80 dark:bg-zinc-900/80 p-6 shadow-lg backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl sm:p-8 ${
          isCurrent
            ? "border-blue-200/80 dark:border-blue-800/80 shadow-blue-500/10 ring-1 ring-blue-500/20"
            : "border-zinc-200/80 dark:border-zinc-700/80 shadow-zinc-200/40"
        }`}
      >
        {/* Gradient border accent for current */}
        {isCurrent && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-zinc-900/5"
          />
        )}

        <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-6">
          <div className="flex-shrink-0">
            {experience.logo ? (
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm sm:h-20 sm:w-20">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="h-full w-full object-contain p-2"
                />
              </div>
            ) : (
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl border font-heading text-lg font-bold shadow-sm sm:h-20 sm:w-20 sm:text-xl ${
                  isCurrent
                    ? "border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-600 to-zinc-800 text-white"
                    : "border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {initials}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2.5">
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
                {experience.company}
              </h3>
              <Badge
                className={
                  isCurrent
                    ? "border-transparent bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm shadow-blue-500/30"
                    : "border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400"
                }
              >
                {experience.type}
              </Badge>
            </div>

            <h4 className="mb-3 font-body text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
              {experience.position}
            </h4>

            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-sm text-zinc-500 dark:text-zinc-400">
              <div className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarDays} className="text-blue-600 dark:text-blue-400" />
                <span>{experience.period}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-zinc-400 dark:text-zinc-500" />
                <span>{experience.location}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {experience.description.map((desc, descIndex) => (
                <motion.li
                  key={descIndex}
                  initial={{ opacity: 0, x: -8 }}
                  animate={reveal.visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.2 + descIndex * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 font-body text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <span
                    className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                      isCurrent ? "bg-blue-600" : "bg-zinc-400"
                    }`}
                  />
                  <span className="min-w-0 break-words">{desc}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};
