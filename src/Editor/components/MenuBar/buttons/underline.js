import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const underline = {
  title: 'Toggle underline',
  content: icons.underline,
  active: markActive(schema.marks.underline),
  run: toggleMark(schema.marks.underline),
};

export default underline;
