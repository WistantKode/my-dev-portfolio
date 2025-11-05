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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";

// Filter configuration
const filterConfig: { name: string; category: ProjectCategory; icon: IconType }[] = [
  { name: "All", category: "all", icon: Code },
  { name: "Web Development", category: "web", icon: Globe },
  { name: "Backend Systems", category: "backend", icon: Server },
  { name: "Mobile Applications", category: "mobile", icon: Smartphone },
];

const PROJECTS_PER_PAGE = 6; // Define how many projects per page

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    return filtered;
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredAndSortedProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredAndSortedProjects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxPageButtons = 5; // Max number of page buttons to show
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (startPage > 1) {
      items.push(
        <PaginationItem key="first">
          <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(<PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>);
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink isActive={page === currentPage} onClick={() => handlePageChange(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>);
      }
      items.push(
        <PaginationItem key="last">
          <PaginationLink onClick={() => handlePageChange(totalPages)}>{totalPages}</PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Layout
      title="Projects - Wistant Kode - DevSecOps Practicer | Software Engineer"
      description="Explore a curated selection of Wistant Kode's projects, showcasing expertise in web development, backend systems, and robust software solutions. Specializing in Java/Spring Boot, React/Next.js, Cloud, Automation, and Cybersecurity."
      keywords="Wistant Kode, projects, web development, backend development, Java, React, Next.js, Spring Boot, Cloud, Automation, Cybersecurity, portfolio, software engineering, DevSecOps"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
            My Projects
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
            Explore a curated selection of my work, ranging from interactive web applications to robust backend systems, engineered with a focus on performance, security, and scalability.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              <Input
                placeholder="Search by title or description..."
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
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1); // Reset to first page on category change
                  }}
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
        {currentProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
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
                            View Live
                            <Eye className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.a>
                      )}
                      {project.repoGit && (
                        <motion.a
                          href={project.repoGit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10"
                          >
                            View Code
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
            <p className="text-text-muted text-lg">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                </PaginationItem>
                {renderPaginationItems()}
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </Layout>
  );
}