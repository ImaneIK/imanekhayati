import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [activeTheme, setActiveTheme] = useState(() => {
    // Retrieve the theme from localStorage
    return typeof localStorage !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      // Save the theme to localStorage
      localStorage.setItem("theme", activeTheme);
    }
  }, [activeTheme]);

  return (
    <div
      className={`${
        activeTheme === "dark" ? "dark-theme" : "light-theme"
      } min-h-screen`}
    >
      {children}
    </div>
  );
}
