import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
         protocol: 'https',
         hostname: 'scontent-atl3-1.xx.fbcdn.net',
         port: '',
         pathname: '/**',
      },
      {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

