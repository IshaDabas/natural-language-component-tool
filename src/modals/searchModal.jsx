import React, { useState } from "react";
import "../styles/theme.css";
import { componentUI } from "../objects";
import { useNavigate } from "react-router-dom";
import { VisaSearchLow } from "@visa/nova-icons-react";

export default function SearchModal({ visible, onClose }) {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const filtered = componentUI.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.keywords || []).some((k) =>
        k.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    visible && (
      <div className="search-modal" onClick={onClose}>
        <div
          className="search-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="search-heading">Search Components</h3>
          <div className="search-input-container"></div>
          <input
            name="search"
            autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search by name or keyword..."
            className="search-modal-content-input"
          />
          <ul className="search-results">
            {search.length > 0 && filtered.length > 0 ? (
              filtered.map((c, i) => (
                <li
                  onClick={() => {
                    nav(`/app/${c.sno}`);
                    onClose();
                    setSearch("");
                  }}
                  key={i}
                >
                  <span style={{ fontWeight: 500 }}>{c.name}</span>
                  <span style={{ color: "#888", fontSize: 12, marginLeft: 8 }}>
                    {c?.keywords.slice(0, 3).join(", ")}
                  </span>
                </li>
              ))
            ) : (
              <div className="icon-container">
                <VisaSearchLow
                  aria-label="Search icon"
                  className="icon-after"
                />
                <span>Search for a component</span>
              </div>
            )}
          </ul>
          <button onClick={onClose} className="onClose-btn">
            Close
          </button>
        </div>
      </div>
    )
  );
}
