/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import FieldsList from './FieldsList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
