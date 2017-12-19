const paths = require('./paths');

// Jest configuration
module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,mjs}",
    "!src/**/*.stories.js"
  ],
  setupFiles: [
    paths.appConfig + "/polyfills.js"
  ],
  testMatch: [
    "**/?(*.)(spec).js?(x)"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|mjs)$": paths.appNodeModules + "/babel-jest",
    "^.+\\.css$": paths.appConfig + "/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": paths.appConfig + "/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web"
  },
  moduleFileExtensions: [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  verbose: true,
  rootDir: "../"
};