import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ❌ don't block production build on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❌ don't block production build on type errors
    // (use with caution – better to fix the types!)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
