/** @format */
import React from 'react';

// Storybook imports
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withDocs } from 'storybook-readme';
import { host } from 'storybook-host';

// Component import
import JobPosting from './JobPosting';
import jobPostingReadme from './JobPosting.README.md';

const jobPostingPanelNotes = `
  Sample notes text for a job posting panel. Doesn&apos;t it look nice?
`;

const jobPostingPanelInfo = `
  withInfo text, we're using info for prop tables
`;

const jobPostingPanelRenderer = () => {
  return (
    <WithNotes notes={jobPostingPanelNotes}>
      <JobPosting
        title={text('Title', 'Manager')}
        description={text(
          'Description',
          'Come work for Big Cheese fun-o-rama.'
        )}
      />
    </WithNotes>
  );
};

storiesOf('Job Listings', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(jobPostingReadme))
  .add(
    'Job Posting Panel',
    withInfo(jobPostingPanelInfo)(jobPostingPanelRenderer)
  );
