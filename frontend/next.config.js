/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [], // Dejar vacío para evitar el warning
  },
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'onnxruntime'],
  },
};

module.exports = nextConfig;