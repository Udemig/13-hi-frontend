import { createContext, useContext, useEffect, useState } from "react";

// Theme Context'i oluştur
export const ThemeContext = createContext();

// Theme Provider'ı oluştur
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // eğer localde seçili tema varsa onu kullan
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      return localTheme === "dark";
    }

    // kullancının sistem temasını kullan
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // temayı değiştiricek fonksiyon
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // teme değiştiğinde arayüzü güncelle
  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("Provider'ı ile sarmala");
  }

  return context;
};
