import type { NextConfig } from 'next'; // 1. Import the official type
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Required for mermaid/esm compatibility in some Next.js versions
  transpilePackages: ['mermaid'], 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/work-with-me',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
}

export default withMDX(nextConfig)