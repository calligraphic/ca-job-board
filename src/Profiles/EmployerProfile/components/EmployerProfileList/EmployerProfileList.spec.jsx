/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import EmployerProfileList from './EmployerProfileList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
