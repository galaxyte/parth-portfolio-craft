
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faGears,
  faNetworkWired,
  faBrain,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const skills = {
    "Languages": ["Java", "Python", "JavaScript", "C/C++"],
    "Backend Technologies": ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Microservices"],
    "Frontend Technologies": ["React.js", "CSS", "Tailwind CSS"],
    "AI & LLM Technologies": ["OpenAI SDK", "LangChain", "LangGraph", "RAG Pipelines", "Vector Databases", "Weaviate"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    "Cloud & DevOps": ["Docker", "CI/CD", "Git", "GitHub", "Google Cloud Platform", "Postman"]
  };

  const skillLevels = {
    "Python": 95,
    "FastAPI": 92,
    "LangChain & LangGraph": 88,
    "Java": 85,
    "REST APIs & Microservices": 90,
    "React.js": 80,
    "PostgreSQL": 85,
    "Docker & CI/CD": 82,
    "RAG Pipelines": 88,
    "Google Cloud Platform": 75
  };

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Engineering in Computer Science",
      grade: "CGPA: 7.76",
      period: "2021 – 2025",
      location: "Mohali"
    }
  ];

  const fundamentals: { name: string; icon: IconDefinition }[] = [
    { name: "DBMS", icon: faDatabase },
    { name: "Software Engineering", icon: faGears },
    { name: "Networking", icon: faNetworkWired },
    { name: "Data Structures & Algorithms", icon: faBrain },
    { name: "Operating Systems", icon: faDesktop }
  ];

  return (
    <section id="about" className="py-20 section-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-900 mb-4 gradient-text text-glow font-heading">About Me</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-body">
            Backend-Focused Software Engineer with strong expertise in Python, scalable backend systems, 
            API-driven architectures, and AI-powered application development. Experienced in building 
            distributed systems, intelligent automation workflows, RAG pipelines, and production-grade 
            cloud deployed applications with focus on performance and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 mb-8 gradient-text font-heading">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationCard 
                  key={index} 
                  education={edu}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-zinc-900 mb-8 gradient-text font-heading">Technical Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList], index) => (
                <SkillsCard 
                  key={category} 
                  category={category}
                  skillList={skillList}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-zinc-900 mb-8 gradient-text font-heading">Core Fundamentals</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {fundamentals.map((fundamental, index) => (
              <FundamentalCard 
                key={fundamental.name} 
                fundamental={fundamental}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-zinc-900 mb-8 gradient-text text-center font-heading">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillLevels).map(([skill, level], index) => (
              <SkillProgressCard 
                key={skill}
                skill={skill}
                level={level}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ education, index }: { education: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }}
    >
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold text-zinc-900 mb-2 font-heading">{education.institution}</h4>
          <p className="text-blue-600 font-medium mb-2 font-body">{education.degree}</p>
          <p className="text-zinc-600 mb-3 font-body">{education.grade}</p>
          <div className="flex justify-between items-center text-sm text-zinc-500 font-body">
            <span>{education.period}</span>
            <span>{education.location}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsCard = ({ category, skillList, index }: { category: string, skillList: string[], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }}
    >
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-6">
          <h4 className="font-semibold text-zinc-900 mb-4 text-xl font-heading">{category}</h4>
          <div className="flex flex-wrap gap-3">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass-effect text-zinc-700 border-zinc-200 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 font-body"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillProgressCard = ({ skill, level, index }: { skill: string, level: number, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }}
    >
      <Card className="glass-card glow-effect">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-zinc-900 font-semibold font-body">{skill}</h4>
            <span className="text-blue-600 font-bold font-body">{animatedLevel}%</span>
          </div>
          <div className="w-full bg-zinc-200 rounded-full h-3">
            <motion.div 
              className="bg-gradient-to-r from-zinc-700 to-blue-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${animatedLevel}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FundamentalCard = ({ fundamental, index }: { fundamental: { name: string; icon: IconDefinition }, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }}
    >
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon icon={fundamental.icon} className="text-3xl text-blue-600" />
            <span className="text-zinc-600 font-medium text-sm font-body">{fundamental.name}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
