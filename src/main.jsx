import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@visa/nova-styles/styles.css";
import "@visa/nova-styles/themes/visa-light/index.css";
import "./styles/theme.css";
import { StrictMode } from "react";
import LandingPage from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyUs from "./Pages/WhyUs";

if (!document.body.classList.contains("theme-dark")) {
  document.body.classList.add("theme-light");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/:index" element={<App />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
