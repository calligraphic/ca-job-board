/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
