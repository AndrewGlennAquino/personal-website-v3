// Library imports
import { Routes, Route } from "react-router";

// Component imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Page imports
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

/**
 * TODO: comment
 */
const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
