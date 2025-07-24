import React from "react";
import { Typography, Button, Utility } from "@visa/nova-react";
// import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/landing-page.png";
import "../styles/theme.css";
import { VisaArrowEndHigh } from "@visa/nova-icons-react";

export default function WhyUs() {
  //   const navigate = useNavigate();

  return (
    <div className="why-us-container">
      <section className="why-us-section">
        <Utility
          vFlexCol
          vAlignItems="left"
          vPadding={16}
          vGap={16}
          className="why-us"
        >
          <Typography variant="display-lg" className="why-title">
            Why Choose Us?
          </Typography>
          <Typography variant="body-lg" className="why-description">
            We help developers and designers turn ideas into production-ready
            components using Nova Design System. It’s fast, accessible, and
            fully compliant with Visa’s brand guidelines.
          </Typography>
        </Utility>
      </section>
    </div>
  );
}
