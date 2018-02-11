/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import ApplicationSearchModule from './ApplicationSearchModule';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
