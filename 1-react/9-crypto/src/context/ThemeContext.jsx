import { createContext, useState } from "react";

// Theme Context'i oluştur
export const ThemeContext = createContext();

// Theme Provider'ı oluştur
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkMode, setIsDarkMode] = useState();

  // temayı değiştiricek fonksiyon
  const toggleTheme = () => {};

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};
