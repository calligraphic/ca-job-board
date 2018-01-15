/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import ReferencesList from './ReferencesList';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
