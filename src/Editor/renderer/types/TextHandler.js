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

const applyMark = (markMap, skipUnknownMarks) => (children, mark) => {
  // Decide how to handle unknown marks
  const MarkHandler = markMap[mark.type];
  if (!MarkHandler) {
    if (skipUnknownMarks) {
      return children;
    }
    throw new Error('No handler for mark type `' + mark.type + '` registered');
  }

  return (
    <MarkHandler {...mark.attrs} >
      {children}
    </MarkHandler>
  );
};

/*
* Apply mark handler according to the map for each mark in a text node
*/
const TextHandler = props => {
  const applyMarkBound = applyMark(props.markMap, props.skipUnknownMarks);

  return (
    <React.Fragment>
      { (props.node.marks || []).reduceRight(applyMarkBound, props.node.text) }
    </React.Fragment>
  );
};

TextHandler.propTypes = {
    node: PropTypes.object,
    markMap: PropTypes.object,
    skipUnknownMarks: PropTypes.bool
};

export default TextHandler;
