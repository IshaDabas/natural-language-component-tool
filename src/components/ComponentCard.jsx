import React, { useState } from "react";
import "../styles/theme.css";
import { VisaChevronRightTiny, VisaCopyHigh } from "@visa/nova-icons-react";
import { LiveProvider, LivePreview, LiveError, LiveEditor } from "react-live";
import { VisaErrorTiny, VisaCodeSnippetHigh } from "@visa/nova-icons-react";
import {
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  Utility,
  Button,
  Checkbox,
  Label,
  Radio,
  UtilityFragment,
  InputMessage,
  Input,
  InputContainer,
  ContentCardSubtitle,
  Link,
  Typography,
  ContentCardImage,
} from "@visa/nova-react";

const ComponentCard = ({ component }) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const combinedScope = {
    React,
    Checkbox,
    Label,
    Utility,
    UtilityFragment,
    Button,
    InputMessage,
    VisaErrorTiny,
    Radio,
    Input,
    InputContainer,
    ContentCard,
    ContentCardBody,
    ContentCardSubtitle,
    ContentCardTitle,
    Link,
    Typography,
    VisaChevronRightTiny,
    ContentCardImage,
  };

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
        <LiveProvider
          scope={combinedScope}
          noInline
          code={`render(${component.renderSnippet})`}
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

          <LivePreview />

          <LiveError />

          <Utility vPaddingTop={12} vFlex vGap={10}>
            <Button
              colorScheme="secondary"
              onClick={copyToClipboard}
              className="copy-btn"
              aria-label="Copy code to clipboard"
            >
              Copy Code
              <VisaCopyHigh aria-hidden="true" className="icon-after" />
            </Button>
            <Button
              colorScheme="secondary"
              onClick={() => setShowCode(!showCode)}
              className="copy-btn"
              aria-label="Show code"
            >
              {showCode ? "Hide Code" : "Show Code"}
              <VisaCodeSnippetHigh aria-hidden="true" className="icon-after" />
            </Button>
          </Utility>
          {showCode && <LiveEditor code={component.codeSnippet} />}
        </LiveProvider>
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
