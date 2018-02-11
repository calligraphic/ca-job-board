/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import EmployerProfileItem from './EmployerProfileItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
