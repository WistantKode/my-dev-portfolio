import React from 'react';
import {IconType} from "react-icons";
import {motion, TargetAndTransition, Transition} from "framer-motion";
import {Progress} from "@/components/ui/progress";
import {
    SiGit,
    SiGithub,
    SiMicrogenetics,
    SiNestjs,
    SiPostgresql,
    SiReact,
    SiTrello,
    SiTypescript,
} from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";

// --- Data Configuration --- //
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

const technologies: Technology[] = [
    {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        proficiency: 60,
        size: 'large',
        animate: {y: [0, 20, 0], rotate: [0, -10, 10, 0]},
        transition: {duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2},
        whileHover: {scale: 1.2, rotate: -15, zIndex: 10}
    },
    {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "#FFFFFF",
        proficiency: 50,
        size: 'medium',
        animate: {x: [0, 20, 0], rotate: [0, -12, 12, 0]},
        transition: {duration: 4.0, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6},
        whileHover: {scale: 1.2, rotate: -18, zIndex: 10}
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        proficiency: 50,
        animate: {y: [0, -15, 0], rotate: [0, 8, -8, 0]},
        transition: {duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8},
        whileHover: {scale: 1.2, rotate: 12, zIndex: 10}
    },
    {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        proficiency: 95,
        animate: {y: [0, 15, 0], rotate: [0, -8, 8, 0]},
        transition: {duration: 3.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.0},
        whileHover: {scale: 1.2, rotate: -12, zIndex: 10}
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
        proficiency: 70,
        animate: {x: [0, -15, 0], rotate: [0, 10, -10, 0]},
        transition: {duration: 3.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2},
        whileHover: {scale: 1.2, rotate: 15, zIndex: 10}
    },
    {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        proficiency: 40,
        animate: {x: [0, 15, 0], rotate: [0, -10, 10, 0]},
        transition: {duration: 4.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.4},
        whileHover: {scale: 1.2, rotate: -15, zIndex: 10}
    },
    {
        name: "Microservices",
        icon: SiMicrogenetics,
        color: "#FF6B6B",
        proficiency: 30,
        animate: {y: [0, -18, 0], rotate: [0, 14, -14, 0]},
        transition: {duration: 3.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.6},
        whileHover: {scale: 1.2, rotate: 20, zIndex: 10}
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        proficiency: 40,
        animate: {y: [0, 18, 0], rotate: [0, -14, 14, 0]},
        transition: {duration: 4.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.8},
        whileHover: {scale: 1.2, rotate: -20, zIndex: 10}
    },
    {
        name: "Trello",
        icon: SiTrello,
        color: "#0079BF",
        proficiency: 100,
        animate: {x: [0, -18, 0], rotate: [0, 16, -16, 0]},
        transition: {duration: 3.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2.0},
        whileHover: {scale: 1.2, rotate: 22, zIndex: 10}
    },
];
// --- End Data Configuration --- //

// --- Animation Variants for main container --- //
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const MyStack = () => {
    return (
        <div className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3"
                    >
                        My Technical Stack
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-text-secondary text-lg title1 max-w-3xl mx-auto"
                    >
                        A curated collection of tools and technologies I leverage to build modern, high-performance, and
                        secure applications.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto"
                >
                    {technologies.map((tech) => {
                        const IconComponent = tech.icon;
                        const sizeClasses = {
                            small: 'p-4',
                            medium: 'p-6 md:p-8',
                            large: 'p-8 md:p-10'
                        };

                        return (
                            <motion.div
                                key={tech.name}
                                // Removed itemVariants here to avoid conflict
                                animate={tech.animate} // Apply continuous animation from data
                                transition={tech.transition} // Apply continuous transition from data
                                whileHover={tech.whileHover || {
                                    scale: 1.05,
                                    zIndex: 10
                                }} // Apply hover animation from data or default
                                whileTap={{ scale: 0.95 }}
                                className={`bg-gradient-card border border-border-light rounded-xl text-center shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer ${sizeClasses[tech.size || 'small']}`}
                            >
                                <IconComponent 
                                    className="mx-auto mb-2 transition-colors duration-300" 
                                    size={tech.size === 'large' ? 48 : tech.size === 'medium' ? 36 : 28} 
                                    style={{ color: tech.color }}
                                />
                                <p className="text-text-primary text-sm font-medium whitespace-nowrap mb-2">
                                    {tech.name}
                                </p>
                                {/* Proficiency Indicator */}
                                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                                    {/*//  @ts-ignore*/}
                                    <Progress value={tech.proficiency} className="h-2.5" indicatorColor="bg-primary"/>
                                </div>
                                <p className="text-text-secondary text-xs">{tech.proficiency}% Proficiency</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default MyStack;
