/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import FieldsItem from './FieldsItem';

it('renders without crashing', () => {
  shallow(<JobPosting />);
});
