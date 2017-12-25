/** @format */

'use strict';

const path = require('path');
const chalk = require('chalk');

// project files to include
const paths = require('../config/paths');
const jestConfig = require('../config/jest.config.js');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const jest = require('jest');

const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

// Give usage hints if test called with debug options
if (argv.indexOf('--inspect-brk') > -1) {
  console.log(chalk.green('To debug a test, add the statement: debugger;'));
  console.log(chalk.green('to the test file. Open about:inspect in Chrome.'));
  console.log(chalk.green('Select inspect on your process and a breakpoint'));
  console.log(chalk.green('will be set at the first line of the script.'));
  console.log(chalk.green('Continue execution by hitting the "Play" button.'));
}

argv.push('--config', JSON.stringify(jestConfig));

jest.run(argv);
