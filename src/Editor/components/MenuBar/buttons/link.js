import { toggleMark } from 'prosemirror-commands';
import schema from '../../../schema';
import markActive from './util/markActive';
import promptForURL from './util/promptForURL';
import icons from './util/icons';

const link = {
  title: 'Add or remove link',
  content: icons.link,
  active: markActive(schema.marks.link),
  enable: state => !state.selection.empty,
  run (state, dispatch) {
    if (markActive(schema.marks.link)(state)) {
      toggleMark(schema.marks.link)(state, dispatch);
      return true;
    }

    const href = promptForURL();

    if (!href) return false;

    toggleMark(schema.marks.link, { href })(state, dispatch);
    // view.focus()
  },
};

export default link;
