/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import SchedulingList from './SchedulingList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
