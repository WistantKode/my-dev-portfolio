import { IconType } from "react-icons";

export const projectCategories = ["all", "web", "backend", "mobile"] as const;
export type ProjectCategory = typeof projectCategories[number];

export interface Tech {
  name: string;
  icon: IconType; // Uses IconType directly
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  repoGit?: string; // Renamed for clarity and consistency
  liveUrl?: string;
  tech: Tech[];
  imageUrl?: string;
}
