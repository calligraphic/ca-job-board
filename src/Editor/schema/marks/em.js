// :: MarkSpec An emphasis mark. Rendered as an `<em>` element.
// Has parse rules that also match `<i>` and `font-style: italic`.
const em = {
  parseDOM: [
    {tag: 'i'},
    {tag: 'em'},
    {style: 'font-style=italic'}
  ],
  toDOM: () => ['em', 0],
};

export default em;
