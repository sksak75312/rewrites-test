import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [{
      source: '/udn/:path*',
      destination: 'https://randomuser.me/api/:path*'
    }]
  }
};

export default nextConfig;
