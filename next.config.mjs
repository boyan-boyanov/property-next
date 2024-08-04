/** @type {import('next').NextConfig} */
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
      config.devtool = options.isServer ? false : "your-custom-devtool";
    }
    return config;
  },
};

export default nextConfig;
