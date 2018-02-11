/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import Modules from './Modules';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
