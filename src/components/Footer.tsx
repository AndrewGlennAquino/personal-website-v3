// Library imports
import { useContext, useState, useEffect } from "react";
import { motion } from "motion/react";

// Icon imports
import githubDark from "../assets/icons/github-dark.svg";
import githubLight from "../assets/icons/github-light.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";
import linkedinLight from "../assets/icons/linkedin-light.svg";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";

/**
 * Animated Social media button
 */
const SocialMediaButton = ({
  href,
  dark,
  light,
  alt,
}: {
  href: string;
  dark: string;
  light: string;
  alt: string;
}) => {
  // Get LightThemeContext
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <a href={href} target="_blank">
      <motion.div
        className={`${
          lightTheme ? `bg-xanthous` : `bg-tekhelet`
        } w-fit p-2 rounded-full relative`}
        whileHover={{ scale: 1.15 }}
      >
        {/* Dark and light icons */}
        {lightTheme ? (
          <img className="w-6 h-6" src={dark} alt={alt} />
        ) : (
          <img className="w-6 h-6" src={light} alt={alt} />
        )}
      </motion.div>
    </a>
  );
};

/**
 * Footer element with contact information
 */
export const Footer = () => {
  // Hold in state if email button is clicked
  const [clicked, setClicked] = useState(false);

  // Get LightThemeContext
  const { lightTheme } = useContext(LightThemeContext);

  // On clicked change, wait 2 seconds, then setClicked to false
  useEffect(() => {
    setTimeout(() => setClicked(false), 5000);
  }, [clicked]);

  return (
    <footer>
      <motion.h1
        className="text-xl font-bold w-fit"
        initial={{
          color: "var(--color-xanthous)",
        }}
        animate={lightTheme ? { color: "var(--color-tekhelet)" } : undefined}
      >
        Get In Contact
      </motion.h1>

      {/* Footer content container */}
      <div className="mt-8 flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-0">
        {/* Copy email button */}
        <div>
          <p className="mb-4">
            If you like what you see, let's get in contact! I'm open to
            developing websites to fit your business or personal needs. I'm also
            open to full time work opportunities.
          </p>

          {/* Copy link to clipboard and redirect to mail app on mobile */}
          <a href="mailto:andrewglenn.aquino@gmail.com">
            <motion.div
              className={`${
                lightTheme ? `bg-xanthous` : `bg-tekhelet`
              } text-center font-bold w-36 px-4 py-2 rounded relative`}
              onClick={() => {
                setClicked(true);
                navigator.clipboard.writeText("andrewglenn.aquino@gmail.com");
              }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Dynamic text */}
              {clicked ? "Email copied" : "Contact me"}
            </motion.div>
          </a>
        </div>

        {/* Selectable contact information and socials */}
        <div className="sm:justify-items-center sm:content-center">
          <div>
            {/* Contact information container */}
            <div className="opacity-50 flex flex-col gap-1">
              <a>andrewglenn.aquino@gmail.com</a>
              <a>(224) 828-1841</a>
            </div>

            {/* Socials container */}
            <div className="mt-2 flex gap-2">
              <SocialMediaButton
                href="https://www.github.com/AndrewGlennAquino"
                dark={githubDark}
                light={githubLight}
                alt="Github link"
              />

              <SocialMediaButton
                href="https://www.linkedin.com/in/andrew-glenn-aquino"
                dark={linkedinDark}
                light={linkedinLight}
                alt="LinkedIn link"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
