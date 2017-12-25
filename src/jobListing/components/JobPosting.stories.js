/** @format */

import React from 'react';

// Storybook imports
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

// Component import
import JobPosting from './JobPosting';

const stories = storiesOf('Job Listings', module);

// Add the `withKnobs` decorator to add knobs support to these stories.
stories.addDecorator(withKnobs);

const jobPostingPanelInfo = `
  description or documentation about my component, supports markdown

  ~~~js
  <Button>Click Here</Button>
  ~~~

`;

const jobPostingPanelNotes = `
  Sample notes text for a job posting panel. Doesn&apos;t it look nice?
`;

stories.add(
  'Job Posting Panel',
  withInfo({
    text: jobPostingPanelInfo,
    propTablesExclude: ['WithNotes']
  })(() => (
    <WithNotes notes={jobPostingPanelNotes}>
      <JobPosting
        title={text('Title', 'Manager')}
        description={text(
          'Description',
          'Come work for Big Cheese fun-o-rama.'
        )}
      />
    </WithNotes>
  ))
);
