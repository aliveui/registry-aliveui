"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  type ThemeConfig,
  DEFAULT_THEME,
  themeColorValues,
  ThemeColor,
} from "@/lib/themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
};

const initialState: ThemeProviderState = {
  themeColor: DEFAULT_THEME.color,
  setThemeColor: () => null,
};

export const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeColor, setThemeColor] = React.useState<ThemeColor>(
    DEFAULT_THEME.color
  );

  // Update data-theme attribute when theme color changes
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeColor);

    // Also set the primary CSS variable for compatibility
    document.documentElement.style.setProperty(
      "--primary",
      themeColorValues[themeColor]
    );
  }, [themeColor]);

  return (
    <ThemeProviderContext.Provider
      value={{
        themeColor,
        setThemeColor,
      }}
    >
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        forcedTheme="light"
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ThemeProviderContext.Provider>
  );
}

export const useThemeProvider = () => React.useContext(ThemeProviderContext);
