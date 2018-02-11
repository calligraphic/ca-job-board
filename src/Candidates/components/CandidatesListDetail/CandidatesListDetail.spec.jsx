/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import CandidatesListDetail from './CandidatesListDetail';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
