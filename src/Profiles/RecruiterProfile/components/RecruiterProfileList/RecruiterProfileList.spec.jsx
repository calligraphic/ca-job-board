/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import RecruiterProfileList from './RecruiterProfileList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});