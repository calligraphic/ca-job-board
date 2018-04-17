// :: MarkSpec A strong mark. Rendered as `<strong>`, parse rules
// also match `<b>` and `font-weight: bold`.
const strong = {
  parseDOM: [
    {tag: 'strong'},
    // This works around a Google Docs misbehavior where
    // pasted content will be inexplicably wrapped in `<b>`
    // tags with a font-weight normal.
    {tag: 'b', getAttrs: node => node.style.fontWeight !== 'normal' && null},
    {style: 'font-weight', getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null}
  ],
  toDOM: () => ['strong', 0],
};

export default strong;
