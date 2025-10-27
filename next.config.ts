import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { domains: ['images.unsplash.com'] },
}

export default nextConfig
