// Library imports
import { useState, useEffect } from "react";
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

  // Constant duration for theme transition animations
  const themeTransitionDuration = 0.2;

  // On lightTheme state change, toggle light class on body
  useEffect(() => {
    document.body.classList.toggle("light");
  }, [lightTheme]);

  return (
    <>
      {/* Provide LightThemeContext to all components */}
      <LightThemeContext.Provider value={{lightTheme, setLightTheme, themeTransitionDuration}}>
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
        >
          {/* Content container div with 1024px max width */}
          <div className="max-w-192 mx-auto">
            {/* Persistent header */}
            <Header />

            {/* Page routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />

              {/* Route for if page does not exist */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            {/* Persistent footer */}
            <Footer />
          </div>
        </motion.div>
      </LightThemeContext.Provider>
    </>
  );
};

export default App;
