/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import RecommendationsItem from './RecommendationsItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
