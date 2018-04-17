const superscript = {
  excludes: 'subscript',
  parseDOM: [
    { tag: 'sup' },
    { style: 'vertical-align=super' }
  ],
  toDOM: () => ['sup'],
};

export default superscript;
