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

/*
* Top-level ProseMirror React Document component
*/
const Document = props => {
  return (
    <div className={props.className} >
      {props.children}
    </div>
  )
};

Document.propTypes = {
  className: PropTypes.string,
};

export default Document;
