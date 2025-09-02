/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [],
    unoptimized: true // 👈 IMPORTANTE para evitar errores de imágenes
  },
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'onnxruntime'],
  },
  trailingSlash: false,
  compress: true,
};

module.exports = nextConfig;