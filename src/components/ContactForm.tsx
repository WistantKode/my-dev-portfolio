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
import {AppearOnScroll} from "@/lib/ScrollEffect.tsx";

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
            // Note: The Formspree endpoint remains the same as it's a target URL.
            const response = await fetch("https://formspree.io/f/myzbqrro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    // Optional: adding custom metadata
                    _replyto: formData.email,
                    _subject: `New Inquiry from ${formData.name}: ${formData.subject}`,
                }),
            });

            if (response.ok) {
                // Success
                toast({
                    title: "Message Sent Successfully.",
                    description:
                        "Thank you for reaching out. I will process your inquiry and respond promptly.",
                    variant: "default",
                });

                // Reset form state
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                // Server Error Handling
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to process the request.");
            }
        } catch (error) {
            // Error Catching
            console.error("Transmission Error:", error);
            toast({
                title: "Transmission Failure",
                description:
                    "An error occurred while sending the message. Please review the input and try again.",
                variant: "destructive",
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
            title: "Primary Email",
            value: "wistantkode@protonmail.com",
            link: "mailto:wistantkode@protonmail.com",
        },
        {
            icon: Phone,
            title: "Direct Line (WhatsApp)",
            value: "+237 697 135 341",
            link: "https://wa.me/+237697135341",
        },
        {
            icon: MapPin,
            title: "Operating Base",
            value: "Yaoundé, Cameroon",
            link: null,
        },
        {
            icon: Clock,
            title: "Standard Availability",
            value: "Mon - Fri, 8 AM - 6 PM (WAT)",
            link: null,
        },
    ];

    return (
        <Layout
            title="Contact - Wistant | Backend System Specialist & Web Architect"
            description="Engage Wistant for robust web development, system architecture, and UI/UX design projects. Let's discuss your requirements and engineer your vision into reality."
            keywords="contact, Wistant, web developer, Backend, system architecture, project inquiry, quote, Yaoundé, Cameroon"
        >
            <section className="py-20 bg-background min-h-screen">
                <div className="container mx-auto px-4">
                    {/* Hero Section - Confident Tone */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                            Initiate Contact
                        </h1>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Do you have a project requiring a solid **Backend architecture**? Let's discuss the technical specifications and build a reliable system together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <Card className="bg-gradient-card border-border-light shadow-card">
                            <CardHeader>
                                <CardTitle className="text-2xl text-text-primary">
                                    Send a Direct Message
                                </CardTitle>
                                <p className="text-text-secondary">
                                    Complete the fields below. All inquiries are treated with priority and a structured response is guaranteed.
                                </p>
                            </CardHeader>

                            <CardContent>
                                <AppearOnScroll>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <AppearOnScroll>
                                                <div>
                                                    <label className="block text-text-primary text-sm font-medium mb-2">
                                                        Full Name *
                                                    </label>
                                                    <Input
                                                        name="name"
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your Name/Company"
                                                        className="bg-input border-border-light"
                                                    />
                                                </div>
                                            </AppearOnScroll>

                                            <AppearOnScroll>
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
                                                        placeholder="your@email.com"
                                                        className="bg-input border-border-light"
                                                    />
                                                </div>
                                            </AppearOnScroll>
                                        </div>

                                        <AppearOnScroll>
                                            <div>
                                                <label className="block text-text-primary text-sm font-medium mb-2">
                                                    Subject *
                                                </label>
                                                <Input
                                                    name="subject"
                                                    type="text"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Project or Inquiry Subject"
                                                    className="bg-input border-border-light"
                                                />
                                            </div>
                                        </AppearOnScroll>

                                        <AppearOnScroll>
                                            <div>
                                                <label className="block text-text-primary text-sm font-medium mb-2">
                                                    System Requirements / Message *
                                                </label>
                                                <Textarea
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Outline your project scope or request..."
                                                    rows={6}
                                                    className="bg-input border-border-light"
                                                />
                                            </div>
                                        </AppearOnScroll>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            size="lg"
                                            className="w-full bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
                                        >
                                            {isSubmitting ? (
                                                "Processing Request..."
                                            ) : (
                                                <>
                                                    <Send className="mr-2 w-5 h-5" />
                                                    Submit Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </AppearOnScroll>
                            </CardContent>
                        </Card>

                        {/* Contact Info - Confident Tone */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-text-primary mb-6">
                                    Contact Protocols
                                </h2>
                                <p className="text-text-secondary text-lg mb-8">
                                    Direct engagement is welcome. Standard response latency is within 24 hours, often sooner.
                                </p>
                            </div>

                            <AppearOnScroll>
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
                            </AppearOnScroll>


                            {/* Quick Actions */}
                            <AppearOnScroll>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-text-primary">
                                        Immediate Channels
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
                                                Connect via WhatsApp
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
                                                Send Direct Email
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
                                                Review Services Offered
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </AppearOnScroll>

                            {/* FAQ Section - Confident Tone */}
                            <AppearOnScroll>
                                <Card className="bg-gradient-card border-border-light shadow-card">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-text-primary title3">
                                            Engagement Protocols (FAQ)
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <h4 className="text-text-primary font-medium mb-1 title2">
                                                What is your response latency?
                                            </h4>
                                            <p className="text-text-secondary text-sm title1">
                                                I guarantee a response within 24 hours. Efficient communication is a priority.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-text-primary font-medium mb-1">
                                                Do you provide initial project assessments?
                                            </h4>
                                            <p className="text-text-secondary text-sm">
                                                Yes, a complimentary quote is provided after a detailed discussion of your technical requirements.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-text-primary font-medium mb-1">
                                                Do you handle remote projects?
                                            </h4>
                                            <p className="text-text-secondary text-sm">
                                                Absolutely. I operate with clients globally, ensuring seamless remote delivery and collaboration.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AppearOnScroll>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactForm;