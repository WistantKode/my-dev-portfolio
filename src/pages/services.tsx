import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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


// Interface pour typer les technologies


const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description:
        "Création d'applications web modernes et performantes avec les dernières technologies.",
      features: [
        "Sites web responsives",
        "Applications web",
        "E-commerce",
        "Intégration API",
        "Tableaux de bord administratifs",
      ],
      price: "Tarifs adaptés selon vos besoins – devis gratuit",
    },
    {
      icon: Monitor,
      title: "Applications Desktop",
      description:
        "Développement de logiciels sur mesure avec JavaFX et intégration base de données.",
      features: [
        "Interfaces modernes et intuitives",
        "Connexion aux base de données",
        "Gestion de données et rapports",
        "Solutions adaptées aux PME",
      ],
      price: "Chaque projet est étudié selon sa complexité",
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description:
        "Développement d'applications mobiles cross-platform avec React Native.",
      features: [
        "Applications iOS/Android",
        "Interface native",
        "Performance optimisée",
      ],
      price: "Tarifs adaptés selon vos besoins – devis gratuit",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description:
        "Mise en place de systèmes robustes avec Spring Boot et architectures microservices.",
      features: [
        "APIs REST sécurisées",
        "Authentification et gestion utilisateurs",
        "Architecture évolutive",
      ],
      price: "Solutions personnalisées selon vos besoins métier",
    },

    {
      icon: Globe,
      title: "Optimisation & SEO",
      description:
        "Amélioration des performances et du référencement de votre site web.",
      features: [
        "Optimisation SEO",
        "Performance web",
        "Analytics",
        "Maintenance",
      ],
      price: "",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Discussion de vos besoins et objectifs pour définir le projet ensemble.",
    },
    {
      step: "02",
      title: "Conception",
      description:
        "Création des maquettes et planification de l'architecture technique.",
    },
    {
      step: "03",
      title: "Développement",
      description:
        "Réalisation du projet avec des points de validation réguliers.",
    },
    {
      step: "04",
      title: "Livraison",
      description:
        "Déploiement, formation et accompagnement pour la mise en ligne.",
    },
  ];

  return (
    <Layout
      title="Services - Développement Web & IT student | Modjo Victor"
      description="Découvrez mes services de développement web, applications mobiles, Desktop et solutions digitales personnalisées."
      keywords="services, développement web, developpement Backend, applications mobiles, application desktop, backend, API, branding, SEO, Modjo Victor"
    >
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
              Mes Services
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
              Solutions digitales complètes pour donner vie à vos projets avec
              expertise et créativité.
            </p>
          </div>

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
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                      <Icon className="w-8 h-8 text-primary-foreground" />
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
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
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
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
                Mon Processus de Travail
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                Une approche structurée pour garantir la réussite de votre
                projet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border-light shadow-card text-center group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
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
          </div>

          {/* Technologies Section */}
          <MyStack />

          {/* CTA Section */}
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et voyons comment je peux vous aider à
              concrétiser vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
              >
                <a href="/contact">Commencer un Projet</a>
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
                  Discuter sur WhatsApp
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
