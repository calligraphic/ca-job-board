/*
const EditorWithMenuBar = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default EditorWithMenuBar;
*/
