# Visa Nova Component Suggestion tool

A React-based tool for browsing, searching, and previewing UI components with live previews, code snippets, and theme support.

## Features:-

- **Live Component Preview:** See a live rendering of each component from the `componentUI` array, above its code snippet.
- **Code Snippet Copy:** Instantly copy any component's code snippet to your clipboard with a single click and get a toast notification.
- **Search & Filter:** Search for components by name or keywords. Suggestions appear as you type, and results update in real time.
- **Search Modal:** Quickly search for components using a dedicated modal (press the search button or shortcut). Results update in real time as you type.
- **Theme Toggle:** Switch between light and dark mode using the toggle button in the top right corner. All UI elements update to match the selected theme.
- **Responsive Design:** Works well on both desktop and mobile screens.

## Main Files & Structure:-

- `src/App.jsx`: Main app container. Manages state for the input and filtered components.
- `src/components/Header.jsx`: Displays the app title, subtitle, and the theme toggle button (top right corner).
- `src/components/InputSection.jsx`: Contains the search input and dropdown suggestions for filtering components.
- `src/components/ComponentList.jsx`: Renders a list of `ComponentCard` components based on the filtered data.
- `src/components/ComponentCard.jsx`: Shows each component's name, live preview, code snippet (in an accordion), and copy button.
- `src/components/Footer.jsx`: Displays the app footer.
- `src/objects.js`: Contains the `componentUI` array with all component definitions, code snippets, and metadata.
- `src/styles/theme.css`: All theme variables, color schemes, and component styles for both light and dark modes.
- `src/modals/searchModal.jsx`: Implements the search modal, allowing users to search for components by name or keyword in a pop-up overlay. Integrates with navigation and closes on selection or button press.

## Usage:-

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app locally:**
   ```bash
   npm run dev
   ```
3. **Browse and search:**

   - Use the search input to filter components by name or keyword (It does not have all components but soon it will have more components and their codeSnippets).'

   - **List of components that can be searched are:-**
   - Radio
   - Radio Button
   - Form
   - Checkbox, checkbox

   - Click a suggestion or press the search button to update the results.
   - Click the theme toggle (🌙/☀️) in the top right to switch themes.
   - Click "Copy Source Code" to copy a component's code snippet to your clipboard.

## Notes:-

- Live previews are generated from the `codeSnippet` in each `componentUI` object. Only simple, self-contained functional components are supported for preview.
- For security, do not use this approach in production without sandboxing code execution.
- Theming is handled via CSS variables and `.theme-light`/`.theme-dark` classes on the `<body>`.

## Customization:-

- Add or edit components in `src/objects.js` to expand the library.
- Adjust theme colors in `src/styles/theme.css` as needed.

## Accessibility & Keyboard Navigation

This project is designed with accessibility in mind, following [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/) and [VGAR](https://usa.visa.com/dam/VCOM/download/corporate-responsibility/visa-global-accessibility-requirements.pdf) standards:

- **Semantic HTML:** All interactive elements use semantic tags (e.g., `<button>`, `<input>`, `<nav>`, `<main>`, `<footer>`).
- **Keyboard Navigation:**
  - All features are accessible via keyboard (Tab, Shift+Tab, Enter, Esc).
  - Modals can be opened/closed with keyboard shortcuts and Esc key.
  - Focus is trapped within modals when open, and returned to the trigger on close.
- **ARIA Roles & Attributes:**
  - Modals use `role="dialog"`, `aria-modal="true"`, and descriptive `aria-label` or `aria-labelledby`.
  - Buttons and inputs have `aria-label` for screen readers.
  - Live regions (`aria-live="polite"`) announce dynamic updates (e.g., copy-to-clipboard toast).
  - Lists and accordions use `aria-expanded`, `aria-controls`, and `role="region"` where appropriate.
- **Color Contrast:**
  - All text and UI elements meet or exceed WCAG AA color contrast requirements.
- **Screen Reader Support:**
  - All controls and dynamic content are announced to screen readers.
- **Accessibility Testing:**
  - Tested with keyboard navigation, screen readers, and automated tools (axe, Lighthouse).

**Example:**

```jsx
// Accessible modal example
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="search-modal-title"
  tabIndex={-1}
>
  <h3 id="search-modal-title">Search Components</h3>
  <button aria-label="Close search modal">Close</button>
</div>
```

For more details, see code comments referencing specific WCAG and VGAR criteria throughout the codebase.

---

## Approach and Technical Choices

- **Framework:** Built with React for component-driven development and fast prototyping.
- **Component Library:** Utilizes [@visa/nova-react](https://www.npmjs.com/package/@visa/nova-react) for accessible, Visa-compliant UI components.
- **State Management:** Uses React hooks (`useState`, `useEffect`) for local state and UI logic.
- **Styling:** Theming and responsive design are handled via CSS variables and custom classes in `theme.css`.
- **Accessibility:** Follows WCAG and VGAR standards, using semantic HTML, ARIA attributes, and keyboard navigation support throughout.
- **Code Organization:** Components are modularized for clarity and reusability. The `componentUI` object centralizes all component data and code snippets.

## Assumptions and Shortcuts

- Assumed that the Nova Design System components are accessible by default, so minimal custom ARIA was added unless needed.
- The code preview feature only supports simple, self-contained functional components for security and simplicity.
- Search suggestions and filtering are based on a static list (`componentUI`), not a backend or dynamic data source.
- Some accessibility features (e.g., focus management in modals/dropdowns) are handled at a basic level and may need further refinement for edge cases.
- The app is intended as a prototype/demo, not for production use.

## Improvements and Future Work

- **Expand Component Library:** Add more components and richer code snippets to the `componentUI` array.
- **Dynamic Data:** Integrate with a backend or API for real-time component updates and search.
- **Advanced Accessibility:** Improve keyboard navigation for dropdowns, accordions, and modals (e.g., arrow key support, focus trapping).
- **Testing:** Add more automated accessibility and unit tests (e.g., with Jest, React Testing Library, axe-core).
- **Customization:** Allow users to customize themes, save favorites, or export code snippets.
- **Performance:** Optimize rendering for large component lists and improve lazy loading.
- **Documentation:** Expand code comments and add more usage examples.

© 2025 Visa Nova Component Suggester. Built with [@visa/nova-react](https://www.npmjs.com/package/@visa/nova-react).
