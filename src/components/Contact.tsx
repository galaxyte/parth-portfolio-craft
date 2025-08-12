
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <ContactInfoCard 
              icon={Mail}
              title="Email"
              value="parthjtgjs851@gmail.com"
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
              index={0}
            />

            <ContactInfoCard 
              icon={Phone}
              title="Phone"
              value="+91 7267092113"
              bgColor="bg-green-100"
              iconColor="text-green-600"
              index={1}
            />

            <ContactInfoCard 
              icon={MapPin}
              title="Location"
              value="Chandigarh, India"
              bgColor="bg-purple-100"
              iconColor="text-purple-600"
              index={2}
            />
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Info Card Component with Framer Motion
const ContactInfoCard = ({ icon: Icon, title, value, bgColor, iconColor, index }: { 
  icon: any, 
  title: string, 
  value: string, 
  bgColor: string, 
  iconColor: string, 
  index: number 
}) => {
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
        delay: index * 0.15
      }}
    >
      <Card className="hover-scale">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
              <Icon className={iconColor} size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{title}</h4>
              <p className="text-gray-600">{value}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Contact Form Component with Framer Motion
const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { x: 0, opacity: 1, y: 0, scale: 1 } : { x: 100, opacity: 0, y: 20, scale: 0.95 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }}
    >
      <Card className="hover-scale">
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me more about your project or inquiry..."
                rows={5}
                className="w-full"
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <Send className="mr-2" size={20} />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};
