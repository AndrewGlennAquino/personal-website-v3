// Libary imports
import { useContext } from "react";
import { motion } from "motion/react";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";

export interface HighlightInterface {
  src?: string;
  alt: string;
  children: string;
}

/**
 * Highlighted list item for skills with logo
 */
export const Highlight = ({ src, alt, children }: HighlightInterface) => {
  // Get LightThemeContext
  const { lightTheme, themeTransitionDuration } = useContext(LightThemeContext);

  return (
    <motion.li
      className={`text-sm font-light px-2 py-0.5 rounded inline-flex items-center gap-1`}
      initial={{ background: "var(--color-tekhelet)" }}
      animate={lightTheme ? "animateBackground" : undefined}
      transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
      variants={{ animateBackground: { background: "var(--color-xanthous)" } }}
    >
      {src ? (
        <img className="w-6 h-auto object-cover" src={src} alt={alt} />
      ) : undefined}
      {children}
    </motion.li>
  );
};
