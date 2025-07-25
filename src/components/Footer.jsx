import React from "react";
import { Typography } from "@visa/nova-react";
import "../styles/theme.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Page Footer">
      <Typography variant="body-sm">
        © 2025 Visa Design Tool. Built with Nova.
      </Typography>
    </footer>
  );
}
