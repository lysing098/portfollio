// Project data - easily add new projects by adding objects to this array
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    longDescription: 'Built a comprehensive e-commerce solution featuring product catalog, shopping cart, user authentication, order management, and Stripe payment integration. The frontend is built with React and Tailwind CSS, while the backend uses Laravel with MySQL database.',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
    technologies: ['React', 'Laravel', 'Tailwind CSS', 'MySQL', 'Stripe'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'Developed a task management application that allows teams to collaborate on projects. Features include task creation, assignment, due dates, priority levels, and real-time notifications. Built with React for the frontend and Java Spring Boot for the backend.',
    thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80',
    ],
    technologies: ['React', 'Java Spring Boot', 'PostgreSQL', 'WebSocket'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Interactive Portfolio',
    description: 'A modern, animated portfolio website built with React and Framer Motion.',
    longDescription: 'Created this portfolio website to showcase my projects and skills. Features include smooth animations, dark/light mode toggle, responsive design, and interactive project modals. Built with React, Tailwind CSS, and Framer Motion.',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    category: 'frontend',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and visualizations.',
    longDescription: 'Built a weather dashboard that displays current weather conditions and forecasts using data from a weather API. Features include location search, hourly and daily forecasts, weather maps, and customizable widgets.',
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&q=80',
    ],
    technologies: ['React', 'JavaScript', 'Chart.js', 'Weather API'],
    category: 'frontend',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'blog-cms',
    title: 'Blog CMS',
    description: 'A content management system for blogs with markdown support.',
    longDescription: 'Developed a blog CMS that allows users to create, edit, and publish blog posts with markdown support. Features include rich text editing, image uploads, categories, tags, and SEO optimization. Backend built with Laravel.',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    ],
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    category: 'backend',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat App',
    description: 'A real-time chat application with rooms, direct messages, and file sharing.',
    longDescription: 'Created a real-time chat application supporting multiple chat rooms, direct messaging, file sharing, and emoji reactions. Uses WebSocket for real-time communication. Built with React frontend and Java Spring Boot backend.',
    thumbnail: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&q=80',
    ],
    technologies: ['React', 'Java Spring Boot', 'WebSocket', 'MongoDB'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

// Skills data
export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'fullstack' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '⚛️', level: 85, category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: '🔷', level: 75, category: 'frontend' },
  { name: 'HTML5', icon: '🌐', level: 95, category: 'frontend' },
  { name: 'CSS3', icon: '🎨', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 88, category: 'frontend' },
  
  // Backend
  { name: 'Laravel', icon: '🔴', level: 80, category: 'backend' },
  { name: 'Java Spring Boot', icon: '🍃', level: 70, category: 'backend' },
  { name: 'MySQL', icon: '🐬', level: 75, category: 'backend' },
  { name: 'PostgreSQL', icon: '🐘', level: 70, category: 'backend' },
  
  // Tools
  { name: 'Git', icon: '📦', level: 85, category: 'tools' },
  { name: 'VS Code', icon: '💻', level: 95, category: 'tools' },
  { name: 'Figma', icon: '🎯', level: 70, category: 'tools' },
  { name: 'Docker', icon: '🐳', level: 60, category: 'tools' },
];

// Social links
export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'hello@example.com',
};
