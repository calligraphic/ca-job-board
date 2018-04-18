import schema from '../../../schema';
import wrapInList from '../../../schema/nodes/list/helpers/wrapInList';
import blockActive from './util/blockActive';
import icons from './util/icons';

const orderedList = {
  title: 'Wrap in ordered list',
  content: icons.ordered_list,
  active: blockActive(schema.nodes.ordered_list),
  enable: wrapInList(schema.nodes.ordered_list),
  run: wrapInList(schema.nodes.ordered_list),
}

export default orderedList;
