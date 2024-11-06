import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async exportPathMap(defaultPathMap) {
    delete defaultPathMap['/api'];
    return defaultPathMap;
  },

  output: 'export',
};

export default nextConfig;
