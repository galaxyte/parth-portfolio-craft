
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 section-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-900 mb-4 gradient-text text-glow">Get In Touch</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-zinc-900 mb-8 gradient-text">Contact Information</h3>
            
            <ContactInfoCard 
              icon={Mail}
              title="Email"
              value="parthjtgjs851@gmail.com"
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
              index={0}
            />

            <ContactInfoCard 
              icon={Phone}
              title="Phone"
              value="+91 9211975266"
              bgColor="bg-zinc-100"
              iconColor="text-zinc-700"
              index={1}
            />

            <ContactInfoCard 
              icon={MapPin}
              title="Location"
              value="Noida, India"
              bgColor="bg-zinc-100"
              iconColor="text-zinc-700"
              index={2}
            />
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 mb-8 gradient-text">Send Message</h3>
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
      <Card className="glass-card card-hover glow-effect">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center glow-effect`}>
              <Icon className={iconColor} size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 text-lg">{title}</h4>
              <p className="text-zinc-600">{value}</p>
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

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
      <Card className="glass-card glow-effect">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-3">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:ring-blue-600 ${
                    errors.name ? 'border-red-400' : ''
                  }`}
                  required
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle size={16} />
                    {errors.name}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-3">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:ring-blue-600 ${
                    errors.email ? 'border-red-400' : ''
                  }`}
                  required
                />
                {errors.email && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle size={16} />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>
            
            <div>
<label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-3">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:ring-blue-600 ${
                    errors.subject ? 'border-red-400' : ''
                  }`}
                required
              />
              {errors.subject && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  {errors.subject}
                </div>
              )}
            </div>
            
            <div>
<label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me more about your project or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:ring-blue-600 ${
                    errors.message ? 'border-red-400' : ''
                  }`}
                required
              />
              {errors.message && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  {errors.message}
                </div>
              )}
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md shadow-blue-200/40 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send size={20} />
                  Send Message
                </div>
              )}
            </Button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-blue-600 text-sm"
              >
                <CheckCircle size={16} />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-600 text-sm"
              >
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};
