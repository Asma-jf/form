import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
    turbo: true,  // مطمئن شو که این گزینه فعاله
  },
};

export default nextConfig;
