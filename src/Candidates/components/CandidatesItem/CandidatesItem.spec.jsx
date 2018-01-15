/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import CandidatesItem from './CandidatesItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
