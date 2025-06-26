
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      link: "#"
      
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
      link: "#"
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
      link: "#"
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

      link: "&"
    },

     {
  title: "Abnormal File Vault",
  description: "Built a full-stack file hosting application using React and Django, enhanced with Supabase for cloud-native Postgres storage, real-time deduplication, and efficient file retrieval via advanced filtering and intelligent search.",

  features: [
    "Duplicate file detection and storage optimization",
    "Real-time Supabase database integration",
    "Search files by filename with instant results",
    "Advanced filters by file type, size, and upload date",
    "Live storage savings tracking and analytics"
  ],
  technologies: ["React", "Django", "Django REST Framework", "Supabase", "PostgreSQL", "Docker"],
  accuracy: "100% file deduplication using content hashing",
  improvement: "Up to 70% storage savings with real-time search performance boost",

  link: "&"
}
  ];

  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of my technical skills through innovative web applications and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.accuracy && (
                      <Badge className="bg-green-100 text-green-700">
                        {project.accuracy} Accuracy
                      </Badge>
                    )}
                    {project.improvement && (
                      <Badge className="bg-blue-100 text-blue-700">
                        {project.improvement}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
