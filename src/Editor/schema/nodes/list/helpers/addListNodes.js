import orderedList from './orderedList';
import bulletList from './bulletList';
import listItem from './listItem';

const _add = (obj, props) => {
  let copy = {};
  for (let prop in obj) copy[prop] = obj[prop];
  for (let prop in props) copy[prop] = props[prop];
  return copy;
};

// :: (OrderedMap<NodeSpec>, string, ?string) → OrderedMap<NodeSpec>
// Convenience function for adding list-related node types to a map
// specifying the nodes for a schema. Adds
// [`orderedList`](#schema-list.orderedList) as `'ordered_list'`,
// [`bulletList`](#schema-list.bulletList) as `'bullet_list'`, and
// [`listItem`](#schema-list.listItem) as `'list_item'`.
//
// `itemContent` determines the content expression for the list items.
// If you want the commands defined in this module to apply to your
// list structure, it should have a shape like `'paragraph block*'` or
// `'paragraph (ordered_list | bullet_list)*'`. `listGroup` can be
// given to assign a group name to the list node types, for example
// `'block'`.
const addListNodes = (nodes, itemContent, listGroup) => {
  return nodes.append({
    ordered_list: _add(orderedList, {content: 'list_item+', group: listGroup}),
    bullet_list: _add(bulletList, {content: 'list_item+', group: listGroup}),
    list_item: _add(listItem, {content: itemContent}),
  })
};

export default addListNodes;
