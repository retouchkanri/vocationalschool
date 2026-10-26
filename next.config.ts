import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bajigakuin.net" }],
        destination: "https://bajigakuin.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
