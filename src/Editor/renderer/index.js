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
import defaultTypeMap from './defaultMaps/defaultTypeMap';
import defaultMarkMap from './defaultMaps/defaultMarkMap';

class Renderer extends React.Component {
  render() {
    return mapTree(this.document, {...this.props});
  }
};

Renderer.defaultProps = {
  skipUnknownMarks: false,
  skipUnknownTypes: false,
  typeMap: defaultTypeMap,
  markMap: defaultMarkMap
};

Renderer.propTypes = {
  document: PropTypes.object.isRequired,
  className: PropTypes.string,
  skipUnknownMarks: PropTypes.bool,
  skipUnknownTypes: PropTypes.bool,
  typeMap: PropTypes.object,
  markMap: PropTypes.object
};

export default Renderer;
