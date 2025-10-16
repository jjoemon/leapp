import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ swcMinify removed — it's enabled by default
  // ✅ experimental.turbo removed — replaced with turbopack

  turbopack: {},

  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
