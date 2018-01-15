/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import JobSearchModule from './JobSearchModule';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
