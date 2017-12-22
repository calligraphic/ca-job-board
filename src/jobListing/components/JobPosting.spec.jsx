// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import JobPosting from './JobPosting';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
