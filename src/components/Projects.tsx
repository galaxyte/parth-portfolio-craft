import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      title: "Crypto Arbitrage Tracker",
      description: "Developed a comprehensive cryptocurrency arbitrage tracking system with React frontend and Python backend, utilizing multiple API keys to monitor price differences across various cryptocurrency exchanges and platforms in real-time.",
      features: [
        "Real-time price monitoring across multiple exchanges",
        "Arbitrage opportunity detection and alerts",
        "Interactive dashboard with price comparison charts",
        "API integration with major crypto exchanges",
        "Profit calculation and historical tracking"
      ],
      technologies: ["React.js", "Python", "FastAPI", "WebSocket", "Chart.js", "REST APIs"],
      accuracy: "Real-time",
      improvement: "Multi-platform monitoring",
      link: "https://crypto-tracker-alpha-navy.vercel.app/",
      category: "Full-Stack",
      featured: true
    },
    {
      title: "Agentic AI Research Assistant",
      description: "Built a sophisticated multi-agent research system with specialized AI agents (Researcher, Summarizer, Validator) capable of autonomously gathering and fact-checking data across web sources using cutting-edge AI technologies.",
      features: [
        "Multi-agent architecture with specialized roles (Researcher, Summarizer, Validator, Presenter)",
        "LangGraph-based workflow orchestration with shared memory and task dependencies",
        "Weaviate vector store integration for semantic retrieval and context continuity",
        "Real-time streaming responses via Server-Sent Events (SSE)",
        "Fact validation with multi-source verification and confidence metrics",
        "Modern React frontend with interactive conversational interface"
      ],
      technologies: ["CrewAI", "LangGraph", "OpenAI SDK", "FastAPI", "Weaviate", "React.js", "TailwindCSS"],
      accuracy: "Multi-source validation",
      improvement: "Autonomous research workflow",
      link: "https://agentic-frontend-n4sc.onrender.com/",
      category: "AI/ML",
      featured: true
    },
    {
      title: "College Recommendation System",
      description: "Developed a College Recommendation System with 99% accuracy using React.js, Node.js, Express.js, MongoDB Atlas, and Tailwind CSS to help students find government colleges based on their JEE rank.",
      features: [
        "Interactive card-based UI for seamless search and filtering",
        "College comparison by rank, fees, and placements",
        "RESTful API with optimized recommendation algorithm",
        "Student connection feature for real insights"
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
      accuracy: "99%",
      link: "https://www.unifindss.com/",
      category: "Web App"
    },
    {
      title: "Railway Tracking & Arrival Prediction",
      description: "Engineered a comprehensive full-stack railway tracking website with real-time data updates, achieving 99.9% accuracy rate while decreasing update time by 40%.",
      features: [
        "Real-time railway tracking with live updates",
        "Accurate arrival time predictions",
        "Integrated Rapid API for data fetching",
        "Responsive design for mobile and desktop"
      ],
      technologies: ["Express.js", "HTML5", "CSS3", "MongoDB", "Rapid API"],
      accuracy: "99.9%",
      improvement: "40% faster updates",
      link: "https://github.com/galaxyte/Rail-Info",
      category: "Backend"
    },
    {
      title: "Distributed Learning Management System",
      description: "Collaborated on an innovative educational platform with integrated performance tracking, increasing content upload frequency by 50% and enhanced analytics for improved user experience.",
      features: [
         "Semantic search using OpenAI embeddings",
  "Web scraping and intelligent content chunking",
  "FastAPI backend for processing and querying",
  "Weaviate vector database for similarity matching",
  "React frontend displaying top 10 relevant results"
      ],
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      improvement: "50% increase in content uploads",
      link: "https://github.com/galaxyte/Distributed_LMS",
      category: "Full-Stack"
    },
    {
      title: "Semantic Search Engine",
      description: "Developed a full-stack semantic search application that extracts, processes, and indexes web content using OpenAI embeddings and Weaviate, delivering top 10 contextually relevant results with over 95% match accuracy and optimized response times.",

      features: [
        "Performance tracking and analytics",
        "Content management system",
        "User engagement monitoring",
        "Enhanced learning experience"
      ],
      technologies: ["React.js", "FastAPI", "Python", "Weaviate", "OpenAI API"],
      accuracy: "95%",
      improvement: "60% faster updates",
      link: "https://github.com/galaxyte/Semantic-search",
      category: "AI/ML"
    },
    {
      title: "Abnormal File Vault",
      description: "Developed a secure file storage system with advanced encryption and access control, ensuring data privacy and security for sensitive documents.",
      features: [
        "End-to-end encryption for file security",
        "Role-based access control system",
        "Audit logging and monitoring",
        "Secure file sharing capabilities"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/galaxyte/Abnormal-File-Vault",
      category: "Full-Stack"
    }
  ];

  const filters = ["All", "Full-Stack", "AI/ML", "Web App", "Backend", "Frontend"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 gradient-text text-glow">Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating problem-solving skills and full-stack development expertise
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === filter
                  ? "glass-effect text-blue-300 border-blue-400/30 bg-blue-500/20"
                  : "glass-effect text-gray-300 border-gray-400/30 hover:bg-white/10"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component with Framer Motion
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  // Alternate animation direction based on index
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ 
        x: isEven ? -100 : 100, 
        opacity: 0, 
        y: 20,
        scale: 0.95
      }}
      animate={isInView ? { 
        x: 0, 
        opacity: 1, 
        y: 0,
        scale: 1
      } : { 
        x: isEven ? -100 : 100, 
        opacity: 0, 
        y: 20,
        scale: 0.95
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15
      }}
    >
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4 gradient-text">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-4 text-xl">Key Features:</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-start gap-3">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1 flex-shrink-0 glow-effect"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="glass-effect text-blue-300 border-blue-400/30 hover:bg-blue-500/20 transition-all duration-300">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.accuracy && (
                <div className="mb-4">
                  <span className="inline-block glass-effect text-green-300 border-green-400/30 px-4 py-2 rounded-full text-sm font-medium glow-effect">
                    Accuracy: {project.accuracy}
                  </span>
                </div>
              )}

              {project.improvement && (
                <div className="mb-4">
                  <span className="inline-block glass-effect text-blue-300 border-blue-400/30 px-4 py-2 rounded-full text-sm font-medium glow-effect">
                    {project.improvement}
                  </span>
                </div>
              )}

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 glass-effect px-4 py-2 rounded-full hover:bg-blue-500/20 glow-effect"
              >
                View Project →
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
