import React from "react";
import { Typography, Button, Utility, UtilityFragment } from "@visa/nova-react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/landing-page.png";
import "../styles/theme.css";
import { VisaArrowEndHigh } from "@visa/nova-icons-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <section className="hero-section">
        <Utility
          vFlex
          vJustifyContent="center"
          vAlignItems="center"
          vPadding={48}
          className="hero"
        >
          <Utility vFlex vFlexRow vGap={64} className="hero-content">
            <Utility
              vFlex
              vFlexCol
              vJustifyContent="center"
              vGap={24}
              className="hero-text"
            >
              <Typography variant="display-lg" className="hero-title">
                Transform Natural Language to UI
              </Typography>
              <Typography variant="body-lg" className="hero-subtitle">
                Empower your design system with intelligent suggestions.
              </Typography>
              <Button variant="primary" onClick={() => navigate("/app")}>
                Let’s Get Started <VisaArrowEndHigh style={{ marginLeft: 8 }} />
              </Button>
            </Utility>

            <Utility>
              <img src={HeroImg} alt="Illustration" className="hero-image" />
            </Utility>
          </Utility>
        </Utility>
      </section>

      <section className="why-us-section">
        <Utility
          vFlex
          vFlexCol
          vAlignItems="center"
          vPadding={48}
          vGap={32}
          className="why-us"
        >
          <Typography variant="display-md" className="why-title">
            Why Choose Us?
          </Typography>
          <Typography variant="body-md" className="why-description">
            We help developers and designers turn ideas into production-ready
            components using Nova Design System. It’s fast, accessible, and
            fully compliant with Visa’s brand guidelines.
          </Typography>
        </Utility>
      </section>
    </div>
  );
}
