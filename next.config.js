/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    KAKAO_REST_API_KEY: process.env.KAKAO_REST_API_KEY,
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['k.kakaocdn.net'],
  },
};

module.exports = nextConfig;
