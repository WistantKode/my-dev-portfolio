import { ReactNode, useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggleButton } from "../ThemeToggleButton";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  lang?: 'en' | 'fr'; // Added language prop
}

const Layout = ({
  children,
  title,
  description,
  keywords,
  lang = 'en' // Default to English
}: LayoutProps) => {

  // Define default meta content for both languages
  const metaContent = {
    en: {
      title: "Wistant Kode - Backend Developer | Software Engineering Student",
      description: "Wistant Kode's portfolio: a passionate Software Engineering Student and DevSecOps Practicer. Specializing in Java/Spring Boot, React/Next.js, Cloud, Automation, and Cybersecurity. Building innovative and scalable digital solutions.",
      keywords: "Wistant Kode, DevSecOps, Software Engineer, Java, Spring Boot, React, Next.js, Cloud, Automation, Cybersecurity, Portfolio, Web Development, Backend Development, Africa Tech"
    },
    fr: {
      title: "Wistant Kode - Developer Backend | Étudiant en Génie Logiciel",
      description: "Portfolio de Wistant Kode : étudiant passionné en Génie Logiciel et praticien DevSecOps. Spécialisé en Java/Spring Boot, React/Next.js, Cloud, Automatisation et Cybersécurité. Construction de solutions digitales innovantes et scalables.",
      keywords: "Wistant Kode, DevSecOps, Ingénieur Logiciel, Java, Spring Boot, React, Next.js, Cloud, Automatisation, Cybersécurité, Portfolio, Développement Web, Développement Backend, Tech Afrique"
    }
  };

  const currentMeta = metaContent[lang];

  useEffect(() => {
    // Update document title
    document.title = title || currentMeta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || currentMeta.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || currentMeta.keywords);
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || currentMeta.title);
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || currentMeta.description);
    }

    // Set HTML lang attribute for better SEO and accessibility
    document.documentElement.lang = lang;

  }, [title, description, keywords, lang, currentMeta]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        {/* Le bouton de thème est placé ici, en position fixe */}
        <div className="fixed bottom-5 right-5 z-50">
          <ThemeToggleButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
