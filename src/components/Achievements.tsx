
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Code } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Achievements = () => {
  const achievements = [
    {
      title: "Runner-up, Hackathon Sponsored by HP Power",
      platform: "Unstop",
      type: "Competition",
      icon: Trophy,
      description: "Collaborated with teammates to design an AI-assisted green energy optimization prototype, showcasing strong problem-solving, teamwork, and technical expertise under pressure — which led to a runner-up finish in the competition.",
      rewards: ["T-shirt", "Diary"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Essentials of Java Certification",
      platform: "Microsoft",
      type: "Certification",
      icon: Award,
      description: "Covered key concepts, including object-oriented programming, data structures, and algorithms in Java.",
      skills: ["OOP", "Data Structures", "Algorithms"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "J.P. Morgan Software Engineering Virtual Experience",
      platform: "Forage",
      type: "Virtual Experience",
      icon: Code,
      date: "March 2024",
      description: "Completed comprehensive software engineering tasks including setting up development environment and working with real-world codebase.",
      tasks: [
        "Established local development environment with 100+ files and dependencies",
        "Rectified 15 broken files within the repository",
        "Utilized JPMorgan Chase's Perspective library for dynamic graph generation"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 gradient-text text-glow">Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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

// Achievement Card Component with Framer Motion
const AchievementCard = ({ achievement, index }: { achievement: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  const IconComponent = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ 
        y: 50, 
        opacity: 0, 
        scale: 0.9,
        rotateY: index % 2 === 0 ? -15 : 15
      }}
      animate={isInView ? { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotateY: 0
      } : { 
        y: 50, 
        opacity: 0, 
        scale: 0.9,
        rotateY: index % 2 === 0 ? -15 : 15
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.2
      }}
    >
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-8 h-full flex flex-col">
          <div className="text-center mb-6">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center glow-effect pulse-glow`}>
              <IconComponent size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{achievement.title}</h3>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Badge variant="secondary" className="glass-effect text-blue-300 border-blue-400/30">
                {achievement.platform}
              </Badge>
              <Badge variant="outline" className="glass-effect text-gray-300 border-gray-400/30">
                {achievement.type}
              </Badge>
            </div>
            {achievement.date && (
              <p className="text-sm text-gray-400">{achievement.date}</p>
            )}
          </div>

          <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{achievement.description}</p>

          {achievement.tasks && (
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3 text-lg">Key Tasks:</h4>
              <ul className="space-y-2">
                {achievement.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="text-gray-300 flex items-start gap-3 text-sm">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1 flex-shrink-0 glow-effect"></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {achievement.skills && (
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3 text-lg">Skills Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 glass-effect text-blue-300 border-blue-400/30 rounded-full text-xs font-medium hover:bg-blue-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {achievement.rewards && (
            <div className="mt-auto">
              <h4 className="font-semibold text-white mb-3 text-lg">Rewards:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.rewards.map((reward) => (
                  <Badge key={reward} className="glass-effect text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/20 transition-all duration-300">
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
