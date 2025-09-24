import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ismael-correia.dev", "personal-portfolio-topaz-eight.vercel.app"],
    formats: ["image/webp", "image/avif"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
