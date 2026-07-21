import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd && { output: "export" }),
  ...(isProd && { basePath: "/website-lab" }),
  ...(isProd && { assetPrefix: "/website-lab/" }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
