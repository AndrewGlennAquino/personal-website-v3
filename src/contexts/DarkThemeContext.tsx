import { createContext, type SetStateAction } from "react";

// Object types for DarkThemeContext
interface DarkThemeContext {
  darkTheme?: boolean;
  setDarkTheme?: React.Dispatch<SetStateAction<boolean>>;
  themeTransitionDuration?: number;
}

export const DarkThemeContext = createContext<DarkThemeContext>({});