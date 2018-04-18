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
import mapTree from './mapTree';

// block node
const document = props => {
  let args = ['div', { className: props.className }];

  if (props.node.content && props.node.content.length > 0) {
    args = args.concat(props.node.content.map(node => {
      return mapTree(node, props);
    }));
  }
  return React.createElement.apply(React, args);
};

document.propTypes = {
  className: PropTypes.string,
  node: PropTypes.object
};

export default document;
