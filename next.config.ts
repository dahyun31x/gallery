import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

async function setup() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
}

setup();

const nextConfig = {
  reactStrictMode: true,
  // 기타 설정
};

export default nextConfig;
