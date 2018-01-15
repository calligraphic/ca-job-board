/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import DefaultFeedRSS from './DefaultFeedRSS';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
