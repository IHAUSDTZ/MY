/** @type {import('next').Next.Config} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
  // We handle basePath automatically via the GitHub Action but re-expose it here 
  // to ensure next/image prepends it correctly in the static output.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig;
