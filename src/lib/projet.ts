import { IconType } from "react-icons";

export interface Tech {
  name: string;
  icon: IconType; // Use IconType directly, like in MyStack.tsx
}

export interface Project {
  id: string;
  title: string;
  description: string;
  repogit?: string;
  liveUrl?: string;
  tech: Tech[];
  publishat?: Date;
  imageUrl?: string;
}
