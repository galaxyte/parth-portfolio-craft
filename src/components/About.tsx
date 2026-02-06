
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Smartphone, Network, Settings, Brain, Monitor } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript"],
    "Frameworks": ["FastAPI", "Flask", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Next.js"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL", "Oracle" , "VectorDB" , "Weaviate"],
    "DevOps": ["GitHub", "Docker", "Postman", "GCP"],
    "AI": ["GenAI", "OpenAI Agents SDK", "CrewAI", "LangGraph", "AutoGen", "MCP (Model Context Protocol)" ,"LongChain" , "LLM" ]
  };

  const skillLevels = {
    "Python": 95,
    "JavaScript": 90,
    "React.js": 88,
    "Node.js": 85,
    "TypeScript": 82,
    "FastAPI": 80,
    "MongoDB": 85,
    "PostgreSQL": 75,
    "Docker": 70,
    "AWS/GCP": 65
  };

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor Of Engineering in Computer Science",
      grade: "CGPA: 7.76",
      period: "2021-2025",
      location: "Mohali"
    },
    {
      institution: "Golden Bells Public School",
      degree: "Intermediate",
      grade: "Percentage: 88.4%",
      period: "2020-2021",
      location: "Chandigarh"
    }
  ];

  const fundamentals = [
    { name: "DBMS", icon: Database },
    { name: "Software Engineering", icon: Settings },
    { name: "Networking", icon: Network },
    { name: "Data Structures & Algorithms", icon: Brain },
    { name: "Operating Systems", icon: Monitor }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-green-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4 gradient-text text-glow">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate Software Developer with expertise in full-stack web development. 
            I love creating innovative solutions and working with cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 gradient-text">Education</h3>
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

          {/* Technical Skills */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 gradient-text">Technical Skills</h3>
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

        {/* Key Fundamentals */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 gradient-text">Core Fundamentals</h3>
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

        {/* Skills Progress Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 gradient-text text-center">Technical Proficiency</h3>
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

// Education Card Component with Framer Motion
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
          <h4 className="text-xl font-semibold text-slate-800 mb-2">{education.institution}</h4>
          <p className="text-blue-600 font-medium mb-2">{education.degree}</p>
          <p className="text-slate-600 mb-3">{education.grade}</p>
          <div className="flex justify-between items-center text-sm text-slate-500">
            <span>{education.period}</span>
            <span>{education.location}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Skills Card Component with Framer Motion
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
          <h4 className="font-semibold text-slate-800 mb-4 text-xl">{category}</h4>
          <div className="flex flex-wrap gap-3">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass-effect text-blue-700 border-blue-200 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-300"
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

// Skill Progress Card Component with Framer Motion
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
            <h4 className="text-slate-800 font-semibold">{skill}</h4>
            <span className="text-blue-600 font-bold">{animatedLevel}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <motion.div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
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

// Fundamental Card Component with Framer Motion
const FundamentalCard = ({ fundamental, index }: { fundamental: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  const IconComponent = fundamental.icon;

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
            <IconComponent size={32} className="text-blue-600" />
            <span className="text-slate-600 font-medium text-sm">{fundamental.name}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
