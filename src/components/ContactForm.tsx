import { useState } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    Globe,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xdkdqlnp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    // Optionnel : ajouter d'autres métadonnées
                    _replyto: formData.email, // Pour que Formspree sache à qui répondre
                    _subject: `Nouveau message de ${formData.name}: ${formData.subject}`, // Sujet personnalisé
                }),
            });

            if (response.ok) {
                // Succès
                toast({
                    title: "Message envoyé !",
                    description:
                        "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
                    variant: "default", // ou "success" selon votre config
                });

                // Réinitialiser le formulaire
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                // Erreur du serveur
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de l'envoi");
            }
        } catch (error) {
            // Gestion des erreurs
            console.error("Erreur lors de l'envoi:", error);
            toast({
                title: "Erreur d'envoi",
                description:
                    "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
                variant: "destructive", // ou "error" selon votre config
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "wistantkode@protonmail.com",
            link: "mailto:wistantkode@protonmail.com",
        },
        {
            icon: Phone,
            title: "Téléphone",
            value: "+237 697 135 341",
            link: "https://wa.me/+237697135341",
        },
        {
            icon: MapPin,
            title: "Localisation",
            value: "Yaoundé, Cameroun",
            link: null,
        },
        {
            icon: Clock,
            title: "Disponibilité",
            value: "Lun - Ven, 8h - 18h",
            link: null,
        },
    ];

    return (
        <Layout
            title="Contact - Modjo Victor | Développeur Web & Backend Specialist"
            description="Contactez Modjo victor pour vos projets de développement web et design UI/UX. Discutons de vos besoins et concrétisons vos idées ensemble."
            keywords="contact, Modjo Victor, développeur web, Backend, projet, devis, Yaoundé, Cameroun"
        >
            <section className="py-20 bg-background min-h-screen">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                            Contactez-Moi
                        </h1>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Vous avez un projet en tête ? Je serais ravi de discuter avec vous
                            et de voir comment je peux vous aider.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <Card className="bg-gradient-card border-border-light shadow-card">
                            <CardHeader>
                                <CardTitle className="text-2xl text-text-primary">
                                    Envoyez-moi un message
                                </CardTitle>
                                <p className="text-text-secondary">
                                    Remplissez le formulaire ci-dessous et je vous répondrai
                                    rapidement.
                                </p>
                            </CardHeader>

                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-text-primary text-sm font-medium mb-2">
                                                Nom complet *
                                            </label>
                                            <Input
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Votre nom"
                                                className="bg-input border-border-light"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-text-primary text-sm font-medium mb-2">
                                                Email *
                                            </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="votre@email.com"
                                                className="bg-input border-border-light"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-primary text-sm font-medium mb-2">
                                            Sujet *
                                        </label>
                                        <Input
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Sujet de votre message"
                                            className="bg-input border-border-light"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-text-primary text-sm font-medium mb-2">
                                            Message *
                                        </label>
                                        <Textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Décrivez votre projet ou votre demande..."
                                            rows={6}
                                            className="bg-input border-border-light"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        size="lg"
                                        className="w-full bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                                    >
                                        {isSubmitting ? (
                                            "Envoi en cours..."
                                        ) : (
                                            <>
                                                <Send className="mr-2 w-5 h-5" />
                                                Envoyer le message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-text-primary mb-6">
                                    Informations de Contact
                                </h2>
                                <p className="text-text-secondary text-lg mb-8">
                                    N'hésitez pas à me contacter directement. Je réponds
                                    généralement dans les 24 heures.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <Card
                                            key={index}
                                            className="bg-gradient-card border-border-light shadow-card hover:shadow-glow transition-smooth group"
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-primary">
                                                        <Icon className="w-6 h-6 text-primary-foreground" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-text-primary font-semibold mb-1">
                                                            {info.title}
                                                        </h3>
                                                        {info.link ? (
                                                            <a
                                                                href={info.link}
                                                                target={
                                                                    info.link.startsWith("http")
                                                                        ? "_blank"
                                                                        : undefined
                                                                }
                                                                rel={
                                                                    info.link.startsWith("http")
                                                                        ? "noopener noreferrer"
                                                                        : undefined
                                                                }
                                                                className="text-primary hover:text-primary-glow transition-smooth"
                                                            >
                                                                {info.value}
                                                            </a>
                                                        ) : (
                                                            <p className="text-text-secondary">
                                                                {info.value}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-text-primary">
                                    Actions Rapides
                                </h3>

                                <div className="space-y-3">
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="w-full justify-start border-border-light hover:border-primary hover:bg-primary/10"
                                    >
                                        <a
                                            href="https://wa.me/+237697135341"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MessageCircle className="mr-3 w-5 h-5" />
                                            Discuter sur WhatsApp
                                        </a>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="w-full justify-start border-border-light hover:border-primary hover:bg-primary/10"
                                    >
                                        <a href="mailto:wistantkode@protonmail.com">
                                            <Mail className="mr-3 w-5 h-5" />
                                            Envoyer un email
                                        </a>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="w-full justify-start border-border-light hover:border-primary hover:bg-primary/10"
                                    >
                                        <a href="/services">
                                            <Globe className="mr-3 w-5 h-5" />
                                            Voir mes services
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <Card className="bg-gradient-card border-border-light shadow-card">
                                <CardHeader>
                                    <CardTitle className="text-xl text-text-primary title3">
                                        Questions Fréquentes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="text-text-primary font-medium mb-1 title2">
                                            Quel est votre délai de réponse ?
                                        </h4>
                                        <p className="text-text-secondary text-sm title1">
                                            Je réponds généralement dans les 24 heures, souvent plus
                                            rapidement.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-text-primary font-medium mb-1">
                                            Proposez-vous des devis gratuits ?
                                        </h4>
                                        <p className="text-text-secondary text-sm">
                                            Oui, je propose un devis gratuit après discussion de vos
                                            besoins.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-text-primary font-medium mb-1">
                                            Travaillez-vous à distance ?
                                        </h4>
                                        <p className="text-text-secondary text-sm">
                                            Oui, je travaille avec des clients du monde entier en
                                            remote.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactForm;
