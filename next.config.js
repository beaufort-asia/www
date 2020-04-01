const path = require("path");
const withFonts = require("next-fonts");

module.exports = withFonts({
  target: "serverless",
  enableSvg: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
