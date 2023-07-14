/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized: true,
        domains: ['c.saavncdn.com']
    },
    
      swcMinify: true,
      compiler:{
        removeConsole: true,
      }
}

module.exports = nextConfig
