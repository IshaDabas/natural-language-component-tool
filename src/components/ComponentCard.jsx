import { Utility, Button } from "@visa/nova-react";
import React, { useState } from "react";
import "../styles/theme.css";
import {
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
} from "@visa/nova-react";
import { VisaCopyHigh } from "@visa/nova-icons-react";
import {
  Accordion,
  AccordionHeading,
  AccordionPanel,
  AccordionToggleIcon,
} from "@visa/nova-react";

const ComponentCard = ({ component }) => {
  const [toastVisible, setToastVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(component.codeSnippet);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  return (
    <>
      <ContentCard
        borderBlockEnd
        className="component-card"
        aria-label={`Component card for ${component?.name || "component"}`}
      >
        <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={10}>
          <ContentCardTitle
            className="content-card-title"
            variant="headline-4"
            aria-label="Code snippet heading"
          >
            Code Snippet
          </ContentCardTitle>
        </Utility>

        <Accordion aria-label="Expandable section to show code snippet">
          <AccordionHeading
            buttonSize="large"
            colorScheme="secondary"
            className="accordion-heading"
            aria-expanded="false"
          >
            <AccordionToggleIcon aria-hidden="true" />
            Show Code
          </AccordionHeading>
          <AccordionPanel aria-label="Code snippet panel">
            <pre>
              <code className="code-snippet">
                {typeof component.codeSnippet === "string"
                  ? component.codeSnippet.trim()
                  : ""}
              </code>
            </pre>
          </AccordionPanel>
        </Accordion>

        <Utility vPaddingTop={12}>
          <Button
            colorScheme="secondary"
            onClick={copyToClipboard}
            className="copy-btn"
            aria-label="Copy code to clipboard"
          >
            Copy Code
            <VisaCopyHigh aria-hidden="true" className="icon-after" />
          </Button>
        </Utility>
      </ContentCard>

      <Toast
        message="Code has been copied successfully"
        visible={toastVisible}
      />
    </>
  );
};

export default ComponentCard;

function Toast({ message, visible }) {
  return visible ? (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-label="Copy confirmation"
    >
      {message}
    </div>
  ) : null;
}
