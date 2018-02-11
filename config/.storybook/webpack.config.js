/**
* Webpack config for the Storybook Express server
*
* Need to replace markdown loader with raw-loader for addons-readme.
* We can't manipulate module.rules in Storybook's default webpack
* config file without depending on rule orders in that file.
*
*/
const autoprefixer  = require('autoprefixer');
const path = require('path');

const babelLoaderConfig  = require('@storybook/react/dist/server/config/babel');
const utils = require('@storybook/react/dist/server/config/utils');

module.exports = (storybookBaseConfig, env) => {
  // env value of 'PRODUCTION' is used when building a static storybook.
  const newConfig = Object.assign({}, storybookBaseConfig);

  newConfig.module.rules = [
     {
      test: /\.jsx?$/,
      loader: require.resolve('babel-loader'),
      query: babelLoaderConfig,
      include: utils.includePaths,
      exclude: utils.excludePaths,
    },
    {
      test: /\.(css|scss)$/,
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
            plugins: () => [
              require('postcss-flexbugs-fixes'), // eslint-disable-line
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        {
          loader: require.resolve('sass-loader'),
        },
      ],
      include: path.resolve(__dirname, '../../'),
    },
    {
      test: /\.json$/,
      include: utils.includePaths,
      loader: require.resolve('json-loader'),
    },
    // For Storybook addon-readme
    {
      test: /\.md$/,
      use: "raw-loader"
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      include: utils.includePaths,
      loader: require.resolve('file-loader'),
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      include: utils.includePaths,
      loader: require.resolve('url-loader'),
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
  ];

  const aliasConfig = {
    // This is to support NPM2
    'babel-runtime/regenerator': require.resolve('babel-runtime/regenerator'),
  };

  newConfig.resolve.alias = Object.assign(aliasConfig, storybookBaseConfig.resolve.alias);

  // Return the altered config
  return newConfig;
};
