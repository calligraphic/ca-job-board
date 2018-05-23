/*
* Original work Copyright (c) 2016 Espen Hovlandsdal
* Distributed under terms and conditions of the MIT license.
*
* Modified work Copyright (c) 2018 Calligraphic
* Distributed under terms and conditions of the GNU
* General Public License, version 2.
*/
import Document from '../types/Document';
import TextHandler from '../types/TextHandler';
import CodeBlock from '../types/CodeBlock';

/*
* Default type map object where the keys represent the types in a
* prosemirror document and the values refer to the component that
* should be used for rendering it.
*
* @type {Object} typeMap
*/
const defaultTypeMap = {
    doc: Document,
    paragraph: 'p',
    image: 'img',
    hard_break: 'br',
    code_block: CodeBlock,
    text: TextHandler
};

export default defaultTypeMap;
