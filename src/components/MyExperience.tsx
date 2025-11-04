import React from 'react';
import { Briefcase, GraduationCap } from "lucide-react";
import { AppearOnScroll } from "@/lib/ScrollEffect.tsx";

// 1. Structure de données typée et scalable
interface ExperienceItem {
  title: string;
  institution: string;
  date: string;
  description: string;
}

// 2. Constantes de données faciles à mettre à jour
const professionalExperiences: ExperienceItem[] = [
  {
    title: "Stage Développement Backend",
    institution: "INAF",
    date: "Juin 2025 - Sept. 2025",
    description: "Création d’API performantes et sécurisées avec Spring Boot, intégration avec React et gestion de bases de données.",
  },
  // Ajoutez simplement un nouvel objet ici pour une nouvelle expérience pro
];

const academicBackground: ExperienceItem[] = [
  {
    title: "Licence I - Biologie & Informatique",
    institution: "Université de Yaoundé 1",
    date: "2023 - 2025",
    description: "Formation générale et scientifique solide, axée sur les sciences et l’informatique, donnant les bases nécessaires pour mon parcours.",
  },
  {
    title: "Développement React (Autodidacte)",
    institution: "FreeCodeCamp & Projets Personnels",
    date: "2024",
    description: "Apprentissage de React pour le développement d’applications web interactives et responsives.",
  },
  // Ajoutez simplement un nouvel objet ici pour un nouveau diplôme/formation
];

// 3. Sous-composant réutilisable pour chaque item de la timeline
const TimelineItem = ({ item, isLast }: { item: ExperienceItem; isLast: boolean }) => (
  <div className="relative pl-8">
    {/* Le point sur la timeline */}
    <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
    {/* La ligne verticale */}
    {!isLast && <div className="absolute left-[7px] top-5 h-full w-px bg-border"></div>}
    
    <div className="mb-8">
      <p className="text-primary font-medium mb-1 text-sm">{item.date}</p>
      <h4 className="font-semibold text-text-primary mb-1 title3">{item.title}</h4>
      <p className="text-text-secondary font-medium mb-2 text-sm">{item.institution}</p>
      <p className="text-text-secondary title1">{item.description}</p>
    </div>
  </div>
);

// 4. Composant principal avec le nouveau design à deux colonnes
const MyExperience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <AppearOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
            Mon Parcours
          </h2>
        </AppearOnScroll>
        <AppearOnScroll>
          <p className="text-text-secondary text-lg title1 max-w-2xl mx-auto">
            Un aperçu de mon cheminement académique et de mes expériences professionnelles dans le monde du développement.
          </p>
        </AppearOnScroll>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Colonne des Expériences Professionnelles */}
        <div>
          <AppearOnScroll>
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">Expériences Professionnelles</h3>
            </div>
          </AppearOnScroll>
          <div className="relative">
            {professionalExperiences.map((item, index) => (
              <AppearOnScroll key={index}>
                <TimelineItem item={item} isLast={index === professionalExperiences.length - 1} />
              </AppearOnScroll>
            ))}
          </div>
        </div>

        {/* Colonne du Parcours Scolaire */}
        <div>
          <AppearOnScroll>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">Parcours Scolaire</h3>
            </div>
          </AppearOnScroll>
          <div className="relative">
            {academicBackground.map((item, index) => (
              <AppearOnScroll key={index}>
                <TimelineItem item={item} isLast={index === academicBackground.length - 1} />
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
