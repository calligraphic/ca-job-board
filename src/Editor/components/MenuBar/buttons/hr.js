import schema from '../../../schema';
import canInsert from './util/canInsert';
// import icons from './util/icons';

const hr = {
  title: 'Insert horizontal rule',
  content: 'HR', // @todo find icon for HR
  enable: canInsert(schema.nodes.horizontal_rule),
  run: (state, dispatch) => {
    const hr = schema.nodes.horizontal_rule.create()
    dispatch(state.tr.replaceSelectionWith(hr))
  },
};

export default hr;
