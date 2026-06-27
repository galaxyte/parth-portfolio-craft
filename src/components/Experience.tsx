
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import smarterCodesLogo from "./assests/1631327478988.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "Done Mortgage",
      position: "Full Stack Developer",
      period: "Nov 2025 – Present",
      location: "Remote",
      type: "Current",
      description: [
        "Developed scalable backend services using Python and FastAPI for mortgage automation systems handling borrower verification, financial document processing, and high-volume workflow orchestration.",
        "Built AI-powered document processing pipelines for automated classification, structured data extraction, validation workflows, and reducing manual review effort across mortgage processing systems.",
        "Engineered ADMS self-learning AI agent architecture with persistent learning memory, correction tracking, semantic search, and Retrieval-Augmented Generation (RAG) pipelines using pgvector for context-aware document intelligence.",
        "Developed intelligent chat-agent and review systems enabling grounded LLM-based document querying, confidence scoring, anomaly detection, and automated document review workflows as part of internal TemperCheck validation systems.",
        "Improved production scalability through microservice architecture, asynchronous background task processing, Docker-based deployments, CI/CD pipelines, and backend performance optimization for production-grade infrastructure."
      ]
    },
    {
      company: "Smarter.Codes",
      logo: smarterCodesLogo,
      position: "Full Stack Developer",
      period: "Jul 2025 – Oct 2025",
      location: "Remote",
      type: "Previous",
      description: [
        "Developed scalable backend services using Python and FastAPI for AI-driven automation platforms.",
        "Built REST APIs and intelligent workflows for task automation and real-time data processing.",
        "Contributed to microservice architecture, backend optimization, and deployment workflows.",
        "Participated in debugging, code reviews, and performance improvements for production systems."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-green-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4 gradient-text text-glow">Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building scalable backend systems, AI-powered workflows, and production-grade cloud applications
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
                  className="w-24 h-24 object-contain rounded-xl border border-slate-200 shadow-sm"
                />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-slate-800 gradient-text">{experience.company}</h3>
                <Badge 
                  variant={experience.type === "Current" ? "default" : "secondary"}
                  className={experience.type === "Current" ? "bg-green-100 text-green-700 border-green-200" : "bg-slate-100 text-slate-600 border-slate-200"}
                >
                  {experience.type}
                </Badge>
              </div>
              
              <h4 className="text-xl font-semibold text-blue-600 mb-4">{experience.position}</h4>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-green-600" />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-slate-600 flex items-start gap-3 leading-relaxed">
                    <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-1 flex-shrink-0"></span>
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
