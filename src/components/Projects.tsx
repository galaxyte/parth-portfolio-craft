import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFolderOpen,
  faRobot,
  faLayerGroup,
  faGlobe,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { cardHover } from "@/lib/motion";
import { useReplayInView } from "@/hooks/use-replay-in-view";
import { useState } from "react";

const categoryIcon: Record<string, IconDefinition> = {
  "AI/ML": faRobot,
  "Full-Stack": faLayerGroup,
  "Web App": faGlobe,
  Backend: faServer,
  Frontend: faFolderOpen,
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Autodialer",
      description:
        "Developed an AI-assisted calling automation platform that allows teams to queue Twilio test calls, track real-time call status, and even trigger automated calls using natural-language prompts powered by OpenAI.",
      features: [
        "Upload up to 100 Twilio test numbers via text or CSV and run controlled call campaigns",
        "Per-call status tracking with real-time dashboard updates (success, failure, skipped)",
        "AI prompt box that understands natural language commands for call scheduling",
        "CSV export of call logs for auditing and post-run analysis",
        "Twilio test mode-only dialing with safe, sandboxed call execution",
        "Dynamic voice messages powered by OpenAI GPT-4o-mini",
      ],
      technologies: [
        "FastAPI",
        "Twilio Voice API",
        "SQLite",
        "SQLAlchemy",
        "AioSQLite",
        "OpenAI API",
        "Python 3.11",
        "Jinja2",
        "TailwindCSS",
      ],
      accuracy: "Real-time status tracking",
      improvement: "AI-driven voice automation and call orchestration",
      link: "https://autodialer-72pc.onrender.com/",
      category: "AI/ML",
      featured: true,
    },

    {
      title: "AI Blog Generator",
      description:
        "Developed an end-to-end FastAPI web application that generates SEO-ready, long-form blogs (600–800 words) from simple prompts. Users can input up to ten topics, select a tone, and receive polished articles displayed in a modern Tailwind-powered dashboard.",
      features: [
        "Bulk-generate up to 10 blog posts (600–800 words each) in one batch",
        "Option to choose writing tone: Neutral, Formal, Conversational, or Technical",
        "Auto-save every generated blog to SQLite with regenerate and download options",
        "Modern Jinja2 + Tailwind CSS UI with live previews and modal reading experience",
        "Graceful error handling for missing API keys or OpenAI request issues",
        "Full async FastAPI backend for concurrent blog generation and persistence",
      ],
      technologies: [
        "FastAPI",
        "Jinja2",
        "TailwindCSS",
        "SQLite",
        "SQLAlchemy",
        "AioSQLite",
        "OpenAI API",
        "Python 3.11",
      ],
      accuracy: "600–800 word SEO-ready content",
      improvement: "Automated content generation with tone customization",
      link: "https://ai-blog-generator-p06n.onrender.com/",
      category: "AI/ML",
      featured: true,
    },

    {
      title: "Crypto Arbitrage Tracker",
      description:
        "Developed a comprehensive cryptocurrency arbitrage tracking system with React frontend and Python backend, utilizing multiple API keys to monitor price differences across various cryptocurrency exchanges and platforms in real-time.",
      features: [
        "Real-time price monitoring across multiple exchanges",
        "Arbitrage opportunity detection and alerts",
        "Interactive dashboard with price comparison charts",
        "API integration with major crypto exchanges",
        "Profit calculation and historical tracking",
      ],
      technologies: ["React.js", "Python", "FastAPI", "WebSocket", "Chart.js", "REST APIs"],
      accuracy: "Real-time",
      improvement: "Multi-platform monitoring",
      link: "https://crypto-tracker-alpha-navy.vercel.app/",
      category: "Full-Stack",
      featured: true,
    },
    {
      title: "Agentic AI Research Assistant",
      description:
        "Built a sophisticated multi-agent research system with specialized AI agents (Researcher, Summarizer, Validator) capable of autonomously gathering and fact-checking data across web sources using cutting-edge AI technologies.",
      features: [
        "Multi-agent architecture with specialized roles (Researcher, Summarizer, Validator, Presenter)",
        "LangGraph-based workflow orchestration with shared memory and task dependencies",
        "Weaviate vector store integration for semantic retrieval and context continuity",
        "Real-time streaming responses via Server-Sent Events (SSE)",
        "Fact validation with multi-source verification and confidence metrics",
        "Modern React frontend with interactive conversational interface",
      ],
      technologies: [
        "CrewAI",
        "LangGraph",
        "OpenAI SDK",
        "FastAPI",
        "Weaviate",
        "React.js",
        "TailwindCSS",
      ],
      accuracy: "Multi-source validation",
      improvement: "Autonomous research workflow",
      link: "https://agentic-frontend-n4sc.onrender.com/",
      category: "AI/ML",
      featured: true,
    },
    {
      title: "College Recommendation System",
      description:
        "Developed a College Recommendation System with 99% accuracy using React.js, Node.js, Express.js, MongoDB Atlas, and Tailwind CSS to help students find government colleges based on their JEE rank.",
      features: [
        "Interactive card-based UI for seamless search and filtering",
        "College comparison by rank, fees, and placements",
        "RESTful API with optimized recommendation algorithm",
        "Student connection feature for real insights",
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
      accuracy: "99%",
      link: "https://www.unifindss.com/",
      category: "Web App",
    },
    {
      title: "Railway Tracking & Arrival Prediction",
      description:
        "Engineered a comprehensive full-stack railway tracking website with real-time data updates, achieving 99.9% accuracy rate while decreasing update time by 40%.",
      features: [
        "Real-time railway tracking with live updates",
        "Accurate arrival time predictions",
        "Integrated Rapid API for data fetching",
        "Responsive design for mobile and desktop",
      ],
      technologies: ["Express.js", "HTML5", "CSS3", "MongoDB", "Rapid API"],
      accuracy: "99.9%",
      improvement: "40% faster updates",
      link: "https://github.com/galaxyte/Rail-Info",
      category: "Backend",
    },
    {
      title: "Distributed Learning Management System",
      description:
        "Collaborated on an innovative educational platform with integrated performance tracking, increasing content upload frequency by 50% and enhanced analytics for improved user experience.",
      features: [
        "Semantic search using OpenAI embeddings",
        "Web scraping and intelligent content chunking",
        "FastAPI backend for processing and querying",
        "Weaviate vector database for similarity matching",
        "React frontend displaying top 10 relevant results",
      ],
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      improvement: "50% increase in content uploads",
      link: "https://github.com/galaxyte/Distributed_LMS",
      category: "Full-Stack",
    },
    {
      title: "Semantic Search Engine",
      description:
        "Developed a full-stack semantic search application that extracts, processes, and indexes web content using OpenAI embeddings and Weaviate, delivering top 10 contextually relevant results with over 95% match accuracy and optimized response times.",

      features: [
        "Performance tracking and analytics",
        "Content management system",
        "User engagement monitoring",
        "Enhanced learning experience",
      ],
      technologies: ["React.js", "FastAPI", "Python", "Weaviate", "OpenAI API"],
      accuracy: "95%",
      improvement: "60% faster updates",
      link: "https://github.com/galaxyte/Semantic-search",
      category: "AI/ML",
    },
    {
      title: "Abnormal File Vault",
      description:
        "Developed a secure file storage system with advanced encryption and access control, ensuring data privacy and security for sensitive documents.",
      features: [
        "End-to-end encryption for file security",
        "Role-based access control system",
        "Audit logging and monitoring",
        "Secure file sharing capabilities",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/galaxyte/Abnormal-File-Vault",
      category: "Full-Stack",
    },
  ];

  const filters = ["All", "Full-Stack", "AI/ML", "Web App", "Backend", "Frontend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const wideTitles = new Set(
    activeFilter === "All"
      ? filteredProjects
          .filter((p) => p.featured)
          .slice(0, 2)
          .map((p) => p.title)
      : []
  );

  return (
    <section id="projects" className="relative py-8 md:py-10 section-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <p className="mb-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Selected work
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-3xl font-body text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            A showcase of my technical projects, demonstrating problem-solving skills and
            full-stack development expertise
          </p>
        </div>

        {/* Compact filter pills */}
        <LayoutGroup>
          <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-full border border-zinc-200/80 dark:border-zinc-700/80 bg-white/60 dark:bg-zinc-900/60 p-1.5 shadow-sm backdrop-blur-md sm:inline-flex sm:w-auto sm:mx-auto sm:flex">
            <div className="flex flex-wrap justify-center gap-1.5">
              {filters.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <motion.button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative cursor-pointer rounded-full px-3.5 py-1.5 font-body text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-500/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{filter}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </LayoutGroup>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                className={wideTitles.has(project.title) ? "md:col-span-2" : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 12 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  wide={wideTitles.has(project.title)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  wide,
}: {
  project: {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    accuracy?: string;
    improvement?: string;
    link: string;
    category: string;
    featured?: boolean;
  };
  index: number;
  wide?: boolean;
}) => {
  const icon = categoryIcon[project.category] ?? faFolderOpen;
  const reveal = useReplayInView(index);

  return (
    <motion.article
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={cardHover}
      className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/85 dark:bg-zinc-900/85 p-[1px] shadow-md shadow-zinc-200/40 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-200/70 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-zinc-900/5 opacity-60 transition-opacity group-hover:opacity-100" />
      {/* Accent strip */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 to-zinc-700 opacity-80" />

      <div className="relative flex h-full flex-col rounded-[15px] bg-white/92 dark:bg-zinc-900/92 p-4 pl-5 sm:p-5 sm:pl-6">
        {/* Header */}
        <div className="mb-2.5 flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/70 text-blue-600 dark:text-blue-400">
            <FontAwesomeIcon icon={icon} className="text-sm" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <h3 className="font-heading text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-50 sm:text-xl">
                {project.title}
              </h3>
              {project.featured && (
                <span className="rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-sky-50 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  Featured
                </span>
              )}
              <span className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/70 px-2 py-0.5 font-body text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <p className="mb-3 font-body text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
          {project.description}
        </p>

        <div className="mb-3">
          <h4 className="mb-1.5 font-heading text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Key Features:
          </h4>
          <ul className={`space-y-1 ${wide ? "sm:columns-2 sm:gap-x-6" : ""}`}>
            {project.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex break-inside-avoid items-start gap-2 font-body text-[12px] leading-snug text-zinc-600 dark:text-zinc-400 sm:text-[13px]"
              >
                <span className="mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <FontAwesomeIcon icon={faCheck} className="text-[7px]" />
                </span>
                <span className="min-w-0 break-words">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-2.5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Badge
                variant="secondary"
                className="cursor-default rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/70 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300"
              >
                {tech}
              </Badge>
            </motion.span>
          ))}
        </div>

        {(project.accuracy || project.improvement) && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.accuracy && (
              <span className="inline-block rounded-full border border-zinc-300/80 dark:border-zinc-600/80 bg-zinc-100/80 dark:bg-zinc-800/80 px-2.5 py-0.5 font-body text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                Accuracy: {project.accuracy}
              </span>
            )}
            {project.improvement && (
              <span className="inline-block rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 font-body text-[11px] font-semibold text-blue-700 dark:text-blue-300">
                {project.improvement}
              </span>
            )}
          </div>
        )}

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-auto inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-600 px-3.5 py-1.5 font-body text-sm font-medium text-white shadow-sm shadow-blue-500/20 transition-colors hover:bg-blue-700"
        >
          View Project →
        </motion.a>
      </div>
    </motion.article>
  );
};
