/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
