/**
 * Tell Storybook where to find stories and configure add-ons.
 *
 * @since 0.0.1
 * @module config/.storybook/config
 * @see module:storybook
 */
import * as storybook from '@storybook/react';

// Storybook add-on imports
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { withDocs } from 'storybook-readme';

// Local imports
import addonInfoStylesheet from './addonInfoStylesheet'
import DocsFooterReadme from '../../src/stories/DOCS_FOOTER.md';

/**
 * @description Add global decorators here
 * @since 0.0.1
 */

/*
addDecorator(story => (
  <div style={{textAlign: 'center'}}>
    {story()}
  </div>
));
*/

/**
 * @description
 * @since 0.0.1
 */
withDocs.addFooter(DocsFooterReadme);

/**
 * @description
 * @since 0.0.1
 */
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: false, // Displays the source of story Component
});

/**
 * @description Defaults for addon @storybook/addon-options
 * @since 0.0.1
 */
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
   * regex for finding the hierarchy separator when organizing stories in a
   * nested structure, e.g. storiesOf('My App/Buttons/Simple', module)
   *
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
});

/**
 * @description Configure
 * @since 0.0.1
 */
storybook.configure(
  () => {
    // Load our "Intro" story, won't pattern match against custom context below
    require('../../src/stories');

    // Dynamically load stories from source directory with Webpack custom context
    // require.context(directory, useSubdirectories = false, regExp = /^\.\//)
    // React Native packager resolves all the imports at build-time, so use
    //  react-native-storybook-loader to create import statements for all stories
    const req = require.context('../../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);
