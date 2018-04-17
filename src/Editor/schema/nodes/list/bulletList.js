// :: NodeSpec
// A bullet list node spec, represented in the DOM as `<ul>`.
const bulletList = {
  parseDOM: [{tag: 'ul'}],
  toDOM: () => ['ul', 0],
};

export default bulletList;
