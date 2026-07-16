
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faAward,
  faCode,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cardHover } from "@/lib/motion";
import { useReplayInView } from "@/hooks/use-replay-in-view";

export const Achievements = () => {
  const achievements: {
    title: string;
    platform: string;
    type: string;
    icon: IconDefinition;
    description: string;
    rewards?: string[];
    skills?: string[];
    tasks?: string[];
    date?: string;
    color: string;
  }[] = [
    {
      title: "Runner-up, Hackathon Sponsored by HP Power",
      platform: "Unstop",
      type: "Competition",
      icon: faTrophy,
      description: "Collaborated with teammates to design an AI-assisted green energy optimization prototype, showcasing strong problem-solving, teamwork, and technical expertise under pressure — which led to a runner-up finish in the competition.",
      rewards: ["T-shirt", "Diary"],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Essentials of Java Certification",
      platform: "Microsoft",
      type: "Certification",
      icon: faAward,
      description: "Covered key concepts, including object-oriented programming, data structures, and algorithms in Java.",
      skills: ["OOP", "Data Structures", "Algorithms"],
      color: "from-zinc-700 to-blue-600"
    },
    {
      title: "J.P. Morgan Software Engineering Virtual Experience",
      platform: "Forage",
      type: "Virtual Experience",
      icon: faCode,
      date: "March 2024",
      description: "Completed comprehensive software engineering tasks including setting up development environment and working with real-world codebase.",
      tasks: [
        "Established local development environment with 100+ files and dependencies",
        "Rectified 15 broken files within the repository",
        "Utilized JPMorgan Chase's Perspective library for dynamic graph generation"
      ],
      color: "from-zinc-600 to-zinc-800"
    }
  ];

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  return (
    <section id="achievements" className="relative py-8 md:py-10 section-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-center md:mb-8"
        >
          <p className="mb-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Highlights
          </p>
          <h2 className="mb-3 font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-50 gradient-text sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-3xl font-body text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Recognition of my skills and accomplishments in various competitions, certifications, and experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: {
    title: string;
    platform: string;
    type: string;
    icon: IconDefinition;
    description: string;
    rewards?: string[];
    skills?: string[];
    tasks?: string[];
    date?: string;
    color: string;
  };
  index: number;
}) => {
  const reveal = useReplayInView(index);

  return (
    <motion.article
      ref={reveal.ref}
      initial={reveal.initial}
      animate={reveal.animate}
      transition={reveal.transition}
      whileHover={cardHover}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/85 dark:bg-zinc-900/85 p-[1px] shadow-md shadow-zinc-200/35 backdrop-blur-xl transition-shadow duration-300 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-zinc-900/5 opacity-70" />
      <div className="relative flex flex-col rounded-[15px] bg-white/92 dark:bg-zinc-900/92 p-4 sm:p-5">
        {/* Top: icon + title + tags */}
        <div className="mb-3 flex gap-3">
          <motion.div
            whileHover={{ scale: 1.06, rotate: -3 }}
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${achievement.color} shadow-md`}
          >
            <FontAwesomeIcon icon={achievement.icon} className="text-sm text-white" />
          </motion.div>

          <div className="min-w-0 flex-1">
            <h3 className="mb-2 font-heading text-[15px] font-bold leading-snug text-zinc-900 dark:text-zinc-50 sm:text-base">
              {achievement.title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/70 px-2 py-0 text-[10px] font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50">
                {achievement.platform}
              </Badge>
              <Badge className="rounded-full border border-blue-100 dark:border-blue-900 bg-blue-50/80 dark:bg-blue-950/50 px-2 py-0 text-[10px] font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                {achievement.type}
              </Badge>
              {achievement.date && (
                <span className="font-body text-[11px] text-zinc-400 dark:text-zinc-500">
                  {achievement.date}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Body: description */}
        <p className="mb-3 font-body text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
          {achievement.description}
        </p>

        {/* Bottom sub-blocks */}
        {achievement.tasks && (
          <div className="mt-auto rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-800/80 px-3 py-2.5">
            <h4 className="mb-1.5 font-heading text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Key Tasks:
            </h4>
            <ul className="space-y-1.5">
              {achievement.tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="flex items-start gap-2 font-body text-[12px] leading-snug text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    <FontAwesomeIcon icon={faCheck} className="text-[8px]" />
                  </span>
                  <span className="min-w-0">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {achievement.skills && (
          <div className="mt-auto rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-800/80 px-3 py-2.5">
            <h4 className="mb-1.5 font-heading text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Skills Covered:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {achievement.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-default rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-0.5 font-body text-[11px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {achievement.rewards && (
          <div className="mt-auto rounded-xl border border-amber-100 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/40 px-3 py-2.5">
            <h4 className="mb-1.5 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-700/80 dark:text-amber-400/80">
              Rewards:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {achievement.rewards.map((reward) => (
                <motion.span
                  key={reward}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-default rounded-full border border-amber-200 dark:border-amber-800 bg-white dark:bg-zinc-900 px-2 py-0.5 font-body text-[11px] font-medium text-amber-800 dark:text-amber-300"
                >
                  {reward}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};
