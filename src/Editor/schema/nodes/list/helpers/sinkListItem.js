import { ReplaceAroundStep } from "prosemirror-transform";
import {
  Slice,
  Fragment
} from "prosemirror-model";

// :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command to sink the list item around the selection down
// into an inner list.
const sinkListItem = (itemType) => {
  return function(state, dispatch) {
    let {$from, $to} = state.selection;
    let range = $from.blockRange($to, node => node.childCount && node.firstChild.type === itemType);

    if (!range) return false;

    let startIndex = range.startIndex;

    if (startIndex === 0) return false;

    let parent = range.parent, nodeBefore = parent.child(startIndex - 1);

    if (nodeBefore.type !== itemType) return false;

    if (dispatch) {
      let nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type === parent.type;
      let inner = Fragment.from(nestedBefore ? itemType.create() : null);
      let slice = new Slice(
        Fragment.from(itemType.create(null, Fragment.from(parent.copy(inner)))),
        nestedBefore ? 3 : 1,
        0
      );
      let before = range.start, after = range.end;

      dispatch(state.tr.step(new ReplaceAroundStep(
        before - (nestedBefore ? 3 : 1),
        after,
        before,
        after,
        slice,
        1,
        true)
      )
      .scrollIntoView());
    }
    return true;
  }
}

export default sinkListItem;
