// :: NodeSpec A horizontal rule (`<hr>`).
const horizontalRule = {
  horizontal_rule: {
    group: 'block',
    parseDOM: [{tag: 'hr'}],
    toDOM: () => ['hr'],
  },
};

export default horizontalRule;
