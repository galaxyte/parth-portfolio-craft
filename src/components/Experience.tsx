
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import jungleworksLogo from "./assests/jungleworks_logo.jpg";
import smarterCodesLogo from "./assests/1631327478988.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "Smarter.Codes",
      logo: smarterCodesLogo,
      position: "Software Developer",
      period: "July 2025 - Present",
      location: "Remote",
      type: "Current",
      description: [
        "Currently working at Synterex Engineering Group, focusing on the development and enhancement of dashboard features for the Algil Marketplace platform.",
        "Responsible for implementing new functionalities and fixing critical bugs to ensure a smooth and intuitive user experience.",
        "Actively contribute to the development and debugging of the AutoMapping feature, aimed at streamlining data integration and improving automation workflows.",
        "Work aligns with Synterex's mission of leveraging agile methodologies and AI-driven solutions like AgileWriter to support efficient and accessible clinical documentation."
      ]
      
    },
    {
      company: "Jungle Works",
      logo: jungleworksLogo,
      position: "Associate Software Developer Intern",
      period: "May 2025 - June 2025",
      location: "Mohali",
      type: "Previous",
      description: [
        "Worked with the Flash Delivery team, focusing on resolving issues and debugging errors on the Flash Delivery website.",
        "Improved the website's functionality to enhance user experience and provide better tools for merchants.",
        "Collaborated with team members to optimize and ensure seamless delivery processes."
      ]
    },
    {
      company: "Zeal Web Technologies",
      position: "Software Developer Intern",
      period: "June 2024 – May 2025",
      location: "Remote",
      type: "Previous",
      description: [
        "Specialized in developing and maintaining websites for clients, seamlessly managing both frontend and backend tasks.",
        "Crafted dynamic, scalable, high-performance web solutions using MongoDB, Express.js, React, and Node.js (MERN stack).",
        "Managed web hosting, API integrations, and database management, along with optimizing website performance and ensuring security.",
        "Actively collaborated with designers and testers to deliver tailored, cutting-edge solutions that meet client needs and exceed expectations."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, from internships to current role
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Card Component with Framer Motion
const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0, y: 20 }}
      animate={isInView ? { x: 0, opacity: 1, y: 0 } : { x: -100, opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.2
      }}
    >
      <Card className="hover-scale">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {experience.logo && (
              <div className="flex-shrink-0">
                <img 
                  src={experience.logo} 
                  alt={`${experience.company} logo`} 
                  className="w-20 h-20 object-contain rounded-lg border"
                />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
                <Badge 
                  variant={experience.type === "Current" ? "default" : "secondary"}
                  className={experience.type === "Current" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}
                >
                  {experience.type}
                </Badge>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-600 mb-2">{experience.position}</h4>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-gray-700 flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
