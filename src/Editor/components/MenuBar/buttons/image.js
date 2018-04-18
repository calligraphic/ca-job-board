import schema from '../../../schema';
import canInsert from './util/canInsert';
import promptForURL from './util/promptForURL';
import icons from './util/icons';

const image = {
  title: 'Insert image',
  content: icons.image,
  enable: canInsert(schema.nodes.image),
  run: (state, dispatch) => {
    const src = promptForURL()
    if (!src) return false

    const img = schema.nodes.image.createAndFill({ src })
    dispatch(state.tr.replaceSelectionWith(img))
  },
};

export default image;
