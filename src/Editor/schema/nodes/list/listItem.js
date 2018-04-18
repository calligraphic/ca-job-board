// :: NodeSpec
// A list item (`<li>`) spec.
const listItem = {
  parseDOM: [{tag: "li"}],
  toDOM: () => ['li', 0],
  defining: true
}

export default listItem;
