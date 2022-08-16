const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const path = require("path");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new SystemJSPublicPathPlugin({
          systemjsModuleName: "react",
        }),
      ],
      remove: [],
    },
    configure: (webpackConfig) => {
      webpackConfig.entry = path.resolve("src/index.tsx"); //make sure this points to the new entry file you created in the previous step
      webpackConfig.output.filename = "main.js";
      webpackConfig.output.libraryTarget = "system";
      return webpackConfig;
    },
  },
};
