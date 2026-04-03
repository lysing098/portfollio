import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/projects';
import { Layers, Server, Layout, Wrench } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Skills', icon: Layers },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skillset</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card glass-card-hover rounded-xl p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground capitalize">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))',
                  }}
                />
              </div>

              {/* Skill Level Label */}
              <div className="mt-3 flex justify-between items-center text-xs text-muted-foreground">
                <span>Proficiency</span>
                <span className={`font-medium ${
                  skill.level >= 80 ? 'text-green-500' :
                  skill.level >= 60 ? 'text-primary' : 'text-yellow-500'
                }`}>
                  {skill.level >= 80 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          {[
            { label: 'Frontend Skills', count: skills.filter(s => s.category === 'frontend').length, color: 'from-blue-500 to-cyan-500' },
            { label: 'Backend Skills', count: skills.filter(s => s.category === 'backend').length, color: 'from-green-500 to-emerald-500' },
            { label: 'Tools & Others', count: skills.filter(s => s.category === 'tools').length, color: 'from-purple-500 to-pink-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card rounded-xl p-6 text-center relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="text-4xl font-bold gradient-text mb-2">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
