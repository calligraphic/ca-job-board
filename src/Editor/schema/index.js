import { Schema } from 'prosemirror-model';

import nodes from './nodes';
import marks from './marks';

// To reuse elements from this schema, extend or read from its
// `spec.nodes` and `spec.marks` [properties](#model.Schema.spec).
export default new Schema({ nodes, marks });
