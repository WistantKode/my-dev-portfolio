import Layout from "@/components/layout/layout";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {
    Code,
    Palette,
    Megaphone,
    Smartphone,
    Monitor,
    Globe,
    Database,
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import MyStack from "@/components/MyStack.tsx";
import {AppearOnScroll} from "@/lib/ScrollEffect.tsx";


// Interface pour typer les technologies


const Services = () => {
    const services = [
        {
            icon: Database,
            title: "Backend Systems & APIs",
            description:
                "Implementing robust and scalable systems using NestJS and resilient microservice architectures.",
            features: [
                "Secure REST/GraphQL APIs",
                "Authentication & User Management (JWT, OAuth)",
                "Microservices deployment",
                "Scalable system architecture",
            ],
            price: "Custom solutions tailored to business requirements",
        },
        {
            icon: Code,
            title: "Full-Stack Web Development",
            description:
                "Building modern, high-performance web applications with cutting-edge technologies.",
            features: [
                "Responsive web platforms",
                "Progressive Web Apps (PWAs)",
                "E-commerce solutions",
                "API integration & orchestration",
                "Administrative dashboards",
            ],
            price: "Pricing adapted to scope – Free quote provided",
        },
        {
            icon: Smartphone,
            title: "Cross-Platform Mobile Apps",
            description:
                "Developing cross-platform mobile applications that deliver a near-native experience using React Native.",
            features: [
                "iOS/Android application development",
                "Optimized native-like interface",
                "Performance and resource optimization",
            ],
            price: "Pricing adapted to scope",
        },
        {
            icon: Globe,
            title: "Optimization & Performance",
            description:
                "Enhancing website performance, stability, and search engine ranking.",
            features: [
                "Technical SEO optimization",
                "Web performance metrics (Core Web Vitals)",
                "Analytics implementation & reporting",
                "Ongoing maintenance & monitoring",
            ],
            price: "", // Price intentionally left empty for this service type
        },
        {
            icon: Monitor,
            title: "Custom Desktop Applications",
            description:
                "Developing tailored desktop software solutions using JavaFX with robust database integration.",
            features: [
                "Modern, intuitive interfaces",
                "Secure database connectivity",
                "Data management and reporting features",
                "Solutions built for SMEs",
            ],
            price: "Each project is quoted based on technical complexity",
        },
    ];

    const processSteps = [
        {
            step: "01",
            title: "Consultation & Scope",
            description:
                "Defining requirements and project objectives to establish a clear roadmap.",
        },
        {
            step: "02",
            title: "Architecture & Design",
            description:
                "Creating blueprints, wireframes, and planning the technical system architecture.",
        },
        {
            step: "03",
            title: "Development & Testing",
            description:
                "System implementation with structured coding and regular validation points.",
        },
        {
            step: "04",
            title: "Deployment & Support",
            description:
                "Final deployment, necessary training, and post-launch maintenance support.",
        },
    ];

    return (
        <Layout
            title="Services - Wistant - Backend Development & System Architecture | Wistant"
            description="Explore my services in robust backend system development, custom APIs, mobile/desktop applications, and complete digital solutions."
            keywords="services, backend development, system architecture, custom API, NestJS, microservices, mobile applications, desktop software, web performance, Wistant"
        >
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <MyStack/>

                    <AppearOnScroll>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
                                My Expertise Domains
                            </h1>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                                Comprehensive digital solutions delivered with **precision, architecture, and reliability**.
                            </p>
                        </div>
                    </AppearOnScroll>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Card
                                    key={index}
                                    className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group h-full"
                                >
                                    <CardHeader>
                                        <div
                                            className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                                            <Icon className="w-8 h-8 text-primary-foreground"/>
                                        </div>
                                        <CardTitle className="text-xl text-text-primary mb-2 title3">
                                            {service.title}
                                        </CardTitle>
                                        <p className="text-text-secondary title2">
                                            {service.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="space-y-3 mb-6 title1">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0"/>
                                                    <span className="text-text-secondary text-sm">
                            {feature}
                          </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-border pt-4">
                                            <p className="text-primary font-semibold mb-4 title1">
                                                {service.price}
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10"
                                            >
                                                Learn More
                                                <ArrowRight
                                                    className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"/>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Process Section */}
                    <div className="mb-20">
                        <AppearOnScroll>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
                                    My Structured Workflow
                                </h2>
                                <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                                    A robust, four-step approach engineered to ensure project success.
                                </p>
                            </div>
                        </AppearOnScroll>

                        <AppearOnScroll>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {processSteps.map((process, index) => (
                                    <Card
                                        key={index}
                                        className="bg-gradient-card border-border-light shadow-card text-center group"
                                    >
                                        <CardContent className="p-8">
                                            <div
                                                className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                      <span className="text-primary-foreground font-bold text-lg">
                        {process.step}
                      </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-text-primary mb-3">
                                                {process.title}
                                            </h3>
                                            <p className="text-text-secondary">{process.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AppearOnScroll>
                    </div>

                    {/* Technologies Section */}

                    {/* CTA Section */}
                    <div
                        className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Ready to Engineer Your Next Project?
                        </h2>
                        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                            Let’s discuss your system requirements and map out the solution that brings your ideas to fruition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                            >
                                <a href="/contact">Start a Project</a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="border-border-light hover:border-primary hover:bg-primary/10"
                            >
                                <a
                                    href="https://wa.me/237651727673"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connect on WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Services;