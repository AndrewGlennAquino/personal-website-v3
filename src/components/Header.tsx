// Library imports
import { useContext } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

// Icon imports
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";
import linkedinLight from "../assets/icons/linkedin-light.svg";
import githubDark from "../assets/icons/github-dark.svg";
import githubLight from "../assets/icons/github-light.svg";
import blogDark from "../assets/icons/blog-dark.svg";
import blogLight from "../assets/icons/blog-light.svg";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";

// Types for HeaderLinkButton props
interface HeaderLinkButtonProps {
  link?: boolean;
  href: string;
  dark: string;
  light: string;
  alt: string;
}

/**
 * HeaderLink component that animates on hover.
 */
const HeaderLink = ({
  link,
  href,
  dark,
  light,
  alt,
}: HeaderLinkButtonProps) => {
  // Get DarkThemeContext
  const { lightTheme } = useContext(LightThemeContext);

  return link ? (
    <motion.span initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}>
      <Link to={href}>
        {lightTheme ? (
          <img className="w-6 h-6" src={dark} alt={alt} />
        ) : (
          <img className="w-6 h-6" src={light} alt={alt} />
        )}
      </Link>
    </motion.span>
  ) : (
    <motion.a
      href={href}
      target="_blank"
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
    >
      {lightTheme ? (
        <img className="w-6 h-6" src={dark} alt={alt} />
      ) : (
        <img className="w-6 h-6" src={light} alt={alt} />
      )}
    </motion.a>
  );
};

/**
 * Button component that changes the theme
 */
const ChangeThemeButton = () => {
  // Get DarkThemeContext
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);

  // Toggle dark theme on click
  const handleDarkThemeToggle = () => {
    if (setLightTheme) {
      setLightTheme((prev) => !prev);
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
        src={lightTheme ? moon : sun}
        alt={lightTheme ? "Toggle dark theme" : "Toggle light theme"}
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
        {/* Blog link */}
        <HeaderLink
          link
          href={"/blog"}
          dark={blogDark}
          light={blogLight}
          alt={"Blog link"}
        />

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
