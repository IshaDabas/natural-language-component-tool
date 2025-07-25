import React from "react";
import { Typography, Button, Utility } from "@visa/nova-react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/landing-page.png";
import "../styles/theme.css";
import { VisaArrowEndHigh } from "@visa/nova-icons-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main
      className="landing-container"
      role="main"
      aria-label="Landing page content"
    >
      <section
        className="hero-section"
        aria-label="Hero section with intro and image"
      >
        <Utility vFlex vPadding={58} className="hero" aria-label="Hero wrapper">
          <Utility
            vFlex
            vFlexRow
            vGap={64}
            className="hero-content"
            aria-label="Hero text and image layout"
          >
            <Utility
              vFlex
              vFlexCol
              vGap={24}
              className="hero-text"
              aria-label="Introductory text block"
            >
              <Typography
                variant="headline-1"
                className="hero-title"
                aria-label="Landing page title"
              >
                Transform Natural Language to UI
              </Typography>

              <Typography
                variant="body-lg"
                className="hero-subtitle"
                aria-label="Landing page subtitle"
              >
                Empower your design system with intelligent suggestions that
                help developers ship faster with confidence and design
                precision.
              </Typography>

              <Button
                className="hero-button"
                variant="primary"
                onClick={() => navigate("/why-us")}
                aria-label="Learn more about our design system features"
              >
                Know More <VisaArrowEndHigh style={{ marginLeft: 20 }} />
              </Button>
            </Utility>

            <Utility aria-label="Hero image container">
              <img
                src={HeroImg}
                alt="Illustration showing natural language transformed into a UI layout"
                className="hero-image"
              />
            </Utility>
          </Utility>
        </Utility>
      </section>
    </main>
  );
}
