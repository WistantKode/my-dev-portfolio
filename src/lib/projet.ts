import { IconType } from "react-icons";

export const projectCategories = ["all", "web", "backend", "mobile"] as const;
export type ProjectCategory = typeof projectCategories[number];

export interface Tech {
  name: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  repogit?: string;
  liveUrl?: string;
  tech: Tech[];
  publishat?: Date;
  imageUrl?: string;
}
