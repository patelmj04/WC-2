/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable Next.js image optimization and modern formats
  images: {
    formats: ["image/avif", "image/webp"],
    // keep images optimized (do not force unoptimized)
    unoptimized: false,
  },
}

export default nextConfig
