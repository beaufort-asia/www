// const path = require("path");
// const withFonts = require("next-fonts");

/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  // enableSvg: true,  
  compiler: {
    styledComponents: true
  },
  // turbopack(config) {
  //   config.resolve.modules.push(path.resolve("./"));

  //   // Override the default limit for next-fonts and ensure that all fonts are loaded as Bas64.
  //   const fontRule = config.module.rules[config.module.rules.length - 1];
  //   fontRule.use[0].options.limit = 999999999999;
  //   return config;
  // }
};
