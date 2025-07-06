import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // اجازه دسترسی به تمام مسیرها
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL === "1", // فقط در Vercel ignore شود
  },
};

export default nextConfig;
