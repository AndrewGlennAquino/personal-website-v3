import { createContext, type SetStateAction } from "react";

// Object types for DarkThemeContext
interface DarkThemeContextType {
  darkTheme?: boolean;
  setDarkTheme?: React.Dispatch<SetStateAction<boolean>>;
}

export const DarkThemeContext = createContext<DarkThemeContextType>({});