import { wrapIn } from 'prosemirror-commands';
import schema from '../../../schema';
import blockActive from './util/blockActive';
import icons from './util/icons';

const blockquote = {
  title: 'Wrap in block quote',
  content: icons.blockquote,
  active: blockActive(schema.nodes.blockquote),
  enable: wrapIn(schema.nodes.blockquote),
  run: wrapIn(schema.nodes.blockquote),
};

export default blockquote;
