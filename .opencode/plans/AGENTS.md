# AGENTS.md - IHAUS NGO Website Coding Guidelines

This file provides instructions for agentic coding agents working on the IHAUS NGO website codebase.

## Table of Contents
1. [Development Commands](#development-commands)
2. [Code Style Guidelines](#code-style-guidelines)
3. [TypeScript Guidelines](#typescript-guidelines)
4. [Import Guidelines](#import-guidelines)
5. [Naming Conventions](#naming-conventions)
6. [Error Handling](#error-handling)
7. [Testing Guidelines](#testing-guidelines)
8. [Project Structure](#project-structure)

## Development Commands

### Installation
```bash
npm run a        # Custom alias for npm install
npm install      # Standard installation
```

### Development Server
```bash
npm run dev      # Starts Next.js development server at http://localhost:3000
```

### Building for Production
```bash
npm run build    # Creates optimized production build
npm run start    # Starts production server
```

### Linting
```bash
npm run lint     # Runs ESLint on all files
```

### Testing
```bash
npm test         # Runs all Jest tests
npm test -- --watch  # Runs tests in watch mode
npm test -- --coverage  # Runs tests with coverage report
```

### Running a Single Test
```bash
npm test -- Navbar.test.tsx  # Runs only Navbar tests
npm test -- -t "renders the NGO name"  # Runs tests matching the test name pattern
```

## Code Style Guidelines

### Formatting
- Use Prettier formatting (configured implicitly through Next.js/Tailwind setup)
- Maximum line length: 100 characters
- Use 2 spaces for indentation (not tabs)
- Trailing commas in multi-line objects/arrays
- Semicolons required

### File Organization
- Component files: PascalCase (e.g., `Navbar.tsx`)
- Utility functions: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- Test files: Same name as source file with `.test.` extension (e.g., `Navbar.test.tsx`)
- Page files: Located in `/app` directory following Next.js App Router conventions

### TypeScript Guidelines
- Strict type checking enabled via `tsconfig.json`
- Use interfaces for object shapes, types for unions/mappings
- Avoid `any` type; use `unknown` when type is uncertain and perform type narrowing
- Prefer explicit return types for functions
- Use `React.FC` or `React.FunctionComponent` for component typings
- Export types and interfaces when they need to be reused

### Import Guidelines
1. **Order of imports** (with blank line between groups):
   - External libraries (react, next, etc.)
   - Internal components and utilities
   - Styles and CSS imports
   - Type imports (when using `import type`)

2. **Path aliases**:
   - Use `@/` alias for absolute imports when needed (though not currently configured)
   - Relative imports preferred for local components

3. **Specific rules**:
   - Import images using Next.js Image component: `import Image from 'next/image'`
   - Import icons from lucide-react: `import { IconName } from 'lucide-react'`
   - Use path-based imports for components: `import Navbar from '@/components/Navbar'` (if alias configured) or `import Navbar from '../components/Navbar'`

### Naming Conventions
- **Components**: PascalCase (e.g., `Navbar`, `Footer`)
- **Functions and variables**: camelCase (e.g., `handleClick`, `isOpen`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `DEFAULT_TIMEOUT`)
- **Files**: 
  - Components: PascalCase.tsx (e.g., `Navbar.tsx`)
  - Utilities: camelCase.ts (e.g., `dateUtils.ts`)
  - Tests: `{name}.test.tsx`
  - Pages: Follow Next.js App Router conventions (e.g., `page.tsx`, `layout.tsx`)
- **CSS classes**: Use Tailwind utility classes primarily; custom classes in kebab-case

### Error Handling
- Use try/catch for asynchronous operations
- Handle Promise rejections appropriately
- Display user-friendly error messages in UI
- Log errors to console in development only
- Use TypeScript to catch errors at compile time
- For API routes, return appropriate HTTP status codes

## Testing Guidelines

### Test File Structure
- Located in `__tests__` directory
- Follow the pattern: `{ComponentName}.test.tsx`
- Use `@testing-library/react` for React component testing
- Mock external dependencies (like next/link) when necessary

### Writing Tests
- Use descriptive test names that explain what is being tested
- Test user interactions and visible outputs, not implementation details
- Use `getByRole`, `getByLabelText`, `getByText` queries for accessibility
- Mock Next.js navigation components as shown in existing tests
- Include cleanup code when necessary

### Test Example (from Navbar.test.tsx):
```typescript
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

// Mocking Next.js Link component
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Navbar Component", () => {
  it("renders the NGO name (IHAUS)", () => {
    render(<Navbar />);
    const logoElement = screen.getByText(/IHAUS/i);
    expect(logoElement).toBeInTheDocument();
  });
});
```

## Project Structure

```
/app                 # Next.js App Router - pages, layouts, API routes
/components          # Reusable UI components (Navbar, Footer, etc.)
/styles              # Global CSS and Tailwind configurations
/public              # Static assets (images, robots.txt, sitemap.xml)
/assets              # Original high-res source files
/__tests__           # Test files
```

### Key Directories

#### /app
- Contains all pages using Next.js App Router
- Each route has a `page.tsx` file
- Shared layouts in `layout.tsx`
- Route groups can be created with folders

#### /components
- Reusable UI components
- Follow atomic design principles when possible
- Client components marked with `"use client"` directive
- Server components by default (no directive needed)

#### /styles
- `globals.css`: Global CSS styles
- Tailwind configuration in `tailwind.config.js` and `postcss.config.js`

## Additional Notes

### Next.js Specific
- Use App Router conventions (app directory)
- Leverage server components for data fetching when possible
- Use `next/image` for optimized image loading
- Use `next/link` for client-side navigation
- Metadata exported from `layout.tsx` or `page.tsx`

### Tailwind CSS
- Utility-first approach; minimize custom CSS
- Use `clsx` and `tailwind-merge` for conditional class combinations
- Custom colors defined in `tailwind.config.js` (primary, secondary, accent, surface)
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### Accessibility (WCAG AA)
- Semantic HTML elements used throughout
- ARIA labels for interactive elements
- Sufficient color contrast (Forest Green & Earth Brown palette)
- Keyboard navigable menus and forms
- Focus visible outlines

### Performance
- Images optimized via Next.js Image component
- Code splitting automatic with Next.js
- Framer Motion used for performant animations
- Lazy loading implemented where appropriate

## Copilot/Cursor Rules
No specific Cursor (.cursor/rules/) or Copilot (.github/copilot-instructions.md) rules found in this repository.