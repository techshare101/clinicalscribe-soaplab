import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/clinicalscribe-soaplab",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
