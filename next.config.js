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

    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      });
      return config;
    },

    

  };
