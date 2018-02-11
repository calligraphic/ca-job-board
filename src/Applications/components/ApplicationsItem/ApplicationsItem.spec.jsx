/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import ApplicationsItem from './ApplicationsItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
