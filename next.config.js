/** @type {import('next').NextConfig} */
const nextConfig = {

    typescript: {
        
        ignoreBuildErrors: true,
      }
      ,
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.app.goo.gl',
            port: '',
            pathname: '/gV3rUjzqoGaChvq17/**',
          },
        ],
      },
}

module.exports = nextConfig
