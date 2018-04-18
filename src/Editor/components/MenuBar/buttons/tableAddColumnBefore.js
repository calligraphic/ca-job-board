import { addColumnBefore } from 'prosemirror-tables'
import icons from './util/icons';

const tableAddColumnBefore = {
  title: 'Insert column before',
  content: icons.before,
  active: addColumnBefore, // TOOD: active -> select
  run: addColumnBefore,
};

export default tableAddColumnBefore;
