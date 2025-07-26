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
4. **Login Form** - Basic login form implementation
5. **Primary-Button** - Primary action button
6. **Secondary-Button** - Secondary action button
7. **Text Input** - Basic text input field
8. **Text Input with error** - Text input with validation
9. **Radio Button with label** - Basic radio button
10. **Radio Button with error** - Radio button with validation
11. **Default Content Card** - Content card component
12. **Content Card with image** - Content card with image

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
- **Accessibility**: ARIA attributes, semantic HTML, and keyboard navigation

## Approach and Technical Choices

### Framework Selection

- **React**: Chosen for component-driven development and ecosystem maturity
- **Vite**: Fast development server and build tool for modern web development
- **React Router**: Client-side routing for single-page application experience

### Design System Integration

- **@visa/nova-react**: Leverages Visa's official design system for consistency
- **@visa/nova-styles**: Provides base styling and theme support
- **@visa/nova-icons-react**: Accessible icon library

### State Management

- **React Hooks**: Local state management using useState and useEffect
- **URL Parameters**: Component selection and search state managed through routing

### Code Organization

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
- **Fuzzy Search**: Better search algorithms for partial matches
- **Search History**: Remember recent searches and popular components
- **Component Tags**: More sophisticated tagging and categorization

### User Experience Improvements

- **Component Favorites**: Allow users to save and organize favorite components
- **Custom Themes**: User-defined theme customization
- **Export Options**: Export code snippets in different formats
- **Component Comparison**: Side-by-side component comparison

### Technical Enhancements

- **Performance Optimization**: Virtual scrolling for large component lists
- **Caching**: Implement component caching and lazy loading
- **Analytics**: Track component usage and search patterns
- **Backend Integration**: Dynamic component library with API support

### Accessibility Improvements

- **Advanced Focus Management**: Better focus trapping and restoration
- **Screen Reader Optimization**: Enhanced ARIA labels and descriptions
- **Keyboard Shortcuts**: Comprehensive keyboard navigation support
- **High Contrast Mode**: Additional accessibility themes

### Development Experience

- **Component Testing**: Automated tests for component functionality
- **Documentation**: Inline documentation and usage examples
- **Code Quality**: Enhanced linting and type checking
- **Build Optimization**: Production build optimization and code splitting

### Content Expansion

- **More Components**: Expand the component library with additional Nova components
- **Usage Examples**: Real-world usage examples and best practices
- **Design Guidelines**: Integration with design system documentation
- **Interactive Tutorials**: Guided tours and learning resources

---

© 2025 Visa Nova Component Suggestion Tool. Built with [@visa/nova-react](https://www.npmjs.com/package/@visa/nova-react).
