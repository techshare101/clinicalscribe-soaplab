import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force cache clear
  async redirects() {
    return [
      {
        source: "/",
        destination: "/soaplab",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
