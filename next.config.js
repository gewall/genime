/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "gogocdn.net",
        pathname: "/cover/**",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

