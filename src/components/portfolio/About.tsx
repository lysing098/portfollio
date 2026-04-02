import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Sparkles, BookOpen, Rocket, Code } from 'lucide-react';

const technologies = [
  { name: 'Laravel', icon: '🔴', description: 'PHP Framework' },
  { name: 'React', icon: '⚛️', description: 'Frontend Library' },
  { name: 'Vue', icon: '🟩', description: 'Frontend Framework' }, // added Vue
  { name: 'Java Spring Boot', icon: '🍃', description: 'Backend Framework' },
  { name: 'JavaScript', icon: '🟨', description: 'Programming Language' },
  { name: 'HTML/CSS', icon: '🌐', description: 'Web Fundamentals' },
  { name: 'Tailwind CSS', icon: '💨', description: 'CSS Framework' },
  { name: 'Design', icon: '🎨', description: 'UI/UX Principles' },
  { name: 'Git', icon: '📦', description: 'Version Control' },
];


const highlights = [
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    description: 'Constantly exploring new technologies and best practices in web development.',
  },
  {
    icon: Rocket,
    title: 'Self-Starter',
    description: 'Building personal projects to apply and solidify my knowledge.',
  },
  {
    icon: Code,
    title: 'Clean Code Advocate',
    description: 'Focused on writing maintainable, readable, and efficient code.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer on a mission to create impactful web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Hello there! 👋</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a final year MIS student at Setec Institute. I have a strong passion in web development, and I'm eager to learn and grow in fullstack developement. I have experience in Laravel, React, Vue, Tailwind Css, Java Spring Boot, and MySQL. I'm currently focused on building my skills in React and Laravel, and I'm excited to explore new technologies.
                </p>
                <p>
                  My focus areas include <span className="text-primary font-medium">React, Vue</span> for
                  dynamic frontends, <span className="text-primary font-medium">Laravel</span> and
                  <span className="text-primary font-medium"> Java Spring Boot</span> for robust backends.
                  I believe in learning by doing, which is why I've built several personal projects
                  to apply what I've learned.
                </p>
                
              </div>
              
              {/* Resume Download */}
              {/* <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a> */}
            </motion.div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <highlight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-6 text-foreground">
              Technologies I'm Learning
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="glass-card glass-card-hover rounded-xl p-4 group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <div>
                      <h4 className="font-medium text-foreground">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-6 glass-card rounded-2xl p-6 glow-primary"
            >
              <h4 className="font-semibold mb-4 text-foreground">Current Focus</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">React & Vue</span>
                  <span className="text-sm font-medium text-primary">Primary</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Laravel API Development</span>
                  <span className="text-sm font-medium text-primary">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Java Spring Boot</span>
                  <span className="text-sm font-medium text-primary">Learning</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
