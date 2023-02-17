/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "media.finedinemenu.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
};
