/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@wex/shared"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
