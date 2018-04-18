import { setBlockType } from 'prosemirror-commands';
import schema from '../../../schema';
import blockActive from './util/blockActive';
import icons from './util/icons';

const h1 = {
  title: 'Change to heading level 1',
  content: icons.heading,
  active: blockActive(schema.nodes.heading, { level: 1 }),
  enable: setBlockType(schema.nodes.heading, { level: 1 }),
  run: setBlockType(schema.nodes.heading, { level: 1 }),
};

export default h1;
