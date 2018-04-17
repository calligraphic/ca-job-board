import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const em = {
  title: 'Toggle emphasis',
  content: icons.em,
  active: markActive(schema.marks.em),
  run: toggleMark(schema.marks.em),
};

export default em;
