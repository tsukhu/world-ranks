const { createSecureHeaders } = require('next-secure-headers');
/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
  images: {
    domains: ['restcountries.com', 'upload.wikimedia.org', 'flagcdn.com'],
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,

  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    runtime: 'nodejs',
  },
};
