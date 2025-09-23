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
 * 
 * @param start start date of experience
 * @param end end date of experience
 * @param title title of experience
 * @param company company of experience
 * @param skills skills used in experience
 * @param children description of experience
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
      className="w-full h-full flex flex-col sm:grid sm:grid-cols-4 gap-4"
      aria-label={`${title} work experience`}
      initial={{ opacity: 0, transform: "translateY(8px)" }}
      variants={FadeInVariants}
    >
      <div className="col-start-1 col-end-2">
        <motion.p
          className="opacity-50 text-sm"
          initial="initial"
          animate={lightTheme ? "animateText" : undefined}
          transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
          variants={TextVariants}
        >{`${start} - ${end}`}</motion.p>

        <h3 className="font-bold">{title}</h3>

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

      <div className="flex flex-col sm:col-start-2 sm:-col-end-1">
        <motion.p
          className="opacity-75 text-sm mb-4"
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
      </div>
    </motion.div>
  );
};
