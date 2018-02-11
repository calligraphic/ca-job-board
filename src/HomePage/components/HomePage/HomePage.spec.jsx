/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
