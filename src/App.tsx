// Library imports
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Routes, Route } from "react-router";

// Component imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ReturnToTopButton } from "./components/ReturnToTopButton";

// Page imports
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { PageNotFound } from "./pages/PageNotFound";

// Context imports
import { LightThemeContext } from "./contexts/LightThemeContext";

const App = () => {
  // Hold in state if light theme is toggled, default is false
  const [lightTheme, setLightTheme] = useState(false);

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
          className="w-screen h-screen fixed inset-0 -z-50"
          initial={{ background: "var(--color-eerie)" }}
          animate={
            lightTheme ? { background: "var(--color-alabaster)" } : undefined
          }
          transition={{ duration: themeTransitionDuration, ease: "easeInOut" }}
        />

        {/* Content container div with 1024px max width */}
        <div className="max-w-256 p-6 mx-auto">
          {/* Persistent header */}
          <Header />

          {/* Page routes */}
          <Routes>
            {/* TODO: remove path for Home */}
            <Route path="/personal-website-v3" element={<Home />} />
            <Route path="/blog" element={<Blog />} />

            {/* Route for if page does not exist */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {/* Persistent footer */}
          <Footer />
        </div>

        {/* Return to top of page button */}
        <ReturnToTopButton />
      </LightThemeContext.Provider>
    </>
  );
};

export default App;
