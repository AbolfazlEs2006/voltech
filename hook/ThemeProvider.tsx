"use client";

import { useState, useEffect } from "react";

const useDarkmode = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      const html = document.documentElement;
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme, mounted };
};

export default useDarkmode;
