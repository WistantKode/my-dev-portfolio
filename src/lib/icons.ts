import { FaJava, FaReact } from "react-icons/fa";
import { SiSpring, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";
import { IconType } from "react-icons";

export const ICONS = {
  react: FaReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  java: FaJava,
  spring: SiSpring,
  postgres: SiPostgresql,
} as const; // 'as const' is crucial for deriving a narrow type

export type IconName = keyof typeof ICONS;
