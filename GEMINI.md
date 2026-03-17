# GEMINI.md - IHAUS NGO Website Context

This file serves as the primary instructional context for Gemini CLI interactions within the IHAUS NGO website project.

## Project Overview

The **Integrated Hill Areas Upliftment Society (IHAUS)** website is a modern, accessible, and high-performance web platform built to showcase the NGO's work in Manipur, India. The project focuses on tribal welfare, education, and sustainable rural development in the Noney District.

### Core Tech Stack
- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom "Earthy/Grassroots" theme.
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** React Hooks (Client Components where necessary).

### Architecture
- **App Router (`/app`):** Handles all routing, layouts, and SEO metadata.
- **Components (`/components`):** Reusable UI building blocks (Navbar, Footer, etc.).
- **Styles (`/styles`):** Contains `globals.css` and Tailwind configurations.
- **Public (`/public`):** Static assets and optimized images.

---

## Building and Running

Commands are managed via `npm` (as defined in `package.json`):

| Action | Command | Description |
| :--- | :--- | :--- |
| **Install** | `npm run a` | Alias for `npm install`. |
| **Development** | `npm run dev` | Starts the Next.js development server at `http://localhost:3000`. |
| **Build** | `npm run build` | Compiles the application for production. |
| **Production** | `npm run start` | Starts the production server after a build. |
| **Linting** | `npm run lint` | Runs ESLint to check for code quality and Next.js best practices. |
| **Testing** | `npm run test` | Executes Jest tests (e.g., `__tests__/Navbar.test.tsx`). |

---

## Development Conventions

### Styling & Theme
- **Tailwind Utility Classes:** Prefer utility-first styling.
- **Custom Theme:** Use the project's semantic color palette defined in `tailwind.config.js`:
  - `primary`: Forest Green (`#2D5A27`)
  - `secondary`: Earth Brown (`#4E3B31`)
  - `accent`: Warm Amber (`#F9A826`)
  - `surface`: Off-white/Cream (`#F9F7F2`)
- **Responsive Design:** Mobile-first approach is mandatory.

### Components
- **Client vs Server:** Use Server Components by default. Add `"use client"` only for components requiring interactivity or browser APIs (e.g., `Navbar.tsx`).
- **Icons:** Always use `lucide-react` for consistent iconography.

### Accessibility (a11y)
- Maintain semantic HTML (e.g., `<main>`, `<section>`, `<nav>`, `<footer>`).
- Ensure high contrast ratios following WCAG AA standards.
- Use ARIA labels for interactive elements (e.g., mobile menu toggles).

### Coding Style
- **TypeScript:** Strict type checking is encouraged. Avoid `any`.
- **Formatting:** Standard Next.js/ESLint configuration.
- **Navigation:** Use the Next.js `<Link>` component for all internal routing.

---

## Deployment & Maintenance

- **Platform:** Recommended for Vercel or Netlify.
- **Sitemap/SEO:** Metadata is managed centrally in `app/layout.tsx` and can be overridden in specific page files.
