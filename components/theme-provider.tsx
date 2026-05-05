"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const themes = [
  { id: "default", label: "Default", swatch: "bg-[#128C7E]" },
  { id: "electric", label: "Electric red", swatch: "bg-[#DC2626]" },
  { id: "brown", label: "Brown", swatch: "bg-[#9A5B22]" }
] as const;

export type ThemeId = (typeof themes)[number]["id"];

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = "hadu-theme";

function isThemeId(value: string | null): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window === "undefined") {
      return "default";
    }

    const storedTheme = window.localStorage.getItem(storageKey);
    return isThemeId(storedTheme) ? storedTheme : "default";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (nextTheme) => {
        setThemeState(nextTheme);
      }
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
