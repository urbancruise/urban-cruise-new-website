import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: false,
  async rewrites() {
    const chatbotUrl =
      process.env.CHATBOT_API_URL?.replace(/\/$/, "") ?? "http://localhost:5001";

    return [
      {
        source: "/api/chat/:path*",
        destination: `${chatbotUrl}/api/chat/:path*`,
      },
    ];
  },
};

export default nextConfig;