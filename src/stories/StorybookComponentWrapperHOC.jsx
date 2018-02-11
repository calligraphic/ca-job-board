/** @format
 *
 * Wrapper for component in the Storybook preview panel.
 *
 * @since 0.0.1
 * @module src/stories/StorybookComponentWrapper
 */
import React from 'react';

var divStyle = {
  margin: '5px',
  border: '2px dotted',
  padding: '5px'
  // backgroundImage: 'url(' + imgUrl + ')',
};

/**
 * Render to wrap components shown in Storybook preview pane.
 *
 * @class
 * @since 0.0.1
 */
const StorybookComponentWrapperHOC = WrappedComponent => {
  class Wrapper extends React.PureComponent {
    render() {
      return (
        <div className="storybookComponent" style={divStyle}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
  return Wrapper;
};

export default StorybookComponentWrapperHOC;
