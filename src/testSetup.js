// TODO: turn on 'use strict';

/*
* Global setup for tests goes here, such as mocked browser API
*
* Automatically executed before any tests are run
*/

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enable Enzyme matchers for Jest in all files
import 'jest-enzyme';

// Configure the Enzyme adapter for React
configure({ adapter: new Adapter() });

/*
Example:

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock
*/
