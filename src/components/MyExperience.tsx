import React from 'react';
import {Card, CardContent} from "@/components/ui/card.tsx";
import {SiReact, SiSpringboot} from "react-icons/si";
import {Monitor} from "lucide-react";
import {AppearOnScroll} from "@/lib/ScrollEffect.tsx";

const MyExperience = () => {
    return (
        <div className="mb-20">
            <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">
                Mon Parcours
            </h3>
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Stage INAF – Développement Backend Spring Boot */}
                <AppearOnScroll>
                    <Card className="bg-gradient-card border-border-light shadow-card">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <SiSpringboot size={32} color="#6DB33F"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-text-primary mb-2 title3">
                                        INAF – Stage Développement Backend Spring Boot
                                    </h4>
                                    <p className="text-primary font-medium mb-2">
                                        Juin 2025 - Septembre 2025
                                    </p>
                                    <p className="text-text-secondary title1">
                                        Stage de développement backend avec Spring Boot. Création d’API
                                        performantes et sécurisées,
                                        intégration avec React côté frontend, et gestion des
                                        bases de données.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AppearOnScroll>

                {/* Développement React (Autodidacte) */}
                <AppearOnScroll>
                    <Card className="bg-gradient-card border-border-light shadow-card">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <SiReact size={32} color="#61DAFB"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-text-primary mb-2 title3">
                                        Freecodecamp - Développement React
                                    </h4>
                                    <p className="text-primary font-medium mb-2">
                                        Mai 2024 - Juin 2024
                                    </p>
                                    <p className="text-text-secondary title1">
                                        Apprentissage autodidacte de React via FreeCodeCamp et
                                        projets personnels. Développement d’applications web
                                        interactives et responsives.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AppearOnScroll>

                {/* Lycée Classique de Dschang – TI et Terminale TI */}
                <AppearOnScroll>
                    <Card className="bg-gradient-card border-border-light shadow-card">
                        <CardContent className="p-6 pl-3 pr-3">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <Monitor size={32} color="#0078D6"/>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-text-primary mb-2 title3">
                                        LICENCE I - Bios & Informatique - Universite de Yaounde 1
                                    </h4>
                                    <p className="text-primary font-medium mb-2">
                                        Septembre 2023 - Mai 2025
                                    </p>
                                    <p className="text-text-secondary title1">
                                        Formation générale et scientifique solide, axée sur les
                                        sciences et l’informatique, donnant les bases
                                        nécessaires pour mon parcours en développement web et
                                        backend.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AppearOnScroll>
            </div>
        </div>
    );
};

export default MyExperience;