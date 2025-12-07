import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { socialLinks } from '@/data/projects';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinksData = [
    { name: 'GitHub', icon: Github, url: socialLinks.github, color: 'hover:text-foreground' },
    { name: 'Email', icon: Mail, url: `mailto:${socialLinks.email}`, color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to collaborate on new projects and learn from experienced
                developers. Whether you have a question, want to discuss a project idea, or
                just want to connect, I'd love to hear from you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Available for freelance work</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Open to internship opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Interested in collaborative projects</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinksData.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-accent transition-colors group ${social.color}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-inherit transition-colors" />
                    <span className="text-sm font-medium text-foreground">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Email Direct */}
            <div className="glass-card glow-primary rounded-2xl p-6 md:p-8 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">Prefer email?</p>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-lg font-semibold text-primary hover:underline"
              >
                {socialLinks.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
