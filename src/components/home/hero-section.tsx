import {Button} from "@/components/ui/button";
import {
    ArrowRight,
    Download,
    MessageCircle,
    Github,
    Gitlab,
    Linkedin,
} from "lucide-react";
import {AppearOnSrollToLeft} from "@/lib/ScrollEffect";
import {FaWhatsapp} from "react-icons/fa";
import heroImage from "@/assets/me.jpg";


const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"/>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float"/>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <p className="text-primary font-medium text-lg title1">
                            Hello welcome I'm,
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight title3">
                            Wistant Kode
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-text-secondary font-medium title1">
                            Développeur Web & Logiciel – Spécialisé Java Spring Boot & React
                        </h2>
                    </div>

                    <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-lg title2">
                        Je conçois et développe des solutions logicielles innovantes,
                        pensées pour répondre à des besoins réels et résoudre des
                        problématiques concrètes. Spécialisé dans le développement backend,
                        j’apporte des réponses solides, fiables et évolutives à ceux qui
                        recherchent une expertise technique pour transformer leurs idées en
                        solutions performantes.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://wa.me/+237697135341"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-card hover:shadow-glow"
                        >
                            <FaWhatsapp className="w-5 h-5 animate-fade-in-up"/>
                        </a>
                        <a
                            href="mailto:wistantkode@protonmail.com"
                            className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-card hover:shadow-glow"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/wistantkode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-card hover:shadow-glow"
                        >
                            <Github className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://gitlab.com/wistantkode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-card hover:shadow-glow"
                        >
                            <Gitlab className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/wistantkode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-smooth shadow-card hover:shadow-glow"
                        >
                            <Linkedin className="w-5 h-5"/>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth group"
                        >
                            <a
                                href="https://wa.me/+237697135341"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Let's Talk
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="border-border-light hover:border-primary hover:bg-primary/10 group"
                        >
                            <a
                                href="public/cv/cv%20-%20wistant.pdf"
                                download>
                                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform"/>
                                See My CV
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Decorative circle background */}
                        <div
                            className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110 animate-pulse-glow"/>

                        {/* Main image container */}
                        <div
                            className="hidden md:block relative w-80 h-80 md:w-96 md:h-96 bg-gradient-card rounded-full overflow-hidden shadow-card border-4 border-border-light">
                            <img
                                src='public/me.png'
                                alt="Modjo victor - Dévellopeur backend & solution numérique"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"/>

                            {/* Name badge */}
                            <div
                                className="absolute bottom-6 right-6 bg-background-card/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border-light">
                                <p className="text-text-primary font-semibold">Wistant Kode</p>
                                <p className="text-primary text-sm">Software engeenier student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
