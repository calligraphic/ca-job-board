/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import TasksItem from './TasksItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
