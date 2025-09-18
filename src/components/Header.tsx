// Library imports
import { useContext } from "react";

// Context imports
import { ThemeContext } from "../contexts/ThemeContext";

// Icon imports
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

/**
 * TODO: implement ChangeThemeButton
 */
const ChangeThemeButton = () => {
  // Get ThemeContext values
  const { theme, setTheme } = useContext(ThemeContext);

  // TODO: implement handleChangeTheme
  const handleChangeTheme = () => {
    if (setTheme) {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  return (
    <button onClick={handleChangeTheme}>
      <img className="w-8 h-8" src={theme === "light" ? moon : sun} />
    </button>
  );
};

/**
 * TODO: implement Header element
 */
export const Header = () => {
  return (
    <header>
      <ChangeThemeButton />
    </header>
  );
};
