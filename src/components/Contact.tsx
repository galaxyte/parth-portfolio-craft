
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "7267092113",
      href: "tel:7267092113"
    },
    {
      icon: Mail,
      label: "Email",
      value: "parthjtgjs851@gmail.com",
      href: "mailto:parthjtgjs851@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/galaxyte",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parth-tiwari-a56335291/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life. 
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <IconComponent size={32} />
                    </div>
                    <div className="text-center">
                      <p className="text-blue-200 text-sm mb-1">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-lg font-medium hover:text-blue-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2025 Parth Tiwari
          </p>
        </div>
      </div>
    </section>
  );
};
