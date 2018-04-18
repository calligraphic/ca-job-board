import { Plugin } from 'prosemirror-state';
import FootNotesPluginView from './FootNotesPluginView';

const footNotesPlugin = options => {
  return new Plugin({
    props: {
      nodeViews: {
        footnote: (node, view, getPos) => {
          return new FootNotesPluginView(node, view, getPos);
        }
      }
    }
  })
};

export default footNotesPlugin;
