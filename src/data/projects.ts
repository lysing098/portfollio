import zando from "../../public/zando.png";
import beanx from "../../public/beanx.png";
import dress from "../../public/dress.png";
import dress1 from "../../public/dress1.png";
import ecoshop from "../../public/ecoshop.png";
import wiostyle from "../../public/wiostyle.png";
import male1 from "../../public/male-fashion1.png";
import male2 from "../../public/male-fashion2.png";
import male3 from "../../public/male-fashion3.png";

// Project data - easily add new projects by adding objects to this array
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  category: "frontend" | "backend" | "fullstack";
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "zando static",
    title: "Zando Static",
    description:
      "A static website that clone from Zando website, built to practice React and Tailwind CSS.",
    longDescription:
      "This project is a static website that clone ui from Zando website. The website has responsive. This project has function such as add to cart, add to wishlist, and view product detail.",
    thumbnail: zando,
    images: [zando],
    technologies: [
      "React",
      "Tailwind CSS",
      "React Hot Toast",
      "React Icons",
      "React Slick",
      "Slick Carousel",
    ],
    category: "frontend",
    githubUrl: "https://github.com/lysing098/zando-static",
    liveUrl: "https://lysing098.github.io/zando-static/", // website demo
    // videoUrl: "https://youtu.be/IKReDB4LcUc",
    featured: false,
  },

  /* error fetch data from API */
  // {
  //   id: "wiostyle",
  //   title: "Wiostyle",
  //   description:
  //     "A static clone of the Zando website, built to practice React and Tailwind CSS.",
  //   longDescription:
  //     "This project is a static clone of the Zando e-commerce website. It demonstrates responsive design, interactive components, and the use of React libraries including React Hot Toast, React Icons, React Slick, and Slick Carousel. Built to showcase frontend development skills and practical React implementation.",
  //   thumbnail: wiostyle,
  //   images: [wiostyle],
  //   technologies: [
  //     "React",
  //     "Public api",
  //     "Tailwind CSS",
  //     "React Hot Toast",
  //     "React Icons",
  //     "React Slick",
  //     "Slick Carousel",
  //   ],
  //   category: "frontend",
  //   githubUrl: "https://github.com/lysing098/wiostyle",
  //   liveUrl: "https://wiostyle.vercel.app/", // website demo
  //   // videoUrl: "https://youtu.be/fwlFzPT-qIc",
  //   featured: false,
  // },
  {
    id: "ecoshop",
    title: "Ecoshop",
    description:
      "A static website that clone ui from the internet. This website using Vue.js and Tailwind CSS.",
    longDescription:
      "This project is a static  website. This project has no responsive or other function. This project i focus on practice design and animation ui.",
    thumbnail: ecoshop,
    images: [ecoshop],
    technologies: ["Vue", "Tailwind CSS", "Slick Carousel"],
    category: "frontend",
    githubUrl: "https://github.com/lysing098/echoshop",
    liveUrl: "https://echoshop-xi.vercel.app/", // website demo
    // videoUrl: "https://youtu.be/KEySXAgjKgk",
    featured: false,
  },
  {
    id: "beanx",
    title: "Beanx",
    description:
      "A website that clone ui from the internet. This website using Vue.js and Tailwind CSS.",
    longDescription:
      "A website that clone ui from the internet. This website using Vue.js and Tailwind CSS. It has no responsive design but it has product detail and add to cart feature.",
    thumbnail: beanx,
    images: [beanx],
    technologies: ["Vue",  "Tailwind CSS", "Slick Carousel"],
    category: "frontend",
    githubUrl: "https://github.com/lysing098/beanx",
    liveUrl: "https://beanx-neon.vercel.app/", // website demo
    //videoUrl: "https://youtu.be/Gc8KpId2pIo",
    featured: false,
  },
  {
    id: "Java spring boot",
    title: "Java Spring Boot Admin Dashboard",
    description: "Admin dashboard integrated with Java Spring Boot backend.",
    longDescription:
      "Built for school project. Frontend built with React and Ant Design; backend with Java Spring Boot and MySQL.",
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    ],
    technologies: ["Java Spring Boot", "React", "MySQL", "Ant Design"],
    category: "backend",
    githubUrl: "https://github.com/lysing098/final-java-spring-boot",
    // videoUrl: "https://youtu.be/hMKJXIu483g", // YouTube demo
    featured: false,
  },
  {
    id: "Java spring boot",
    title: "Java Spring Boot Api",
    description: "A Java Spring Boot Api project use for control stock.",
    longDescription:
  "Built a basic stock management system with CRUD operations for managing products, categories, brands, and suppliers. The application allows users to create, update, view, and delete records.",
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    ],
    technologies: ["Java Spring Boot",  "MySQL"],
    category: "backend",
    githubUrl: "https://github.com/lysing098/stock-controller",
    // videoUrl: "https://youtu.be/hMKJXIu483g", // YouTube demo
    featured: false,
  },
  // {
  //   id: "laravel-api",
  //   title: "Laravel API",
  //   description: "A Laravel API project using JWT for secure authentication.",
  //   longDescription:
  //     "This project includes protected routes, JWT authentication, image upload, and CRUD operations.",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  //   images: [
  //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  //   ],
  //   technologies: ["Laravel", "MySQL"],
  //   category: "backend",
  //   githubUrl: "https://github.com/lysing098/laravel-api",
  //   // liveUrl: "https://laravel-api-demo.com",
  //   featured: false,
  // },
  {
    id: "react-laravel",
    title: "Male Fashion",
    description:
      "A Fullstack project that using React for frontend and Laravel for backend along side with admin dashboard.",
    longDescription:
      "This project is a fullstack website that has admin dashboard. Admin can control product, category, etc. And for frontend show carousel, view product, and add to cart. ",
    thumbnail: male1,
    images: [male2, male3],
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/lysing098/male-fashion",
    // liveUrl: "https://laravel-api-demo.com",
    featured: false,
  },
  // {
  //   id: "dress-shop",
  //   title: "Dress Shop",
  //   description: "A project that frontend control by admin panel.",
  //   longDescription:
  //     "Admin panel control product carousel category. and for frontend show product carousel and category and can view product detail and add to cart",
  //   thumbnail: dress1,
  //   images: [dress],
  //   technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
  //   category: "fullstack",
  //   githubUrl: "https://github.com/lysing098/dress-shop",
  //   videoUrl: "https://youtu.be/Iv3OtV5t7QI",
  //   featured: false,
  // },
];

// Skills data
export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "fullstack" | "tools";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", level: 75, category: "frontend" },
  { name: "Vue", icon: "🟩", level: 50, category: "frontend" },
  // { name: "JavaScript", icon: "🟨", level: 70, category: "frontend" },
  // { name: "HTML5", icon: "🌐", level: 95, category: "frontend" },
  // { name: "CSS3", icon: "🎨", level: 95, category: "frontend" },
  { name: "Tailwind CSS", icon: "💨", level: 79, category: "frontend" },

  // Backend
  { name: "Laravel", icon: "🔴", level: 78, category: "backend" },
  { name: "Java Spring Boot", icon: "🍃", level: 50, category: "backend" },
  { name: "MySQL", icon: "🐬", level: 75, category: "backend" },
  // { name: "PostgreSQL", icon: "🐘", level: 70, category: "backend" },

  // Tools
  { name: "Git", icon: "📦", level: 60, category: "tools" },
  // { name: "VS Code", icon: "💻", level: 95, category: "tools" },
  // { name: "Figma", icon: "🎯", level: 40, category: "tools" },
];

// Social links
export const socialLinks = {
  github: "https://github.com/lysing098?tab=repositories",
  linkedin: "https://linkedin.com",
  twitter: "#",
  email: "lyzing1021@gmail.com",
};
