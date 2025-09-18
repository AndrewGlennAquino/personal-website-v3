import { createContext } from "react";

// Types for ThemeContext
interface ThemeContextTypes {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * TODO: implement ThemeContext
 */
export const ThemeContext = createContext<ThemeContextTypes>({});
