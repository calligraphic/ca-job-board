import { setBlockType } from 'prosemirror-commands';
import schema from '../../../schema';
import blockActive from './util/blockActive';
// import icons from './util/icons';

const h2 = {
  title: 'Change to heading level 2',
  content: 'H2', // @todo find icon for H2
  active: blockActive(schema.nodes.heading, { level: 2 }),
  enable: setBlockType(schema.nodes.heading, { level: 2 }),
  run: setBlockType(schema.nodes.heading, { level: 2 }),
};

export default h2;
