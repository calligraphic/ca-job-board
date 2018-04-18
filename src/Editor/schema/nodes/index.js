import doc from './basic/doc';
import paragraph from './basic/paragraph';
import blockquote from './basic/blockquote';
import horizontalRule from './basic/horizontalRule';
import heading from './basic/heading';
import codeBlock from './basic/codeBlock';
import text from './basic/text';
import image from './basic/image';
import hardBreak from './basic/hardBreak';
import orderedList from './list/orderedList';
import bulletList from './list/bulletList';
import listItem from './list/listItem';
import { tableNodes } from 'prosemirror-tables';
import footNoteNodes from './footNotes';

export default {
  doc,
  paragraph,
  blockquote,
  horizontal_rule: horizontalRule,
  heading,
  code_block: codeBlock,
  text,
  image,
  hard_break: hardBreak,
  ordered_list: {
    ...orderedList,
    content: 'list_item+',
    group: 'block',
  },
  bullet_list: {
    ...bulletList,
    content: 'list_item+',
    group: 'block',
  },
  list_item: {
    ...listItem,
    content: 'paragraph block*',
    group: 'block',
  },
  ...tableNodes({
    tableGroup: 'block',
    cellContent: 'block+'
  }),
  ...footNoteNodes,
};
