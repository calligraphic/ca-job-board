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
import textHandler from './textHandler';
import { assign } from 'lodash';

// Block node
const CodeBlock = props => {
  var content = props.node.content.map(node => {
    return textHandler(assign({}, props, { node: node }));
  });

  // React.createElement(component, props, ...children)
  var code = React.createElement('code', null, content);

  return React.createElement('pre', null, code);
};

CodeBlock.propTypes = {
  node: PropTypes.object
};

export default CodeBlock;
