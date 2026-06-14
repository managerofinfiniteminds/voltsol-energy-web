const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  async redirects() {
    return [
      {
        source: '/estimate',
        destination: '/start',
        permanent: true,
      },
      {
        source: '/book',
        destination: '/start',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
