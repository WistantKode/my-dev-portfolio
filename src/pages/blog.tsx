import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog data - replace with actual data source
const mockPosts = [
  {
    id: 1,
    title: "Les tendances du développement web en 2024",
    excerpt: "Découvrez les technologies et frameworks qui façonnent l'avenir du développement web.",
    content: "Le développement web évolue constamment...",
    category: "Développement",
    author: "modjo",
    publishedAt: "2024-01-15",
    image: "/blog-post-1.jpg",
    tags: ["React", "Web Development", "Trends"]
  },
  {
    id: 2,
    title: "Comment créer une interface utilisateur intuitive",
    excerpt: "Les principes fondamentaux du design UI/UX pour créer des expériences utilisateur exceptionnelles.",
    content: "Une interface utilisateur intuitive...",
    category: "Design",
    author: "Mojdo",
    publishedAt: "2024-01-10",
    image: "/blog-post-2.jpg",
    tags: ["UI/UX", "Design", "User Experience"]
  },
  {
    id: 3,
    title: "Optimisation des performances web",
    excerpt: "Techniques avancées pour améliorer la vitesse et les performances de vos applications web.",
    content: "L'optimisation des performances...",
    category: "Performance",
    author: "modjo",
    publishedAt: "2024-01-05",
    image: "/blog-post-3.jpg",
    tags: ["Performance", "Optimization", "Web"]
  }
];

const Blog = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Développement", "Design", "Performance"];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout
        title="Blog - Wistant | Articles on Web Development and Software Architecture"
        description="Explore Wistant's latest articles on web development, software architecture, and modern technologies."
        keywords="blog, web development, software architecture, technical articles, tutorials, Wistant"
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
              Blog
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
              Découvrez mes réflexions sur le développement web et les dernières technologies.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                <Input
                  placeholder="Rechercher des articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-input border-border-light"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary border-0" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">JK</span>
                    </div>
                    <p className="text-text-muted text-sm">Image à venir</p>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-text-muted text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-text-muted">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Lire plus
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary rounded-full text-text-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">Aucun article trouvé.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;