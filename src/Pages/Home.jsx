import React from "react";
import { Typography, Button, Utility } from "@visa/nova-react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/landing-page.png";
import "../styles/theme.css";
import { VisaArrowEndHigh } from "@visa/nova-icons-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <section className="hero-section">
        <Utility vFlex vPadding={58} className="hero">
          <Utility vFlex vFlexRow vGap={64} className="hero-content">
            <Utility vFlex vFlexCol vGap={24} className="hero-text">
              <Typography variant="display-lg" className="hero-title">
                Transform Natural Language to UI
              </Typography>
              <Typography variant="body-lg" className="hero-subtitle">
                Empower your design system with intelligent suggestions.
              </Typography>
              <Button
                className="hero-button"
                variant="primary"
                onClick={() => navigate("/why-us")}
              >
                Know More <VisaArrowEndHigh style={{ marginLeft: 20 }} />
              </Button>
            </Utility>

            <Utility>
              <img src={HeroImg} alt="Illustration" className="hero-image" />
            </Utility>
          </Utility>
        </Utility>
      </section>
    </div>
  );
}
