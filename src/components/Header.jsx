import React, { useState } from "react";
import "../styles/theme.css";

import { useNavigate } from "react-router-dom";
import { Typography } from "@visa/nova-react";
import SearchM from "../Modals/SearchM";

function PageHeader({ title }) {
  const [theme, setTheme] = useState(() => {
    return document.body.classList.contains("theme-dark") ? "dark" : "light";
  });
  const [showSearch, setShowSearch] = useState(false);
  const nav = useNavigate();

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
    <>
      <SearchM visible={showSearch} onClose={() => setShowSearch(false)} />

      <header
        className="header"
        role="banner"
        aria-label="Application Header"
        style={{ position: "sticky", top: 0, zIndex: 100, background: "white" }}
      >
        <div
          onClick={() => nav("/")}
          style={{ cursor: "pointer" }}
          aria-label="Go to Home Page"
          role="link"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && nav("/")}
        >
          <Typography variant="headline-1" className="header-title">
            {title}
          </Typography>
        </div>

        <button
          onClick={toggleTheme}
          className="toggle-theme"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title="Toggle light/dark theme"
        >
          <span className="label-text">Theme</span>{" "}
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          onClick={() => setShowSearch(true)}
          className="search-icon"
          aria-label="Open component search modal"
          title="Search components"
        >
          <span className="label-text">Search</span> 🔍
        </button>
      </header>
    </>
  );
}

export default function Header() {
  return <PageHeader title="Visa NCST" />;
}
