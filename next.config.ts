import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'admin.renewableobserver.com',
      },
      {
        protocol: 'https',
        hostname: 'renewablemirror.com',
      },
      {
        protocol: 'https',
        hostname: 'www.renewablemirror.com',
      },
      {
        protocol: 'https',
        hostname: 'renewable-mirror.com',
      },
      {
        protocol: 'https',
        hostname: 'www.renewable-mirror.com',
      }
    ],
  },
};

export default nextConfig;
