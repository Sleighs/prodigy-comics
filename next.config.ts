import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'tile.openstreetmap.org'],
    unoptimized: true,
  },
};

export default nextConfig;
