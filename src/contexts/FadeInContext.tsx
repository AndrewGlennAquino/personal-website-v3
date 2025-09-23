import { createContext } from "react";
import { type Variants } from "motion";

// Animation variants for fade in animation
const FadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transform: "translateY(8px)",
  },
  animateFadeIn: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const FadeInContext = createContext(FadeInVariants);
