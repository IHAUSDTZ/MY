/** @type {import('next').Next.Config} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
  // If you're deploying to a custom domain, leave basePath as is.
  // If you're deploying to username.github.io/repo-name/, set it to '/repo-name'
  // basePath: '/NGO', 
};

module.exports = nextConfig;
