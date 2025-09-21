import { createContext, type SetStateAction } from "react";

// Object types for DarkThemeContext
interface DarkThemeContextInterface {
  darkTheme?: boolean;
  setDarkTheme?: React.Dispatch<SetStateAction<boolean>>;
  themeTransitionDuration?: number;
}

export const DarkThemeContext = createContext<DarkThemeContextInterface>({});
