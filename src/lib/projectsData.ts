import { Project } from "./projet";
import { FaJava, FaReact } from "react-icons/fa";
import {
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiPostgresql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiFramework
} from "react-icons/si";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Chick Food - Modern Restaurant Frontend",
    description: "A responsive frontend project for a fictional fried chicken restaurant. Features engaging animations and a clean, modern design, showcasing strong skills in HTML, CSS, and JavaScript. Optimized for an excellent user experience.",
    category: "web",
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "ScrollJS", icon: SiFramework },
    ],
    repoGit: "https://github.com/wistantkode/Chick-Food-Project",
    liveUrl: "https://chick-food-project.vercel.app/",
    imageUrl: "/projects img/projet1.png",
  },
  {
    id: "2",
    title: "Elysian Drive - Electric Car Landing Page",
    description: "A captivating frontend landing page for an electric car brand, featuring futuristic design and immersive animations. Demonstrates advanced skills in HTML, CSS, and JavaScript, particularly with interactive libraries.",
    category: "web",
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    repoGit: "https://github.com/wistantkode/Elysian-Drive-Project",
    liveUrl: "https://elysian-drive-project.vercel.app/",
    imageUrl: "/projects img/projet2.png",
  },
  {
    id: "3",
    title: "Spring Boot RESTful API",
    description: "Developed a robust and secure RESTful API using Spring Boot for efficient user and product management. Implemented best practices for performance and scalability.",
    category: "backend",
    tech: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpring },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    repoGit: "https://github.com/wistantkode/spring-boot-api",
    liveUrl: "#",
    imageUrl: "/projects img/projet3.png",
  },
  {
    id: "4",
    title: "Personal Portfolio - React & Tailwind CSS",
    description: "My personal portfolio, meticulously crafted with React and Tailwind CSS. Showcases my diverse projects, technical skills, and professional journey in a modern and responsive design.",
    category: "web",
    tech: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    repoGit: "https://github.com/wistantkode/my-portfolio",
    liveUrl: "#",
    imageUrl: "/projects img/projet4.png",
  },
];
