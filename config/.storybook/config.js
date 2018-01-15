/**
 * Tell Storybook where to find stories and configure add-ons.
 *
 * @since 0.0.1
 * @module config/.storybook/config
 * @see module:storybook
 */
import { configure, addDecorator } from '@storybook/react';

// Local includes
import infoConfig from './addonConfig/infoConfig';
import optionsConfig from './addonConfig/optionsConfig';
import chaptersConfig from './addonConfig/chaptersConfig';

/**
 * Add a global decorator
 *
 * @since 0.0.1
 */
/*
addDecorator(story => (
  <div style={{textAlign: 'center'}}>
    {story()}
  </div>
));
*/

// Configure Chapters Addon for use
chaptersConfig();

// Set configuration object for Info addon
infoConfig();

// Set configuration object for Options addon
optionsConfig();

/**
 * @description Configure
 * @since 0.0.1
 */
configure(
  () => {
    // Load our "Intro" story, won't pattern match against custom context below
    require('../../src/stories/Intro');

    // Dynamically load stories from source directory with Webpack custom context:
    //
    //   require.context(directory, useSubdirectories = false, regExp = /^\.\//)
    //
    // React Native packager resolves all the imports at build-time, so use
    //  react-native-storybook-loader to create import statements for all stories
    const req = require.context('../../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);
