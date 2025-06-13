/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/quote',
        destination: 'http://localhost:5678/webhook/quote'
      }
    ]
  }
}

module.exports = nextConfig;
