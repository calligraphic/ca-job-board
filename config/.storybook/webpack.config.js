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

const utils = require('@storybook/react/dist/server/config/utils');

// Object of babel-plugin-module-resolver aliases
const namespace = require('../namespace');

module.exports = (storybookBaseConfig, env) => {
  // env value of 'PRODUCTION' is used when building a static storybook.
  const newConfig = Object.assign({}, storybookBaseConfig);

  newConfig.module.rules = [
    {
      test: /\.jsx?$/,
      include: utils.includePaths,
      exclude: utils.excludePaths,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          // Don't try to find .babelrc because we want to force this configuration.
          babelrc: false,
          presets: [
            [
              require.resolve('babel-preset-env'),
              {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7'],
                },
                modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
              },
            ],
            require.resolve('babel-preset-stage-0'),
            require.resolve('babel-preset-react'),
          ],
          plugins: [
            [
              require.resolve('babel-plugin-transform-regenerator'),
            ],
            [
              require.resolve('babel-plugin-transform-runtime'),
              {
                helpers: true,
                polyfill: true,
                regenerator: true,
              },
            ],
            [
              // Compile includes and requires without using relative pathnames in source
              require('babel-plugin-module-resolver'),
              {
                'root': ['./src'],
                'alias': namespace,
              },
            ],
          ],
        },
      },
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
