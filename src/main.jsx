import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@visa/nova-styles/styles.css";
import "@visa/nova-styles/themes/visa-light/index.css";
import "./styles/theme.css";

if (!document.body.classList.contains("theme-dark")) {
  document.body.classList.add("theme-light");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
