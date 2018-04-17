import {
  ellipsis,
  emDash,
  smartQuotes,
  inputRules as inputRulesPlugin,
  textblockTypeInputRule,
  wrappingInputRule
} from 'prosemirror-inputrules';

import schema from '../schema';

const ruleSet = {
  rules: [
    ...smartQuotes,
    ellipsis,
    emDash,

    // > blockquote
    wrappingInputRule(
      /^\s*>\s$/,
      schema.nodes.blockquote
    ),

    // 1. ordered list
    wrappingInputRule(
      /^(\d+)\.\s$/,
      schema.nodes.ordered_list,
      match => ({ order: +match[1] }),
      (match, node) => node.childCount + node.attrs.order === +match[1]
    ),

    // * bullet list
    wrappingInputRule(
      /^\s*([-+*])\s$/,
      schema.nodes.bullet_list
    ),

    // ``` code block
    textblockTypeInputRule(
      /^```$/,
      schema.nodes.code_block
    ),

    // # heading
    textblockTypeInputRule(
      new RegExp('^(#{1,6})\\s$'),
      schema.nodes.heading,
      match => ({ level: match[1].length })
    )
  ]
};

// inputRules(config: {rules: [InputRule]}) → Plugin
// Create an input rules plugin to cause text input matching
// any of the given rules to trigger the rule's action.
export default inputRulesPlugin(ruleSet);
