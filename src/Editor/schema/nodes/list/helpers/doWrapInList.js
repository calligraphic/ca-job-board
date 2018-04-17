import {
  canSplit,
  ReplaceAroundStep
} from "prosemirror-transform";

import {
  Slice,
  Fragment
} from "prosemirror-model";

const doWrapInList = (tr, range, wrappers, joinBefore, listType) => {
  let content = Fragment.empty;

  for (let i = wrappers.length - 1; i >= 0; i--) {
    content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  }

  tr.step(new ReplaceAroundStep(
    range.start - (joinBefore ? 2 : 0),
    range.end,
    range.start,
    range.end,
    new Slice(content, 0, 0),
    wrappers.length,
    true
  ));

  let found = 0;

  for (let i = 0; i < wrappers.length; i++) {
    if (wrappers[i].type === listType) found = i + 1;
  }

  let splitDepth = wrappers.length - found;

  let splitPos = range.start + wrappers.length - (joinBefore ? 2 : 0);
  let parent = range.parent;

  for (let i = range.startIndex, e = range.endIndex, first = true; i < e; i++, first = false) {
    if (!first && canSplit(tr.doc, splitPos, splitDepth)) {
      tr.split(splitPos, splitDepth);
      splitPos += 2 * splitDepth;
    }
    splitPos += parent.child(i).nodeSize;
  }
  return tr;
}

export default doWrapInList;
