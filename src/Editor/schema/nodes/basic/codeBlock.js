// :: NodeSpec A code listing. Disallows marks or non-text inline
// nodes by default. Represented as a `<pre>` element with a
// `<code>` element inside of it.
const codeBlock = {
  content: 'text*',
  marks: '',
  group: 'block',
  code: true,
  defining: true,
  parseDOM: [{tag: 'pre', preserveWhitespace: 'full'}],
  toDOM: () => ['pre', ['code', 0]],
};

export default codeBlock;
