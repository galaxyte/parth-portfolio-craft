
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Jungle Works",
      position: "Associate Software Developer Intern",
      period: "May 2025 - Present",
      location: "Mohali",
      type: "Current",
      description: [
        "Worked with the Flash Delivery team, focusing on resolving issues and debugging errors on the Flash Delivery website.",
        "Improved the website's functionality to enhance user experience and provide better tools for merchants.",
        "Collaborated with team members to optimize and ensure seamless delivery processes."
      ]
    },
    {
      company: "Zeal Web Technologies",
      position: "Software Developer",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, working with innovative teams and cutting-edge technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge 
                      variant={exp.type === "Current" ? "default" : "secondary"}
                      className={exp.type === "Current" ? "bg-green-100 text-green-700" : ""}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
