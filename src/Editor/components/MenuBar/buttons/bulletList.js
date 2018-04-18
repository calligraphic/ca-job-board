import schema from '../../../schema';
import wrapInList from '../../../schema/nodes/list/helpers/wrapInList';
import blockActive from './util/blockActive';
import icons from './util/icons';

const bulletList = {
  title: 'Wrap in bullet list',
  content: icons.bullet_list,
  active: blockActive(schema.nodes.bullet_list),
  enable: wrapInList(schema.nodes.bullet_list),
  run: wrapInList(schema.nodes.bullet_list),
};

export default bulletList;
