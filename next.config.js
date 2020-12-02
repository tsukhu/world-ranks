const { createSecureHeaders } = require("next-secure-headers");
module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  images: {
    domains: ["restcountries.eu"],
  },
};
