const hasAttributeStart = (dom) => {
    return {
      order: dom.hasAttribute('start') ? +dom.getAttribute('start') : 1,
    };
}

const attributesOrder = (node) => {
    return node.attrs.order === 1 ? ['ol', 0] : ['ol', {start: node.attrs.order}, 0];
}

// :: NodeSpec
// An ordered list [node spec](#model.NodeSpec). Has a single
// attribute, `order`, which determines the number at which the list
// starts counting, and defaults to 1. Represented as an `<ol>`
// element.
const orderedList = {
  attrs: {order: {default: 1}},
  parseDOM: [{ tag: 'ol', getAttrs: hasAttributeStart }],
  toDOM: attributesOrder,
}

export default orderedList;
