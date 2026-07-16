
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faAward,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

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

  return (
    <section id="achievements" className="py-20 section-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-900 mb-4 gradient-text text-glow font-heading">Achievements</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-body">
            Recognition of my skills and accomplishments in various competitions, certifications, and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px",
    amount: 0.15
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        y: 12, 
        opacity: 0, 
        scale: 0.98
      }}
      animate={isInView ? { 
        y: 0, 
        opacity: 1, 
        scale: 1
      } : { 
        y: 12, 
        opacity: 0, 
        scale: 0.98
      }}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut",
        delay: index * 0.03
      }}
    >
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-8 h-full flex flex-col">
          <div className="text-center mb-6">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center glow-effect pulse-glow`}>
              <FontAwesomeIcon icon={achievement.icon} className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4 gradient-text font-heading">{achievement.title}</h3>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Badge variant="secondary" className="bg-zinc-100 text-zinc-700 border-zinc-200 font-body">
                {achievement.platform}
              </Badge>
              <Badge variant="outline" className="bg-zinc-50 text-zinc-600 border-zinc-200 font-body">
                {achievement.type}
              </Badge>
            </div>
            {achievement.date && (
              <p className="text-sm text-zinc-500 font-body">{achievement.date}</p>
            )}
          </div>

          <p className="text-zinc-600 mb-6 flex-grow leading-relaxed font-body">{achievement.description}</p>

          {achievement.tasks && (
            <div className="mb-6">
              <h4 className="font-semibold text-zinc-900 mb-3 text-lg font-heading">Key Tasks:</h4>
              <ul className="space-y-2">
                {achievement.tasks.map((task: string, taskIndex: number) => (
                  <li key={taskIndex} className="text-zinc-600 flex items-start gap-3 text-sm font-body">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0"></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {achievement.skills && (
            <div className="mb-6">
              <h4 className="font-semibold text-zinc-900 mb-3 text-lg font-heading">Skills Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-100 text-zinc-700 border border-zinc-200 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all duration-300 font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {achievement.rewards && (
            <div className="mt-auto">
              <h4 className="font-semibold text-zinc-900 mb-3 text-lg font-heading">Rewards:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.rewards.map((reward: string) => (
                  <Badge key={reward} className="bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-all duration-300 font-body">
                    {reward}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
