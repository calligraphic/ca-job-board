/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import JobPostingList from './JobPostingList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
