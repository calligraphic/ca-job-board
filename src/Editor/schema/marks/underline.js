const underline = {
  parseDOM: [
    { tag: 'u' },
    { style: 'text-decoration:underline' }
  ],
  toDOM: () => ['span', {
    style: 'text-decoration:underline'
  }],
};

export default underline;
