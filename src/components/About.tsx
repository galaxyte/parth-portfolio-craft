
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faGears,
  faNetworkWired,
  faBrain,
  faDesktop,
  faGraduationCap,
  faCalendarDays,
  faLocationDot,
  faAward,
  faCode,
  faServer,
  faLaptopCode,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import { useState } from "react";
import { cardHover, cardInView } from "@/lib/motion";
import { useReplayInView } from "@/hooks/use-replay-in-view";

const skillMeta: Record<
  string,
  { icon: IconDefinition; accent: string; border: string; iconBg: string }
> = {
  Languages: {
    icon: faCode,
    accent: "from-blue-500/15 via-transparent to-zinc-900/5",
    border: "hover:border-blue-300/70",
    iconBg: "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400",
  },
  "Backend Technologies": {
    icon: faServer,
    accent: "from-zinc-800/10 via-transparent to-blue-500/10",
    border: "hover:border-zinc-400/50",
    iconBg: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300",
  },
  "Frontend Technologies": {
    icon: faLaptopCode,
    accent: "from-sky-500/15 via-transparent to-transparent",
    border: "hover:border-sky-300/70",
    iconBg: "bg-sky-50 text-sky-600",
  },
  "AI & LLM Technologies": {
    icon: faBrain,
    accent: "from-indigo-500/15 via-transparent to-blue-500/10",
    border: "hover:border-indigo-300/60",
    iconBg: "bg-indigo-50 text-indigo-600",
  },
  Databases: {
    icon: faDatabase,
    accent: "from-emerald-500/10 via-transparent to-transparent",
    border: "hover:border-emerald-300/60",
    iconBg: "bg-emerald-50 text-emerald-700 dark:text-emerald-400",
  },
  "Cloud & DevOps": {
    icon: faCloud,
    accent: "from-cyan-500/15 via-transparent to-zinc-900/5",
    border: "hover:border-cyan-300/60",
    iconBg: "bg-cyan-50 text-cyan-700",
  },
};

export const About = () => {
  const skills = {
    Languages: ["Java", "Python", "JavaScript", "C/C++"],
    "Backend Technologies": ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Microservices"],
    "Frontend Technologies": ["React.js", "CSS", "Tailwind CSS"],
    "AI & LLM Technologies": ["OpenAI SDK", "LangChain", "LangGraph", "RAG Pipelines", "Vector Databases", "Weaviate"],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    "Cloud & DevOps": ["Docker", "CI/CD", "Git", "GitHub", "Google Cloud Platform", "Postman"],
  };

  const skillLevels = {
    Python: 95,
    FastAPI: 92,
    "LangChain & LangGraph": 88,
    Java: 85,
    "REST APIs & Microservices": 90,
    "React.js": 80,
    PostgreSQL: 85,
    "Docker & CI/CD": 82,
    "RAG Pipelines": 88,
    "Google Cloud Platform": 75,
  };

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Engineering in Computer Science",
      grade: "CGPA: 7.76",
      period: "2021 – 2025",
      location: "Mohali",
    },
  ];

  const fundamentals: { name: string; icon: IconDefinition }[] = [
    { name: "DBMS", icon: faDatabase },
    { name: "Software Engineering", icon: faGears },
    { name: "Networking", icon: faNetworkWired },
    { name: "Data Structures & Algorithms", icon: faBrain },
    { name: "Operating Systems", icon: faDesktop },
  ];

  const edu = education[0];

  return (
    <section id="about" className="relative py-8 md:py-10 section-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Profile
          </p>
          <h2 className="mb-4 font-heading text-4xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-3xl font-body text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Backend-Focused Software Engineer with strong expertise in Python, scalable backend systems,
            API-driven architectures, and AI-powered application development. Experienced in building
            distributed systems, intelligent automation workflows, RAG pipelines, and production-grade
            cloud deployed applications with focus on performance and scalability.
          </p>
        </div>

        {/* Education + Technical Skills — balanced layout */}
        <div className="mb-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left — Education featured */}
          <div className="lg:col-span-5">
            <h3 className="mb-5 font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              Education
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={cardInView}
              transition={{ duration: 0.45, delay: 0 }}
              whileHover={cardHover}
              className="relative"
            >
              {/* Decorative academic panel */}
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-3 -top-3 z-0 hidden h-24 w-20 rounded-xl border border-blue-200/60 dark:border-blue-800/60 bg-gradient-to-br from-blue-50 to-white shadow-md sm:block"
              />
              <motion.div
                aria-hidden
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="pointer-events-none absolute -bottom-4 -left-2 z-0 hidden h-16 w-16 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 shadow-sm sm:block"
              />

              <div className="relative z-10 overflow-hidden rounded-2xl border border-blue-200/70 dark:border-blue-800/70 bg-white/85 dark:bg-zinc-900/85 p-[1px] shadow-xl shadow-blue-500/10 backdrop-blur-xl ring-1 ring-blue-500/15">
                <div className="relative overflow-hidden rounded-[15px] bg-white/95 dark:bg-zinc-950/95 p-6 sm:p-7">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06)_0%,transparent_45%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />

                  <div className="relative">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-zinc-800 text-white shadow-lg shadow-blue-500/25">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
                      </div>
                      <span className="rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 font-body text-xs font-semibold text-blue-700 dark:text-blue-300">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="mb-2 font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
                      {edu.institution}
                    </h4>
                    <p className="mb-4 border-l-2 border-blue-500 pl-3 font-body text-base font-medium leading-snug text-blue-600 dark:text-blue-400 sm:text-lg">
                      {edu.degree}
                    </p>
                    <p className="mb-5 font-body text-zinc-600 dark:text-zinc-400">{edu.grade}</p>

                    <div className="mb-1 flex items-center gap-2 font-body text-sm text-zinc-500 dark:text-zinc-400">
                      <FontAwesomeIcon icon={faLocationDot} className="text-zinc-400 dark:text-zinc-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats chips — intentional left fill */}
              <div className="relative z-10 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: faAward, label: "CGPA", value: "CGPA: 7.76" },
                  { icon: faCalendarDays, label: "Duration", value: "2021 – 2025" },
                  { icon: faLocationDot, label: "Location", value: "Mohali" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={cardInView}
                    transition={{ duration: 0.45, delay: (i + 1) * 0.06 }}
                    whileHover={cardHover}
                    className="rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-3 py-3 shadow-sm backdrop-blur-sm"
                  >
                    <div className="mb-1 flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                      <FontAwesomeIcon icon={chip.icon} className="text-xs" />
                      <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        {chip.label}
                      </span>
                    </div>
                    <p className="font-body text-sm font-semibold text-zinc-800 dark:text-zinc-100">{chip.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Technical Skills compact grid */}
          <div className="lg:col-span-7">
            <h3 className="mb-5 font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([category, skillList], index) => {
                const meta = skillMeta[category] ?? skillMeta.Languages;
                return (
                  <SkillCategoryCard
                    key={category}
                    category={category}
                    skillList={skillList}
                    index={index}
                    meta={meta}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-8 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text">
            Core Fundamentals
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
            {fundamentals.map((fundamental, index) => (
              <FundamentalCard
                key={fundamental.name}
                fundamental={fundamental}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-8 text-center font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {Object.entries(skillLevels).map(([skill, level], index) => (
              <SkillProgressCard key={skill} skill={skill} level={level} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategoryCard = ({
  category,
  skillList,
  index,
  meta,
}: {
  category: string;
  skillList: string[];
  index: number;
  meta: { icon: IconDefinition; accent: string; border: string; iconBg: string };
}) => {
  const reveal = useReplayInView(index);

  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={cardHover}
      className="h-full"
    >
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/85 dark:bg-zinc-900/85 p-[1px] shadow-md shadow-zinc-200/30 backdrop-blur-xl transition-all duration-300 hover:shadow-lg ${meta.border}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-80`}
        />
        <div className="relative flex h-full flex-col rounded-[15px] bg-white/90 dark:bg-zinc-900/90 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2.5">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${meta.iconBg}`}>
              <FontAwesomeIcon icon={meta.icon} className="text-sm" />
            </div>
            <h4 className="font-heading text-sm font-bold leading-snug text-zinc-900 dark:text-zinc-50 sm:text-[15px]">
              {category}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-default rounded-full border border-zinc-200/90 dark:border-zinc-700/90 bg-zinc-50/90 dark:bg-zinc-800/90 px-2.5 py-1 font-body text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm transition-colors hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 hover:shadow-[0_0_12px_rgba(37,99,235,0.15)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillProgressCard = ({
  skill,
  level,
  index,
}: {
  skill: string;
  level: number;
  index: number;
}) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const reveal = useReplayInView(index);

  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={cardHover}
    >
      <Card className="overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 shadow-lg shadow-zinc-200/30 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-body font-semibold text-zinc-900 dark:text-zinc-50">{skill}</h4>
            <span className="font-body font-bold text-blue-600 dark:text-blue-400">{animatedLevel}%</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
            <motion.div
              className="h-2.5 rounded-full bg-gradient-to-r from-zinc-700 to-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={cardInView}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.05,
              }}
              onViewportEnter={() => setAnimatedLevel(level)}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FundamentalCard = ({
  fundamental,
  index,
}: {
  fundamental: { name: string; icon: IconDefinition };
  index: number;
}) => {
  const reveal = useReplayInView(index);

  return (
    <motion.div
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={cardHover}
    >
      <Card className="overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 shadow-lg shadow-zinc-200/30 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-200/60 hover:shadow-xl">
        <CardContent className="p-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <FontAwesomeIcon icon={fundamental.icon} className="text-xl" />
            </div>
            <span className="font-body text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {fundamental.name}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
