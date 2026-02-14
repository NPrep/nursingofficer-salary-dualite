/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  pageExtensions: ["next.tsx","next.ts","next.jsx","next.js"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
