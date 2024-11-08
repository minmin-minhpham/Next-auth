"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, memo, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // const [theme, setTheme] = useState(() => getLocalStorage());

  const toggleTheme = (theme) => {
    setTheme(theme);

    // Save theme && change CSS
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  };

  useEffect(() => {
    // Save localStore
    // localStorage.setItem("theme", theme);

    // Change Class
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeScript />
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeScript = memo(function ThemeScript() {
  return (
    <script
      suppressHydrationWarning
      nonce={typeof window === "undefined" ? undefined : ""}
      dangerouslySetInnerHTML={{
        __html: `( ${script.toString()} )()`,
      }}
    />
  );
});

export const useTheme = () => useContext(ThemeContext);

// helps
const script = () => {
  const theme = localStorage.getItem("theme");
  updateDOM(theme);

  function updateDOM(theme) {
    let bodyClassList = document.documentElement.classList;

    bodyClassList.remove(["light", "dark"]);
    bodyClassList.add(theme);
  }
};

// const getLocalStorage = () => {
//   if (typeof window === "undefined") return undefined;
//   try {
//     return localStorage.getItem("theme") || undefined;
//   } catch (err) {
//     console.log(err);
//     return undefined;
//   }
// };
