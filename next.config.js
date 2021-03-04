const { createSecureHeaders } = require("next-secure-headers");
module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  images: {
    domains: ["restcountries.eu"],
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
};
