/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    SITE_URL: process.env.SITE_URL,
    BASE_URL: process.env.BASE_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      },
    ]
  },
}

module.exports = nextConfig
