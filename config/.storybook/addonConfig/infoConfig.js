/**
* Configuration for Storybook Info Addon.
*
* Show additional information per story in the Storybook preview pane.
* React for web only. Can display text below component rendering to use
* as a component label, and also source code for the story:
*
*   <Button label="The Button" onClick={onClick()} />
*
* and a prop types table:
*
*   +-----------+----------+----------+---------+-------------+
*   |  property | propType | required | default | description |
*   +-----------+----------+----------+---------+-------------+
*   | label     |          |   yes    |         |             |
*   | style     |          |          |         |             |
*   | disabled  |          |          |         |             |
*   | onClick   |          |          |         |             |
*   +-----------+----------+----------+---------+-------------+
*
* @since 0.0.1
* @module config/.storybook/infoConfig
* @see module: \@storybook/addon-info
*/
import { setDefaults } from '@storybook/addon-info';

// Local imports
import stylesheet from './infoStylesheet'

const infoConfig = () => {
  setDefaults({
    header: false, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true, // Displays the source of story Component
    styles: stylesheet, // Overrides styles of addon.
    // components: {}, // Overrides components used to display markdown
    maxPropsIntoLine: 1, // Max props to display per line in source code
    maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
    maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
    maxPropStringLength: 100, // Displays the first 100 characters in the default prop string,
    // TableComponent: props => {}, // Override the component used to render the props table
  });
}

export default infoConfig;
