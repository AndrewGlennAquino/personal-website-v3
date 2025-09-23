// Library imports
import { useContext } from "react";
import { motion, type Variants } from "motion/react";

// Component imports
import { Highlight, type HighlightInterface } from "./Highlight";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";
import { FadeInContext } from "../contexts/FadeInContext";

// Interface for experience props
interface Experience {
  start: string;
  end: string;
  title: string;
  company: string;
  skills: HighlightInterface[];
  children: string;
}

/**
 * Experience card component for work experience
 */
export const Experience = ({
  start,
  end,
  title,
  company,
  skills,
  children,
}: Experience) => {
  // Get LightThemeContext
  const { lightTheme, themeTransitionDuration } = useContext(LightThemeContext);

  // Animation variants for fade in animation
  const FadeInVariants = useContext(FadeInContext);

  // Animation variants for text
  const TextVariants: Variants = {
    initial: {
      color: "var(--color-alabaster)",
    },
    animateText: {
      color: "var(--color-eerie)",
    },
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col gap-4"
      initial={{ opacity: 0, transform: "translateY(8px)" }}
      variants={FadeInVariants}
    >
      <div>
        <motion.p
          className="opacity-50 text-sm"
          initial="initial"
          animate={lightTheme ? "animateText" : undefined}
          transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
          variants={TextVariants}
        >{`${start} - ${end}`}</motion.p>

        <p className="font-bold">{title}</p>

        <motion.p
          className="text-xanthous text-sm font-bold"
          initial={{ color: "var(--color-xanthous)" }}
          animate={lightTheme ? "animateText" : undefined}
          transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
          variants={{ animateText: { color: "var(--color-tekhelet)" } }}
        >
          {company}
        </motion.p>
      </div>

      <motion.p
        className="opacity-75 text-sm"
        initial="initial"
        animate={lightTheme ? "animateText" : undefined}
        transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
        variants={TextVariants}
      >
        {children}
      </motion.p>

      {/* For each skill in skills, create a new highlight */}
      <ul className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <Highlight key={index} src={skill.src} alt={skill.alt}>
            {skill.children}
          </Highlight>
        ))}
      </ul>
    </motion.div>
  );
};
