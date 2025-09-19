// Library imports
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Routes, Route } from "react-router";

// Component imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Page imports
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

// Context imports
import { DarkThemeContext } from "./contexts/DarkThemeContext";

const App = () => {
  // Hold in state if dark theme is toggled, default is false
  const [darkTheme, setDarkTheme] = useState(false);

  // On darkTheme state change, toggle dark class on body
  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [darkTheme]);

  return (
    <>
      {/* Provide DarkThemeContext to all components */}
      <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {/* Theme change animation div */}
        <motion.div
          className="w-screen h-screen p-6 fixed inset-0 -z-50"
          initial={{
            background: "var(--color-alabaster)",
            color: "var(--color-eerie)",
          }}
          animate={darkTheme ? "animateBackground" : undefined}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            animateBackground: {
              background: "var(--color-eerie)",
              color: "var(--color-alabaster)",
            },
          }}
        >
          {/* Persistent header */}
          <Header />

          {/* Page routes */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Route for if page does not exist */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {/* Persistent footer */}
          <Footer />
        </motion.div>
      </DarkThemeContext.Provider>
    </>
  );
};

export default App;
