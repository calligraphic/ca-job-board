/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import EmployerDepartmentsList from './EmployerDepartmentsList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
