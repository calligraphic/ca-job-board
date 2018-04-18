import schema from '../../../schema';
import canInsert from './util/canInsert';
import icons from './util/icons';

const table = {
  title: 'Insert table',
  content: icons.table,
  enable: canInsert(schema.nodes.table),
  run: (state, dispatch) => {
    // const { from } = state.selection
    let rowCount = window && window.prompt('How many rows?', 2);
    let colCount = window && window.prompt('How many columns?', 2);

    const cells = [];

    while (colCount--) {
      cells.push(schema.nodes.table_cell.createAndFill());
    }

    const rows = [];

    while (rowCount--) {
      rows.push(schema.nodes.table_row.createAndFill(null, cells));
    }

    const table = schema.nodes.table.createAndFill(null, rows);

    dispatch(state.tr.replaceSelectionWith(table));

    // const tr = state.tr.replaceSelectionWith(table)
    // tr.setSelection(Selection.near(tr.doc.resolve(from)))
    // dispatch(tr.scrollIntoView())
    // view.focus()
  },
};

export default table;
