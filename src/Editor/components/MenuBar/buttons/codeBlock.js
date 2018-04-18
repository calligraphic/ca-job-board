import { setBlockType } from 'prosemirror-commands';
import schema from '../../../schema';
import blockActive from './util/blockActive';
import icons from './util/icons';

const codeBlock = {
  title: 'Change to code block',
  content: icons.code_block,
  active: blockActive(schema.nodes.code_block),
  enable: setBlockType(schema.nodes.code_block),
  run: setBlockType(schema.nodes.code_block),
};

export default codeBlock;
