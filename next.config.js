/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns:[
        {
          protocol:'https',
          hostname:'**'
        }
      ],
      domains: ['**'],
      minimumCacheTTL:1500000,
    },
    experimental: {
      images: {
          allowFutureImage: true,
      }
  }
  };
