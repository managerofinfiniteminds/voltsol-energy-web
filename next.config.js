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
      // Learn-article slugs renamed off-grid → self-consumption during the 2026-06 SEO
      // reposition. 301 the old paths so any stray inbound links don't 404.
      {
        source: '/learn/off-grid-solar-explained',
        destination: '/learn/self-consumption-solar-explained',
        permanent: true,
      },
      {
        source: '/learn/off-grid-solar-under-10000',
        destination: '/learn/self-consumption-solar-under-10000',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
