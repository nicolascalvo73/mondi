/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Optimize for Cloudflare Pages
  webpack: (config, { isServer }) => {
    // Reduce cache size
    config.cache = false
    
    // Handle Sanity Studio compatibility with React 19
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': 'react/jsx-runtime',
      'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime',
    }
    
    return config
  },
  transpilePackages: ['@sanity/vision', 'sanity'],
}

export default nextConfig
