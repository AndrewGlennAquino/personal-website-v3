// Library imports
import { useContext } from "react";
import { motion } from "motion/react";

// Icon imports
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

// Context imports
import { DarkThemeContext } from "../contexts/DarkThemeContext";
/**
 * Button component that changes the theme
 */
const ChangeThemeButton = () => {
  // Get DarkThemeContext
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  // Toggle dark theme on click
  const handleDarkThemeToggle = () => {
    if (setDarkTheme) {
      setDarkTheme((prev) => !prev);
    }
  };

  return (
    <motion.button
      aria-label="Toggle light or dark theme"
      className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center relative"
      onClick={handleDarkThemeToggle}
      whileHover="animateHover"
    >
      <motion.img
        className="w-8 h-8"
        src={darkTheme ? sun : moon}
        alt={darkTheme ? "Toggle light theme" : "Toggle dark theme"}
        initial={{ opacity: 0.5 }}
        whileHover="animateHover"
        transition={{ duration: 0.2 }}
        variants={{ animateHover: { opacity: 1 } }}
      />
    </motion.button>
  );
};

/**
 * TODO: implement Header element
 */
export const Header = () => {
  return (
    <header className="container p-4 mx-auto flex justify-end items-center gap-2">
      <nav>
        <ul></ul>
      </nav>
      <ChangeThemeButton />
    </header>
  );
};
