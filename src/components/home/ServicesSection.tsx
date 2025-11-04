import { Card, CardContent } from "@/components/ui/card";
import {
    Code,
    Palette,
    Megaphone,
    Monitor,
    Smartphone,
    Globe,
    Database, Heart,
} from "lucide-react";
import {
  AppearOnSrollToLeft,
  AppearOnSrollToRight,
  ScaleTextEffect,
  AppearOnScroll,
} from "@/lib/ScrollEffect";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Backend Solutions",
      description:
        "Robust backend architecture design and implementation to support your applications with reliable data management.",
    },
    {
      icon: Code,
      title: "Coding",
      description:
        "I develop custom solutions with clean, efficient, and optimized code to deliver reliable and high-performance results.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Full-stack web development using cutting-edge technologies to build scalable and maintainable applications.",
    },
    {
      icon: Monitor,
      title: "Desktop Development",
      description:
        "I build powerful and reliable desktop applications tailored to user needs, with a focus on performance, security, and seamless experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating responsive mobile applications with modern frameworks, ensuring optimal performance across all devices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "I create intuitive and aesthetically pleasing interfaces, providing a smooth and engaging user experience for your projects."
    },
    //   {
    //       icon: Heart,
    //       title: "SEO & search",
    //       description: "Globe",
    //   },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 title1">my services</p>

          <ScaleTextEffect>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 title3">
              What I do?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title2">
              Passionate about creating innovative digital solutions. Here's
              what I can do for you.
            </p>
          </ScaleTextEffect>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AppearOnScroll>
                <Card
                  key={index}
                  className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3 title3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed title2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
