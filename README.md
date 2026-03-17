# IHAUS NGO Website - Next.js Production Scaffold

A production-ready, accessible, and high-performance website for the **Integrated Hill Areas Upliftment Society (IHAUS)**, Manipur.

## Tech Stack
- **Next.js 14+** (App Router, SSR/Static hybrid)
- **React** & **TypeScript**
- **Tailwind CSS** (Custom Earthy/Grassroots theme)
- **Lucide Icons** (Iconography)
- **Framer Motion** (Animations)

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm

### Installation
```bash
# Using the custom alias 'a'
npm run a

# Or standard install
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build & Production
```bash
npm run build
npm run start
```

## Folder Structure
- `/app`: Pages, layouts, and API routes (Next.js App Router).
- `/components`: Modular UI components (Navbar, Footer, Program Cards).
- `/styles`: Global CSS and Tailwind configurations.
- `/public`: Static assets, `sitemap.xml`, and `robots.txt`.
- `/assets`: Sample royalty-free images and brand assets.

## Production Checklist (TODOs)
1. **Assets**: Replace placeholder images in `public/` and `app/` with high-resolution community photos.
2. **Analytics**: Add Google Analytics tracking ID in `app/layout.tsx`.
3. **Payments**: Integrate a real payment provider (Stripe/Razorpay) in `app/donate/page.tsx`. Currently uses a UI stub.
4. **CMS**: Connect `app/news/page.tsx` to a headless CMS (Contentful/Sanity) for dynamic updates.
5. **SEO**: Update the base URL in `public/sitemap.xml` and `public/robots.txt` if the domain changes.

## Accessibility (WCAG AA)
- Semantic HTML elements used throughout.
- ARIA labels for navigation toggles.
- High-contrast color palette (Forest Green & Earth Brown).
- Keyboard navigable menus and forms.

## Deployment

### Option 1: GitHub Pages (Static Hosting)
1. **GitHub Setup**: 
   - Go to your repository **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
2. **Next.js Config**: If your repository name is NOT `your-username.github.io` (e.g., `NGO`), update the `basePath` in `next.config.js`:
   ```javascript
   basePath: '/NGO',
   ```
3. **Deploy**: Push your code to the `main` branch. The included GitHub Action in `.github/workflows/deploy.yml` will automatically build and deploy the site.

### Option 2: Vercel (Recommended for SSR Features)
1. Push code to GitHub/GitLab.
2. Connect repository to Vercel.
3. Automatic builds on every push.
