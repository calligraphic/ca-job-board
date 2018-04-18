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
import { omit } from 'lodash';

// The set of marks is interpreted as a space-separated string of mark names or mark groups.
// "_" acts as a wildcard for all marks, and an empty string corresponds to the empty set.
const normalize = mark => {
  if (typeof mark === 'string') {
    return { type: mark };

  } else if (typeof mark._ === 'string') {
    const newObj = omit(mark, '_');
    newObj.type = mark._;

    return newObj;
  }

  return mark;
};

const reduceMark = (props) => (child, mark) => {
  const normalized = normalize(mark);
  const markHandler = props.markMap[normalized.type];

  if (!markHandler) {
    if (props.skipUnknownMarks) {
      return child;
    }
    throw new Error('No handler for mark type `' + normalized.type + '` registered');
  }
  return React.createElement(markHandler, mark.attrs, child);
}

// inline node
const TextHandler = props => {
  // Use assigned mark handlers
  // reduceRight(callback(previousValue, currentValue) => { newValue }, initialValue)
  return (props.node.marks || []).reduceRight(reduceMark(props), props.node.text);
};

TextHandler.propTypes = {
    node: PropTypes.object,
    markMap: PropTypes.object,
    skipUnknownMarks: PropTypes.bool
};

export default TextHandler;
