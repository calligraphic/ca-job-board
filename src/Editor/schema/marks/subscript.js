const subscript = {
  excludes: 'superscript',
  parseDOM: [
    { tag: 'sub' },
    { style: 'vertical-align=sub' }
  ],
  toDOM: () => ['sub'],
};

export default subscript;
