/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      'autoprefixer',
    ]
  },
  images: {
    unoptimized: true,
    domains: [
      process.env.HOST,
    ].filter(d => d)
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  poweredByHeader: false,
  basePath: '/social-tools'
}

const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);
