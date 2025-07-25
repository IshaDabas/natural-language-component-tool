import React from "react";
import {
  Typography,
  Utility,
  ContentCard,
  ContentCardBody,
  ContentCardImage,
  ContentCardSubtitle,
  ContentCardTitle,
} from "@visa/nova-react";
import WhyUsImg from "../assets/design.png";
import VPDS from "../assets/what-is-a-design-system.svg";
import VPDS2 from "../assets/vpds-partners.svg";
import "../styles/theme.css";

export default function WhyUs() {
  return (
    <div>
      <div className="why-us-container">
        <section className="why-us-section">
          <Utility
            vFlexCol
            vAlignItems="left"
            vPadding={36}
            vGap={16}
            className="why-us"
          >
            <Typography variant="display-lg" className="why-title">
              What are we?
            </Typography>
            <Typography variant="body-lg" className="why-description">
              We help developers and designers turn ideas into production-ready
              components using Nova Design System. It’s fast, accessible, and
              fully compliant with Visa’s brand guidelines.
            </Typography>
            <Typography variant="body-lg" className="why-description">
              The Visa Product Design System (VPDS) is an all-encompassing
              toolkit designed to revolutionize the product design and
              development process. Recognized across Visa’s product ecosystem,
              VPDS:
              <ul>
                <li className="why-description-list">
                  Efficiency: Accelerate design and development with pre-built
                  components, reducing repetitive tasks and rework.
                </li>

                <li className="why-description-list">
                  Accessibility: Create accessible experiences using libraries
                  pre-tested for global accessibility standards.
                </li>

                <li className="why-description-list">
                  Consistency: Use standardized guidelines, components, and
                  patterns to uphold brand trust and user satisfaction.
                </li>

                <li className="why-description-list">
                  Collaboration: Follow best practices and principles embedded
                  in the system to enable effective teamwork.
                </li>
                <li className="why-description-list">
                  Scalability: Keep products forefront with regular updates
                  based on user feedback and industry standards.
                </li>
                <li className="why-description-list">
                  Innovation: Drive innovation by allowing your team to focus on
                  creative solutions while VPDS covers the basics.
                </li>
              </ul>
            </Typography>
          </Utility>
          <img src={WhyUsImg} alt="Why Us" className="why-img" />
        </section>
      </div>
      <div>
        <section className="why-us-contentCard-section">
          <ContentCard className="why-us-contentCard">
            <ContentCardImage
              alt=""
              src={VPDS}
              className="why-us-contentCard-image"
              tag="img"
            />
            <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
              <ContentCardTitle
                className="content-card-title"
                variant="headline-4"
              >
                What is a design system?
              </ContentCardTitle>

              <Typography className="content-card-description">
                Design systems provide a centralized library of assets and
                guidelines to ensure consistency and efficiency. This includes
                extensive libraries of pre-built components, design patterns,
                and comprehensive content guidelines, all tailored to meet the
                highest standards of accessibility, usability, and aesthetic
                excellence. VPDS supports design kits in Figma and code
                libraries for Angular, React, Styles (CSS), and Flutter. These
                resources are continuously updated based on user feedback and
                the latest technological advancements. By leveraging these
                assets, teams can streamline their workflows, foster innovation,
                and create cohesive user experiences across all Visa products.
              </Typography>
            </Utility>
          </ContentCard>
          <ContentCard className="why-us-contentCard">
            <ContentCardImage
              alt=""
              src={VPDS2}
              className="why-us-contentCard-image"
              tag="img"
            />
            <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
              <ContentCardTitle
                className="content-card-title"
                variant="headline-4"
              >
                Who manages VPDS?
              </ContentCardTitle>
              <Typography className="content-card-description">
                The Visa Product Design System is managed by a collaborative
                team of designers, developers, content designers, accessibility
                partners, researchers, and ops. Collectively, the team ensures
                the system remains current and effective by continuously
                updating resources based on cross-discipline reviews, user
                feedback, and industry best practices. To connect with the VPDS
                team or learn more about office hours or quarterly updates,
                visit Support.
              </Typography>
            </Utility>
          </ContentCard>
        </section>
      </div>
    </div>
  );
}
