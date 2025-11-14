import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Optional: useful if you deploy to subfolder (like /vedant/)
  trailingSlash: true,
};

export default nextConfig;
