import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import icons from './util/icons';

const strong = {
  title: 'Toggle strong',
  content: icons.strong,
  active: markActive(schema.marks.strong),
  run: toggleMark(schema.marks.strong),
};

export default strong;
