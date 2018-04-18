/** @format */
import React from 'react';
import { storiesOf } from '@storybook/react';

// Storybook Addon imports
import { action } from '@storybook/addon-actions'; // eslint-disable-line no-unused-vars
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

// Webpack doesn't like dynamic imports, so adjust path here manually
import notesPanelContent from '../../../../config/.storybook/notesPanelContent';

// Component import
import MiscellaneousNotesReadme from './MiscellaneousNotes.README.md';

// React render function
const MiscellaneousNotesPreviewRenderer = () => {
  return <div>This is a container to hold all miscellaneous notes.</div>;
};

storiesOf('Miscellaneous', module)
  .addDecorator(withKnobs)
  .addDecorator((story, context) =>
    withNotes(notesPanelContent)(story)(context)
  )
  .addWithChapters('Notes', {
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
            info: MiscellaneousNotesReadme,
            sectionFn: MiscellaneousNotesPreviewRenderer
          }
        ]
      }
    ]
  });
