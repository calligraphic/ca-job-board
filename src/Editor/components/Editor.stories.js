import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

// Storybook Addon imports
import { State, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions'; // eslint-disable-line no-unused-vars
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

// Webpack doesn't like dynamic imports, so adjust path here manually
// import hostConfig from '../../../config/.storybook/addonConfig/hostConfig';
import notesPanelContent from '@config/.storybook/notesPanelContent';
import StorybookComponentWrapperHOC from '@core/JobBoard/stories/StorybookComponentWrapperHOC';

// Component import
import MenuBar from './MenuBar';
import Editor from './Editor';
import options from '../options';
import menu from './MenuBar/buttons/groups/menu';
import EditorReadme from './Editor.README.md';

const Input = styled('div')`
  width: 100%;
  min-height: 150px;
  overflow-y: auto;
`

const Output = styled('pre')`
  width: 100;
  min-height: 150px;
  overflow-y: auto;
  padding: 1em;
  background: black;
  color: lawngreen;
`

// Store sample data and push to component for props
const store = new Store({
  active: false,
  title: text('Title', 'Manager'),
  description: text('Description', 'Come work for Big Cheese fun-o-rama.')
});

const EditorWithMenuBar = () => {
  return (
    <React.Fragment>
      <Input>
        <Editor
          options={options}
          value={`<h1>This is a title</h1><p>This is a paragraph</p>`}
          onChange={value => {
            document.getElementById('output').textContent = JSON.stringify(value, null, 2)
          }}
          // Use a render prop to add the menu bar, omit otherwise
          render={({ editor, state, dispatch }) => (
            // Fragment adds multiple elements without wrapping in containing element
            <React.Fragment>
              <MenuBar menu={menu} state={state} dispatch={dispatch} />
              {editor}
            </React.Fragment>
          )}
        />
      </Input>
      <Output id={'output'} />
    </React.Fragment>
  );
};

// Wrap the component in our HOC to centralize styling
const WrappedEditorWithMenuBar = StorybookComponentWrapperHOC(EditorWithMenuBar);

// React render function
const EditorWithMenuBarRenderer = () => {
  return (
    <State store={store}>
      <WrappedEditorWithMenuBar />
    </State>
  );
};

storiesOf('Editor', module)
  .addDecorator(withKnobs)
  .addDecorator((story, context) =>
    withNotes(notesPanelContent)(story)(context)
  )
  .addWithChapters('Editor Views', {
    subtitle: null,
    info: null,
    chapters: [
      {
        title: null,
        subtitle: null,
        info: null,
        sections: [
          {
            title: null,
            subtitle: null,
            info: EditorReadme,
            sectionFn: EditorWithMenuBarRenderer
          }
        ]
      }
    ]
  });
