import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['d7rrqxjo6rxl7.cloudfront.net'],
  },
};

export default nextConfig;
