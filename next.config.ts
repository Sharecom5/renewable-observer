import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pinned explicitly. A stray yarn.lock in the user's home directory outranked
  // this project's own package-lock.json, so Turbopack was inferring the home
  // directory as the workspace root and tracing files from there.
  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatar.vercel.sh" },
      { protocol: "https", hostname: "admin.renewableobserver.com" },
      { protocol: "https", hostname: "renewablemirror.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stops browsers second-guessing declared content types — relevant
          // for the XML sitemaps and the IndexNow key file.
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // API responses should never be cached by intermediaries.
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};

export default nextConfig;
