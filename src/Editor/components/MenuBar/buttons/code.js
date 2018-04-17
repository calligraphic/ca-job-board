import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const code = {
  title: 'Toggle code',
  content: icons.code,
  active: markActive(schema.marks.code),
  run: toggleMark(schema.marks.code),
};

export default code;
