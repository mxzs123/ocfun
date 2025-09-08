import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["service-worker.js"] = path.resolve("./src/shims/service-worker.js");
    return config;
  },
};

export default nextConfig;
