/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import TasksList from './TasksList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
