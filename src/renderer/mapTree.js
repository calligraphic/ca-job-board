/*
* Original work Copyright (c) 2016 Espen Hovlandsdal
* Distributed under terms and conditions of the MIT license.
*
* Modified work Copyright (c) 2018 Calligraphic
* Distributed under terms and conditions of the GNU
* General Public License, version 2.
*/
import React from 'react';
import { assign } from 'lodash';

/**
* options - Props passed from ProseMirrorDocument component.
*
* @typedef {Object} options
* @property {object} document - ProseMirror JSON document.
* @property {string} className - CSS class name to apply to document <div> container.
* @property {boolean} skipUnknownMarks - Skip any unknown marks when true or throw
*     an error when encountering unknown marks if false.
* @property {boolean} skipUnknownTypes - Skip any unknown types when true or throw
*     an error when encountering unknown types if false.
* @property {object} typeMap - Keys represent the types in a prosemirror document and the
*     values refer to the component that should be used for rendering it.
* @property {object} markMap - Keys represent the marks in a prosemirror document and the
*     values refer to the component that should be used for rendering it.
*/

/*
* node - a ProseMirror Node object
*
* @typedef {Object} node
* @property {string} type - The type of node that this is
* @property {object} attrs - An object mapping attribute names to values
* @property {array} content - A container holding the node's children.
* @property {array} marks - The marks applied to this node.
* @property {string} text - For text nodes, this contains the node's text content.
*/

/*
* Walk the ProseMirror document object, calling type handlers
* for all  nodes except bare text nodes
*
* @param {node} node - a ProseMirror node
* @param {options} options - A renderer options object
*/
const mapTree = (node, options) => {
  // Text nodes without any marks are rendered as strings
  if (node.type === 'text' && (!node.marks || node.marks.length === 0)) {
    return node.text;
  }

  // Check if there is a type handler registered for the given type and handle if not
  const typeHandler = options.typeMap[node.type];

  if (!typeHandler) {
    if (!options.skipUnknownTypes) {
      throw new Error('No handler for node type `' + node.type + '` registered');
    }
    return null;
  }

  // Map any children to React elements
  const props = (typeof typeHandler === 'string') ?
    node.attrs :
    // Object.assign(target, ...sources)
    assign({}, options, { node: node });


  // Map any children
  let args = [typeHandler, props];

  if (node.content && node.content.length > 0) {
    // merge two or more arrays, returning a new array
    args = args.concat(
      // The map() method creates a new array with the results of calling
      // a provided function on every element in the calling array.
      // arr.map(function callback(currentValue))
      node.content.map(child => {
        return mapTree(child, options);
      })
    );
  }

  // The apply() method calls a function with a given this value,
  // and arguments provided as an array (or an array-like object).
  // React.createElement(component, props, ...children)
  return React.createElement.apply(React, args);
};

export default mapTree;
