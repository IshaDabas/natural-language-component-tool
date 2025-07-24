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
      <ContentCard borderBlockEnd className="component-card">
        <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={10}>
          <ContentCardTitle className="content-card-title" variant="headline-4">
            Code Snippet
          </ContentCardTitle>
        </Utility>
        <Accordion>
          <AccordionHeading
            buttonSize="large"
            colorScheme="secondary"
            className="accordion-heading"
          >
            <AccordionToggleIcon />
            Show Code
          </AccordionHeading>
          <AccordionPanel>
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
          >
            Copy Code
            <VisaCopyHigh aria-label="Copy icon" className="icon-after" />
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
  return visible ? <div className="toast">{message}</div> : null;
}
