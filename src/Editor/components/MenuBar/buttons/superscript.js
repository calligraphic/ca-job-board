import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const superscript = {
  title: 'Toggle superscript',
  content: icons.superscript,
  active: markActive(schema.marks.superscript),
  run: toggleMark(schema.marks.superscript),
};

export default superscript;
