// eslint-disable no-redeclare
import { joinUp as joinUpCommand } from 'prosemirror-commands';
import icons from './util/icons';

const joinUp = {
  title: 'Join with above block',
  content: icons.join_up,
  enable: joinUpCommand,
  run: joinUpCommand,
};

export default joinUp;
