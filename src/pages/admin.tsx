import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Eye,
  Calendar,
  Tag,
  User,
  BarChart3,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { projectsData } from "@/lib/projectsData"; // Import local data
import { Project } from "@/lib/projet";

const mockPosts = [
  {
    id: 1,
    title: "Les tendances du développement web en 2024",
    excerpt:
      "Découvrez les technologies et frameworks qui façonnent l'avenir du développement web.",
    content: "Le développement web évolue constamment...",
    category: "Développement",
    status: "published",
    publishedAt: "2024-01-15",
    tags: ["React", "Web Development", "Trends"],
  },
];

const AdminDashboard = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
  });
  const { toast } = useToast();

  // Projects are now read from local data
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [isProjectEditing, setIsProjectEditing] = useState(false);

  const handleDisabledFeature = () => {
    toast({
      title: "Fonctionnalité en cours de refonte",
      description: "La gestion de contenu depuis l'interface admin est temporairement désactivée.",
      variant: "destructive",
    });
  };

  const handleEdit = (post: any) => {
    handleDisabledFeature();
  };

  const handleCreate = () => {
    handleDisabledFeature();
  };

  const handleSave = () => {
    handleDisabledFeature();
  };

  const handleDelete = (id: number) => {
    handleDisabledFeature();
  };
  
  const handleCreateProject = () => {
    handleDisabledFeature();
  }

  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter((p) => p.status === "published").length,
    draftPosts: posts.filter((p) => p.status === "draft").length,
    totalProjects: projects.length,
  };

  return (
    <Layout
      title="Administration - Gestion du Blog | Modjo Victor"
      description="Interface d'administration pour la gestion des articles du blog de Modjo Victor."
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
                Administration
              </h1>
              <p className="text-text-secondary">
                Gérez vos articles de blog, projets et votre contenu
              </p>
              <div className="mt-3">
                <Badge className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-900">
                  Projets enregistrés: {stats.totalProjects}
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={handleCreate}
                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nouvel Article
              </Button>

              <Button
                onClick={handleCreateProject}
                className="bg-gradient-secondary hover:opacity-90 border-0 shadow-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nouvel Projet
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Total Articles</p>
                    <p className="text-2xl font-bold text-text-primary">
                      {stats.totalPosts}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Publiés</p>
                    <p className="text-2xl font-bold text-green-500">
                      {stats.publishedPosts}
                    </p>
                  </div>
                  <Eye className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Brouillons</p>
                    <p className="text-2xl font-bold text-yellow-500">
                      {stats.draftPosts}
                    </p>
                  </div>
                  <Edit className="w-8 h-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Projets</p>
                    <p className="text-2xl font-bold text-primary">
                      {stats.totalProjects}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Aperçu des contenus</h2>
            <p className="text-text-secondary">La gestion de contenu est actuellement désactivée.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
