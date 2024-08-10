//** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
  webpack: (config, options) => {
    if (!options.dev) {
      // For production client-side builds, use a valid devtool option
      config.devtool = options.isServer ? false : "source-map"; // Example valid devtool
    }
    return config;
  },
};

export default nextConfig;
