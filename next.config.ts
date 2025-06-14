// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/quote',
        destination:
          'https://shannanoe.app.n8n.cloud/webhook/5d557473-f46d-4131-8144-437f0f3f0b06',
      },
    ]
  },
}

export default nextConfig