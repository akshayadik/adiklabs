import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Required for mermaid/esm compatibility in some Next.js versions
  transpilePackages: ['mermaid'], 
}

export default withMDX(nextConfig)