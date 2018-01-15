/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import AwardsList from './AwardsList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
