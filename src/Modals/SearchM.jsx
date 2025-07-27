import React, { useState } from "react";
import "../styles/theme.css";
import { useNavigate } from "react-router-dom";
import { VisaSearchLow } from "@visa/nova-icons-react";
import { filterComponents } from "../components/utils";

export default function SearchM({ visible, onClose }) {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const filtered = filterComponents(search);

  return (
    visible && (
      <div
        className="search-modal"
        onClick={onClose}
        role="presentation"
        aria-hidden="true"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-modal-title"
          className="search-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 id="search-modal-title" className="search-heading">
            Search Components
          </h3>

          <input
            autoComplete={"off"}
            name="search"
            autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search by name or keyword..."
            className="search-modal-content-input"
            aria-label="Search for components by name or keyword"
          />

          <ul
            className="search-results"
            role="listbox"
            aria-label="Search results"
          >
            {search.length > 0 && filtered.length > 0 ? (
              filtered.map((c, i) => (
                <li
                  role="option"
                  aria-selected="false"
                  onClick={() => {
                    nav(`/app/${c.sno}/${search.toLowerCase()}`);
                    onClose();
                    setSearch("");
                  }}
                  key={i}
                  tabIndex={0}
                >
                  <span style={{ fontWeight: 500 }}>{c.name}</span>
                  <span
                    style={{ color: "#888", fontSize: 12, marginLeft: 8 }}
                    aria-hidden="true"
                  >
                    {c?.keywords.slice(0, 3).join(", ")}
                  </span>
                </li>
              ))
            ) : (
              <div
                className="icon-container"
                aria-live="polite"
                aria-atomic="true"
              >
                <VisaSearchLow aria-hidden="true" className="icon-after" />
                <span>Search for a component</span>
              </div>
            )}
          </ul>

          <button
            aria-label="Close search modal"
            onClick={onClose}
            className="onClose-btn"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}
