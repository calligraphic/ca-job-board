import plain from '../plain';
import codeBlock from '../codeBlock';
import h1 from '../h1';
// import h2 from '../h2';
import blockquote from '../blockquote';
import bulletList from '../bulletList';
import orderedList from '../orderedList';
import lift from '../lift';
import joinUp from '../joinUp';

const blocks = {
  plain,
  code_block: codeBlock,
  h1,
  // h2,
  blockquote,
  bullet_list: bulletList,
  ordered_list: orderedList,
  lift,
  join_up: joinUp,
};

export default blocks;
