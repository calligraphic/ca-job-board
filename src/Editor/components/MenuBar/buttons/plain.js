import { setBlockType } from 'prosemirror-commands';
import schema from '../../../schema';
import blockActive from './util/blockActive';
import icons from './util/icons';

const plain = {
  title: 'Change to paragraph',
  content: icons.paragraph,
  active: blockActive(schema.nodes.paragraph),
  enable: setBlockType(schema.nodes.paragraph),
  run: setBlockType(schema.nodes.paragraph)
};

export default plain;
