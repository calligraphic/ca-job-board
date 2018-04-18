import {
  liftTarget,
  ReplaceAroundStep
} from "prosemirror-transform";

import {
  Slice,
  Fragment,
  NodeRange
} from "prosemirror-model";


const _liftToOuterList = (state, dispatch, itemType, range) => {
  let tr = state.tr;
  let end = range.end;
  let endOfList = range.$to.end(range.depth);

  if (end < endOfList) {
    // There are siblings after the lifted items, which must become
    // children of the last item
    tr.step(new ReplaceAroundStep(
      end - 1,
      endOfList,
      end,
      endOfList,
      new Slice(Fragment.from(itemType.create(null, range.parent.copy())), 1, 0), 1, true
    ));

    range = new NodeRange(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);
  }

  dispatch(tr.lift(range, liftTarget(range)).scrollIntoView());

  return true;
};

const _liftOutOfList = (state, dispatch, range) => {
  let tr = state.tr;
  let list = range.parent;

  // Merge the list items into a single big item
  for (let pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {
    pos -= list.child(i).nodeSize
    tr.delete(pos - 1, pos + 1)
  }

  let $start = tr.doc.resolve(range.start), item = $start.nodeAfter;
  let atStart = range.startIndex === 0, atEnd = range.endIndex === list.childCount;
  let parent = $start.node(-1), indexBefore = $start.index(-1);

  if (!parent.canReplace(
    indexBefore + (atStart ? 0 : 1),
    indexBefore + 1,
    item.content.append(atEnd ? Fragment.empty : Fragment.from(list))
  )) return false

  let start = $start.pos, end = start + item.nodeSize;
  // Strip off the surrounding list. At the sides where we're not at
  // the end of the list, the existing list is closed. At sides where
  // this is the end, it is overwritten to its end.
  tr.step(new ReplaceAroundStep(
    start - (atStart ? 1 : 0),
    end + (atEnd ? 1 : 0),
    start + 1,
    end - 1,
    new Slice((atStart ? Fragment.empty : Fragment.from(list.copy(Fragment.empty)))
      .append(atEnd ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))),
    atStart ? 0 : 1, atEnd ? 0 : 1),
    atStart ? 0 : 1
  ))

  dispatch(tr.scrollIntoView());

  return true;
};

// :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command to lift the list item around the selection up into
// a wrapping list.
const liftListItem = (itemType) => {
  return function(state, dispatch) {
    let {$from, $to} = state.selection;
    let range = $from.blockRange($to, node => node.childCount && node.firstChild.type === itemType);

    if (!range) return false;

    if (!dispatch) return true;

    if ($from.node(range.depth - 1).type === itemType) // Inside a parent list
      return _liftToOuterList(state, dispatch, itemType, range);
    else // Outer list node
      return _liftOutOfList(state, dispatch, range);
  }
};

export default liftListItem;
