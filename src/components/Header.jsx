import React, { useState } from "react";
import "../styles/theme.css";
import SearchModal from "../modals/searchModal";
import { useNavigate } from "react-router-dom";
import { Typography } from "@visa/nova-react";

function PageHeader({ title, subtitle }) {
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
      {" "}
      <SearchModal visible={showSearch} onClose={() => setShowSearch(false)} />
      <div
        className="header"
        style={{ position: "sticky", top: 0, zIndex: 100, background: "white" }}
      >
        <div onClick={() => nav("/")} style={{ cursor: "pointer" }}>
          <Typography variant="headline-1" className="header-title">
            {title}
          </Typography>
        </div>
        <button
          onClick={toggleTheme}
          className="toggle-theme"
          aria-label="Toggle theme"
        >
          Theme
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button
          onClick={() => setShowSearch(true)}
          className="search-icon"
          aria-label="Search components"
          title="Search components"
        >
          Search 🔍
        </button>
      </div>
    </>
  );
}

export default function Header() {
  return <PageHeader title="Visa Nova Component Suggesting Tool" />;
}
