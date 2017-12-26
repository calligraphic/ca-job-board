// Webpack config for the Storybook Express server
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
        include: path.resolve(__dirname, '../../')
      },
      // For Storybook addon-readme
      {
        test: /\.md$/,
        use: "raw-loader"
      },
    ]
  }
}
