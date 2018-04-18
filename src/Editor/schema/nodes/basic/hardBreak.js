// :: NodeSpec A hard line break, represented in the DOM as `<br>`.
const hardBreak = {
  inline: true,
  group: 'inline',
  selectable: false,
  parseDOM: [{tag: 'br'}],
  toDOM: () => ['br'],
}

export default hardBreak;
