// Library imports
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Routes, Route } from "react-router";

// Component imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Page imports
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { PageNotFound } from "./pages/PageNotFound";

// Context imports
import { LightThemeContext } from "./contexts/LightThemeContext";

const App = () => {
  // Hold in state if light theme is toggled, default is false
  const [lightTheme, setLightTheme] = useState(false);

  // Hold in state if the user has scrolled down below the header
  const [scrolledDown, setScrolledDown] = useState(false);

  // The ref for the content div scroll position
  const scrollRef = useRef<HTMLDivElement>(null);

  // Constant duration for theme transition animations
  const themeTransitionDuration = 0.2;

  // On lightTheme state change, toggle light class on body
  useEffect(() => {
    if (lightTheme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [lightTheme]);

  /** On scroll below header, set scrolledDown to true.
   *  Else, set scrolledDown to false.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && scrollRef.current.scrollTop > 24) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      {/* Provide LightThemeContext to all components */}
      <LightThemeContext.Provider
        value={{ lightTheme, setLightTheme, themeTransitionDuration }}
      >
        {/* For ios safari, change the color of the notch */}
        <meta name="theme-color" content={lightTheme ? "#e0e2db" : "#191716"} />

        {/* Theme change animation div */}
        <motion.div
          className="w-screen h-screen p-6 fixed inset-0 -z-50 overflow-y-auto"
          initial={{
            background: "var(--color-eerie)",
            color: "var(--color-alabaster)",
          }}
          animate={lightTheme ? "animateBackground" : undefined}
          transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
          variants={{
            animateBackground: {
              background: "var(--color-alabaster)",
              color: "var(--color-eerie)",
            },
          }}
          ref={scrollRef}
        >
          {/* Content container div with 1024px max width */}
          <div className="max-w-256 mx-auto">
            {/* Persistent header */}
            <Header />

            {/* Page routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />

              {/* Route for if page does not exist */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            {/* Return to top button */}
            <motion.button
              aria-label="Return to top"
              className={`${
                lightTheme
                  ? `bg-tekhelet text-alabaster`
                  : `bg-xanthous text-eerie`
              } cursor-pointer w-5 h-5 p-5 rounded-full justify-center items-center fixed right-6 bottom-6 z-10`}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              initial={{ opacity: 0, display: "none" }}
              animate={
                scrolledDown
                  ? { opacity: 1, display: "flex" }
                  : { display: "none" }
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

            {/* Persistent footer */}
            <Footer />
          </div>
        </motion.div>
      </LightThemeContext.Provider>
    </>
  );
};

export default App;
