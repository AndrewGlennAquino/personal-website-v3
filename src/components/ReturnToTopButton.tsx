// Library imports
import { useState, useContext, useEffect } from "react";
import { motion } from "motion/react";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";

/**
 * ReturnToTopButton component that appears after scrolling below header
 */
export const ReturnToTopButton = () => {
  // Hold in state if the user has scrolled down below the header
  const [scrolledDown, setScrolledDown] = useState(false);

  // Get LightThemeContext
  const { lightTheme } = useContext(LightThemeContext);

  /** On scroll below header, set scrolledDown to true.
   *  Else, set scrolledDown to false.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      aria-label="Return to top"
      className={`${
        lightTheme ? `bg-tekhelet text-alabaster` : `bg-xanthous text-eerie`
      } cursor-pointer w-5 h-5 p-5 rounded-full justify-center items-center fixed right-6 bottom-6 z-10`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      initial={{ opacity: 0, display: "none" }}
      animate={
        scrolledDown ? { opacity: 1, display: "flex" } : { display: "none" }
      }
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Background glow */}
      <div
        className={`${
          lightTheme ? `bg-tekhelet` : `bg-xanthous`
        } blur w-full h-full rounded-full absolute inset-0 -z-10`}
      />
      ↑
    </motion.button>
  );
};
