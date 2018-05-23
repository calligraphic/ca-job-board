/** @format */

// TODO: Enforce 'use strict';

import React from 'react';
// import PureComponent from 'react-pure-render/component';
import PropTypes from 'prop-types';
import Renderer from '@renderer';

// Render embedded HTML as React nodes, avoiding dangerouslySetInnerHTML
/** @TODO make sure user data is parsed for dangerous HTML server-side */
import ReactHtmlParser from 'react-html-parser';
import jobPostingItemDocument from '@sample/jobPostingItemDocument';

const typeMap={
  override: false,
};

const markMap={
  override: false,
};

class JobPostingItem extends React.Component {
  render() {
    return (
      // <Renderer document={jobPostingItemDocument} typeMap={} markMap={} />
      <Renderer document={jobPostingItemDocument} />
    );
  }
}

JobPostingItem.propTypes = {
  document: PropTypes.object.isRequired,
};

// Keep Storybook from losing reference to component name on static compile
JobPostingItem.displayName = 'JobPostingItem';

export default JobPostingItem;
