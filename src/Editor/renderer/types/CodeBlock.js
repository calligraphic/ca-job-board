/*
* Original work Copyright (c) 2016 Espen Hovlandsdal
* Distributed under terms and conditions of the MIT license.
*
* Modified work Copyright (c) 2018 Calligraphic
* Distributed under terms and conditions of the GNU
* General Public License, version 2.
*/

import React from 'react';
import PropTypes from 'prop-types';
import TextHandler from './TextHandler';
import { assign } from 'lodash';

/*
* Create a React element for code blocks
*/
const CodeBlock = props => {
  // Apply any marks to code block text
  var content = props.node.content.map(node => {
    return TextHandler(assign({}, props, { node: node }));
  });

  return (
    <pre>
      <code>
        {content}
      </code>
    </pre>
  );
};

CodeBlock.propTypes = {
  node: PropTypes.object
};

export default CodeBlock;
