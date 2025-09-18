// Library imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

// Component imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Page imports
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

// Context imports
import { ThemeContext } from "./contexts/ThemeContext";

/**
 * TODO: comment
 */
const App = () => {
  // Hold in state current theme, default is light
  const [theme, setTheme] = useState<string>("light");

  // Change theme based on toggle
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add(theme);
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add(theme);
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
      </ThemeContext.Provider>
    </>
  );
};

export default App;
