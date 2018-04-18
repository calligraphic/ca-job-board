import { redo as redoCommand } from 'prosemirror-history';
import icons from './util/icons';

const redo = {
  title: 'Redo last undone change',
  content: icons.redo,
  enable: redoCommand,
  run: redoCommand,
};

export default redo;
