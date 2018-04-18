// :: NodeSpec A plain paragraph textblock. Represented in the DOM
// as a `<p>` element.
const paragraph = {
  content: 'inline*',
  group: 'block',
  parseDOM: [{tag: 'p'}],
  toDOM: () => ['p', 0],
};

export default paragraph;
