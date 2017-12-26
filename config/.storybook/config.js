import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { withDocs } from 'storybook-readme';

// Local imports
//import addonInfoStylesheet from './addonInfoStylesheet'
import DocsFooterReadme from '../../src/stories/DOCS_FOOTER.md';

withDocs.addFooter(DocsFooterReadme);

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: false, // Displays the source of story Component
});

// addon-option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'CA Job Board',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/calligraphic/ca-job-board/settings',
   /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: true,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
});

storybook.configure(
  () => {
    // Load our "Intro" story
    require('../../src/stories');

    // Dynamically load stories from source directory
    const req = require.context('../../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);
