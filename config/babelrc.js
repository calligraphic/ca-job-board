'use strict';

const commonPlugins = [
  // Transform class { handleClick = () => { } }
  require.resolve('babel-plugin-transform-class-properties'),

  // Transform { ...todo, completed: true }
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    {
      useBuiltIns: true,
    },
  ],

  // Transforms JSX
  [
    require.resolve('babel-plugin-transform-react-jsx'),
    {
      useBuiltIns: true,
    },
  ],

  // Polyfills the runtime needed for async/await and generators
  [
    require.resolve('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true,
    },
  ],
];

var env = process.env.BABEL_ENV || process.env.NODE_ENV;

if (env !== 'development' && env !== 'test' && env !== 'production') {
  const noEnvMssg = `
      Using ca-job-board requires that you specify NODE_ENV or
      BABEL_ENV environment variables. Valid values are "development",
      "test", and "production". Instead, received: ${JSON.stringify(env)}.
    `

  throw new Error(noEnvMssg);
}

if (env === 'development' || env === 'test') {
  // The following two plugins are currently necessary to make React warnings
  // include more valuable information. They are included here because they are
  // currently not enabled in babel-preset-react. See the below threads for more info:
  // https://github.com/babel/babel/issues/4702
  // https://github.com/babel/babel/pull/3540#issuecomment-228673661
  // https://github.com/facebookincubator/create-react-app/issues/989
  commonPlugins.push.apply(commonPlugins, [
    // Adds component stack to warning messages
    require.resolve('babel-plugin-transform-react-jsx-source'),
    // Adds __self attribute to JSX which React will use for some warnings
    require.resolve('babel-plugin-transform-react-jsx-self'),
  ]);
}

if (env === 'test') {
  module.exports = {
    presets: [
      // ES features necessary for user's Node version
      [
        require('babel-preset-env').default,
        {
          targets: {
            node: 'current',
          },
          // Jest requires transpilation of ES2015 modules for testing
          modules: commonjs,
        },
      ],
      // Stage 2 Proposals
      require.resolve('babel-preset-stage-2'),
      // JSX, Flow
      require.resolve('babel-preset-react'),
    ],
    plugins: commonPlugins.concat([
      // Compiles import() to a deferred require()
      require.resolve('babel-plugin-dynamic-import-node'),
    ]),
  };
} else if (env === 'development' || env === 'production') {
  module.exports = {
    presets: [
      // Latest stable ECMAScript features
      [
        require.resolve('babel-preset-env'),
        {
          targets: {
            // React parses on ie 9, so we should too
            ie: 9,
            // We currently minify with uglify
            // Remove after https://github.com/mishoo/UglifyJS2/issues/448
            uglify: true,
          },
          // Disable polyfill transforms
          useBuiltIns: false,
          // Do not transform modules to CJS
          modules: false,
        },
      ],
      // JSX, Flow
      require.resolve('babel-preset-react'),
    ],

    plugins: commonPlugins.concat([
      // function* () { yield 42; yield 43; }
      [
        require.resolve('babel-plugin-transform-regenerator'),
        {
          // Async functions are converted to generators by babel-preset-env
          async: false,
        },
      ],

      // TODO: Add following two plugins to remove thunks that Babel leaves
      // on each page, and use its own runtime instead (like _extend).
      // babel-plugin-transform-runtime for dev dependency
      // babel-runtime as production dependency
      /*
      [
        require.resolve('transform-runtime'),
        {
          'helpers': false,
          'polyfill': false,
          'regenerator': true,
          'moduleName': "babel-runtime"
        }
      ],
      */

      // Adds syntax support for import()
      require.resolve('babel-plugin-syntax-dynamic-import'),
    ]),
  };
}

if (env === 'production') {
  // Optimization: hoist JSX that never changes out of render()
  // Disabled because of issues: https://github.com/facebookincubator/create-react-app/issues/553
  // TODO: Enable again when these issues are resolved.
  // commonPlugins.push.apply(commonPlugins, [
  //   require.resolve('babel-plugin-transform-react-constant-elements')
  // ]);

  // Remove React propTypes from production code
  // commonPlugins.push.apply(commonPlugins, [
  //   require.resolve('transform-react-remove-prop-types), {
  //     "mode": "wrap",
  //     "ignoreFilenames": ["node_modules"]
  //   }),
  // ]);
}
