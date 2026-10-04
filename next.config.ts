import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async rewrites() {
    return [
      {
        source: "/fast",
        destination: "/app.html",
      },
      {
        source: "/standalone",
        destination: "/standalone.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(webp|svg|png|jpg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
