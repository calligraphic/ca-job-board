import { undo as undoCommand } from 'prosemirror-history';
import icons from './util/icons';

const undo = {
  title: 'Undo last change',
  content: icons.undo,
  enable: undoCommand,
  run: undoCommand,
};

export default undo;
