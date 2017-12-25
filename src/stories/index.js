/** @format */

import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

// Introduction text for Storybook
import Intro from './Intro';

// Component imports
import JobPosting from '../jobListing/components/JobPosting';

storiesOf('Intro', module).add('Start Here', () => <Intro />);

storiesOf('Job Listings', module).add('Job Posting Panel', () => (
  <JobPosting
    title={'Manager'}
    description={'Come work for Big Cheese fun-o-rama.'}
  >
    Hello Button
  </JobPosting>
));
