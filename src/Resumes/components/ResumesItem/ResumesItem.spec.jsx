/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import ResumesItem from './ResumesItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
