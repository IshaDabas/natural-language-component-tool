import React, { useState } from "react";
import {
  Input,
  Button,
  Utility,
  Label,
  InputContainer,
} from "@visa/nova-react";
import "../styles/theme.css";
import { VisaSearchLow } from "@visa/nova-icons-react";
import { componentUI } from "../objects";

export default function InputSection({ input, setInput, onGenerate }) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = componentUI.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.keywords || []).some((k) =>
        k.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="input">
      <Utility vFlex vFlexCol vGap={4}>
        <Label className="label" htmlFor={input}>
          Find the UI you need
        </Label>
        <div
          className="input-container"
          style={{ position: "relative", width: "100%" }}
        >
          <InputContainer style={{ width: "100%" }}>
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
                setInput(e.target.value);
              }}
              aria-describedby={input}
              aria-required="true"
              id={input}
              type="text"
              placeholder="Search for checkbox, button, radio..."
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            />
          </InputContainer>
          {showDropdown && search && (
            <ul className="search-results">
              {filtered.length === 0 && (
                <li style={{ listStyle: "none", color: "#888", padding: 8 }}>
                  No results
                </li>
              )}
              {filtered.map((c) => (
                <li
                  key={c.id}
                  style={{
                    listStyle: "none",
                    padding: 8,
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                  onMouseDown={() => {
                    setInput(c.name);
                    setSearch(c.name);
                    setShowDropdown(false);
                    onGenerate();
                  }}
                >
                  {c.name}
                </li>
              ))}
            </ul>
          )}
          <div className="btn">
            <Button
              className="search-btn"
              onClick={onGenerate}
              variant="primary"
              colorScheme="primary"
            >
              Search
              <VisaSearchLow aria-label="Search icon" className="icon-after" />
            </Button>
          </div>
        </div>
      </Utility>
    </div>
  );
}
