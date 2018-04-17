const getLinkAttributes = (dom) => {
  return {
    href: dom.getAttribute('href'),
    title: dom.getAttribute('title'),
  }
}

// :: MarkSpec A link. Has `href` and `title` attributes. `title`
// defaults to the empty string. Rendered and parsed as an `<a>`
// element.
const link = {
  attrs: {
    href: {},
    title: { default: null }
  },
  inclusive: false,
  parseDOM: [{ tag: 'a[href]', getAttrs: getLinkAttributes }],
  toDOM: (node) => ['a', node.attrs, 0],
};

  export default link;
