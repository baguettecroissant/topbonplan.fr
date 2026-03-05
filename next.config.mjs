/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/portal-plus/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/annuaire-referencement/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/casinobonusplus/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cgi-sys/suspendedpage.cgi',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
