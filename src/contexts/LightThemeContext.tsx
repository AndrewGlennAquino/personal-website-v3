import { createContext, type SetStateAction } from "react";

// Object types for LightThemeContext
interface LightThemeContextInterface {
  lightTheme?: boolean;
  setLightTheme?: React.Dispatch<SetStateAction<boolean>>;
  themeTransitionDuration?: number;
}

export const LightThemeContext = createContext<LightThemeContextInterface>({});
