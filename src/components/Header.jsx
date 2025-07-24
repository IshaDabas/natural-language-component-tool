import React, { useState } from "react";
import "../styles/theme.css";

function PageHeader({ title, subtitle }) {
  const [theme, setTheme] = useState(() => {
    return document.body.classList.contains("theme-dark") ? "dark" : "light";
  });

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
      setTheme("dark");
    } else {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      setTheme("light");
    }
  };

  return (
    <div className="header" style={{ position: "relative" }}>
      <div className="header-content">
        <span className="header-title">{title}</span>
        <div className="subtitle">{subtitle}</div>
      </div>
      <button
        onClick={toggleTheme}
        className="toggle-theme"
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default function Header() {
  return (
    <PageHeader
      title="Visa Nova Component Suggesting Tool"
      subtitle="Quickly browse and copy Nova React components"
    />
  );
}
