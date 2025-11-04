// src/pages/admin.tsx
import React, { useEffect, useMemo, useState } from "react";
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

import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

/* --- Mock data (inchangé) --- */
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
  {
    id: 2,
    title: "Comment créer une interface utilisateur intuitive",
    excerpt: "Les principes fondamentaux du design UI/UX.",
    content: "Une interface utilisateur intuitive...",
    category: "Design",
    status: "draft",
    publishedAt: null,
    tags: ["UI/UX", "Design"],
  },
];

/* --- Project interface fourni par toi --- */
export interface Project {
  id: string;
  title: string;
  description: string;
  repogit?: string;
  tech: string[];
  publishat?: Date;
  imageUrl?: string;
}

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

  /* ---------------------------
     Section Projects (Firestore)
     --------------------------- */
  const [projects, setProjects] = useState<Project[]>([]);
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    repogit: "",
    techString: "",
    publishatStr: "", // yyyy-mm-dd
    imageUrl: "",
  });
  const [projectLoading, setProjectLoading] = useState(false);

  // Live subscription to 'projects' collection ordered by createdAt desc
  useEffect(() => {
    const colRef = collection(db, "project");
    // We order by createdAt to ensure stable ordering. createdAt is set on create.
    const q = query(colRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const items: Project[] = snap.docs.map((d) => {
          const data: any = d.data();
          // Normalize publishat: Firestore Timestamp -> JS Date
          const pub =
            data?.publishat instanceof Timestamp
              ? data.publishat.toDate()
              : data?.publishat
              ? new Date(data.publishat)
              : undefined;
          return {
            id: d.id,
            title: data?.title ?? "",
            description: data?.description ?? "",
            repogit: data?.repogit ?? undefined,
            tech: Array.isArray(data?.tech) ? data.tech : [],
            publishat: pub,
            imageUrl: data?.imageUrl ?? undefined,
          } as Project;
        });
        setProjects(items);
      },
      (err) => {
        console.error("Firestore projects onSnapshot error:", err);
        toast({
          title: "Erreur Firestore",
          description: "Impossible de synchroniser les projets en temps réel.",
          variant: "destructive",
        });
      }
    );

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Helper: reset project form */
  function resetProjectForm() {
    setProjectForm({
      title: "",
      description: "",
      repogit: "",
      techString: "",
      publishatStr: "",
      imageUrl: "",
    });
    setEditingProjectId(null);
    setIsProjectEditing(false);
  }

  /* Create or Update project in Firestore */
  async function handleProjectSave(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!projectForm.title.trim() || !projectForm.description.trim()) {
      toast({
        title: "Erreur",
        description: "Titre et description sont requis pour le projet.",
        variant: "destructive",
      });
      return;
    }
    setProjectLoading(true);
    try {
      const techArray = projectForm.techString
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      // Prepare publishat: if user provided a date string, convert to Firestore Timestamp
      let publishValue: any = null;
      if (projectForm.publishatStr) {
        const d = new Date(projectForm.publishatStr);
        // If invalid date fallback to serverTimestamp
        if (isNaN(d.getTime())) {
          publishValue = serverTimestamp();
        } else {
          publishValue = Timestamp.fromDate(d);
        }
      } else {
        // default to server timestamp when not provided
        publishValue = serverTimestamp();
      }

      if (editingProjectId) {
        // Update existing doc
        const docRef = doc(db, "project", editingProjectId);
        await updateDoc(docRef, {
          title: projectForm.title,
          description: projectForm.description,
          repogit: projectForm.repogit || "",
          tech: techArray,
          publishat: publishValue,
          imageUrl: projectForm.imageUrl || "",
          updatedAt: serverTimestamp(),
        });
        toast({
          title: "Succès",
          description: "Projects mis à jour avec succès.",
        });
      } else {
        // Create new doc
        const col = collection(db, "project");
        await addDoc(col, {
          title: projectForm.title,
          description: projectForm.description,
          repogit: projectForm.repogit || "",
          tech: techArray,
          publishat: publishValue,
          imageUrl: projectForm.imageUrl || "",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        toast({
          title: "Succès",
          description: "Nouveau projet ajouté.",
        });
      }
      resetProjectForm();
    } catch (err) {
      console.error("handleProjectSave error:", err);
      toast({
        title: "Erreur",
        description: "Impossible d'enregistrer le projet (voir console).",
        variant: "destructive",
      });
    } finally {
      setProjectLoading(false);
    }
  }

  /* Edit: populate form for editing */
  function handleProjectEdit(p: Project) {
    setEditingProjectId(p.id);
    setProjectForm({
      title: p.title,
      description: p.description,
      repogit: p.repogit ?? "",
      techString: p.tech.join(", "),
      publishatStr: p.publishat ? p.publishat.toISOString().slice(0, 10) : "",
      imageUrl: p.imageUrl ?? "",
    });
    setIsProjectEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Delete */
  async function handleProjectDelete(id: string) {
    if (!confirm("Supprimer ce projet ?")) return;
    try {
      await deleteDoc(doc(db, "project", id));
      toast({
        title: "Succès",
        description: "Projects supprimé.",
      });
    } catch (err) {
      console.error("handleProjectDelete error:", err);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le projet (voir console).",
        variant: "destructive",
      });
    }
  }

  /* Open new project form */
  function handleCreateProject() {
    resetProjectForm();
    setIsProjectEditing(true);
  }

  /* ---------------------------
     End Projects section
     --------------------------- */

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(", "),
    });
    setIsEditing(true);
  };

  const handleCreate = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: "",
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Erreur",
        description: "Le titre et le contenu sont requis.",
        variant: "destructive",
      });
      return;
    }

    const postData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      publishedAt: editingPost?.publishedAt || new Date().toISOString(),
      status: "published",
    };

    if (editingPost) {
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? { ...post, ...postData } : post
        )
      );
      toast({
        title: "Succès",
        description: "Article mis à jour avec succès.",
      });
    } else {
      const newPost = {
        id: Date.now(),
        ...postData,
      };
      setPosts([newPost, ...posts]);
      toast({
        title: "Succès",
        description: "Nouvel article créé avec succès.",
      });
    }

    setIsEditing(false);
    setEditingPost(null);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast({
      title: "Succès",
      description: "Article supprimé avec succès.",
    });
  };

  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter((p) => p.status === "published").length,
    draftPosts: posts.filter((p) => p.status === "draft").length,
    totalViews: 1250, // Mock data
  };

  const totalProjects = projects.length;

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
              {/* Small projects KPI near header */}
              <div className="mt-3">
                <Badge className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-900">
                  Projets enregistrés: {totalProjects}
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

            {/* Card remplacée pour afficher le nombre de projets */}
            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Projets</p>
                    <p className="text-2xl font-bold text-primary">
                      {totalProjects}
                    </p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editor Modal for Posts (unchanged) */}
          {isEditing && (
            <Card className="mb-8 bg-gradient-card border-border-light">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-text-primary">
                    {editingPost ? "Modifier l'article" : "Nouvel article"}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Titre de l'article"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-input border-border-light"
                />

                <Input
                  placeholder="Extrait"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="bg-input border-border-light"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Catégorie"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="bg-input border-border-light"
                  />

                  <Input
                    placeholder="Tags (séparés par des virgules)"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="bg-input border-border-light"
                  />
                </div>

                <Textarea
                  placeholder="Contenu de l'article"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="bg-input border-border-light"
                />

                <div className="flex gap-4">
                  <Button onClick={handleSave} className="bg-gradient-primary hover:opacity-90 border-0">
                    <Save className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>

                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts List (unchanged) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Articles existants</h2>

            {posts.map((post) => (
              <Card key={post.id} className="bg-gradient-card border-border-light">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-text-primary">{post.title}</h3>
                        <Badge
                          variant={post.status === "published" ? "default" : "secondary"}
                          className={post.status === "published" ? "bg-green-500" : ""}
                        >
                          {post.status === "published" ? "Publié" : "Brouillon"}
                        </Badge>
                      </div>

                      <p className="text-text-secondary mb-3">{post.excerpt}</p>

                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </div>

                        {post.publishedAt && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                          </div>
                        )}

                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          Modjo Victor
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag: string) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full text-text-muted">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>
                        <Edit className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ------------------------------
               Projects Admin Section
             ------------------------------ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Gestion des projets</h2>

            {/* Project Editor */}
            {isProjectEditing && (
              <Card className="mb-8 bg-gradient-card border-border-light">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-text-primary">
                      {editingProjectId ? "Modifier le projet" : "Nouveau projet"}
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => resetProjectForm()}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <form onSubmit={(e) => handleProjectSave(e)}>
                    <Input
                      placeholder="Titre du projet"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm((f) => ({ ...f, title: e.target.value }))}
                      className="bg-input border-border-light mb-3"
                    />

                    <Textarea
                      placeholder="Description"
                      value={projectForm.description}
                      onChange={(e) => setProjectForm((f) => ({ ...f, description: e.target.value }))}
                      rows={5}
                      className="bg-input border-border-light mb-3"
                    />

                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <Input
                        placeholder="Repo (ex: https://github.com/...)"
                        value={projectForm.repogit}
                        onChange={(e) => setProjectForm((f) => ({ ...f, repogit: e.target.value }))}
                        className="bg-input border-border-light"
                      />

                      <Input
                        placeholder="Image URL (optionnel)"
                        value={projectForm.imageUrl}
                        onChange={(e) => setProjectForm((f) => ({ ...f, imageUrl: e.target.value }))}
                        className="bg-input border-border-light"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <Input
                        placeholder="Technologies (séparées par des virgules)"
                        value={projectForm.techString}
                        onChange={(e) => setProjectForm((f) => ({ ...f, techString: e.target.value }))}
                        className="bg-input border-border-light"
                      />

                      <Input
                        type="date"
                        placeholder="Date de publication"
                        value={projectForm.publishatStr}
                        onChange={(e) => setProjectForm((f) => ({ ...f, publishatStr: e.target.value }))}
                        className="bg-input border-border-light"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button disabled={projectLoading} className="bg-gradient-primary hover:opacity-90 border-0" type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        {editingProjectId ? (projectLoading ? "Mise à jour…" : "Mettre à jour") : (projectLoading ? "Ajout…" : "Ajouter")}
                      </Button>

                      <Button variant="outline" onClick={() => resetProjectForm()}>
                        Annuler
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Projects List */}
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <Card key={p.id} className="bg-gradient-card border-border-light">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary">{p.title}</h3>
                        <p className="text-text-secondary mt-2">{p.description}</p>

                        <div className="flex items-center gap-4 text-sm text-text-muted mt-3">
                          {p.publishat && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {p.publishat.toLocaleDateString("fr-FR")}
                            </div>
                          )}

                          <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {p.tech.join(", ")}
                          </div>
                        </div>

                        <div className="flex gap-3 mt-3">
                          {p.repogit && (
                            <a href={p.repogit} target="_blank" rel="noreferrer" className="underline text-sm">
                              Code
                            </a>
                          )}
                          {p.imageUrl && (
                            <a href={p.imageUrl} target="_blank" rel="noreferrer" className="underline text-sm">
                              Image
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        <Button variant="outline" size="sm" onClick={() => handleProjectEdit(p)}>
                          <Edit className="w-4 h-4" />
                        </Button>

                        <Button variant="outline" size="sm" onClick={() => handleProjectDelete(p.id)} className="hover:bg-destructive hover:text-destructive-foreground">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {projects.length === 0 && <p className="text-center text-gray-500 mt-6">Aucun projet pour le moment.</p>}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
