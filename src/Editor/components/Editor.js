/**
*  React ProseMirror Editor
*
*  Usage example in Editor.stories.js
*/
import React from 'react';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import '@core/JobBoard/styles/editor/prosemirror.css';
import '@core/JobBoard/styles/editor/editor.css';

/* Usage
import options from './schema/options';
import menu from './schema/menu';
import MenuBar from './MenuBar';

const onChangeHandler = value => {
    document
    .getElementById('output')
    .textContent = JSON.stringify(value, null, 2)
  }

const editorRenderer = ({ editor, state, dispatch }) => (
  // Fragment adds multiple elements without wrapping in containing element
  <React.Fragment>
    <MenuBar menu={menu} state={state} dispatch={dispatch} />
    {editor}
  </React.Fragment>
);

const initialValue = `
  <h1>This is a title</h1>
  <p>This is a paragraph</p>
`

<Editor
  options={options}
  value={ initialValue }
  onChange={ onChangeHandler }
  render={ editorRenderer }
/>
*/

class Editor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      state: EditorState.create(props.options)
    }
  }

  createEditorView = node => {
    if (!this.view) {
      this.view = new EditorView(node, {
        state: this.state.state,
        dispatchTransaction: this.dispatchTransaction,
        attributes: {
          placeholder: this.props.placeholder
        }
      })

      if (this.props.autoFocus) {
        this.view.focus()
      }
    }
  }

  dispatchTransaction = transaction => {
    const state = this.view.state.apply(transaction)
    this.view.updateState(state)
    this.setState({ state })
    this.props.onChange(state.doc.content)
  }

  render () {
    const editor = <div ref={this.createEditorView} />

    return this.props.render ? this.props.render({
      state: this.state.state,
      dispatch: this.dispatchTransaction,
      editor
    }) : editor
  }
}

export default Editor;
