import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
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
      link: "https://www.unifindss.com/"
      
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
      link: "https://github.com/galaxyte/Rail-Info"
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
      link: "https://github.com/galaxyte/Distributed_LMS"
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

      link: "https://github.com/galaxyte/Semantic-search"
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
  link: "https://github.com/galaxyte/Abnormal-File-Vault"
}
  ];

  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating problem-solving skills and full-stack development expertise
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
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
      <Card className="hover-scale">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700 flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-700">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.accuracy && (
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Accuracy: {project.accuracy}
                  </span>
                </div>
              )}

              {project.improvement && (
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.improvement}
                  </span>
                </div>
              )}

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
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
