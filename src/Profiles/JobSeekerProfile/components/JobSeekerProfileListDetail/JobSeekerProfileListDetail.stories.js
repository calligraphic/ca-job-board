/** @format */
import React from 'react';
import { storiesOf } from '@storybook/react';

// Storybook Addon imports
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions'; // eslint-disable-line no-unused-vars
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

// Webpack doesn't like dynamic imports, so adjust path here manually
// import hostConfig from '../../../config/.storybook/addonConfig/hostConfig';
import notesPanelContent from '../../../../../config/.storybook/notesPanelContent';
import StorybookComponentWrapperHOC from '../../../../stories/StorybookComponentWrapperHOC';

// Component import
import JobSeekerProfileListDetail from './JobSeekerProfileListDetail';
import JobSeekerProfileListDetailReadme from './JobSeekerProfileListDetail.README.md';

// Store sample data and push to component for props
const store = new Store({
  active: false,
  title: text('Title', 'Manager'),
  description: text('Description', 'Come work for Big Cheese fun-o-rama.')
});

// Wrap the component in our HOC to centralize styling
const WrappedJobSeekerProfileListDetail = StorybookComponentWrapperHOC(
  JobSeekerProfileListDetail
);

// React render function
const JobSeekerProfileListDetailPreviewRenderer = () => {
  return (
    <State store={store}>
      <WrappedJobSeekerProfileListDetail />
    </State>
  );
};

storiesOf('Job Seeker Profiles', module)
  .addDecorator(withKnobs)
  .addDecorator((story, context) =>
    withNotes(notesPanelContent)(story)(context)
  )
  .addWithChapters('Job Seeker Profile List Detail Views', {
    subtitle: null,
    info: null,
    chapters: [
      {
        title: null,
        subtitle: null,
        info: null,
        sections: [
          {
            title: null,
            subtitle: null,
            info: JobSeekerProfileListDetailReadme,
            sectionFn: JobSeekerProfileListDetailPreviewRenderer
          }
        ]
      }
    ]
  });
