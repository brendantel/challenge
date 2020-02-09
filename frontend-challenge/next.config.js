
const withImages = require('next-images')

module.exports = withImages({
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:4000',
  },
  webpack: config => {

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })

    config.plugins = config.plugins.filter(plugin => {
      if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') {
        return false;
      }

      return true;
    });

    return config;
  },
});
