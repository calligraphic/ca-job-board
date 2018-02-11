/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import ResumesList from './ResumesList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
