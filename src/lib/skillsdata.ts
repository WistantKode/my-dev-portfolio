import {
    SiGit,
    SiGithub,
    SiMicrogenetics,
    SiNestjs,
    SiPostgresql,
    SiReact,
    SiTrello,
    SiTypescript
} from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";
import {IconType} from "react-icons";
import {TargetAndTransition, Transition} from "framer-motion";

interface Technology {
    name: string;
    icon: IconType;
    color: string;
    proficiency: number;
    size?: 'small' | 'medium' | 'large';
    animate?: TargetAndTransition;
    transition?: Transition;
    whileHover?: TargetAndTransition;
}

export const technologies: Technology[] = [
    {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        proficiency: 60,
        size: 'large',
        animate: {y: [0, 6, -6, 0], rotate: [0, -6, 6, 0]},
        transition: {duration: 6.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2},
        whileHover: {scale: 1.18, rotate: -10, zIndex: 10}
    },
    {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "#FFFFFF",
        proficiency: 50,
        size: 'medium',
        animate: {x: [0, 8, -8, 0], rotate: [0, -5, 5, 0]},
        transition: {duration: 6.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5},
        whileHover: {scale: 1.18, rotate: -12, zIndex: 10}
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        proficiency: 50,
        animate: {y: [0, -5, 5, 0], rotate: [0, 4, -4, 0]},
        transition: {duration: 5.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8},
        whileHover: {scale: 1.18, rotate: 8, zIndex: 10}
    },
    {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        proficiency: 95,
        animate: {y: [0, 7, -7, 0], rotate: [0, -5, 5, 0]},
        transition: {duration: 6.0, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.0},
        whileHover: {scale: 1.18, rotate: -8, zIndex: 10}
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
        proficiency: 70,
        animate: {x: [0, -7, 7, 0], rotate: [0, 5, -5, 0]},
        transition: {duration: 6.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.1},
        whileHover: {scale: 1.18, rotate: 10, zIndex: 10}
    },
    {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        proficiency: 40,
        animate: {x: [0, 6, -6, 0], rotate: [0, -6, 6, 0]},
        transition: {duration: 6.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.3},
        whileHover: {scale: 1.18, rotate: -12, zIndex: 10}
    },
    {
        name: "Microservices",
        icon: SiMicrogenetics,
        color: "#FF6B6B",
        proficiency: 30,
        animate: {y: [0, -8, 8, 0], rotate: [0, 6, -6, 0]},
        transition: {duration: 5.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5},
        whileHover: {scale: 1.18, rotate: 12, zIndex: 10}
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        proficiency: 40,
        animate: {y: [0, 8, -8, 0], rotate: [0, -6, 6, 0]},
        transition: {duration: 6.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.7},
        whileHover: {scale: 1.18, rotate: -12, zIndex: 10}
    },
    {
        name: "Trello",
        icon: SiTrello,
        color: "#0079BF",
        proficiency: 100,
        animate: {x: [0, -9, 9, 0], rotate: [0, 7, -7, 0]},
        transition: {duration: 6.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.9},
        whileHover: {scale: 1.18, rotate: 14, zIndex: 10}
    },
];
