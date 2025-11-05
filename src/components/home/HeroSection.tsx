import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiNextdotjs } from "react-icons/si";

// --- Typewriter Effect Component --- //
interface TypewriterEffectProps {
    text: string;
    delay?: number;
    speed?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay = 0, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, speed + delay); // Add delay to the first character
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, speed, text]);

    return <>{displayedText}</>;
};

// --- Data Configuration --- //
interface SocialLink {
    name: string;
    url: string;
    icon: React.ElementType;
}

interface ActionButton {
    text: string;
    url: string;
    variant: 'default' | 'outline';
    icon?: React.ElementType;
    downloadName?: string;
}

const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/wistantkode", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wistantkode", icon: Linkedin },
    { name: "WhatsApp", url: "https://wa.me/+237697135341", icon: FaWhatsapp },
    { name: "Email", url: "mailto:wistantkode@protonmail.com", icon: Mail },
];

const actionButtons: ActionButton[] = [
    { text: "Let's Talk", url: "https://wa.me/+237697135341", variant: 'default', icon: ArrowRight },
    { text: "Download CV", url: "/cv/cv - wistant.pdf", variant: 'outline', icon: Download, downloadName: "Wistant-Kode-CV.pdf" },
];

// --- Dynamic Decorative Icons Data --- //
interface DynamicIcon {
    icon: React.ElementType;
    size: number;
    color: string;
    position: { top?: string; bottom?: string; left?: string; right?: string; };
    animate: any; // framer-motion animation properties
    delay: number;
}

const dynamicIcons: DynamicIcon[] = [
    { icon: FaReact, size: 40, color: "#61DAFB", position: { top: "10%", left: "10%" }, animate: { y: [0, -15, 0], rotate: [0, 10, -10, 0] }, delay: 0.5 },
    { icon: FaJava, size: 35, color: "#ED8B00", position: { bottom: "15%", right: "12%" }, animate: { y: [0, 10, 0], rotate: [0, -5, 5, 0] }, delay: 1 },
    { icon: SiSpringboot, size: 45, color: "#6DB33F", position: { top: "20%", right: "20%" }, animate: { x: [0, 10, 0], rotate: [0, 15, -15, 0] }, delay: 1.5 },
    { icon: SiTypescript, size: 30, color: "#3178C6", position: { bottom: "5%", left: "25%" }, animate: { y: [0, -10, 0], rotate: [0, 8, -8, 0] }, delay: 2 },
    { icon: FaGitAlt, size: 38, color: "#F05032", position: { top: "50%", left: "5%" }, animate: { x: [0, -10, 0], rotate: [0, 12, -12, 0] }, delay: 2.5 },
    { icon: SiNextdotjs, size: 32, color: "#FFFFFF", position: { bottom: "30%", right: "5%" }, animate: { y: [0, 15, 0], rotate: [0, -10, 10, 0] }, delay: 3 },
];

// --- Animation Variants --- //
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

// --- Main Component --- //
const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
            {/* Modern Decorative Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-primary-glow/5 blur-3xl rounded-full animate-float"></div>

                {/* Dynamic Decorative Icons */}
                {dynamicIcons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.div
                            key={index}
                            className="absolute z-0 opacity-50"
                            style={item.position}
                            animate={{ 
                                y: item.animate.y || 0,
                                x: item.animate.x || 0,
                                rotate: item.animate.rotate || 0,
                                transition: { 
                                    duration: 8 + index * 2, // Longer, varied duration
                                    repeat: Infinity, 
                                    repeatType: "reverse", 
                                    ease: "easeInOut",
                                    delay: item.delay
                                }
                            }}
                        >
                            <IconComponent size={item.size} style={{ color: item.color }} />
                        </motion.div>
                    );
                })}
            </div>

            <div className="container mx-auto px-4 z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.p variants={itemVariants} className="text-lg font-medium text-primary mb-2 title1">
                        Hi, I'm Wistant Kode
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tighter mb-6 title3">
                        <TypewriterEffect text="DevSecOps Practicer & Software Engineer" delay={500} speed={70} />
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 title2">
                        I transform complex ideas into robust and scalable software solutions, with expertise in Java/Spring Boot, React/Next.js, Cloud, Automation, and Cybersecurity.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                        {actionButtons.map((btn) => (
                            <Button key={btn.text} asChild size="lg" variant={btn.variant} className={`group ${btn.variant === 'default' ? 'bg-gradient-primary border-0 shadow-primary hover:shadow-glow' : 'border-border-light hover:border-primary hover:bg-primary/10'}`}>
                                <a 
                                    href={btn.url} 
                                    {...(btn.downloadName && { download: btn.downloadName })}
                                    target={btn.downloadName ? undefined : "_blank"} 
                                    rel="noopener noreferrer"
                                >
                                    {btn.text}
                                    {btn.icon && <btn.icon className={`ml-2 w-5 h-5 transition-transform ${btn.variant === 'default' ? 'group-hover:translate-x-1' : 'group-hover:scale-110'}`} />}
                                </a>
                            </Button>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-text-muted hover:text-primary transition-colors">
                                <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
