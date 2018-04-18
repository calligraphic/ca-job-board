/*
* Original work Copyright (c) 2016 Espen Hovlandsdal
* Distributed under terms and conditions of the MIT license.
*
* Modified work Copyright (c) 2018 Calligraphic
* Distributed under terms and conditions of the GNU
* General Public License, version 2.
*/

import PropTypes from 'prop-types';
import mapTree from './map-tree';
import defaultTypeMap from './type-map';
import defaultMarkMap from './mark-map';

const ProseMirrorDocument = props => {
  return mapTree(props.document, props);
};

ProseMirrorDocument.propTypes = {
  document: PropTypes.object.isRequired,
  className: PropTypes.string,
  skipUnknownMarks: PropTypes.bool,
  skipUnknownTypes: PropTypes.bool,
  typeMap: PropTypes.object,
  markMap: PropTypes.object
};

ProseMirrorDocument.defaultProps = {
  skipUnknownMarks: false,
  skipUnknownTypes: false,
  typeMap: defaultTypeMap,
  markMap: defaultMarkMap
};

ProseMirrorDocument.typeMap = defaultTypeMap;
ProseMirrorDocument.markMap = defaultMarkMap;

export default ProseMirrorDocument;
