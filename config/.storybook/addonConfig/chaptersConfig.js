import { setAddon } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

const chaptersConfig = () => {
  setDefaults({
    sectionOptions: {
      showSource: false,
      allowSourceToggling: false,
      showPropTables: false,
      allowPropTablesToggling: false,
    }
  });
  setAddon(chaptersAddon);
}

export default chaptersConfig;
