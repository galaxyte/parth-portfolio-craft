
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Certificate, Code } from "lucide-react";

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
      icon: Certificate,
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
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition of my technical skills, problem-solving abilities, and continuous learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-xl h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <Badge variant="secondary">{achievement.type}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{achievement.platform}</p>
                  {achievement.date && (
                    <p className="text-gray-500 text-sm mb-3">{achievement.date}</p>
                  )}
                  
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    {achievement.description}
                  </p>

                  {/* Tasks/Skills */}
                  {achievement.tasks && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Tasks:</h4>
                      <ul className="space-y-1">
                        {achievement.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{task}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
