
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
      description: "Collaborated with teammates to build an innovative solution, leading to a runner-up finish. Demonstrated problem-solving, teamwork, and technical expertise under pressure.",
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
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
      <Card className="hover-scale">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="text-center mb-4">
            <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
              <IconComponent size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                {achievement.platform}
              </Badge>
              <Badge variant="outline" className="border-gray-300 text-gray-600">
                {achievement.type}
              </Badge>
            </div>
            {achievement.date && (
              <p className="text-sm text-gray-500">{achievement.date}</p>
            )}
          </div>

          <p className="text-gray-700 mb-4 flex-grow">{achievement.description}</p>

          {achievement.tasks && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Key Tasks:</h4>
              <ul className="space-y-1">
                {achievement.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="text-gray-700 flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {achievement.skills && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Skills Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {achievement.rewards && (
            <div className="mt-auto">
              <h4 className="font-semibold text-gray-900 mb-2">Rewards:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.rewards.map((reward) => (
                  <Badge key={reward} className="bg-yellow-100 text-yellow-700">
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
