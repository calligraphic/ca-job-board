const getImageAttributes = (dom) => {
  return {
    src: dom.getAttribute('src'),
    title: dom.getAttribute('title'),
    alt: dom.getAttribute('alt')
  }
};

// :: NodeSpec An inline image (`<img>`) node. Supports `src`,
// `alt`, and `href` attributes. The latter two default to the empty
// string.
const image = {
  inline: true,
  attrs: {
    src: {},
    alt: {default: null},
    title: {default: null}
  },
  group: 'inline',
  draggable: true,
  parseDOM: [{tag: 'img[src]', getAttrs: getImageAttributes}],
  toDOM: (node) => ['img', node.attrs],
};

export default image;
