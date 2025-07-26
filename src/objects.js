export const componentUI = [
  {
    sno: 1,
    id: "checkbox-001",
    name: "CheckBox with Label",
    description:
      "A checkbox lets users select one or more options from a set. It's used for toggling preferences.",
    keywords: [
      "checkbox",
      "form control",
      "toggle",
      "boolean input",
      "check box",
      "form control",
      "form",
      "form control",
      "form control",
    ],
    category: "Form",
    usage:
      "Used in forms where multiple choices are allowed, such as terms acceptance or feature selection.",
    codeSnippet: `
import { Checkbox, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'checkbox-default';

export const DefaultCheckbox = () => {
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} />
      <Label htmlFor={id}>Label</Label>
    </Utility>
  );
};
    `,
    renderSnippet: `
<>
  <Utility vAlignItems="center" vFlex vGap={2}>
    <Checkbox id="checkbox-default" />
    <Label htmlFor="checkbox-default">Label</Label>
  </Utility>
</>
`,
    props: ["checked", "onChange", "disabled", "name", "value"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 2,
    id: "checkbox-002",
    name: "CheckBox with Error",
    description:
      "A checkbox lets users select one or more options from a set. It's used for toggling preferences.",
    keywords: [
      "checkbox",
      "form control",
      "toggle",
      "boolean input",
      "check box",
      "error",
      "label",
    ],
    category: "Form",
    usage:
      "Used in forms where multiple choices are allowed, such as terms acceptance or feature selection.",
    codeSnippet: `
import { VisaErrorTiny } from '@visa/nova-icons-react';
import { ChangeEvent, useRef, useState } from 'react';
import { Button, Checkbox, InputMessage, Label, Utility, UtilityFragment } from '@visa/nova-react';

const id = 'validation-checkbox';

export const ValidationCheckbox = () => {
  const checkboxRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const onCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const onSubmit = () => {
    if (checked) return setInvalid(false);
    setInvalid(true);
    checkboxRef.current?.focus();
  };

  return (
    <>
      <Utility tag="fieldset" vFlex vFlexCol>
        <Utility vAlignItems="center" vFlex vGap={2}>
          <Checkbox
            aria-describedby={\`\${id}-message\`}
            aria-invalid={invalid}
            aria-required="true"
            checked={checked}
            id={id}
            onChange={onCheckboxChange}
            ref={checkboxRef}
            value="1"
          />
          <Label htmlFor={id}>Label</Label>
        </Utility>
        {invalid && (
          <UtilityFragment vMarginTop={4}>
            <InputMessage aria-atomic="true" aria-live="assertive" id={\`\${id}-message\`} role="alert" variant="body-3">
              <VisaErrorTiny />
              This is required text that describes the error in more detail.
            </InputMessage>
          </UtilityFragment>
        )}
      </Utility>
      <UtilityFragment vMarginTop={12}>
        <Button onClick={onSubmit}>Submit</Button>
      </UtilityFragment>
    </>
  );
};
    `,
    renderSnippet: `
() => {
  const checkboxRef = React.useRef(null);
  const [checked, setChecked] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
  const id = "validation-checkbox";

  const onCheckboxChange = (event) => setChecked(event.target.checked);

  const onSubmit = () => {
    if (checked) return setInvalid(false);
    setInvalid(true);
    checkboxRef.current?.focus();
  };

  return (
    <>
      <Utility tag="fieldset" vFlex vFlexCol>
        <Utility vAlignItems="center" vFlex vGap={2}>
          <Checkbox
            aria-describedby={id + "-message"}
            aria-invalid={invalid}
            aria-required="true"
            checked={checked}
            id={id}
            onChange={onCheckboxChange}
            ref={checkboxRef}
            value="1"
          />
          <Label htmlFor={id}>Label</Label>
        </Utility>
        {invalid && (
          <UtilityFragment vMarginTop={4}>
            <InputMessage
              aria-atomic="true"
              aria-live="assertive"
              id={id + "-message"}
              role="alert"
              variant="body-3"
            >
              <VisaErrorTiny />
              This is required text that describes the error in more detail.
            </InputMessage>
          </UtilityFragment>
        )}
      </Utility>
      <UtilityFragment vMarginTop={12}>
        <Button onClick={onSubmit}>Submit</Button>
      </UtilityFragment>
    </>
  );
}
`,
    props: [
      "checked",
      "onChange",
      "disabled",
      "name",
      "value",
      "error",
      "label",
    ],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 3,
    id: "checkbox-003",
    name: "Disabled checkbox",
    description:
      "A checkbox lets users select one or more options from a set. It's used for toggling preferences.",
    keywords: [
      "checkbox",
      "form control",
      "toggle",
      "boolean input",
      "check box",
      "disabled",
      "label",
    ],
    category: "Form",
    usage:
      "Used in forms where multiple choices are allowed, such as terms acceptance or feature selection.",
    codeSnippet: `
import { Checkbox, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'checkbox-disabled-checked';

export const DisabledCheckedCheckbox = () => {
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} disabled checked />
      <Label htmlFor={id}>Label</Label>
    </Utility>
  );
};`,
    renderSnippet: `
<>
  <Utility vAlignItems="center" vFlex vGap={2}>
    <Checkbox id="checkbox-disabled-checked" disabled checked />
    <Label htmlFor="checkbox-disabled-checked">Label</Label>
  </Utility>
</>
`,
    props: [
      "checked",
      "onChange",
      "disabled",
      "name",
      "value",
      "error",
      "label",
    ],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 4,
    id: "login-form-001",
    name: "Login Form",
    description:
      "A Login Form authenticates users with a username and password. Often includes email, password, and remember me checkbox.",
    keywords: [
      "login",
      "authentication",
      "signin",
      "form",
      "credentials",
      "Remember me",
      "error",
      "label",
    ],
    category: "Form",
    usage:
      "Used as entry point to user-authenticated parts of apps or admin portals.",
    codeSnippet: `
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
    `,
    renderSnippet: `
() => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    alert("Logging in with: " + email + " " + password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
`,
    props: ["email", "password", "onSubmit", "error", "label"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 5,
    id: "button-001",
    name: "Primary-Button",
    description:
      "A Button is a trigger for actions such as submitting a form, opening a modal, or navigating to another page.",
    keywords: ["button", "click", "CTA", "submit", "trigger"],
    category: "Basic UI",
    usage: "Used everywhere — forms, modals, navigation, cards, etc.",
    codeSnippet: `
import { Button } from '@visa/nova-react';

export const DefaultButton = () => {
  return <Button>Primary action</Button>;
};
    `,
    renderSnippet: `
<Button>Primary action</Button>
`,
    props: ["onClick", "disabled", "type", "className"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 6,
    id: "button-002",
    name: "Secondary-Button",
    description:
      "A Button is a trigger for actions such as submitting a form, opening a modal, or navigating to another page.",
    keywords: ["button", "click", "CTA", "submit", "trigger"],
    category: "Basic UI",
    usage: "Used everywhere — forms, modals, navigation, cards, etc.",
    codeSnippet: `
import { Button } from '@visa/nova-react';

export const SecondaryButton = () => {
  return <Button colorScheme="secondary">Secondary action</Button>;
};
    `,
    renderSnippet: `
<Button colorScheme="secondary">Secondary action</Button>
`,
    props: ["onClick", "disabled", "type", "className"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 7,
    id: "textinput-001",
    name: "Text Input",
    description:
      "A Text Input allows users to enter text. It's commonly used in forms, search bars, and filters.",
    keywords: ["input", "text", "form input", "search", "edit text"],
    category: "Form",
    usage: "Used for collecting user input like names, emails, addresses, etc.",
    codeSnippet: `
import { Input, InputContainer, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-default';

export const DefaultInput = () => {
  return (
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} type="text" />
      </InputContainer>
    </Utility>
  );
};
    `,
    renderSnippet: `
<>
  <Utility vFlex vFlexCol vGap={4}>
    <Label htmlFor="input-default">Label (required)</Label>
    <InputContainer>
      <Input aria-required="true" id="input-default" type="text" />
    </InputContainer>
  </Utility>
</>
`,
    props: ["type", "value", "onChange", "placeholder"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 8,
    id: "textinput-002",
    name: "Text Input with error",
    description:
      "A Text Input allows users to enter text. It's commonly used in forms, search bars, and filters.",
    keywords: ["input", "text", "form input", "search", "edit text", "error"],
    category: "Form",
    usage: "Used for collecting user input like names, emails, addresses, etc.",
    codeSnippet: `
import { VisaErrorTiny } from '@visa/nova-icons-react';
import { ChangeEvent, useRef, useState } from 'react';
import { Button, Input, InputContainer, InputMessage, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-error';

const DEFAULT_INPUT_STATE = {
  value: '',
  error: false,
};

export const ErrorInput = () => {
  const [inputState, setInputState] = useState(DEFAULT_INPUT_STATE);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // Customize this for your own validation needs
    setInputState(prevInputState => ({
      ...prevInputState,
      error: true,
    }));

    // Focus on the input with error
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleReset = () => {
    setInputState(DEFAULT_INPUT_STATE);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState({
      value: e.target.value,
      error: false,
    });
  };

  return (
    <>
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={id}>Label (required)</Label>
        <InputContainer>
          <Input
            aria-describedby={\`\${id}-message\`}
            aria-invalid={inputState.error}
            aria-required="true"
            ref={inputRef}
            id={id}
            type="text"
            value={inputState.value}
            onChange={handleInputChange}
          />
        </InputContainer>
        {inputState.error && (
          <InputMessage aria-atomic="true" aria-live="assertive" id={\`\${id}-message\`} role="alert">
            <VisaErrorTiny />
            This is required text that describes the error in more detail.
          </InputMessage>
        )}
      </Utility>
      <Utility vFlex vGap={12} vMarginTop={16}>
        <Button id={\`\${id}-submit-button\`} onClick={handleSubmit}>
          Submit
        </Button>
        <Button id={\`\${id}-reset-button\`} colorScheme="secondary" onClick={handleReset}>
          Reset
        </Button>
      </Utility>
    </>
  );
};
    `,
    renderSnippet: `
() => {
  const id = "input-error";
  const DEFAULT_INPUT_STATE = { value: '', error: false };
  const [inputState, setInputState] = React.useState(DEFAULT_INPUT_STATE);
  const inputRef = React.useRef(null);

  const handleSubmit = () => {
    setInputState(prev => ({ ...prev, error: true }));
    if(inputRef.current) inputRef.current.focus();
  };

  const handleReset = () => setInputState(DEFAULT_INPUT_STATE);

  const handleInputChange = (e) => {
    setInputState({ value: e.target.value, error: false });
  };

  return (
    <>
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={id}>Label (required)</Label>
        <InputContainer>
          <Input
            aria-describedby={id + "-message"}
            aria-invalid={inputState.error}
            aria-required="true"
            ref={inputRef}
            id={id}
            type="text"
            value={inputState.value}
            onChange={handleInputChange}
          />
        </InputContainer>
        {inputState.error && (
          <InputMessage
            aria-atomic="true"
            aria-live="assertive"
            id={id + "-message"}
            role="alert"
          >
            <VisaErrorTiny />
            This is required text that describes the error in more detail.
          </InputMessage>
        )}
      </Utility>
      <Utility vFlex vGap={12} vMarginTop={16}>
        <Button id={id + "-submit-button"} onClick={handleSubmit}>
          Submit
        </Button>
        <Button id={id + "-reset-button"} colorScheme="secondary" onClick={handleReset}>
          Reset
        </Button>
      </Utility>
    </>
  );
}
`,
    props: ["type", "value", "onChange", "placeholder"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 9,
    id: "radio-001",
    name: "Radio Button with label",
    description:
      "Radio buttons let users select a single option from multiple choices.",
    keywords: [
      "radio",
      "form",
      "single select",
      "options",
      "survey",
      "error",
      "label",
    ],
    category: "Form",
    usage:
      "Used in surveys, preference selection, or gender/age group selections.",
    codeSnippet: `
import { Label, Radio, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-radio';

export const DefaultRadio = () => {
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Radio id={id} name={id} />
      <Label htmlFor={id}>Label</Label>
    </Utility>
  );
};
    `,
    renderSnippet: `
<>
  <Utility vAlignItems="center" vFlex vGap={2}>
    <Radio id="default-radio" name="default-radio" />
    <Label htmlFor="default-radio">Label</Label>
  </Utility>
</>
`,
    props: ["value", "onChange", "checked", "name", "error", "label"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 10,
    id: "radio-002",
    name: "Radio Button with error",
    description:
      "Radio buttons let users select a single option from multiple choices.",
    keywords: ["radio", "form", "single select", "options", "survey", "error"],
    category: "Form",
    usage:
      "Used in surveys, preference selection, or gender/age group selections.",
    codeSnippet: `
import { ChangeEvent, useRef, useState } from 'react';
import { VisaErrorTiny } from '@visa/nova-icons-react';
import { Button, InputMessage, Label, Radio, Utility, UtilityFragment } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'radio-error';

export const ErrorRadio = () => {
  const radioRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const onRadioButtonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onSubmit = () => {
    if (checked) setInvalid(false);
    else {
      setInvalid(true);
      radioRef.current?.focus();
    }
  };
  return (
    <>
      <fieldset aria-labelledby={\`\${id}-message\`}>
        <Utility vFlex vAlignItems="center" vGap={2}>
          <Radio
            aria-invalid={invalid}
            aria-required="true"
            checked={checked}
            id={id}
            name={id}
            onChange={onRadioButtonChange}
            ref={radioRef}
          />
          <Label htmlFor={id} id={\`\${id}-label\`}>
            Label
          </Label>
        </Utility>
        {invalid && (
          <UtilityFragment vAlignItems="center" vFlex vGap={2} vMarginTop={4}>
            <InputMessage
              aria-atomic="true"
              aria-live="assertive"
              className="v-typography-label"
              id={\`\${id}-message\`}
              role="alert"
            >
              <VisaErrorTiny />
              This is required text that describes the error in more detail.
            </InputMessage>
          </UtilityFragment>
        )}
      </fieldset>
      <Utility vFlex vGap={12} vMarginTop={12}>
        <Button onClick={onSubmit}>Submit</Button>
        <Button colorScheme="secondary" onClick={() => setChecked(false)}>
          Reset
        </Button>
      </Utility>
    </>
  );
};
    `,
    renderSnippet: `
() => {
  const id = "radio-error";
  const radioRef = React.useRef(null);
  const [checked, setChecked] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);

  const onRadioButtonChange = (event) => setChecked(event.target.checked);
  
  const onSubmit = () => {
    if (checked) setInvalid(false);
    else {
      setInvalid(true);
      radioRef.current?.focus();
    }
  };

  return (
    <>
      <fieldset aria-labelledby={id + "-message"}>
        <Utility vFlex vAlignItems="center" vGap={2}>
          <Radio
            aria-invalid={invalid}
            aria-required="true"
            checked={checked}
            id={id}
            name={id}
            onChange={onRadioButtonChange}
            ref={radioRef}
          />
          <Label htmlFor={id} id={id + "-label"}>
            Label
          </Label>
        </Utility>
        {invalid && (
          <UtilityFragment vAlignItems="center" vFlex vGap={2} vMarginTop={4}>
            <InputMessage
              aria-atomic="true"
              aria-live="assertive"
              className="v-typography-label"
              id={id + "-message"}
              role="alert"
            >
              <VisaErrorTiny />
              This is required text that describes the error in more detail.
            </InputMessage>
          </UtilityFragment>
        )}
      </fieldset>
      <Utility vFlex vGap={12} vMarginTop={12}>
        <Button onClick={onSubmit}>Submit</Button>
        <Button colorScheme="secondary" onClick={() => setChecked(false)}>
          Reset
        </Button>
      </Utility>
    </>
  );
}
`,
    props: ["value", "onChange", "checked", "name", "error"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 11,
    id: "content-card-001",
    name: "Default Content Card",
    description:
      "A Content Card is a container for displaying content with a headline, subtitle, and optional body text.",
    keywords: [
      "card",
      "content",
      "button",
      "subtitles",
      "with headline",
      "with subtitle",
      "with image",
      "image header",
      "image",
      "image card",
      "image content card",
      "image content",
      "image content card",
      "image content card",
    ],
    category: "Basic UI",
    usage: "It can be used to display content in a card format.",
    codeSnippet: `
import { VisaChevronRightTiny } from '@visa/nova-icons-react';
import {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardSubtitle,
  ContentCardTitle,
  Link,
  Typography,
  Utility,
} from '@visa/nova-react';

export const DefaultContentCard = () => {
  return (
    <ContentCard>
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
        <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
        <Typography className="v-pt-4">
          This is optional text that describes the headline and subtitle in more detail.
        </Typography>
        <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
          <Button>Primary action</Button>
          <Link href="./content-card" noUnderline>
            Destination label <VisaChevronRightTiny rtl />
          </Link>
        </Utility>
      </Utility>
    </ContentCard>
  );
};
    `,
    renderSnippet: `
<ContentCard>
  <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
    <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
    <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
    <Typography className="v-pt-4">
      This is optional text that describes the headline and subtitle in more detail.
    </Typography>
    <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
      <Button>Primary action</Button>
      <Link href="./content-card" noUnderline>
        Destination label <VisaChevronRightTiny rtl />
      </Link>
    </Utility>
  </Utility>
</ContentCard>
`,
    props: ["title", "subtitle", "body", "button", "link"],
    dependencies: [],
    framework: "React",
  },

  {
    sno: 12,
    id: "content-card-002",
    name: "Content Card with image",
    description:
      "A Content Card is a container for displaying content with a headline, subtitle, and optional body text and image.",
    keywords: [
      "card",
      "content",
      "button",
      "subtitles",
      "with headline",
      "with subtitle",
      "with image",
      "image header",
      "image",
      "image card",
      "image content card",
      "image content",
      "image content card",
      "image content card",
    ],
    category: "Basic UI",
    usage: "It can be used to display content in a card format.",
    codeSnippet: `
import { VisaChevronRightTiny } from '@visa/nova-icons-react';
import {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardImage,
  ContentCardSubtitle,
  ContentCardTitle,
  Link,
  Typography,
  Utility,
} from '@visa/nova-react';

const BASE_URL = import.meta.env.BASE_URL;

export const ImageHeaderContentCard = () => {
  return (
    <ContentCard style={{inlineSize: '50vw'}}>
      <ContentCardImage
        // If your image is NOT decorative, be sure to write alt text describing the image
        alt=""
        // Make sure the src path is correct for your image
        src={BASE_URL + '/content-card-image.png'}
        style={{ blockSize: 'auto', inlineSize: '100%', objectFit: 'contain', overflow: 'hidden' }}
        tag="img"
      />
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
        <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
        <Typography className="v-pt-4">
          This is optional text that describes the headline and subtitle in more detail.
        </Typography>
        <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
          <Button>Primary action</Button>
          <Link href="./content-card" noUnderline>
            Destination label <VisaChevronRightTiny rtl />
          </Link>
        </Utility>
      </Utility>
    </ContentCard>
  );
};
    `,
    renderSnippet: `
<ContentCard style={{inlineSize: '50vw'}}>
  <ContentCardImage
    alt=""
    src="/content-card-image.png"
    style={{ blockSize: 'auto', inlineSize: '100%', objectFit: 'contain', overflow: 'hidden' }}
    tag="img"
  />
  <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
    <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
    <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
    <Typography className="v-pt-4">
      This is optional text that describes the headline and subtitle in more detail.
    </Typography>
    <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
      <Button>Primary action</Button>
      <Link href="./content-card" noUnderline>
        Destination label <VisaChevronRightTiny rtl />
      </Link>
    </Utility>
  </Utility>
</ContentCard>
`,
    props: ["title", "subtitle", "body", "button", "link", "image"],
    dependencies: [],
    framework: "React",
  },
];

export const keywords = Array.from(
  new Set(componentUI.flatMap((component) => component.keywords || []))
);
