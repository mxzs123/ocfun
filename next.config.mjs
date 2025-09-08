import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom webpack to alias modules that some libraries try to import.
  // Here we alias 'service-worker.js' to a local empty shim so Next.js can bundle successfully.
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "service-worker.js": path.resolve("src/shims/service-worker.js"),
    };
    return config;
  },
};

export default nextConfig;
