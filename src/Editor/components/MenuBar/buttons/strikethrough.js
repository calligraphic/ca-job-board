import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const strikethrough = {
  title: 'Toggle strikethrough',
  content: icons.strikethrough,
  active: markActive(schema.marks.strikethrough),
  run: toggleMark(schema.marks.strikethrough),
};

export default strikethrough;
