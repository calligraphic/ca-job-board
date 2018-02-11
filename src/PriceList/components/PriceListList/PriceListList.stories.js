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
import notesPanelContent from '../../../../config/.storybook/notesPanelContent';
import StorybookComponentWrapperHOC from '../../../stories/StorybookComponentWrapperHOC';

// Component import
import PriceListList from './PriceListList';
import PriceListListReadme from './PriceListList.README.md';

// Store sample data and push to component for props
const store = new Store({
  active: false,
  title: text('Title', 'Manager'),
  description: text('Description', 'Come work for Big Cheese fun-o-rama.')
});

// Wrap the component in our HOC to centralize styling
const WrappedPriceListList = StorybookComponentWrapperHOC(PriceListList);

// React render function
const PriceListListPreviewRenderer = () => {
  return (
    <State store={store}>
      <WrappedPriceListList />
    </State>
  );
};

storiesOf('Price List', module)
  .addDecorator(withKnobs)
  .addDecorator((story, context) =>
    withNotes(notesPanelContent)(story)(context)
  )
  .addWithChapters('Price List - List Views', {
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
            info: PriceListListReadme,
            sectionFn: PriceListListPreviewRenderer
          }
        ]
      }
    ]
  });
