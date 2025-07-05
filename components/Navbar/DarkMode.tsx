"use client";

import useDarkmode from "../../hook/ThemeProvider";

function DarkMode({ style }: { style: string }) {
  const { theme, toggleTheme } = useDarkmode();

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className={`btn mr-3  ${style}`}
      >
        {theme === "dark" ? (
          <i className="bi bi-cloud-sun"></i>
        ) : (
          <i className="bi bi-moon-stars-fill"></i>
        )}
      </button>
    </>
  );
}

export default DarkMode;
