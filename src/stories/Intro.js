/** @format
 *
 * Bootstrap file to define loaded stories in Storybook
 *
 * @since 0.0.1
 * @module config/.storybook/config
 * @see module:storybook
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

import introReadme from './Intro.README.md';

storiesOf('Intro', module).addWithChapters('Start Here', {
  subtitle: null,
  info: introReadme
});
