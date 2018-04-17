import schema from '../../../schema';
import canInsert from './util/canInsert';
import icons from './util/icons';

const footnote = {
  title: 'Insert footnote',
  content: icons.footnote,
  enable: canInsert(schema.nodes.footnote),
  run: (state, dispatch) => {
    const footnote = schema.nodes.footnote.create()
    dispatch(state.tr.replaceSelectionWith(footnote))
  },
};

export default footnote;
