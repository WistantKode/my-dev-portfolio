import Layout from "@/components/layout/layout";
import {Button} from "@/components/ui/button";
import {SiSpringboot, SiReact, SiCodewars} from "react-icons/si";
import {Card, CardContent} from "@/components/ui/card";
import {Mail, Download, Code, Palette, Globe, Database, Monitor} from "lucide-react";
import {ScaleTextEffect, AppearOnScale} from "@/lib/ScrollEffect";
import aboutBg from "@/assets/me2.jpg";

const About = () => {
    const skills = [
        {icon: Database, name: "Backend Development", level: 80},
        {icon: Code, name: "Frontend Development", level: 70},
        {icon: Palette, name: "Desktop Development", level: 60},
        {icon: Globe, name: "Web Technologies", level: 49},
    ];

    return (
        <Layout
            title="À Propos - Modjo Victor| Développeur Web & Backend Specialist"
            description="Découvrez le parcours et les compétences de Modjo Victor, développeur web passionné et Backend specialist basé à yaoundé"
            keywords="à propos, Modjo Victor, parcours, compétences, développeur web, designer UI/UX, expérience"
        >
            <section className="py-20 bg-background min-h-screen">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <ScaleTextEffect>
                            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
                                À Propos de Moi
                            </h1>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                                Découvrez mon parcours et ma passion pour le développement
                                d'applications.
                            </p>
                        </ScaleTextEffect>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Image */}
                        <AppearOnScale>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div
                                        className="w-80 h-96  rounded-2xl shadow-card border border-border-light overflow-hidden">
                                        <div
                                            className="absolute inset-0 opacity-20"
                                            style={{
                                                backgroundImage: `url(${aboutBg})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10"/>
                                        <div className="flex items-center justify-center h-full">
                                            <div className="text-center">
                                                <div
                                                    className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          MV
                        </span>
                                                </div>
                                                <p className="text-text-primary font-semibold">
                                                    Modjo Victor
                                                </p>
                                                <p className="text-text-secondary text-sm">
                                                    Full Stack Developer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AppearOnScale>
                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 title3">
                                    Qui suis-je ?
                                </h2>
                                <div className="space-y-4 text-text-secondary text-lg leading-relaxed title1">
                                    <p>
                                        Je suis Modjo Victor, un développeur web passionné et
                                        étudiant en informatique basé Yaoundé, Cameroun. je me
                                        spécialise dans la création de solutions digitales
                                        innovantes et performantes.
                                    </p>
                                    <p>
                                        Mon expertise couvre le développement frontend et backend,
                                        ainsi que l'architecture logiciel. J'ai une approche centrée sur
                                        l'utilisateur et je m'efforce de créer des solutions
                                        fiables, intuitives et adaptées à leurs besoins.
                                    </p>
                                    <p>
                                        Actuellement, je poursuis mes études en informatique tout en
                                        travaillant sur des projets variés, de sites vitrines aux
                                        applications web complexes. J'aime relever de nouveaux défis
                                        et apprendre constamment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                                >
                                    <a href="mailto:yvankamsu88@gmail.com">
                                        <Mail className="mr-2 w-5 h-5"/>
                                        Me Contacter
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    asChild
                                    className="border-border-light hover:border-primary hover:bg-primary/10"
                                >
                                    <a href="/VICTOR-MODJO-CV.pdf" download>
                                        <Download className="mr-2 w-5 h-5"/>
                                        Télécharger CV
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-20 flex justify-center flex-col">
                        <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">
                            Mes Compétences
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <div
                                                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                                                <Icon className="w-8 h-8 text-primary-foreground"/>
                                            </div>
                                            <h4 className="text-lg font-semibold text-text-primary mb-3 title3">
                                                {skill.name}
                                            </h4>

                                            {/* Progress bar */}
                                            <div className="w-full bg-secondary rounded-full h-2 mb-2">
                                                <div
                                                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                                    style={{width: `${skill.level}%`}}
                                                />
                                            </div>
                                            <span className="text-text-secondary text-sm">
                        {skill.level}%
                      </span>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">
                            Mon Parcours
                        </h3>
                        <div className="max-w-3xl mx-auto space-y-8">
                            {/* Stage INAF – Développement Backend Spring Boot */}
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

                            {/* Développement React (Autodidacte) */}
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

                            {/* Lycée Classique de Dschang – TI et Terminale TI */}
                            <Card className="bg-gradient-card border-border-light shadow-card">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                            <Monitor size={32} color="#0078D6"/>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-text-primary mb-2 title3">
                                                Lycée Classique de Dschang – TI et Terminale TI
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
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div
                        className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
                        <h3 className="text-3xl font-bold text-text-primary mb-4 title3">
                            Travaillons Ensemble
                        </h3>
                        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto title1">
                            Vous avez un projet en tête ? Je serais ravi de discuter avec vous
                            de vos besoins et de voir comment je peux vous aider à les
                            concrétiser.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                        >
                            <a href="/contact">Démarrer un Projet</a>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
