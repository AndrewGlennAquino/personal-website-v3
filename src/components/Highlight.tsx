// Libary imports
import { useContext } from "react";
import { motion } from "motion/react";

// Context imports
import { DarkThemeContext } from "../contexts/DarkThemeContext";

/**
 * Highlighted list item for skills with logo
 */
export const Highlight = ({
  src,
  alt,
  children,
}: {
  src?: string;
  alt: string;
  children: string;
}) => {
  // Get DarkThemeContext
  const { darkTheme, themeTransitionDuration } = useContext(DarkThemeContext);

  return (
    <motion.li
      className={`${
        darkTheme ? `bg-tekhelet` : `bg-xanthous`
      } font-light px-2 py-0.5 rounded inline-flex items-center gap-1`}
      initial={{ background: "var(--color-xanthous)" }}
      animate={darkTheme ? "animateBackground" : undefined}
      transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
      variants={{ animateBackground: { background: "var(--color-tekhelet)" } }}
    >
      {src ? (
        <img className="w-6 h-auto object-cover" src={src} alt={alt} />
      ) : undefined}
      {children}
    </motion.li>
  );
};
