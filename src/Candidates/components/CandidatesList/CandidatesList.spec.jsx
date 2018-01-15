/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import CandidatesList from './CandidatesList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
