import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Remove deprecated options
  // swcMinify is now enabled by default — no need to include it
  // experimental.turbo is deprecated — use turbopack instead

  // ✅ If you want to use Turbopack (optional, faster dev builds):
  turbopack: {},

  // ✅ Optional for monorepos or custom paths
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
