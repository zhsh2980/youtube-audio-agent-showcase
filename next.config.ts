import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_PUBLIC_STATIC_EXPORT === "1" ? "export" : undefined,
  basePath: process.env.NEXT_PUBLIC_STATIC_EXPORT === "1" ? "/youtube-audio-agent-showcase" : "",
  assetPrefix: process.env.NEXT_PUBLIC_STATIC_EXPORT === "1" ? "/youtube-audio-agent-showcase/" : undefined,
};

export default nextConfig;
