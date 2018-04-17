import { history } from 'prosemirror-history';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';
import {
  columnResizing,
  tableEditing
} from 'prosemirror-tables';

// Local libraries
import keyMapPlugin from './keyMapPlugin';
import inputRulesPlugin from './inputRulesPlugin';
import placeHolderPlugin from './placeHolderPlugin';
import footNotesPlugin from './footNotesPlugin';

// Styling files
import '@core/JobBoard/styles/editor/tables.css';
import '@core/JobBoard/styles/editor/gapcursor.css';
import '@core/JobBoard/styles/editor/footnotes.css';
import '@core/JobBoard/styles/editor/placeholder.css';

export default [
  inputRulesPlugin,
  keyMapPlugin,
  placeHolderPlugin(),
  footNotesPlugin(),
  dropCursor(),
  gapCursor(),
  history(),
  columnResizing(),
  tableEditing()
];

// for tables
document.execCommand('enableObjectResizing', false, false);
document.execCommand('enableInlineTableEditing', false, false);
