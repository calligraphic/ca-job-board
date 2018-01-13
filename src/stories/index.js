/** @format
 *
 * Bootstrap file to define loaded stories in Storybook
 *
 * @since 0.0.1
 * @module config/.storybook/config
 * @see module:storybook
 */
import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

// Component for Storybook "Intro" story
import Intro from './Intro';

storiesOf('Intro', module).add('Start Here', () => <Intro />);
