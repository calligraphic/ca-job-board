/*
* Original work Copyright (c) 2016 Espen Hovlandsdal
* Distributed under terms and conditions of the MIT license.
*
* Modified work Copyright (c) 2018 Calligraphic
* Distributed under terms and conditions of the GNU
* General Public License, version 2.
*/


/*
* The default mark map object where the keys represent the marks in
* a prosemirror document and the values refer to the component that
* should be used for rendering it.
*
* @type {Object} markMap
*/
var markMap = {
  em: 'em',
  strong: 'strong',
  code: 'code',
  link: 'a'
};

export default markMap;
