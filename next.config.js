const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require('webpack');


module.exports = withCSS(withSass({
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        config.plugins.push(
          new webpack.ProvidePlugin({
            '$': 'jquery',
          })
        );
        return config;
      }
 }));