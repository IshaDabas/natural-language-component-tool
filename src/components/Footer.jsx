import React from "react";
import { Typography } from "@visa/nova-react";
import "../styles/theme.css";

export default function Footer() {
  const copyright = "© 2025 Visa Design Tool. Built with Nova.";
  if (!copyright) {
    console.error("Footer: copyright text missing");
    return <div style={{ color: "red" }}>Footer text missing</div>;
  }
  return (
    <div className="footer">
      <Typography size="small">{copyright}</Typography>
    </div>
  );
}
