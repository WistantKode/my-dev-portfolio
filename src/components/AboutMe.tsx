import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { SiSpringboot, SiReact, SiCodewars } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import {Mail, Download, Code, Palette, Globe, Database, Monitor, Heart} from "lucide-react";
import { ScaleTextEffect, AppearOnScale, AppearOnSrollToLeft, AppearOnSrollToRight, AppearOnScroll, } from "@/lib/ScrollEffect";


const AboutMe = () => {
    const skills = [
        { icon: Database, name: "Backend Development", level: 80 },
        { icon: Code, name: "Frontend Development", level: 70 },
        { icon: Palette, name: "Desktop Development", level: 60 },
        { icon: Globe, name: "Web Technologies", level: 49 },
        { icon: Heart, name: "SEO & search enging", level: 80 },
    ];

    return (
        <Layout
            title="À Propos - Modjo Victor| Développeur Web & Backend Specialist"
            description="Découvrez le parcours et les compétences de Modjo Victor, développeur web passionné et Backend specialist basé à yaoundé"
            keywords="à propos, Modjo Victor, parcours, compétences, développeur web, designer UI/UX, expérience"
        >
            <AppearOnScroll>
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
                            {/* Content */}
                            <AppearOnScroll>
                                    <AppearOnSrollToLeft>
                                        <div className="flex justify-center">
                                            <div className="relative">
                                                <div className="w-80 h-96  rounded-2xl shadow-card border border-border-light overflow-hidden">
                                                    <div
                                                        className="absolute inset-0 opacity-20"
                                                        style={{
                                                            backgroundImage: `url(public/me.png)`,
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "center",
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10" />
                                                    <div className="flex items-center justify-center h-full">
                                                        <div className="text-center">
                                                            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          WK
                        </span>
                                                            </div>
                                                            <p className="text-text-primary font-semibold">
                                                                Wistant Kode
                                                            </p>
                                                            <p className="text-text-secondary text-sm">
                                                                Backend Developer
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AppearOnSrollToLeft>
                            </AppearOnScroll>
                            <div className="space-y-8">
                                <div>
                                    <AppearOnScroll>
                                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 title3">
                                            Qui suis-je ?
                                        </h2>
                                    </AppearOnScroll>
                                    <AppearOnScroll>
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
                                    </AppearOnScroll>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <AppearOnScroll>
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                                        >
                                            <a href="mailto:wistantkode@protonmail.com">
                                                <Mail className="mr-2 w-5 h-5" />
                                                Me Contacter
                                            </a>
                                        </Button>
                                    </AppearOnScroll>

                                    <AppearOnScroll>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            asChild
                                            className="border-border-light hover:border-primary hover:bg-primary/10"
                                        >
                                            <a
                                                href="/cv/cv%20-%20wistant.pdf"
                                                download
                                            >
                                                <Download className="mr-2 w-5 h-5" />
                                                Télécharger CV
                                            </a>
                                        </Button>
                                    </AppearOnScroll>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        {/*<div className="mb-20 flex justify-center flex-col">*/}
                        {/*    <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">*/}
                        {/*        Mes Compétences*/}
                        {/*    </h3>*/}
                        {/*    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
                        {/*        {skills.map((skill, index) => {*/}
                        {/*            const Icon = skill.icon;*/}
                        {/*            return (*/}
                        {/*                <Card*/}
                        {/*                    key={index}*/}
                        {/*                    className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"*/}
                        {/*                >*/}
                        {/*                    <CardContent className="p-6 text-center">*/}
                        {/*                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">*/}
                        {/*                            <Icon className="w-8 h-8 text-primary-foreground" />*/}
                        {/*                        </div>*/}
                        {/*                        <h4 className="text-lg font-semibold text-text-primary mb-3 title3">*/}
                        {/*                            {skill.name}*/}
                        {/*                        </h4>*/}

                        {/*                        /!* Progress bar *!/*/}
                        {/*                        <div className="w-full bg-secondary rounded-full h-2 mb-2">*/}
                        {/*                            <div*/}
                        {/*                                className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"*/}
                        {/*                                style={{ width: `${skill.level}%` }}*/}
                        {/*                            />*/}
                        {/*                        </div>*/}
                        {/*                        <span className="text-text-secondary text-sm">*/}
                        {/*    {skill.level}%*/}
                        {/*  </span>*/}
                        {/*                    </CardContent>*/}
                        {/*                </Card>*/}
                        {/*            );*/}
                        {/*        })}*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*/!* Contact CTA *!/*/}
                        {/*<div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">*/}
                        {/*    <h3 className="text-3xl font-bold text-text-primary mb-4 title3">*/}
                        {/*        Travaillons Ensemble*/}
                        {/*    </h3>*/}
                        {/*    <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto title1">*/}
                        {/*        Vous avez un projet en tête ? Je serais ravi de discuter avec vous*/}
                        {/*        de vos besoins et de voir comment je peux vous aider à les*/}
                        {/*        concrétiser.*/}
                        {/*    </p>*/}
                        {/*    <Button*/}
                        {/*        asChild*/}
                        {/*        size="lg"*/}
                        {/*        className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"*/}
                        {/*    >*/}
                        {/*        <a href="/contact">Démarrer un Projects</a>*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </AppearOnScroll>
        </Layout>
    );
};

export default AboutMe;
