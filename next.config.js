/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for better performance on Vercel
  output: 'standalone',

  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Configure image optimization if you're using next/image
  images: {
    domains: ['example.com'], // Add your image domains here
    unoptimized: false, // Set to true if you don't want Vercel to optimize images
  },

  // Environment variables that should be available at build time
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Enable compression for better performance
  compress: true,

  // Configure trailing slashes (optional)
  trailingSlash: false,

  // Configure base path if your app is not served from the root (optional)
  // basePath: '/docs',

  // Configure i18n for internationalization (optional)
  // i18n: {
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  // },
}

module.exports = nextConfig
