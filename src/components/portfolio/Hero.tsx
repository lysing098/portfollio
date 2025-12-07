import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { socialLinks } from '@/data/projects';

// Animated text that cycles through roles
const roles = ['Frontend', 'Backend', 'Fullstack'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="hero-orb w-[500px] h-[500px] bg-primary/20 -top-20 -left-20" />
      <div className="hero-orb w-[400px] h-[400px] bg-primary/15 top-1/2 -right-32" style={{ animationDelay: '2s' }} />
      <div className="hero-orb w-[300px] h-[300px] bg-accent-foreground/10 bottom-20 left-1/3" style={{ animationDelay: '4s' }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="section-container relative z-10 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Hi, I'm a</span>
          <br />
          <span className="flex flex-wrap items-center justify-center mt-2 gap-x-4">
            {/* Cycling Role Text */}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                initial={{ y: 30, opacity: 0, filter: 'blur(10px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -30, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="gradient-text"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
            <span className="text-foreground">Developer</span>
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-medium mb-4"
        >
          Aspiring Fullstack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Passionate about crafting beautiful, functional web experiences.
          <br className="hidden sm:block" />
          Currently diving deep into React, Laravel, and Java Spring Boot.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 rounded-xl font-semibold text-primary-foreground overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:scale-105" />
            <span className="relative flex items-center gap-2">
              View My Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>

          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl font-semibold border border-border bg-card hover:bg-secondary transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            GitHub Profile
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Vue', 'Laravel', 'Java Spring Boot', 'Tailwind CSS', 'MySQL'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="skill-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
