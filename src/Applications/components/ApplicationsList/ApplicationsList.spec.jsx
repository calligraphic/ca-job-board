/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import ApplicationsList from './ApplicationsList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
