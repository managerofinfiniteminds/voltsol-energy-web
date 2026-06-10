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
        destination: '/book',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
