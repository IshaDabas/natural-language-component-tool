# Visa Nova Component Suggestion Tool

A React-based application for browsing and previewing UI components from the Visa Nova Design System with live previews, code snippets, and theme support.

## Features

- **Landing Page**: Modern landing page with hero section and call-to-action
- **Component Browser**: View individual components with detailed information
- **Live Component Preview**: See live rendering of components using react-live
- **Code Snippet Display**: View and copy component code snippets
- **Search Modal**: Search for components by name or keywords with a dedicated modal
- **Theme Toggle**: Switch between light and dark themes
- **Responsive Design**: Works well on both desktop and mobile screens
- **Accessibility**: Built with WCAG and VGAR compliance in mind

## Project Structure

### Main Files

- `src/main.jsx`: Application entry point with routing setup
- `src/App.jsx`: Component detail view that displays individual components
- `src/Pages/Home.jsx`: Landing page with hero section
- `src/Pages/WhyUs.jsx`: Information page about the design system
- `src/objects.js`: Contains the `componentUI` array with all component definitions

### Components

- `src/components/Header.jsx`: Application header with theme toggle and search
- `src/components/ComponentCard.jsx`: Displays component previews and code snippets
- `src/components/Footer.jsx`: Application footer
- `src/modals/searchModal.jsx`: Search modal for finding components

### Styling

- `src/styles/theme.css`: Theme variables and component styles for light/dark modes

## Available Components

The application includes 12 components from the Nova Design System:

1. **CheckBox with Label** - Basic checkbox with label
2. **CheckBox with Error** - Checkbox with validation and error handling
3. **Disabled checkbox** - Disabled state checkbox
4. **Primary-Button** - Primary action button
5. **Secondary-Button** - Secondary action button
6. **Text Input** - Basic text input field
7. **Text Input with error** - Text input with validation
8. **Radio Button with label** - Basic radio button
9. **Radio Button with error** - Radio button with validation
10. **Default Content Card** - Content card component
11. **Content Card with image** - Content card with image
12. **Switch** - Toggle Button

## Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Navigate the application:**
   - Visit the landing page at `/`
   - Use the search modal (🔍 button) to find components
   - Click on components to view detailed information
   - Toggle between light and dark themes

## Technical Implementation

### Framework & Libraries

- **React 19**: Modern React with hooks for state management
- **React Router DOM**: Client-side routing
- **@visa/nova-react**: Visa's design system components
- **react-live**: Live code editing and preview functionality
- **Vite**: Build tool and development server

### Key Features

- **Live Preview**: Components are rendered using react-live for interactive previews
- **Code Copy**: One-click code copying with toast notifications
- **Search Functionality**: Real-time search through component names and keywords
- **Theme System**: CSS-based theme switching with light/dark modes
- **Accessibility**: ARIA attributes and semantic HTML
- **Screen Reader Support**: Comprehensive ARIA labels, semantic HTML roles, and live regions for dynamic content updates

## Approach and Technical Choices

### 1. Problem Understanding

The goal was to create a tool where users can type natural language requests (e.g., "responsive login form with remember me") and receive Nova component suggestions with code snippets.

### 2. Planning & Strategy

I began by identifying common user intents and mapping them to Nova component categories. I also ensured the UI was intuitive and responsive across devices.

### 3. Framework Selection

- **React**: Chosen for component-driven development and ecosystem maturity
- **Vite**: Fast development server and build tool for modern web development
- **React Router**: Client-side routing for single-page application experience

### 4. Design System Integration

- **@visa/nova-react**: Leverages Visa's official design system for consistency
- **@visa/nova-styles**: Provides base styling and theme support
- **@visa/nova-icons-react**: Accessible icon library

### 5. State Management

- **React Hooks**: Local state management using useState and useEffect
- **URL Parameters**: Component selection and search state managed through routing

### 6. Code Organization

- **Component-based Architecture**: Modular components for reusability
- **Centralized Data**: All component definitions stored in `objects.js`
- **Separation of Concerns**: Clear separation between UI, logic, and data

## Assumptions and Shortcuts

### Security Considerations

- **Code Execution**: Live previews use react-live which executes code in a controlled environment
- **No Backend**: All data is static and client-side only
- **Limited Scope**: Only supports simple, self-contained React components

### Development Assumptions

- **Design System Compliance**: Assumes Nova components are accessible by default
- **Browser Support**: Modern browsers with ES6+ support
- **Static Content**: Component library is predefined and not dynamically loaded

### Accessibility Assumptions

- **Basic ARIA**: Minimal custom ARIA attributes added beyond Nova defaults
- **Keyboard Navigation**: Basic keyboard support implemented
- **Focus Management**: Simple focus handling for modals and interactions

## What You Would Improve or Add with More Time

### Enhanced Search & Discovery

- **Advanced Filtering**: Filter by category, complexity, or usage patterns
- **Search History**: Remember recent searches and popular components
- **Component Tags**: More sophisticated tagging and categorization

### User Experience Improvements

- **Component Favorites**: Allow users to save and organize favorite components
- **Export Options**: Export code snippets in different formats

### Technical Enhancements

- **Performance Optimization**: Virtual scrolling for large component lists
- **Caching**: Implement component caching and lazy loading
- **Backend Integration**: Dynamic component library with API support

## AI Tools used :

**ChatGPT** for planning and references.
**Cursor AI** for testing and debugging
**Perplexity** for filtering out renderSnippet to live preview the code from codeSnippet in objects.js file

---

© 2025 Visa Nova Component Suggestion Tool. Built with [@visa/nova-react](https://www.npmjs.com/package/@visa/nova-react).
