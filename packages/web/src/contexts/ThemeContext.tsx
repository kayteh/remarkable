import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

type Theme = "dark" | "light";
type ThemeContextT = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextT>({
  theme: "dark",
  setTheme: () => {},
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>("dark");

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
