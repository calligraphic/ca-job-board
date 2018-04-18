import { addColumnAfter } from 'prosemirror-tables'
import icons from './util/icons';

const tableAddColumnAfter = {
  title: 'Insert column after',
  content: icons.after,
  active: addColumnAfter, // TOOD: active -> select
  run: addColumnAfter,
};

export default tableAddColumnAfter;
