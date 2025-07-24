# Visa Nova Component Suggestion tool

A React-based tool for browsing, searching, and previewing UI components with live previews, code snippets, and theme support.

## Features:-

- **Live Component Preview:** See a live rendering of each component from the `componentUI` array, above its code snippet.
- **Code Snippet Copy:** Instantly copy any component's code snippet to your clipboard with a single click and get a toast notification.
- **Search & Filter:** Search for components by name or keywords. Suggestions appear as you type, and results update in real time.
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
   - Use the search input to filter components by name or keyword.
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

---

© 2025 Visa Nova Component Suggester. Built with [@visa/nova-react](https://www.npmjs.com/package/@visa/nova-react).
