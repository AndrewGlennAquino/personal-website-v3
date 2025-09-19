// Library imports
import { useContext } from "react";
import { motion } from "motion/react";

// Icon imports
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";
import linkedinLight from "../assets/icons/linkedin-light.svg";
import githubDark from "../assets/icons/github-dark.svg";
import githubLight from "../assets/icons/github-light.svg";

// Context imports
import { DarkThemeContext } from "../contexts/DarkThemeContext";

// Types for HeaderLinkButton props
interface HeaderLinkButtonProps {
  href: string;
  dark: string;
  light: string;
  alt: string;
}

/**
 * HeaderLink component that animates on hover.
 */
const HeaderLink = ({ href, dark, light, alt }: HeaderLinkButtonProps) => {
  // Get DarkThemeContext
  const { darkTheme } = useContext(DarkThemeContext);

  return (
    <motion.a
      href={href}
      target="_blank"
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
    >
      {darkTheme ? (
        <img className="w-6 h-6" src={light} alt={alt} />
      ) : (
        <img className="w-6 h-6" src={dark} alt={alt} />
      )}
    </motion.a>
  );
};

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
      className="cursor-pointer w-6 h-6 flex justify-center items-center"
      onClick={handleDarkThemeToggle}
      whileHover="animateHover"
    >
      <motion.img
        className="w-full h-full"
        src={darkTheme ? sun : moon}
        alt={darkTheme ? "Toggle light theme" : "Toggle dark theme"}
        initial={{ opacity: 0.5 }}
        whileHover="animateHover"
        variants={{ animateHover: { opacity: 1 } }}
      />
    </motion.button>
  );
};

/**
 * Header component that has navigation links and dark theme toggle
 */
export const Header = () => {
  return (
    <header className="container mx-auto mb-6">
      <nav className="flex justify-end items-center gap-4">
        {/* Github link */}
        <HeaderLink
          href={"https://www.github.com/AndrewGlennAquino"}
          dark={githubDark}
          light={githubLight}
          alt={"Github link"}
        />

        {/* Linkedin link */}
        <HeaderLink
          href={"https://www.linkedin.com/in/andrew-glenn-aquino"}
          dark={linkedinDark}
          light={linkedinLight}
          alt={"Linkedin link"}
        />
        
        <ChangeThemeButton />
      </nav>
    </header>
  );
};
