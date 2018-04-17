/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import ProseMirrorDocument from 'react-prosemirror-document';

// Render embedded HTML as React nodes, avoiding dangerouslySetInnerHTML
/** @TODO make sure user data is parsed for dangerous HTML server-side */
import ReactHtmlParser from 'react-html-parser';

const pmDocument = {
  type: 'doc',
  content: [{
    type: 'paragraph',
    content: [{
      type: 'text',
      text: 'Lets add a link to '
    }, {
      type: 'text',
      text: 'my website',
      marks: [{
        type: 'link',
        href: 'https://espen.codes/',
        title: 'Espen.Codes (personal website)'
      }]
    }, {
      type: 'text',
      text: ' for fun an profit.'
    }]
  }]
};

class JobPostingItem extends PureComponent {
  render() {
    return (
      <ProseMirrorDocument document={pmDocument} />
    );
  }
}

JobPostingItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

// Keep Storybook from losing reference to component name on static compile
JobPostingItem.displayName = 'JobPostingItem';

export default JobPostingItem;
