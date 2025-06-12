
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Smartphone, Network, Settings, Brain, Monitor } from "lucide-react";

export const About = () => {
  const skills = {
    "Languages": ["C/C++", "Python", "Java", "JavaScript"],
    "Frontend": ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Express.js", "Node.js", "RESTful API"],
    "Database": ["MongoDB", "Oracle", "SQL/MySQL"],
    "Tools": ["Git/GitHub", "API Integration", "Postman", "VS Code"]
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
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Software Developer with expertise in full-stack web development. 
            I love creating innovative solutions and working with cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.institution}</h4>
                    <p className="text-blue-600 font-medium">{edu.degree}</p>
                    <p className="text-gray-600">{edu.grade}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="hover-scale">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Key Fundamentals */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Fundamentals</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {fundamentals.map((fundamental) => {
              const IconComponent = fundamental.icon;
              return (
                <Card key={fundamental.name} className="hover-scale">
                  <CardContent className="p-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <IconComponent size={24} className="text-blue-600" />
                      <span className="text-gray-700 font-medium text-sm">{fundamental.name}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
