'use strict';

const fs = require('fs');
const path = require('path');

const resolve = relativePath => path.resolve(__dirname, '..', relativePath)

const globalTestSetup = resolve('src/testSetup.js');
const setupTestsFile = fs.existsSync(globalTestSetup)
  ? globalTestSetup
  : undefined;

module.exports = {
  // TODO: I don't know if it's safe or not to just use / as path separator
  // in Jest configs. We need help from somebody with Windows to determine this.
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/**/*.stories.js',
    "!src/**/stories/*",
  ],
  setupFiles: [
    resolve('config/polyfills.js'),
  ],
  setupTestFrameworkScriptFile: setupTestsFile,
  testMatch: [
    resolve('src/**/?(*.)(spec).{js,jsx,mjs}'),
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': resolve('node_modules/babel-jest'),
    '^.+\\.css$': resolve('config/jest/cssTransform.js'),
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': resolve(
      'config/jest/fileTransform.js'
    ),
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: [
    'web.js',
    'mjs',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  rootDir: resolve('..'),
};
