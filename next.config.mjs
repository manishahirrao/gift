/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Enable static export
  output: 'export',
  
  // CRITICAL: Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Trailing slash helps with static hosting
  trailingSlash: true,
  
  // Disable React StrictMode
  reactStrictMode: false,
};

export default nextConfig;