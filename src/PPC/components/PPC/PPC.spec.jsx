/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import PPC from './PPC';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
