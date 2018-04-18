import { lift as liftCommand } from 'prosemirror-commands';
import icons from './util/icons';

const lift = {
  title: 'Lift out of enclosing block',
  content: icons.lift,
  enable: liftCommand,
  run: liftCommand,
};

export default lift;
