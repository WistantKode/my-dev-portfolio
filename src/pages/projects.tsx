import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import { Project, ProjectCategory } from "../lib/projet";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, Search, Globe, Server, Smartphone, Code } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { IconType } from "react-icons";

// Filter configuration
const filterConfig: { name: string; category: ProjectCategory; icon: IconType }[] = [
  { name: "Tous", category: "all", icon: Code },
  { name: "Web", category: "web", icon: Globe },
  { name: "Backend", category: "backend", icon: Server },
  { name: "Mobile", category: "mobile", icon: Smartphone },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Layout
      title="Projets - Modjo Victor - Développeur Web Java React & Backend specialist"
      description="Découvrez une sélection de mes projets réalisés en développement web et backend."
      keywords="développeur web, projets, développeur backend, Java, React, portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
            Mes Projets
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
            Explorez une sélection de mes travaux, allant des applications web interactives aux systèmes backend robustes.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              <Input
                placeholder="Rechercher par titre ou description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border-light w-full"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap">
              {filterConfig.map(({ name, category, icon: Icon }) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`group/filter ${selectedCategory === category ? "bg-gradient-primary border-0" : ""}`}
                >
                  <Icon className="w-4 h-4 mr-2 transition-transform group-hover/filter:scale-110" />
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        const IconComponent = tech.icon;
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
        ) : (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">Aucun projet ne correspond à vos critères.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
