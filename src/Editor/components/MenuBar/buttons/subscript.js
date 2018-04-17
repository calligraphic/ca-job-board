import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const subscript = {
  title: 'Toggle subscript',
  content: icons.subscript,
  active: markActive(schema.marks.subscript),
  run: toggleMark(schema.marks.subscript),
};

export default subscript;
