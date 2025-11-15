// src/components/MyStack.tsx
import React from 'react';
import {motion} from "framer-motion";
import {Progress} from "@/components/ui/progress";
import {technologies} from "@/lib/skillsdata.ts";

// --- End Data Configuration --- //

// --- Animation Variants for main container --- //
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.12, delayChildren: 0.2}
    }
};

const MyStack = () => {
    return (
        <div className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3"
                    >
                        My Technical Stack
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
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
                                animate={tech.animate}
                                transition={tech.transition}
                                whileHover={tech.whileHover || {
                                    scale: 1.05,
                                    zIndex: 10
                                }}
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
                                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
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
