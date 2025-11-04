import { Project } from "./projet";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpring, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Mon Premier Projet",
    description: "Ceci est la description de mon premier projet.",
    category: "web",
    tech: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    repogit: "https://github.com/your-username/your-repo",
    liveUrl: "https://your-live-project-url.com",
    imageUrl: "/path/to/your/image.jpg",
  },
  {
    id: "2",
    title: "Mon Deuxième Projet",
    description: "Ceci est la description de mon deuxième projet.",
    category: "backend",
    tech: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpring },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    repogit: "https://github.com/your-username/your-other-repo",
    liveUrl: "https://your-other-live-project-url.com",
    imageUrl: "/path/to/your/other-image.jpg",
  },
];
