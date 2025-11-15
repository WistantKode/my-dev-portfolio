import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

import React from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  delay?: number;
};


export function ScaleTextEffect({ children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeftSection({ children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function FadeRightSection({ children, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

type SubTitleFadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

export function SubTitleFadeIn({ children, delay = 0 }: SubTitleFadeInProps){
  return(
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}


type AppearOnScrollProps = {
  children: React.ReactNode;
  threshold?: number;
};

export function AppearOnScroll({ children, threshold = 0.3 }: AppearOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: false, // l'animation ce joue un seule fois
    threshold: threshold, // l'animation se declenche a {threshold} de la hauteur de l'element
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
export function AppearOnScale({ children, threshold = 0.3 }: AppearOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: false, // l'animation ce joue un seule fois
    threshold: threshold, // l'animation se declenche a {threshold} de la hauteur de l'element
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale : 1, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function AppearOnSrollToLeft({ children, threshold = 0.3 } : AppearOnScrollProps){

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
export function AppearOnSrollToRight({ children, threshold = 0.3 }: AppearOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Changé à true pour éviter les répétitions
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }} // Commencer plus à droite
      animate={{ 
        opacity: inView ? 1 : 0, 
        x: inView ? 0 : 100 // Rester à droite quand pas visible
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut" // Animation plus fluide
      }}
    >
      {children}
    </motion.div>
  );
  }