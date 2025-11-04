import React, {Component} from 'react';
import {
    SiDocker,
    SiGit,
    SiGithub, SiGitlab, SiMicrogenetics,
    SiMongodb,
    SiMysql,
    SiOpenjdk,
    SiPostgresql, SiPostman,
    SiReact, SiSpring,
    SiSpringboot, SiSpringsecurity, SiSwagger
} from "react-icons/si";
import {IconType} from "react-icons";

interface Technology {
    name: string;
    icon: IconType;
    color?: string; // Couleur optionnelle pour l'icône
}
const technologies: Technology[] = [
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    // { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#FF6C37" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "GitLab", icon: SiGitlab, color: "#FCA326" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    { name: "Microservices", icon: SiMicrogenetics, color: "#FF6B6B" },
    { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
    { name: "Spring Cloud", icon: SiSpring, color: "#6DB33F" },
];

class MyStack extends Component {
    render() {
        return (
            <div className={'container mx-auto px-4'}>
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
                            Technologies Utilisées
                        </h2>
                        <p className="text-text-secondary text-lg title1">
                            Stack technique moderne pour des solutions performantes.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                        {technologies.map((tech, index) => {
                            const IconComponent = tech.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-card border border-border-light rounded-lg p-4 text-center hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                                >
                                    <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <IconComponent
                                            className="text-primary-foreground"
                                            size={24}
                                            // Optionnel : utiliser la couleur spécifique de l'icône
                                            style={{ color: tech.color }}
                                        />
                                    </div>
                                    <p className="text-text-primary text-sm font-medium">
                                        {tech.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyStack;