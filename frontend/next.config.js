/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 👈 Esto es importante para Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [],
  },
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'onnxruntime'],
  },
  // Configuración adicional para Vercel
  trailingSlash: false,
  compress: true,
};

module.exports = nextConfig;