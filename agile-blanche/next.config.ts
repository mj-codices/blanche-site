import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Exclude SVGs from the default file loader
    const fileLoaderRule = config.module?.rules?.find(
      (rule) =>
        typeof rule === "object" &&
        rule?.test instanceof RegExp &&
        rule.test.test(".svg"),
    );

    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      (fileLoaderRule as any).exclude = /\.svg$/i;
    }

    // Add SVGR loader
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;