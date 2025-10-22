
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
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 gradient-text text-glow">Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {experience.logo && (
              <div className="flex-shrink-0">
                <img 
                  src={experience.logo} 
                  alt={`${experience.company} logo`} 
                  className="w-24 h-24 object-contain rounded-xl border border-white/20 glow-effect"
                />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white gradient-text">{experience.company}</h3>
                <Badge 
                  variant={experience.type === "Current" ? "default" : "secondary"}
                  className={experience.type === "Current" ? "glass-effect text-green-300 border-green-400/30" : "glass-effect text-gray-300 border-gray-400/30"}
                >
                  {experience.type}
                </Badge>
              </div>
              
              <h4 className="text-xl font-semibold text-blue-400 mb-4">{experience.position}</h4>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-400" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-purple-400" />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-gray-300 flex items-start gap-3 leading-relaxed">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1 flex-shrink-0 glow-effect"></span>
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
