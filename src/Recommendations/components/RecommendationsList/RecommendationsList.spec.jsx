/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import RecommendationsList from './RecommendationsList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
