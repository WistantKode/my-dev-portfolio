import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import { Project } from "../lib/projet";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { projectsData } from "@/lib/projectsData";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = () => {
      try {
        setProjects(projectsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout
      title="Projets - Modjo Victor - Développeur Web Java React & Backend specialist"
      description="Découvrez une sélection de mes projets réalisés en développement web et backend."
      keywords="développeur web, projets, développeur backend, Java, React, portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <p className="text-center text-text-secondary">Chargement...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-text-secondary">
            Aucun projet enregistré pour le moment
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group h-full flex flex-col">
                  <CardHeader>
                    {project.imageUrl && (
                      <div className="w-full h-40 rounded-xl overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform shadow-primary">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl text-text-primary mb-2 title3">
                      {project.title}
                    </CardTitle>
                    <p className="text-text-secondary title2">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow">
                    <div className="space-y-3 mb-6 title1 flex-grow">
                      {project.tech?.map((tech, idx) => {
                        const IconComponent = tech.icon; // Directly get the component
                        return (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="text-primary">
                              <IconComponent />
                            </span>
                            <span className="text-text-secondary text-sm">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t border-border pt-4 mt-auto flex flex-col space-y-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10"
                          >
                            Voir le site
                            <Eye className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.a>
                      )}
                      {project.repogit && (
                        <motion.a
                          href={project.repogit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10"
                          >
                            Voir le code
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
