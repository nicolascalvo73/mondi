/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  transpilePackages: ['@sanity/vision', 'sanity'],
  async redirects() {
    return [
      {
        source: '/labs',
        destination: '/labs/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
