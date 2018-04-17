// :: MarkSpec Code font mark. Represented as a `<code>` element.
const code = {
  parseDOM: [{tag: 'code'}],
  toDOM: () => ['code', 0],
};

export default code;
